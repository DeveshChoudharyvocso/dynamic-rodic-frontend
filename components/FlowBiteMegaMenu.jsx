import {
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
function FlowBiteMegaMenu() {
  return (
    <MegaMenu className="header-menu-main  relative z-50 w-full">
      <div className="abc">
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Rodic
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className="desktop-right-navigation">
          <NavbarLink href="/">Home</NavbarLink>
          <MegaMenuDropdownToggle className="">
            Company
            <HiChevronDown className="ml-2" />
          </MegaMenuDropdownToggle>
          <NavbarLink className="" href="/">Marketplace</NavbarLink>
          <NavbarLink href="/">Resources</NavbarLink>
          <NavbarLink href="/">Contact</NavbarLink>
        </NavbarCollapse>
        <MegaMenuDropdown>
          <div className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-2 py-5 text-sm shadow-sm sm:grid-cols-2 md:grid-cols-3 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
            <ul className="space-y-4 sm:mb-4 md:mb-0">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  Online Stores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  Segmentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  Marketing CRM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  Online Stores
                </a>
              </li>
            </ul>
            <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  Resources
                </a>
              </li>
            </ul>
            <div className="mt-4 md:mt-0">
              <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Our brands
              </h2>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                At Flowbite, we have a portfolio of brands that cater to a variety
                of preferences.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
              >
                Explore our brands
                <span className="sr-only">Explore our brands</span>
                <HiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </MegaMenuDropdown>
      </div>
    </MegaMenu>
  );
}

export default FlowBiteMegaMenu;
