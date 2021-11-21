// import { useState } from "react";
import { AiOutlineEye /*AiOutlineEyeInvisible*/ } from "react-icons/ai";

const Form = () => {
  // const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="border-gray-400 border-solid w-80 md:w-300 border-0 rounded-lg shadow-form bg-white block p-4">
      <input
        className="text-xl p-3 outline-none border-solid border-2 border-gray-300 rounded-md block w-full focus:shadow-focus-shadow"
        type="text"
        placeholder="Email or phone number"
      />

      <div className="relative">
        <input
          className="text-xl p-3 outline-none border-solid border-2 border-gray-300 rounded-md block w-full mt-3 focus:shadow-focus-shadow"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <AiOutlineEye
          className="absolute top-2 right-2 cursor-pointer rounded-full hover:bg-gray-100 p-1.5"
          size={35}
        />
        {/* <AiOutlineEyeInvisible size={20} /> */}
      </div>

      <input
        type="submit"
        value="Log In"
        className="bg-blue-500 text-white p-2.5 hover:bg-blue-600 rounded-md w-full mt-3 text-2xl font-bold cursor-pointer block relative"
      />

      <div className="text-center mt-4 mb-6">
        <a href="#" className="text-blue-500 hover:underline">
          Forgot password?
        </a>
      </div>

      <div className="block w-full bg-gray-300 h-px"></div>

      <input
        type="submit"
        value="Create new account"
        className="p-3 text-white bg-secondary hover:border-opacity-30 rounded-lg text-xl my-6 font-bold mx-auto block cursor-pointer px-4"
      />
    </form>
  );
};

export default Form;
