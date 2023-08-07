import { Fragment } from "react";
import StoreComponents from "../../commons/utils/storeComponents/StoreComponents.container";
import StudioPageComponentUI from "./PhotographerComponent.presenter";

export default function PhotographerPageComponent() {
  return (
    <Fragment>
      <StudioPageComponentUI />
      <StoreComponents />
    </Fragment>
  );
}
