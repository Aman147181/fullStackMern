import React, { useState } from "react";
import { Modal, ModalContent, useDisclosure, Link } from "@nextui-org/react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

import { Link as RouterLink } from "react-router-dom";

const Header = ({ sidebar, setSidebar }) => {
  const [showpassword, setshowpassword] = useState(false);
  const [currentState, setCurrentState] = useState("login");
  const [password, setPassword] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="fixed top-0 h-[72px] bg-white z-50 w-full px-5 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between text-base">
      <RouterLink to="/">
        {" "}
        <div className="flex justify-center space-x-2 items-center">
          <img src="/logo.png" className="h-10 rounded-full" />
          <h1 className="font-volkhov whitespace-nowrap text-xl font-bold text-[#254D4D]">
            Urban Dwellings
          </h1>
        </div>
      </RouterLink>

      <div className="md:flex items-center justify-center hidden xl:space-x-12 lg:space-x-8 md:space-x-5 ml-2 font-roboto uppercase text-base text-[#254D4D]">
        <RouterLink to="/">
          <h1 className="hover:text-[#C14E07]">home</h1>
        </RouterLink>
        <RouterLink to="/shop">
          {" "}
          <h1 className="hover:text-[#C14E07]">shop</h1>
        </RouterLink>
        <RouterLink to="/contact">
          <h1 className="hover:text-[#C14E07]">contact</h1>
        </RouterLink>
      </div>
      <div className=" flex items-center space-x-2 sm:space-x-3 justify-center text-[#254D4D]">
        <button
          onClick={onOpen}
          className="rounded-full   flex items-center space-x-1  "
        >
          <h1 className=" pr-1">
            <FaUser />
          </h1>{" "}
          <h1
            className="md:hover:text-[#254D4D] hidden sm:block hover:font-medium"
            onClick={() => setSelected("login")}
          >
            Login
          </h1>{" "}
          <h1 className="sm:block hidden">/</h1>
          <h1
            className="md:hover:text-[#254D4D] hover:font-medium hidden sm:block"
            onClick={() => setSelected("sign-up")}
          >
            Sign up
          </h1>
        </button>
      </div>
      <button
        className="md:hidden text-[#254D4D] text-xl"
        onClick={() => setSidebar((el) => !el)}
      >
        {sidebar ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>

      <Modal
        placement="center"
        size="sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="min-h-[400px]  max-w-sm mx-3 bg-white rounded-xl">
                {currentState === "login" && (
                  <div>
                    <div className="flex w-full items-center  h-[44px] px-5">
                      <h1 className="text-sky-800 text-center font-RobotoCondensed text-[1.4rem]  font-bold">
                        SIGN IN
                      </h1>
                    </div>
                    <hr className="w-full border-b-1 border-slate-300" />

                    <form>
                      <h1 className="text-[0.8rem] font-poppins text-[#636363] mt-4 px-5 ">
                        Welcome to Urban Dwellings! Let's plan your next
                        purchase.
                      </h1>

                      {/* Input fields for name and email */}
                      <div className="px-5 mb-2">
                        <label
                          htmlFor="email"
                          className="text-[#9a9a9a] mb-2 text-left font-RobotoCondensed text-sm block"
                        >
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          className={`w-full bg-[#F2F2F2] p-2 rounded border border-slate-200 focus:outline-none focus:border-sky-900 `}
                        />
                      </div>

                      <div className="px-5 mb-2">
                        <label
                          htmlFor="password"
                          className="text-[#9a9a9a] mb-2 text-left font-RobotoCondensed text-sm block"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <input
                            required
                            type={showpassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className={`w-full bg-[#F2F2F2] p-2 rounded border border-slate-200 focus:outline-none focus:border-sky-900`}
                          />

                          <div className="absolute top-2 bg-[#F2F2F2] right-2">
                            <button
                              type="button"
                              onClick={() => setshowpassword((el) => !el)}
                            >
                              {password ? (
                                showpassword ? (
                                  <IoMdEyeOff size={20} className="mt-1" />
                                ) : (
                                  <IoMdEye size={20} className="mt-1" />
                                )
                              ) : (
                                ""
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end w-full px-5">
                        <button
                          className="bg-[#085dad] rounded-lg px-7 py-2 mb-2 font-poppins font-medium text-white"
                          type="submit"
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="flex items-center justify-start w-full px-5 my-2">
                        <p className="text-[#636363] font-poppins text-sm">
                          Don't have an account?{" "}
                         
                        </p>
                        <div
                            onClick={() => setCurrentState(() => "signup")}
                            className="text-[#085DAD] pl-2  hover:cursor-pointer hover:font-medium underline"
                          >
                            Sign Up
                          </div>
                      </div>
                    </form>
                  </div>
                )}
                {currentState === "signup" && (
                  <div>
                    <div className="flex w-full items-center  h-[44px] px-5">
                      <h1 className="text-sky-800 text-center font-RobotoCondensed text-[1.4rem]  font-bold">
                        SIGN UP
                      </h1>
                    </div>
                    <hr className="w-full border-b-1 border-slate-300" />

                    <form>
                      <h1 className="text-[0.8rem] font-poppins text-[#636363] mt-4 px-5 ">
                        Welcome back to Rupse Holidays! Let's plan your next
                        adventure.
                      </h1>

                      {/* Input fields for name and email */}
                      <div className="px-5 mb-2">
                        <label
                          htmlFor="email"
                          className="text-[#9a9a9a] mb-2 text-left font-RobotoCondensed text-sm block"
                        >
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          className={`w-full bg-[#F2F2F2] p-2 rounded border border-slate-200 focus:outline-none focus:border-sky-900 `}
                        />
                      </div>
                      <div className="px-5 mb-2">
                        <label
                          htmlFor="email"
                          className="text-[#9a9a9a] mb-2 text-left font-RobotoCondensed text-sm block"
                        >
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          className={`w-full bg-[#F2F2F2] p-2 rounded border border-slate-200 focus:outline-none focus:border-sky-900 `}
                        />
                      </div>

                      <div className="px-5 mb-2">
                        <label
                          htmlFor="password"
                          className="text-[#9a9a9a] mb-2 text-left font-RobotoCondensed text-sm block"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <input
                            required
                            type={showpassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className={`w-full bg-[#F2F2F2] p-2 rounded border border-slate-200 focus:outline-none focus:border-sky-900`}
                          />

                          <div className="absolute top-2 bg-[#F2F2F2] right-2">
                            <button
                              type="button"
                              onClick={() => setshowpassword((el) => !el)}
                            >
                              {password ? (
                                showpassword ? (
                                  <IoMdEyeOff size={20} className="mt-1" />
                                ) : (
                                  <IoMdEye size={20} className="mt-1" />
                                )
                              ) : (
                                ""
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end w-full px-5">
                        <button
                          className="bg-[#085dad] rounded-lg px-7 py-2 mb-2 font-poppins font-medium text-white"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="flex items-center justify-start w-full px-5 my-2">
                        <p className="text-[#636363] font-poppins text-sm"></p>
                        Already have an account?{" "}
                        <div
                          onClick={() => setCurrentState(() => "login")}
                          className="text-[#085DAD] pl-2 hover:cursor-pointer hover:font-medium  underline"
                        >
                          Sign In
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Header;
