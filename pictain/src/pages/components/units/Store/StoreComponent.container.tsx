import { Fragment, useState } from "react";
import StoreComponents from "../../commons/utils/storeComponents/StoreComponents.container";
import StudioPageComponentUI from "./StoreComponent.presenter";
import { useRouter } from "next/router";

export default function StorePageComponent() {
  const router = useRouter();
  const [isPhotographer, setIsPhotographer] = useState(true);

  if (router.asPath == "/store/studio") {
    setIsPhotographer(false);
  }

  return (
    <Fragment>
      <StudioPageComponentUI isPhotographer={isPhotographer} />
      <StoreComponents isPhotographer={isPhotographer} />
    </Fragment>
  );
}
