import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

//REGISTER
const registerUser = asyncHandler(async (req, res) => {
  // get user details
  const { name, username, email, password } = req.body;
  console.log(req.body);
  console.log(username);

  //validation
  if ([name, username, email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "All fields are required!");
  }

  // check if user already exists
  let existingUser = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });
  if (existingUser) {
    throw new ApiError(409, "User already exists!");
  }

  // create user
  const user = await User.create({
    name,
    username: username.toLowerCase(),
    email,
    password,
  });

  //remove password and refresh token from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  //check for user creation
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user.");
  }

  //return response
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully!"));
});

//LOGIN
const loginUser = asyncHandler(async (req, res) => {
  //get data from body
  const { email, username, password } = req.body;

  //check username or email to give access
  if (!email && !username) {
    throw new ApiError(400, "Email or username field is missing!");
  }

  //find the user in the database based on username or email
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User does not exist!");
  }

  //check password
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials!");
  }

  //generate a new refresh token and save it to the users document
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  //send back the access & refresh tokens as cookies
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});


//LOGOUT
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully!"));
});


//REFRESH ACCESS TOKEN
const refreshAccessToken = asyncHandler(async (req, res) => {
  //Checking if the token is valid or not
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request!");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid Refresh Token!");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh Token is expired or used!");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };
    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access Token is refreshed successfully!"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token!");
  }
});

//Get Current User
const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(200, req.user, "Current User fetched successfully!");
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getCurrentUser,
};
