import { Fragment } from "react";
import StorePageComponentUI from "./Store.presenter";
import StoreItems from "../../commons/utils/storeComponents/StoreItems.container";
import { IStorePageComponent } from "./Store.types";

export default function StorePageComponent(props: IStorePageComponent) {
  return (
    <Fragment>
      <StorePageComponentUI isPhotographer={props.isPhotographer} />
      <StoreItems
        isPhotographer={props.isPhotographer}
        storeData={props.storeData}
      />
    </Fragment>
  );
}
