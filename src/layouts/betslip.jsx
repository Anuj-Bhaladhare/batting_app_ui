import React, { useState } from 'react';
import { Tabs, Tab, Button, Container } from 'react-bootstrap';
import './Betslip.css';

const Betslip = () => {
  const [activeKey, setActiveKey] = useState('betslip');

  return (
    <Container className="betslip-container text-center p-3" style={{background:"black", borderLeft:"1px solid gray"}}>
      <h4>Betslip</h4>
      <Tabs
        id="betslip-tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        className="mb-3"
      >
        <Tab eventKey="betslip" title="Betslip">
          <div className="content">
            <p>Click on the odds to add selections to the betslip.</p>
          </div>
        </Tab>
        <Tab eventKey="open-bets" title="Open Bets">
          <div className="content">
            <p>No open bets.</p>
          </div>
        </Tab>
      </Tabs>
      <Button variant="primary" className="edit-stakes-button w-100 mt-3">
        Edit Stakes
      </Button>
    </Container>
  );
};

export default Betslip;
