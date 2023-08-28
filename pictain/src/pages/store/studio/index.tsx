import { useEffect, useState } from "react";
import StorePageComponent from "../../components/units/Store/Store.container";
import axios from "axios";

export default function StudioPage() {
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    console.log("마운트 됨");
    const getData = async () => {
      const result = await axios.get("http://api.pictain.online/studios");
      setStoreData(result.data.photographerDTOList);
    };
    void getData();
  }, []);
  return <StorePageComponent isPhotographer={false} storeData={storeData} />;
}
