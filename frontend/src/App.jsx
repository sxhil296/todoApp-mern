// import viteLogo from '/vite.svg'

import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="bg-gradient-to-tr from-[#f6d365] to-[#fda085] text-white font-poppins min-h-screen">
      <TodoForm />
      <TodoContainer />
    </div>
  );
}

export default App;
