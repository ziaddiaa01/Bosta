import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isTrackSearchOpen, setisTrackSearchOpen] = useState(false);

  const toggleTrackMenu = () => {
    setisTrackSearchOpen(!isTrackSearchOpen);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const closeHamburger = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <div className="flex-col w-full">
      <nav className="bg-primary-white flex items-center w-full  xl:gap-[6%] list-none font-cairo sticky pt-6 px-[4%]">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="h-8" alt="Bosta Logo" />
          <h3 className="text-2xl font-extrabold text-secondary_red">Bosta</h3>
        </Link>
        <li
          onMouseEnter={toggleTrackMenu}
          onMouseLeave={toggleTrackMenu}
          className={`xl:hidden text-secondary_red ${i18n.language === "ar" ? "mr-auto ml-[8%]" : "ml-auto mr-[8%]"} relative ml-[8%] z-50 xl:mx-[2%] py-5 px-8 flex items-center justify-center min-w-fit font-bold cursor-pointer border border-primary_white hover:border-gray-200 rounded-t-md hover:shadow-2xl text-center `}
        >
          {t('track_shipment')}
          {isTrackSearchOpen && (
            <div className="absolute top-[100%] left-0 mt-1 flex  flex-col px-8 py-9 w-80 text-right text-nav_items  bg-primary_white shadow-lg ">
              <label className="text-myBlack text-lg">
              {t('track_shipment')}
              </label>
              <div className="flex mt-3">
                <input
                  type="text"
                  className="w-full h-10 px-4 outline-[#80CBD2]"
                  placeholder="Trackin NO."
                />
                <Link
                  className="bg-secondary_red h-10 w-12 rounded-l-md text-center flex items-center justify-center"
                  to="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 text-primary_white size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </li>

        <button
          className={`block xl:hidden ${
            isHamburgerOpen && "hidden"
          } text-nav_items hover:text-secondary_red focus:outline-none absolute ${i18n.language === "ar" ? "left-4" : "right-4"}`}
          onClick={toggleHamburger}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {isHamburgerOpen && (
          <button
            className={`block xl:hidden text-nav_items hover:text-secondary_red focus:outline-none absolute ${i18n.language === "ar" ? "left-4" : "right-4"}`}
            onClick={closeHamburger}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        )}

        <ul
          className={`hidden xl:flex xl:flex-row xl:gap-7 font-small xl:items-center `}
        >
          <li
            className="relative font-bold w-full xl:w-fit flex items-center text-nav_items hover:text-secondary_red hover:underline cursor-pointer py-2 xl:py-0"
            onMouseEnter={() => toggleDropdown("Products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {t('products.title')}
            <span
              className={`ml-2 mt-2 transition-transform ${
                activeDropdown === "Products"
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {activeDropdown === "Products" && (
              <ul className="absolute top-[100%] left-[-30%] w-40 text-center text-nav_items text-sm font-thin bg-primary_white shadow-lg  p-[5%]">
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.solutions')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.mobile_app')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.Dashboard')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.capital')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.fulfillment')}
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative font-bold w-full xl:w-fit flex items-center text-nav_items hover:text-secondary_red hover:underline cursor-pointer py-2 xl:py-0"
            onMouseEnter={() => toggleDropdown("Integrations")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {t('integrations.title')}
            <span
              className={`ml-2 mt-2 transition-transform ${
                activeDropdown === "Integrations"
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {activeDropdown === "Integrations" && (
              <ul className="absolute top-[100%] left-[-30%] w-40 text-center text-nav_items text-sm font-thin bg-primary_white shadow-lg  p-[5%]">
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('integrations.shopify')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('integrations.woocommerce')}
                  
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('integrations.custom_apis')}
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative font-bold min-w-fit flex items-center text-nav_items hover:text-secondary_red hover:underline cursor-pointer py-2 xl:py-0"
            onMouseEnter={() => toggleDropdown("Use Cases")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
             {t('use_cases.title')}
            <span
              className={`ml-2 mt-2 transition-transform ${
                activeDropdown === "Use Cases"
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {activeDropdown === "Use Cases" && (
              <ul className="absolute top-[100%] left-[-30%] w-40 text-center text-nav_items text-sm font-thin bg-primary_white shadow-lg  p-[5%]">
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('use_cases.businesses')}

                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('use_cases.smes')}
                </li>
              </ul>
            )}
          </li>
          <li className="font-bold min-w-fit text-nav_items hover:text-secondary_red hover:underline">
            <Link to="#"> {t('company.pricing')}
            </Link>
          </li>
          <li
            className="relative font-bold w-full xl:w-fit flex items-center text-nav_items hover:text-secondary_red hover:underline cursor-pointer py-2 xl:py-0"
            onMouseEnter={() => toggleDropdown("Resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
             {t('resources.title')}

            <span
              className={`ml-2 mt-2 transition-transform ${
                activeDropdown === "Resources"
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {activeDropdown === "Resources" && (
              <ul className="absolute top-[100%] left-[-30%] w-40 text-center text-nav_items text-sm font-thin bg-primary_white shadow-lg  p-[5%]">
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('resources.blog')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('resources.insights')}
                </li>
              </ul>
            )}
          </li>

          <li
            onMouseEnter={toggleTrackMenu}
            onMouseLeave={toggleTrackMenu}
            className="text-secondary_red relative xl:mx-[2%] py-5 px-8 flex items-center justify-center min-w-fit font-bold cursor-pointer border border-primary_white hover:border-gray-200 rounded-t-md hover:shadow-2xl text-center "
          >
            {t('track_shipment')}
            <span
              className={`transition-transform mt-2 ${
                isTrackSearchOpen
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {isTrackSearchOpen && (
              <div className="absolute top-[100%] left-0 mt-1 flex  flex-col px-8 py-9 w-80 text-right text-nav_items text-sm font-thin bg-primary_white shadow-lg ">
                <label className="text-myBlack">{t('track_shipment')}</label>
                <span
                  className={`transition-transform mt-1 ${
                    isTrackSearchOpen
                      ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                      : "rotate-0"
                  }`}
                ></span>
                <div className="flex mt-3">
                  <input
                    type="text"
                    className="w-full h-10 px-4 outline-[#80CBD2]"
                    placeholder="Tracking NO."
                  />
                  <Link
                    className="bg-secondary_red h-10 w-12 rounded-l-md text-center flex items-center justify-center"
                    to="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" text-primary_white size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li
            className="relative font-bold w-full xl:w-fit flex items-center text-nav_items hover:text-secondary_red hover:underline cursor-pointer py-2 xl:py-0"
            onMouseEnter={() => toggleDropdown("language")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {i18n.language === "ar" ? "عربي" : "English"}
            <span
              className={`ml-2 mt-2 transition-transform ${
                activeDropdown === "language"
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {activeDropdown === "language" && (
              <div className="absolute top-[100%] left-[-30%] w-40 bg-primary_white shadow-lg rounded-md ">
                <ul className="p-2">
                  {i18n.language === "ar" ? (
                    <>
                      {" "}
                      <li
                        className="hover:bg-hover_menu text-nav_items text-center hover:underline p-2 cursor-pointer"
                        onClick={() => changeLanguage("en")}
                      >
                        English
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        className="hover:bg-hover_menu text-center text-nav_items hover:underline p-2 cursor-pointer"
                        onClick={() => changeLanguage("ar")}
                      >
                        عربي
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </li>
          <li className="text-myblack font-bold min-w-fit text-md hover:underline hover:text-secondary_red">
            <Link to="#">{t('sign_in')}</Link>
          </li>
          <li className="text-secondary_red px-8 py-2 min-w-fit font-bold text-md border rounded-full border-secondary_red hover:underline hover:bg-secondary_red hover:text-primary_white">
            <Link to="#">{t('sign_up')}</Link>
          </li>
        </ul>
      </nav>

      {isHamburgerOpen && (
        <ul className="flex-col bg-primary-white z-0 relative shadow-lg mt-2 p-5 h-lvh w-full xl:hidden">
          <li
            className="font-bold w-full xl:w-fit relative flex text-lg justify-between items-center py-[2%] border-dashed border-b text-nav_items hover:text-secondary_red hover:underline cursor-pointer xl:py-0"
            onMouseEnter={() => toggleDropdown("Products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {t('products.title')}
            <span
              className={`transition-transform ${
                activeDropdown === "Products"
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {activeDropdown === "Products" && (
              <ul className="bg-white shadow-xl p-2 absolute z-20 text-myblack text-sm font-normal rounded-b-md top-[102%] right-0 w-full">
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.solutions')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.dashboard')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.mobile_app')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.capital')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('products.fulfillment')}
                </li>
              </ul>
            )}
          </li>
          <li
            className="font-bold w-full xl:w-fit relative flex text-lg justify-between items-center py-[2%] border-dashed border-b text-nav_items hover:text-secondary_red hover:underline cursor-pointer xl:py-0"
            onMouseEnter={() => toggleDropdown("Integrations")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
             {t('integrations.title')}
            <span
              className={`transition-transform ${
                activeDropdown === "Integrations"
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {activeDropdown === "Integrations" && (
              <ul className="bg-white shadow-xl p-2 absolute z-20 text-myblack text-sm font-normal rounded-b-md top-[102%] right-0 w-full">
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('integrations.shopify')}custom_apis
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('integrations.woocommerce')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('integrations.custom_apis')}
                </li>
              </ul>
            )}
          </li>
          <li
            className="font-bold w-full xl:w-fit relative flex text-lg justify-between items-center py-[2%] border-dashed border-b text-nav_items hover:text-secondary_red hover:underline cursor-pointer xl:py-0"
            onMouseEnter={() => toggleDropdown("Use Cases")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {t('use_cases.title')}
            <span
              className={`transition-transform ${
                activeDropdown === "Use Cases"
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {activeDropdown === "Use Cases" && (
              <ul className="bg-white shadow-xl p-2 absolute z-20 text-myblack text-sm font-normal rounded-b-md top-[102%] right-0 w-full">
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('use_cases.businesses')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('use_cases.smes')}
                </li>
              </ul>
            )}
          </li>
          <li className="font-bold w-full py-[2%] text-nav_items text-lg border-b  border-myblack  hover:text-secondary_red hover:underline ">
            <Link
              to="#"
              className="font-bold text-nav_items hover:text-secondary_red hover:underline"
            >
               {t('company.pricing')}
            </Link>
          </li>
          <li
            className="font-bold w-full xl:w-fit relative flex text-lg justify-between items-center border-dashed border-b text-nav_items hover:text-secondary_red hover:underline cursor-pointer py-[2%] xl:py-0"
            onMouseEnter={() => toggleDropdown("Resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
             {t('resources.title')}
            <span
              className={`transition-transform ${
                activeDropdown === "Resources"
                  ? `${i18n.language == "ar" ? "rotate-90" : "-rotate-90"}`
                  : "rotate-0"
              }`}
            >
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            {activeDropdown === "Resources" && (
              <ul className="bg-white shadow-xl p-2 absolute z-20 text-myblack text-sm font-normal rounded-b-md top-[102%] right-0 w-full">
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('resources.blog')}
                </li>
                <li className="hover:bg-hover_menu hover:underline p-2">
                {t('resources.insights')}
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => changeLanguage(`${i18n.language == "ar" ? "en" : "ar"}`)} className=" xl:w-fit relative flex font-bold w-full  items-center border-dashed border-b text-nav_items hover:text-secondary_red hover:underline cursor-pointer py-[2%] xl:py-0">
            {i18n.language === "ar" ? "English" : "عربي"}
          </li>
          <li className="w-[50%] mt-[9%] border border-black border-1 rounded-full text-center cursor-pointer mx-auto py-[1%] text-myblack font-bold  text-md hover:underline hover:text-secondary_red ">
            <Link to="#" className="">
            {t('sign-in')}
            </Link>
          </li>
          <li className="w-[50%] mt-[3%] border  rounded-full text-center cursor-pointer mx-auto py-[1%] text-secondary_red  px-7  font-bold text-md  border-secondary_red hover:underline hover:bg-secondary_red hover:text-primary_white ">
            <Link to="#">{t('sign-up')}</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
