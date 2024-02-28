import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const CartPage = () => {
  const { cartItems } = useSelector(({ cart }: RootState) => cart);
  const renderCartItems = cartItems.map((item) => (
    <Fragment key={item.id}>
      <div className="flex space-x-7 mb-5 flex-col items-center md:flex-row">
        <div className="md:w-[32rem] ">
          <img
            className="w-100"
            src={`${import.meta.env.VITE_SERVER_URL}${
              item.attributes?.thumbnail?.data?.attributes?.url
            }`}
            alt={`product ${item.id} image`}
          />
        </div>
        <div className=" flex  flex-col items-center md:items-start ">
          <div className="text-center md:text-left ">
            <h2 className="text-xl mb-2 font-semibold  text-rich-black">
              {item.attributes.title}
            </h2>
            <p className="text-lg mb-3   font-medium opacity-80 text-rich-black">
              {item.attributes.description}
            </p>
            <p className="text-2xl  font-semibold  text-rich-black">
              {item.attributes.price}$
            </p>
          </div>
          <div className="flex space-x-2 items-center mt-3">
            <Button variant={"secondary"} size={"sm"}>
              +
            </Button>
            <span>{item.qty}</span>
            <Button variant={"secondary"} size={"sm"}>
              -
            </Button>
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  ));
  return (
    <>
      <h1 className="mt-6 px-6 font-bold text-3xl">Shopping Cart</h1>
      <div className="max-w-4xl  px-3 my-4">
        {cartItems.length > 0 ? (
          renderCartItems
        ) : (
          <div className="absolute top-80 left-[40rem] text-center">
            <h4 className="block text-xl mb-6 font-medium opacity-80 text-rich-black">
              Your cart is empty.
            </h4>
            <Link to={"/"}>
              <Button>GO SHOPPING</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
