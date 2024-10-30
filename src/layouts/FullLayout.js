import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {
  return (
    <main>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex" style={{background:"#111216",  boxSizing:"border-box"}}>
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea" style={{background:"#343a40", marginTop:"20px"}}>
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea" style={{background:"#111216"}}>
          {/********Middle Content**********/}
          <Container className="p-4" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
