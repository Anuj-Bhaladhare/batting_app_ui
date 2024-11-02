import { useState } from "react";
import relayService from "../../axios/hook";
import { _setObject } from "../../app/action";
import { useStateValue } from "../../context";

const useStarterHook = () => {

  const [{ app }, dispatch] = useStateValue();
  
  // get home page api details   
  const getHomePageDetail = async () => {
    try {
      const response = await relayService({
        method: 'GET',
        url: '/api/home',
        headers: {
          "X-ScoreSwift-Key": "lnA8maxBlgC6Ld0v8CQ5_v17"
        }
      });
      // dispatch(_setObject({ alert_responce: response?.data}));
      return response?.data[0];

    } catch (error) {
      console.log("Home API error:", error);
    }
}

// get all api inplay game details
const getInplayDetails = async () => {
    try {
      const response = await relayService({
        method: 'GET',
        url: '/api/inplay',
        headers: {
          "X-ScoreSwift-Key": "lnA8maxBlgC6Ld0v8CQ5_v17"
        }
      });
      // dispatch(_setObject({ alert_responce: response?.data}));
      return response?.data[0];

    } catch (error) {
      console.log("Inplay API error:", error);
    }
}


const getMarketDetailsByMarketID = async (market_id) => {
    try {
      const response = await relayService({
        method: 'GET',
        url: `/api/GetMarketOdds?market_id=${market_id}`,
        headers: {
          "X-ScoreSwift-Key": "lnA8maxBlgC6Ld0v8CQ5_v17"
        }
      });
      // console.log("market responce", response?.data[0]);
      return response?.data[0];

    } catch (error) {
      console.log("Inplay API error:", error);
    }
}



  return [{ getHomePageDetail, getInplayDetails, getMarketDetailsByMarketID }];
}

export default useStarterHook;
