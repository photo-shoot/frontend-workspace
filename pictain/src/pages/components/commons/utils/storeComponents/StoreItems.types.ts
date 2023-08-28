import { IStoreResponse } from "@component/pages/components/units/Store/Store.types";

export interface IStoreItems {
  isPhotographer: boolean;
  storeData: Array<IStoreResponse>;
}

export interface IStoreItemsUI {
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
  isPhotographer: boolean;
  storeData: Array<IStoreResponse>;
}
