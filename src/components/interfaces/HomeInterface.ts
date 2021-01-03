export interface IRest {
  name: string;
  imgUrl: string;
  id: number;
  price: number;
  rating: number;
  //dTime - delivery time
  dTime: number;
  type: string;
}

export interface ISortBy {
  title: string;
  type: string;
  order: string;
  id: number;
}
