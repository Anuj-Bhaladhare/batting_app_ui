import React, { useEffect } from 'react';
import '../../style_sheet/CricketMatches.css';
import useStarterHook from './hook';

const Alerts = () => {

  const [{ getHomePageDetail, getInplayDetails, getMarketDetailsByMarketID }] = useStarterHook();

  const matches = [
    { time: '9:00', status: 'Live', team1: 'India', score: '2:0', team2: 'Pakistan', odds: { '1X': '2.02', X: '300', 'X2': '1.98' } },
    { time: '9:30', status: 'Live', team1: 'India', score: '2:0', team2: 'Pakistan', odds: { '1X': '2.02', X: '300', 'X2': '1.98' } },
    { time: '9:45', status: 'Today', team1: 'India', score: '-:-', team2: 'Pakistan', odds: { '1X': '2.02', X: '300', 'X2': '1.98' } },
    { time: '11:45', status: 'Today', team1: 'India', score: '-:-', team2: 'Pakistan', odds: { '1X': '2.02', X: '300', 'X2': '1.98' } },
    { time: '12:00', status: 'Today', team1: 'India', score: '-:-', team2: 'Pakistan', odds: { '1X': '2.02', X: '300', 'X2': '1.98' } },
    { time: '12:15', status: 'Tomorrow', team1: 'India', score: '-:-', team2: 'Pakistan', odds: { '1X': '2.02', X: '300', 'X2': '1.98' } },
  ];

  // get details of in - play
  useEffect( () => {
    getInplayDetails().then( (res) => {
       console.log("this is the inplay responce", res);
    }).catch( (err) => {
        console.log("this is the inplay error", err);
    })
  }, []);

    // get details of home api
    useEffect( () => {
      getHomePageDetail().then( (res) => {
         if(res){
          let market_id = res?.markets[0]?.marketId
          getMarketDetailsByMarketID(market_id);
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
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{match.time} {match.status === 'Live' && <span className="live-tag">{match.status}</span>}</td>
              <td>
                <span className="team">{match.team1}</span>
                <span className="score">{match.score}</span>
                <span className="team">{match.team2}</span>
              </td>
              <td>{match.odds['1X']}</td>
              <td>{match.odds.X}</td>
              <td>{match.odds['X2']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Alerts;
