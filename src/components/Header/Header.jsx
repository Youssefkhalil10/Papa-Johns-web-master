import logo from "../../assets/imgs/logo-small-2021.svg";
import icon1 from "../../assets/imgs/tracker-icon.svg";
import icon2 from "../../assets/imgs/sphere.svg";
import icon3 from "../../assets/imgs/cart.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../src/firebase";

const media = [
  {
    logo: logo,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    title: "img info",
  },
];

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const location = useLocation();

  const [open, setopen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setopen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div className=" bg-white shadow-sm rounded">
        {/* top header */}
        <div className="flex justify-between md:justify-between max-w-[100%]  items-center">
          {media.map((index) => (
            <>
              <NavLink to={"/"}>
                <img
                  className="w-40 sm:w-50 p-4 hover:cursor-pointer"
                  src={index.logo}
                  alt=""
                />
              </NavLink>
            </>
          ))}

          {/* Links */}

          {location.pathname !== "/about" && (
            <>
              <ul className="flex gap-0 sm:gap-2 md:gap-5  font-bold p-4">
                {media.map((index) => (
                  <>
                    <NavLink>
                      <li className="flex items-center gap-2 hover:bg-gray-300 hover:cursor-pointer p-2 rounded">
                        <img
                          className="w-6 sm:w-6 md:w-7  md:flex"
                          src={index.icon1}
                          alt=""
                        />
                        <span className="hidden md:inline">TRACK MY ORDER</span>
                      </li>
                    </NavLink>

                    <NavLink>
                      <li
                        className="hover:bg-gray-300 
          hover:cursor-pointer 
          text-xs md:text-base font-bold
          py-2 md:p-2 rounded"
                      >
                        START YOUR ORDER
                      </li>
                    </NavLink>

                    <NavLink>
                      <li className="hidden lg:flex items-center gap-2 hover:bg-gray-300 hover:cursor-pointer p-2 rounded">
                        <img className="w-6" src={index.icon2} alt="" />
                        EN
                      </li>
                    </NavLink>

                    {user ? (
                      <li
                        onClick={handleLogout}
                        className="hover:bg-gray-300 hover:cursor-pointer p-2 rounded"
                      >
                        LOG OUT
                      </li>
                    ) : (
                      <>
                        <NavLink to={"/login"}>
                          <li className="hidden lg:flex hover:bg-gray-300 hover:cursor-pointer p-2 rounded">
                            LOG IN
                          </li>
                        </NavLink>

                        <NavLink
                          to={"/signup"}
                          className="hidden lg:flex p-2 bg-green-800
    text-white  rounded-xl h-10 hover:bg-green-700
    hover:cursor-pointer w-20"
                        >
                          SIGN UP
                        </NavLink>
                      </>
                    )}
                  </>
                ))}

                <div className="relative">
                  {/* زر الهامبرجر يظهر في الشاشات الصغيرة */}
                  <button
                    className="lg:hidden text-3xl p-2"
                    onClick={() => setopen(!open)}
                  >
                    {open ? <HiX /> : <HiMenu />}
                  </button>

                  {/* القائمة الجانبية */}
                  {open && (
                    <div
                      ref={menuRef}
                      className="fixed top-0 right-0 w-70 h-full bg-gray-200 rounded  shadow-lg z-50 p-6 flex flex-col gap-4 lg:hidden transition-all duration-300"
                    >
                      {media.map((index, key) => (
                        <>
                          <NavLink to={"/signup"}>
                            <button
                              className=" md:flex  bg-green-600
                            text-white rounded h-10 hover:bg-green-500
                            hover:cursor-pointer w-24 px-4 py-2"
                            >
                              SIGN UP
                            </button>
                          </NavLink>
                          <div className="w-full h-px bg-gray-300"></div>
                          <NavLink to={"/login"}>
                            <li className="flex font-bold hover:bg-gray-300 hover:cursor-pointer  rounded">
                              LOG IN
                            </li>
                          </NavLink>{" "}
                          <div className="w-full h-px bg-gray-300"></div>
                          <NavLink key={key}>
                            <li className="flex font-bold items-center gap-2 hover:bg-gray-100 cursor-pointer rounded">
                              <img className="w-6" src={index.icon2} alt="" />
                              EN
                            </li>
                          </NavLink>
                          <div className="w-full h-px bg-gray-300"></div>
                          <input
                            type="text"
                            className=" flex  border border-green-600 rounded-l-md p-2 focus:outline-none"
                            placeholder="Enter a prome code"
                          />
                          <button className=" bg-green-600 text-white  px-4 rounded-r-md hover:bg-green-500 cursor-pointer">
                            APPLY
                          </button>
                        </>
                      ))}
                    </div>
                  )}
                </div>
              </ul>
            </>
          )}

          {/* Humburger  */}
        </div>

        <div className="w-full h-px bg-gray-300 my-4"></div>

        {/* bottom header */}
        <div className="flex justify-between itesm-center ml-[1%]">
          <ul className=" flex gap-3 font-bold text-sm sm:text-xl md:text-2xl p-2">
            <NavLink to={"/menu"}>
              <li
                className="
              hover:underline hover:decoration-green-800
              hover:underline-offset-30
              "
              >
                MENU
              </li>
            </NavLink>

            <NavLink>
              <li className="hover:underline hover:decoration-green-800 hover:underline-offset-30">
                DEALS
              </li>
            </NavLink>

            <NavLink>
              <li className="hover:underline hover:decoration-green-800 hover:underline-offset-30">
                PAPA REWARDS
              </li>
            </NavLink>
          </ul>

          {location.pathname !== "/about" && (
            <>
              <div className="flex  max-w-md p-2">
                <NavLink>
                  <li className=" md:inline lg:hidden list-none bg-green-600 text-white  hover:bg-gray-300 hover:cursor-pointer p-2 rounded-xl">
                    LOG IN
                  </li>
                </NavLink>

                <input
                  type="text"
                  className=" hidden lg:flex  border border-green-600 rounded-l-md p-2 focus:outline-none"
                  placeholder="Enter a prome code"
                />
                <button className="hidden lg:inline bg-green-600 text-white  px-4 rounded-r-md hover:bg-green-500 cursor-pointer">
                  APPLY
                </button>
                <div className="hidden lg:inline h-12 w-px bg-gray-300 mx-5"></div>
                {media.map((index) => (
                  <>
                    <img
                      className="hidden lg:inline w-10 mx-2 hover:cursor-pointer"
                      src={index.icon3}
                      alt=""
                    />
                    <span className="hidden lg:inline text-red-600 text-xl hover:cursor-pointer">
                      $
                    </span>
                    <p className="hidden lg:inline text-red-600 mt-2 text-3xl mx-2 hover:cursor-pointer">
                      0.00
                    </p>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
