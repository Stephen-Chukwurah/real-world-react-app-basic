import React from "react";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <>
      <nav className="bg-gray-900">
        <div className="mx-auto max-w-7xl h-40 px-2 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-center">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
