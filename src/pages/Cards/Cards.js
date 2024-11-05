
import React, { useEffect, useState } from 'react';
import '../../style_sheet/CricketMatches.css';
import useCards from './hook';
import '../../style_sheet/starter.css'

const Alerts = () => {
  const [{ getHomePageDetail, getInplayDetails, getMarketDetailsByMarketID }] = useCards();
  const [matches, setMatches] = useState([]);

  
  useEffect(() => {
    getInplayDetails()
      .then((res) => {
        if (Array.isArray(res)) {
          // console.log("modified_arr",res)
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


 

  return (
    <div className="cricket-matches">
      <h2>Horse Racing Matches</h2>
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
              <tr key={index} style={{borderBottom: "1px solid gray"}}> 
                <td style={{borderBottom: "1px solid gray"}}>
                  {new Date(match.marketStartTime).toLocaleTimeString()} {match.status === 'OPEN' && <span className="live-tag">LIVE</span>}
                </td>
                <td style={{borderBottom: "1px solid gray"}}>
                  <span className="team">{match.marketName }</span>
                </td>
                <td className='tables-rowss'>
                  <span style={{paddingRight : "20px",marginRight:"5px"}}>
                    {match.runners[0]?.ex?.availableToBack[0]?.price || '-'}
                  </span>
                  {match.runners[0]?.ex?.availableToBack[1]?.price || '-'}
                  <br/>
                  <span style={{paddingRight : "20px"}}>
                    {match.runners[0]?.ex?.availableToBack[0]?.size || '-'}
                  </span>
                  {match.runners[0]?.ex?.availableToBack[1]?.size || '-'}

                </td>
                <td className='tables-rowss'>
                  <span style={{paddingRight : "20px",marginRight:"5px"}}>
                    {match.runners[0]?.ex?.availableToBack[2]?.price || '-'}
                  </span>
                  {match.runners[0]?.ex?.availableToLay[0]?.price || '-'}
                  <br/>
                  <span style={{paddingRight : "20px"}}>
                    {match.runners[0]?.ex?.availableToBack[2]?.size || '-'}
                  </span>
                  {match.runners[0]?.ex?.availableToLay[0]?.size || '-'}

                </td>
                <td className='tables-rowss'>
                  <span style={{paddingRight : "20px",marginRight:"5px"}}>
                    {match.runners[0]?.ex?.availableToLay[1]?.price || '-'}
                  </span>
                  {match.runners[0]?.ex?.availableToLay[2]?.price || '-'}
                  <br/>
                  <span style={{paddingRight : "20px"}}>
                    {match.runners[0]?.ex?.availableToLay[1]?.size || '-'}
                  </span>
                  {match.runners[0]?.ex?.availableToLay[2]?.size || '-'}

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
    </div>
  );
};

export default Alerts;
