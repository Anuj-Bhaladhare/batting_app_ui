import relayService from "../../axios/hook";
import { _setObject } from "../../app/action";
import { useStateValue } from "../../context";

const useAlert = () => {

  const [{ app }, dispatch] = useStateValue();
  
  // this function used for merge the array
  function mergeArraysByMarketId(arr1, arr2) {
    const map = new Map();

    const addToMap = (obj) => {
        const id = obj.marketId;
        if (map.has(id)) {
            map.set(id, { ...map.get(id), ...obj });
        } else {
            map.set(id, { ...obj });
        }
    };

    // Add all objects from both arrays to the map
    arr1.forEach(addToMap);
    arr2.forEach(addToMap);

    // Convert map values to an array
    return Array.from(map.values());
  }

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

  const getInplayDetails = async () => {
    let games_data_array_1 = [];
    let runners_data_array_2 = [];

    try {
        const response = await relayService({
            method: 'GET',
            url: '/api/inplay',
            headers: {
                "X-ScoreSwift-Key": "lnA8maxBlgC6Ld0v8CQ5_v17"
            }
        });

        if (response?.status === 200) {
            let inplay_res = response?.data;
            console.log("inplay_res",inplay_res)
            let Cricket = inplay_res.filter((game,index) =>{
              return game?.name === 'Cricket'
            })
            console.log(Cricket)
            let inplayresponse = Cricket
            // First map function -> get all game details
            for (const first_data of inplayresponse) {
              
                // Second map function -> fetching market id according to response
                for (const second_res of first_data?.markets) {
                    games_data_array_1.push(second_res);

                    // Call API by using Market ID
                    if (second_res?.marketId) {
                        const mar_id_response = await relayService({
                            method: 'GET',
                            url: `/api/GetMarketOdds?market_id=${second_res?.marketId}`,
                            headers: {
                                "X-ScoreSwift-Key": "lnA8maxBlgC6Ld0v8CQ5_v17"
                            }
                        });
                        if (mar_id_response) {
                            let last_responce = mar_id_response?.data[0];
                            runners_data_array_2.push(last_responce);
                        }
                    }
                }
            }

            // console.log("games_data_array_1", games_data_array_1);
            // console.log("runners_data_array_2", runners_data_array_2);

            // Merge games_data_array_1 and runners_data_array_2 based on marketId
            const mergedArray = mergeArraysByMarketId(games_data_array_1, runners_data_array_2);
            // console.log("Merged Array:", mergedArray);
            return mergedArray;
        }

    } catch (error) {
        console.log("Inplay API error:", error);
    }
  };

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
export default useAlert;

