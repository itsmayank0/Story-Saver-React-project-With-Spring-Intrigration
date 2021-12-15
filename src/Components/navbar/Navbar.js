import React from "react";
// import styled from 'styled-components';
// import AnimationSharpIcon from '@mui/icons-material/AnimationSharp';
// import { IconButton } from '@material-ui/core';
// import SearchIcon from '@mui/icons-material/Search';
import { useUser } from "../../context/userContext";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function NavBarConditions({data})
{   
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    
    if (data.userLoggedIn) {
        console.log("I am Logged in")
        return (
            <div>
            <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
                      <img src="img/logotest.png" alt="" style={{ width: "20%", paddingBottom: "23px"}}/>
            <i className="fa fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/create-new-story"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Add&nbsp;New&nbsp;Memories
              </NavLink>
            </li>     
                    
            <li className="nav-item">
              <a
                
                href="/logout"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Logout
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
        )
    }
    else {
        console.log("I am not logged in")
        return (
            <div>
            <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
                      <img src="img/logotest.png" alt="" style={{ width: "16%", paddingBottom: "23px"}}/>
            <i className="fa fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Login
              </NavLink>
                      </li>
                      <li className="nav-item">
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Register
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
        )
    }
}


function Navbar() {
    const { state } = useUser();
    
    return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">
    //       Welcome, {state.userInfo.name}
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarText"
    //       aria-controls="navbarText"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarText">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         {/* <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">
    //             Pricing
    //           </a>
    //         </li> */}
    //       </ul>
    //       <span className="navbar-nav me-5">
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle me-5"
    //             href="/"
    //             id="navbarDropdownMenuLink"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Settings
    //           </a>
    //           <ul
    //             className="dropdown-menu"
    //             aria-labelledby="navbarDropdownMenuLink"
    //           >
    //             <li>
    //               <a className="dropdown-item" href="/">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="/">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="/">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //       </span>
    //     </div>
    //   </div>
    // </nav>
    //   <div>
          
        <NavBarConditions data={state}></NavBarConditions>
     
  );
}

export default Navbar;

// const Wrapper = styled.div`
//     display: flex;
//     align-items: center;
//     height: 60px;
//     padding: 12px 12px 4px 16px;
//     background-color: #5A20CB;
//     color: black;
// `

// const LogoWrapper = styled.div`
//     .MuiSvgIcon-root{
//         color: #0D0D0D;
//         font-size: 32px;
//         cursor: pointer;
//     }
// `

// const CommandButtonCode = styled.div`
//     display: flex;
//     height: 48x;
//     min-width: 123px;
//     align-items: center;
//     justify-content: center;
//     border-radius: 24px;
//     cursor: pointer;
// `

// const HomePageButton = styled(CommandButtonCode)`
 
//     background-color: rgb(17,17,17);

//     a{
//         text-decoration: none;
//         color: white;
//         font-weight: 700;
//     }
// `

// const AddNewMemoryButton = styled(CommandButtonCode)`
    
//     background-color: #5A20CB;

//     a{
//         text-decoration: none;
//         color: white;
//         font-weight: 700;
//     }

//     :hover  {
//         background-color: #242B2E;
//     }
// `;

// const SearchWrapper = styled.div`

// `;

// const SearchBarWrapper = styled.div``;