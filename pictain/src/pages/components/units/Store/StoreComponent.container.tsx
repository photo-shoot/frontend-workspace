import { Fragment, useState } from "react";
import StoreComponents from "../../commons/utils/storeComponents/StoreComponents.container";
import StudioPageComponentUI from "./StoreComponent.presenter";
import { IStoreComponent } from "../../commons/utils/storeComponents/StoreComponents.types";

export default function StorePageComponent(props: IStoreComponent) {
  return (
    <Fragment>
      <StudioPageComponentUI isPhotographer={props.isPhotographer} />
      <StoreComponents isPhotographer={props.isPhotographer} />
    </Fragment>
  );
}
