import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";

const navigation = [
  {
    title: "Favourites",
    href: "/starter",
    icon: "bi bi-star-fill",
  },
  {
    title: "Cricket",
    href: "/alerts",
    icon: "bi bi-circle-fill",
  },
  {
    title: "Tennis",
    href: "/badges",
    icon: "bi bi-circle-fill",
  },
  {
    title: "Soccer",
    href: "/buttons",
    icon: "bi bi-circle-fill",
  },
  {
    title: "Horse Racing",
    href: "/cards",
    icon: "bi bi-circle-fill",
  },
  {
    title: "Greyhound Racing",
    href: "/grid",
    icon: "bi bi-circle-fill",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div style={{ borderRight : "1px solid gray"  ,height:"100vh" }}>
      <div className=" p-3" style={{ backgroundColor: 'black', color: 'white',}}>
        <Nav vertical className="sidebarNav">
          <h1 style={{fontWeight : "inherit", fontSize:"25px"}}>Games</h1>
          {navigation.map((navi, index) => (
            <NavItem key={index} className=" nav-item-custom">
              <Link
                to={navi.href}
                className={ 
                  location.pathname === navi.href
                    ? "active nav-link py-3 text-purple"
                    : "nav-link py-3 text-white"
                }
              >
                <i className={"d-inline-flex " + `${navi.icon}`} style={{ color: 'inherit' }}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
