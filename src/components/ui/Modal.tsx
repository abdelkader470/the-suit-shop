import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  closeModel: () => void;
  title?: string;
  img?: string;
  price?: number;
  stoke?: number;
  description?: string;
  children: ReactNode;
}
const Modal = ({
  children,
  description,
  title,
  price,
  img,
  stoke,
  isOpen,
  closeModel,
}: IProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="  flex flex-col md:flex-row xl:max-w-7xl md: w-[52rem]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="]  ">
                    {img && (
                      <div className=" md:w-[24rem] sm:w-[8rem]">
                        <img className="w-100" src={img} alt="" />
                      </div>
                    )}
                  </div>
                  <div className="mx-1 md:mx-5 md:my-6 md:py-5">
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                    )}
                    {description && (
                      <p className="text-sm text-gray-500 mt-3">
                        {description}
                      </p>
                    )}
                    {price && (
                      <span className="  block text-lg text-black-500 mt-3 ">
                        {price}$
                      </span>
                    )}
                    {stoke && (
                      <p className="text-sm text-gray-500 mt-3">{stoke}</p>
                    )}
                    <div className="mt-4">{children}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;
