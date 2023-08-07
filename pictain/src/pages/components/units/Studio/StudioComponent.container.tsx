import { Fragment } from "react";
import StoreComponents from "../../commons/utils/storeComponents/StoreComponents.container";
import StudioPageComponentUI from "./StudioComponent.presenter";

export default function StudioPageComponent() {
  return (
    <Fragment>
      <StudioPageComponentUI />
      <StoreComponents />
    </Fragment>
  );
}
