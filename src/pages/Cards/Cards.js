import React, { useEffect, useState } from 'react';
import '../../style_sheet/CricketMatches.css';
import useAlert from "../Grid/hook";
import { useStateValue } from '../../../context';

const Alerts = () => {
  const [{ getAlerts, data }] = useAlert();
  const [matches, setMatches] = useState([]);

  // ===============================================
  const [{ app }, dispatch] = useStateValue();
  const { alertData } = app || {}
  // ===============================================

  useEffect(() => {
    getAlerts()
      .then(() => setMatches(data))
      .catch((err) => console.log("Data fetch error:", err));
  }, [data]);

  useEffect(() => {
      console.log("hello anuj AAAAAAAAAAA", alertData);
  }, [alertData])

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
