import { useState } from "react";
import relayService from "../../../axios/hook";
import { _setObject } from "../../../app/action";
import { useStateValue } from "./../../../context";

const useAlert = () => {

  const [{ app }, dispatch] = useStateValue();
  const [data, setData] = useState([]);
  
  const getAlerts = async () => {
    console.log("Calling API in getAlerts");
    // ================== State Management =================
    dispatch(_setObject({ alertData: "Bhaladhare"}));
    // =====================================================
    try {
      const response = await relayService({
        method: 'GET',
        url: '/api/home',
        headers: {
          'x-rapidapi-key': 'd92cdd3febmshb47317cd5b99814p1debcfjsnc4787bb32207',
          'x-rapidapi-host': 'betfair14.p.rapidapi.com'
        }
      });
      console.log("API response:", response?.data[0].markets);

      setData(response?.data[0].markets || []);
    } catch (error) {
      console.log("API error:", error);
    }
  };

  return [{ getAlerts, data }];
};

export default useAlert;
