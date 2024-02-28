import { IProduct } from "@/interfaces";
import toast from "react-hot-toast";
export const addItemToShippingCart = (
  cartItems: IProduct[],
  product: IProduct
) => {
  const exist = cartItems.find((item) => item.id === product.id);
  if (exist) {
    toast.success("this item already exits, the quantity will be increase", {
      duration: 5000,
      position: "bottom-center",
      style: {
        backgroundColor: "black",
        color: "white",
        width: "fit-content",
      },
    });
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  toast.success("Added to your Cart", {
    duration: 1500,
    position: "bottom-center",
    style: {
      backgroundColor: "black",
      color: "white",
      width: "fit-content",
    },
  });
  return [...cartItems, { ...product, qty: 1 }];
};
