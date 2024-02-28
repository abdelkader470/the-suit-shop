import { useGetProductsListQuery } from "@/app/features/products/productsSlice";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IProduct } from "@/interfaces";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/app/store";
import { addToCart } from "@/app/features/cart/cartSlice";
import { useState } from "react";
import Modal from "./ui/Modal";
import { Skeleton } from "@/components/ui/skeleton";

export function CarouselSpacing() {
  //**STATE
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [productToAdd, setProductToAdd] = useState<IProduct>({
    id: 0,
    qty: 0,
    attributes: {
      description: "",
      price: 0,
      title: "",
      stoke: 0,
      thumbnail: {
        data: {
          attributes: {
            url: "",
          },
        },
      },
      categories: {
        data: {
          0: {
            attributes: {
              title: "",
            },
            id: 0,
          },
        },
      },
    },
  });

  //**HANDLERS
  const closeConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };
  const openConfirmModal = (product: IProduct) => {
    setProductToAdd(product);
    setIsOpenConfirmModal(true);
  };

  //** FETCH DATA
  const dispatch = useAppDispatch();
  const { isLoading, data } = useGetProductsListQuery({});

  //**SKELETON
  if (isLoading)
    return (
      <div className=" grid grid-cols-3  max-w-sm mx-auto md:max-w-2xl md:mx-auto lg:max-w-4xl lg:mx-auto">
        {Array.from({ length: 3 }, (_, idx) => (
          <Skeleton key={idx} className="  rounded-xl w-[200px] h-[280px] " />
        ))}
      </div>
    );

  return (
    <>
      <Carousel className="w-full max-w-sm mx-auto md:max-w-2xl md:mx-auto lg:max-w-4xl lg:mx-auto ">
        <CarouselContent className="-ml-1">
          {data.data.map((product: IProduct) => (
            <CarouselItem
              key={product.id}
              className="pl-1 md:basis-1/2 lg:basis-2/6"
            >
              <div className="p-1">
                <Card className="">
                  <CardContent className="  w-full h-full">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                      <div className="w-[200px] h-[280px] flex items-center justify-center">
                        <img
                          onClick={() => openConfirmModal(product)}
                          className="object-cover w-100"
                          src={`${import.meta.env.VITE_SERVER_URL}${
                            product.attributes?.thumbnail?.data?.attributes?.url
                          }`}
                          alt={`product ${product.id} image`}
                        />
                      </div>
                    </CarouselItem>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* MODEL TO ADD TO CART */}
      <Modal
        isOpen={isOpenConfirmModal}
        closeModel={closeConfirmModal}
        title={productToAdd.attributes.title}
        description={productToAdd.attributes.description}
        price={productToAdd.attributes.price}
        stoke={productToAdd.attributes.stoke}
        img={`${import.meta.env.VITE_SERVER_URL}${
          productToAdd.attributes?.thumbnail?.data?.attributes?.url
        }`}
      >
        <div className="flex items-center space-x-2 md:fixed md:bottom-10 md:right-7">
          <Button
            type="button"
            size={"sm"}
            variant={"secondary"}
            onClick={() => {
              dispatch(addToCart(productToAdd));
              closeConfirmModal();
            }}
          >
            Add to cart
          </Button>
          <Button
            type="button"
            size={"sm"}
            variant={"destructive"}
            onClick={closeConfirmModal}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}
