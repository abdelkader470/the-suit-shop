interface IProductDetails {
  description: string;
  price: number;
  title: string;
  stoke: number;
  thumbnail: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  categories: {
    data: {
      0: {
        attributes: {
          title: string;
        };
        id: number;
      };
    };
  };
}
export interface IProduct {
  id: number;
  attributes: IProductDetails;
  qty: number;
}
