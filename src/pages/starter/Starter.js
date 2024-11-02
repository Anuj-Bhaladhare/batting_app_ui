// import React, { useEffect, useState } from 'react';
// import '../../style_sheet/CricketMatches.css';
// import useStarterHook from './hook';

// const Alerts = () => {

//   const [{ getHomePageDetail, getInplayDetails, getMarketDetailsByMarketID }] = useStarterHook();

//   const [matches, setMatches] = useState([]);

//    // get details of all
//   //  useEffect( () => {
//   //   getInplayDetails().then( (res) => {
//   //      console.log("this is the inplay responce", res);
//   //   }).catch( (err) => {
//   //       console.log("this is the inplay error", err);
//   //   })
//   // }, []);


//   // get details of in - play
//   useEffect( () => {
//     getInplayDetails().then( (res) => {
//       setMatches(res)
//        console.log("this is the inplay responce", res);
//     }).catch( (err) => {
//         console.log("this is the inplay error", err);
//     })
//   }, []);

//     // get details of home api
//     useEffect( () => {
//       getHomePageDetail().then( (res) => {
//          if(res){
//           let market_id = res?.markets[0]?.marketId
//           getMarketDetailsByMarketID(market_id)
//           // .then((res) =>{ 
//           //   setMatches(res)
//           //   console.log("res" , res)
//           // })
//           .catch((err) => console.log("this is market id error anuj", err))
//          }
//       }).catch( (err) => {
//           console.log("this is the home api error", err);
//       })
//     }, []);

//   return (
//     <div className="cricket-matches">
//       <h2>Cricket Matches</h2>
//       <div className="tabs">
//         <button>All Games</button>
//         <button>Live Matches</button>
//         <button>Upcoming Events</button>
//         <button>Finished</button>
//       </div>
//       <table className="matches-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Match</th>
//             <th>1X</th>
//             <th>X</th>
//             <th>X2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {matches.map((match, index) => (
//             <tr key={index}>
//               <td>{match.time} {match.status === 'OPEN' && <span className="live-tag">{match.status}</span>}</td>
//               <td>
//                 <span className="team">{match.team1}</span>
//                 <span className="score">{match.score}</span>
//                 <span className="team">{match.team2}</span>
//               </td>
//               {/* <td>{match.odds['1X']}</td>
//               <td>{match.odds.X}</td>
//               <td>{match.odds['X2']}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


// export default Alerts;

import React, { useEffect, useState } from 'react';
import '../../style_sheet/CricketMatches.css';
import useStarterHook from './hook';

const Alerts = () => {
  const [{ getHomePageDetail, getInplayDetails, getMarketDetailsByMarketID }] = useStarterHook();
  let arr = [];
  const [matches, setMatches] = useState([]);

  
  let obj = {};
  useEffect(() => {
    getInplayDetails()
      .then((res) => {
        if (Array.isArray(res)) {
          console.log("res")
        } else {
          console.error("Expected an array for inplay details, received:", res);
        }
        // console.log("Inplay response:", res);
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
          setMatches(res)
          console.log("res" , res)
        })
        .catch((err) => console.log("this is market id error anuj", err))
        }
    }).catch( (err) => {
        console.log("this is the home api error", err);
    })
  }, []);


 

  return (
    <div className="cricket-matches">
      <h2>Cricket Matches</h2>
      <div className="tabs">
        <button>All Games</button>
        <button>Live Matches</button>
        <button>Upcoming Events</button>
        <button>Finished</button>
      </div>
      <table className="matches-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Match</th>
            <th>1X</th>
            <th>X</th>
            <th>X2</th>
          </tr>
        </thead>
        <tbody>
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <tr key={index}>
                <td>
                  {new Date(match.marketStartTime).toLocaleTimeString()} {match.status === 'OPEN' && <span className="live-tag">LIVE</span>}
                </td>
                <td>
                  <span className="team">{match.runners[0]?.runnerName}</span>
                  <br />
                  <span className="team">vs</span>
                  <br />
                  <span className="team">{match.runners[1]?.runnerName}</span>
                </td>
                <td>{match.runners[0]?.back[0]?.price || '-'}</td>
                <td>{match.runners[1]?.back[0]?.price || '-'}</td>
                <td>{match.runners[2]?.back[0]?.price || '-'}</td>
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
