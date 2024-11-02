import { Outlet ,Router, Routes,Route, BrowserRouter} from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "../components/Footer"
import Betslip from './betslip'

import { Container } from "reactstrap";
import LoginForm from "./LoginSignup/Login"
import SignupForm from "./LoginSignup/Signup"


const FullLayout = () => {
  return (
    <main>
      {/********header**********/}
      <Header />
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
     </BrowserRouter> */}
      <div className="pageWrapper d-lg-flex" style={{background:"#111216",  boxSizing:"border-box"}}>
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea" style={{background:"#343a40", marginTop:"20px"}}>
          <Sidebar />
        </aside>
        <div className="contentArea" style={{background:"black"}}>
          <Container className="p-4" fluid > 
            <Outlet   />
          </Container>
        </div>
        <Betslip/>


      </div>
      <Footer/>
    </main>
  );
};

export default FullLayout;
