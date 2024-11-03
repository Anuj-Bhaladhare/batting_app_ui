import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../style_sheet/CricketMatches.css';
import useStarterHook from './hook';
import '../../style_sheet/starter.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import details from '../Details/details';

const Alerts = () => {
  const [{ getHomePageDetail, getInplayDetails, getMarketDetailsByMarketID }] = useStarterHook();
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getInplayDetails()
      .then((res) => {
        if (Array.isArray(res)) {
          console.log("modified_arr",res)
          setMatches(res)
        } else {
          console.error("Expected an array for inplay details, received:", res);
        }
      })
      .catch((err) => {
        console.log("Error fetching inplay details:", err);
      });
  }, []);

  // get details of home api
  useEffect( () => {
    getHomePageDetail().then( (res) => {
        if(res){
        let market_id = res?.markets[0]?.marketId
        getMarketDetailsByMarketID(market_id)
        .then((res) =>{ 
          // setMatches(res)
          // console.log("res" , res)
        })
        .catch((err) => console.log("this is market id error anuj", err))
        }
    }).catch( (err) => {
        console.log("this is the home api error", err);
    })
  }, []);


  // function handleDetails(){
  //   console.log("details")
  //   window.location.href = '/details';
  //   // navigate(`/details`, ); 
  // }


 

  return (
    <div className="cricket-matches">
      <h2>Live Matches</h2>
      <div className="tabs">
        <button>All Games</button>
        <button>Live Matches</button>
        <button>Upcoming Events</button>
        <button>Finished</button>
      </div>
      <table className="matches-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Match</th>
            <th>1X</th>
            <th>X</th>
            <th>X2</th>
          </tr>
        </thead>
        <tbody>
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <tr key={index} >
                <td>
                  {new Date(match.marketStartTime).toLocaleTimeString()} {match.status === 'OPEN' && <span className="live-tag">LIVE</span>}
                </td>
                <td>
                  <span className="team">{match.marketName }</span>
                </td>
                <td>
                  {match.runners[0]?.ex?.availableToBack[0]?.price || '-'}
                  <br/>
                  {match.runners[0]?.ex?.availableToBack[0]?.size || '-'}
                </td>
                <td>
                  {match.runners[1]?.ex?.availableToBack[0]?.price || '-'}
                  <br/>
                  {match.runners[1]?.ex?.availableToBack[0]?.size || '-'}
                </td>
                <td>
                  {match.runners[2]?.ex?.availableToBack[0]?.price || '-'}
                  <br/>
                  {match.runners[2]?.ex?.availableToBack[0]?.size || '-'}
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No matches available</td>
            </tr>
          )}
        </tbody>
      </table>

        {/* <Routes>
          <Route path="/details" element={<details />} />
        </Routes> */}
    </div>
  );
};

export default Alerts;
