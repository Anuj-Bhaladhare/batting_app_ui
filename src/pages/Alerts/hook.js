import { useState } from "react";
import relayService from "../../axios/hook";
import { _setObject } from "../../app/action";
import { useStateValue } from "../../context";

const useAlert = () => {

  const [{ app }, dispatch] = useStateValue();
  
  const getAlerts = async () => {

    console.log("Calling API in getAlerts");
    
    try {
      const response = await relayService({
        method: 'GET',
        url: '/api/inplay',
        headers: {
          "X-ScoreSwift-Key": "lnA8maxBlgC6Ld0v8CQ5_v17"
        }
      });

      return response?.data[0];

      // dispatch(_setObject({ alert_responce: response?.data}));

    } catch (error) {
      console.log("API error:", error);
    }
  };

  const getLaysandBuys = async () => {

    console.log("Calling API in getLaysandBuys");
    
    try {
      const response = await relayService({
        method: 'GET',
        url: '/api/inplay',
        headers: {
          "X-ScoreSwift-Key": "lnA8maxBlgC6Ld0v8CQ5_v17"
        }
      });

      return response?.data[0];

      // dispatch(_setObject({ alert_responce: response?.data}));

    } catch (error) {
      console.log("API error:", error);
    }
  };

  return [{ getAlerts }];
};

export default useAlert;


// export
