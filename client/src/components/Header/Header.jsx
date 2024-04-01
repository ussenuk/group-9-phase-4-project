import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../logo.jpg";
import School from "../kindegerten/primary";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isSchoolDropdownOpen, setSchoolDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setSupportDropdownOpen] = useState(false);

  const toggleSchoolDropdown = () => {
    setSchoolDropdownOpen(!isSchoolDropdownOpen);
  };

  const toggleSupportDropdown = () => {
    setSupportDropdownOpen(!isSupportDropdownOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-6 h-24" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white bg-black hover:bg-black-800 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            ></Link>
            <Link
              to="#"
              className="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            ></Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-black-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-gray-700"
                                        } 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/inscription"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-gray-700"
                                        } 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  REGISTRATION
                </NavLink>
                <div className="opacity-0 group-hover:opacity-100 absolute left-0 top-full bg-white pt-2 mt-2 w-48 rounded-lg shadow-lg">
                  <NavLink
                    to="/StudentRegistration"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Online Student Registration
                  </NavLink>
                  <NavLink
                    to="/news"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    News Related to Our School
                  </NavLink>
                </div>
              </li>
              <li>
                <div
                  className="relative dropdown"
                  onMouseEnter={() => toggleSchoolDropdown()}
                  onMouseLeave={() => toggleSchoolDropdown()}
                >
                  <span className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer">
                    SCHOOL
                  </span>
                  {isSchoolDropdownOpen && (
                    <ul className="absolute bg-white pt-2 border border-gray-200 dropdown">
                      <li>
                        <NavLink
                          to="/school"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Kindergarten & Primary
                        </NavLink>
                        <NavLink
                          to="/secondary"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          High School
                        </NavLink>
                        <NavLink
                          to="/admissions"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Admissions
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <div
                  className="relative dropdown"
                  onMouseEnter={() => toggleSupportDropdown()}
                  onMouseLeave={() => toggleSupportDropdown()}
                >
                  <span className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer">
                    SUPPORT
                  </span>
                  {isSupportDropdownOpen && (
                    <ul className="absolute bg-white pt-2 border border-gray-200 dropdown">
                      <li>
                        <NavLink
                          to="/scholarship"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Scholarship
                        </NavLink>
                        <NavLink
                          to="/donate"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Donate
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </li>

              <li>
                <NavLink
                  to="/job"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-gray-700"
                                        } 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  JOBS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-gray-700"
                                        } 
                                        lg:hover:bg-transparent 
                                        lg:border-0 
                                        hover:text-orange-700 lg:p-0`
                  }
                >
                  CONTACT US
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-gray-700"
                                        } 
                                        lg:hover:bg-transparent 
                                        lg:border-0 
                                        hover:text-orange-700 lg:p-0`
                  }
                >
                  LOG IN
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
