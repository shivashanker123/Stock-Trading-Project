import React,{useState} from "react";
import { Link } from "react-router-dom";

const Menu = () => {
      const [selectedMenu,setSelectedMenu] = useState(0);
      const [isProfileDropDownOpen, setIsProfileDropdownOpen] = useState(false);

      const handleMenuClick = (index) =>{
        setSelectedMenu(index);
      }
      const handleProfileClick = () =>{
        setIsProfileDropdownOpen(!isProfileDropDownOpen);
      }

      const menuClass = "menu";
      const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
           <ul>
          <li>
              <Link
               onClick={ ()=>handleMenuClick(0) } 
               to="/"
               style={{textDecoration:"none"}}>
                <p className={ selectedMenu===0 ? activeMenuClass:menuClass}>
                  Dashboard
                </p>
              </Link>
          </li>
          <li>
              <Link
               onClick={ ()=>handleMenuClick(1) } 
               to="/orders"
               style={{textDecoration:"none"}}>
                <p className={ selectedMenu===1 ? activeMenuClass:menuClass}>
                  Orders
                </p>
              </Link>
      
          </li>
          <li>
              <Link
               onClick={ ()=>handleMenuClick(2) } 
               to="/holdings"
               style={{textDecoration:"none"}}>
                <p className={ selectedMenu===2 ? activeMenuClass:menuClass}>
                  Holdings
                </p>
              </Link>

          </li>
          <li>
              <Link
               onClick={ ()=>handleMenuClick(3) } 
               to="/positions"
               style={{textDecoration:"none"}}>
                <p className={ selectedMenu===3 ? activeMenuClass:menuClass}>
                  Positions
                </p>
              </Link>
          </li>
          <li>
            <Link
               onClick={ ()=>handleMenuClick(4) } 
               to="/funds"
               style={{textDecoration:"none"}}>
                <p className={ selectedMenu===4 ? activeMenuClass:menuClass}>
                  Funds
                </p>
              </Link>
          </li>
          <li>
              <Link
               onClick={ ()=>handleMenuClick(5) } 
               to="/apps"
               style={{textDecoration:"none"}}>
                <p className={ selectedMenu===5 ? activeMenuClass:menuClass}>
                  Apps
                </p>
              </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
