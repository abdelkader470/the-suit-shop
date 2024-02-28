import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useSelector(({ cart }: RootState) => cart);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between p-3 lg:px-13"
        aria-label="Global"
      >
        <div className="flex lg:flex-2 ">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <svg className="w-[154px]" viewBox="0 0 527 71">
              <path d="M53.22,8.49,44,19.69a25.19,25.19,0,0,0-15.57-5.15c-5.15,0-8.95,1.45-9.42,6.05-.28,3.09,1.36,4.17,12.05,7,10,2.72,23.45,6.1,23.49,21.1.05,15.8-15,21.48-27,21.48C17.16,70.2,5.67,66,0,58.52L9.66,48.11c3.8,4.64,11.07,7.6,18,7.6s9.57-3,9.66-6.38c.14-3.94-2.72-4.88-11.86-7.46C10,37.47,1.69,34.51,1.69,21.71,1.69,6.1,14.16,0,28.56,0,39.06,0,47.5,3.28,53.22,8.49Z"></path>
              <path d="M130.58,43.84c0,16.89-14.07,26.31-29.73,26.31S71.12,60.73,71.12,43.84V1.31h17V43.8c0,7.69,5.86,11.91,12.76,11.91S113.6,51.44,113.6,43.8V1.36h17Z"></path>
              <path d="M147.11,68.84V1.36h17V68.84Z"></path>
              <path d="M216.73,15.29v53.5h-17V15.29H180.62V1.36h55.29v14H216.73Z"></path>
              <path d="M302.76,8.68l-5,6.33c-4.74-3.9-11.21-6.48-19.37-6.52-8.86,0-14.68,3.09-14.68,11.16.05,5.25,2.63,7,16.7,10.74C290.89,33.2,304,36,304.16,49.8s-13.32,20.35-25.27,20.35c-10.18,0-20.92-4.64-26.45-11.49l5-6.23c5,6.14,14.21,9.37,21.43,9.33,8.34,0,15.8-4,15.8-11.68,0-7.31-6.71-8.53-16.74-11.25-17.16-4.65-23.68-8.72-23.73-19.23C254.13,5.21,266.7,0,278.51,0,288.27,0,296.94,3.52,302.76,8.68Z"></path>
              <path d="M377.67,68.84h-9.14V37.33H329.84V68.79H320.7V1.36h9.14V29.64h38.69V1.36h9.14Z"></path>
              <path d="M460.42,35.08c0,19.41-13,35.07-33.11,35.07s-33.1-15.66-33.1-35.07S407.38,0,427.31,0,460.42,15.66,460.42,35.08Zm-56.69,0c0,15.24,9.56,26.4,23.54,26.4s23.58-11.12,23.58-26.4-9.47-26.4-23.63-26.4C413.29,8.72,403.73,19.74,403.73,35.08Z"></path>
              <path d="M507.2,1.36c10.64,0,19.55,8.58,19.5,21.57S517.79,44.5,507.2,44.5H486.1V68.89H477V1.36H507.2Zm0,7.69H486.05V36.76H507.2c5.2,0,10-4.78,10-13.88S512.4,9.05,507.2,9.05Z"></path>
            </svg>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Link to={"/cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="border-[1px] rounded-full absolute top-[4px] right-20 px-1  ">
              {cartItems.length}
            </span>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>

            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-10">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            ></Transition>
          </Popover>

          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Shop
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Get Started
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Weddings & Events
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Fit Guide
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Resources
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-2 lg:justify-end ">
          <Button variant={"outline"} size={"sm"}>
            Suit a group
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <div className=" flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="block">Account</span>
            </div>
          </Button>
          <Link to={"/cart"}>
            <Button variant={"ghost"}>
              <svg
                className="inline"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <g>
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M12.919,6.605V3.918a3.919,3.919,0,0,0-7.837,0V6.605H0v8.186L3.208,18l11.6-.02L18,14.791V6.605ZM6.881,3.918a2.119,2.119,0,0,1,4.237,0V6.605H6.881ZM16.2,14.046l-2.135,2.135L3.953,16.2,1.8,14.046V8.405H16.2Z"
                    fill="/0e141a"
                  ></path>
                </g>
              </svg>
              <span className="border-[1px] rounded-full absolute top-2 right-2 px-1  ">
                {cartItems.length}
              </span>
            </Button>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <svg className="w-[154px]" viewBox="0 0 527 71">
                <path d="M53.22,8.49,44,19.69a25.19,25.19,0,0,0-15.57-5.15c-5.15,0-8.95,1.45-9.42,6.05-.28,3.09,1.36,4.17,12.05,7,10,2.72,23.45,6.1,23.49,21.1.05,15.8-15,21.48-27,21.48C17.16,70.2,5.67,66,0,58.52L9.66,48.11c3.8,4.64,11.07,7.6,18,7.6s9.57-3,9.66-6.38c.14-3.94-2.72-4.88-11.86-7.46C10,37.47,1.69,34.51,1.69,21.71,1.69,6.1,14.16,0,28.56,0,39.06,0,47.5,3.28,53.22,8.49Z"></path>
                <path d="M130.58,43.84c0,16.89-14.07,26.31-29.73,26.31S71.12,60.73,71.12,43.84V1.31h17V43.8c0,7.69,5.86,11.91,12.76,11.91S113.6,51.44,113.6,43.8V1.36h17Z"></path>
                <path d="M147.11,68.84V1.36h17V68.84Z"></path>
                <path d="M216.73,15.29v53.5h-17V15.29H180.62V1.36h55.29v14H216.73Z"></path>
                <path d="M302.76,8.68l-5,6.33c-4.74-3.9-11.21-6.48-19.37-6.52-8.86,0-14.68,3.09-14.68,11.16.05,5.25,2.63,7,16.7,10.74C290.89,33.2,304,36,304.16,49.8s-13.32,20.35-25.27,20.35c-10.18,0-20.92-4.64-26.45-11.49l5-6.23c5,6.14,14.21,9.37,21.43,9.33,8.34,0,15.8-4,15.8-11.68,0-7.31-6.71-8.53-16.74-11.25-17.16-4.65-23.68-8.72-23.73-19.23C254.13,5.21,266.7,0,278.51,0,288.27,0,296.94,3.52,302.76,8.68Z"></path>
                <path d="M377.67,68.84h-9.14V37.33H329.84V68.79H320.7V1.36h9.14V29.64h38.69V1.36h9.14Z"></path>
                <path d="M460.42,35.08c0,19.41-13,35.07-33.11,35.07s-33.1-15.66-33.1-35.07S407.38,0,427.31,0,460.42,15.66,460.42,35.08Zm-56.69,0c0,15.24,9.56,26.4,23.54,26.4s23.58-11.12,23.58-26.4-9.47-26.4-23.63-26.4C413.29,8.72,403.73,19.74,403.73,35.08Z"></path>
                <path d="M507.2,1.36c10.64,0,19.55,8.58,19.5,21.57S517.79,44.5,507.2,44.5H486.1V68.89H477V1.36H507.2Zm0,7.69H486.05V36.76H507.2c5.2,0,10-4.78,10-13.88S512.4,9.05,507.2,9.05Z"></path>
              </svg>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shop
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Get Started
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Weddings & Events
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Fit Guide
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Resources
                </Link>
              </div>
              <div className="py-6 space-y-2 flex flex-col ">
                <Button variant={"outline"}>Suit a group</Button>
                <Button variant={"outline"}>
                  <div className=" flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span className="block">Account</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
