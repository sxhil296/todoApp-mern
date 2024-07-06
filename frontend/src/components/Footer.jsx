import React from "react";
import { GitHub } from "react-feather";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full p-4 text-right flex justify-end items-center gap-2 text-white">
      <p>Code can be found on</p>
      <a
        href="https://github.com/sxhil296/todoApp-mern"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
    </footer>
  );
};

export default Footer;
