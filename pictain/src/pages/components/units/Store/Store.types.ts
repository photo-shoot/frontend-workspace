export interface IStoreResponse {
  storeId: number;
  title: string;
  shortDescription: string;
  profileImgName: string;
  profileImgPath: string;
  likeCnt: null;
  scrapCnt: null;
  place?: string;
  address?: string;
  isBusinessTrip: boolean;
}

export interface IStorePageComponent {
  isPhotographer: boolean;
  storeData: Array<IStoreResponse>;
  // data: Promise<AxiosResponse<IStoreResponse>>;
}

export interface IStorePageComponentUI {
  isPhotographer: boolean;
}
