import axios from "axios";
import { useEffect, useState } from "react";
import StorePageComponent from "../../components/units/Store/Store.container";

export default function PhotographerPage() {
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    console.log("마운트 됨");
    const getData = async () => {
      const result = await axios.get("http://api.pictain.online/photographers");
      setStoreData(result.data.photographerDTOList);
    };
    void getData();
  }, []);
  return <StorePageComponent isPhotographer={true} storeData={storeData} />;
}
