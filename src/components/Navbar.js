import React,{ useState } from "react";
import styled from "styled-components";
import logo from '../logofred.png';



const NavContainer = styled.nav`
    letter-spacing: 0.25rem;
    position: fixed;
    background: whitesmoke;
    width: 100%;
    box-shadow: 1px 2px 10px rgba(0,0,0,0.2);
    .nav-center{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 70%;
        margin: 0 auto;
        .nav-header{
            button{
                display: none;
            }
        }
        .links{
            list-style-type: none;
            display: flex;
            li{
                margin: 10px;
                a{
                    text-decoration: none;
                    text-transform: capitalize;
                    color: #288c12;
                }
            }
        }
        
    }
    @media screen and (max-width: 681px){
        .nav-center{
            width: 100%;
            display: block;
            height: ${props=>props.size};
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            .nav-header{
                padding-right: 10px;
                width: 100%;
                display: flex;
                height: 50px;
                justify-content: space-between;
                align-items: center;
                .nav-toggle{
                    display: block;
                    background: transparent;
                    font-size: 1.8475rem;
                    cursor: pointer;
                    width: fit-content;
                    border: none;
                }
                margin-bottom: 10px;
            }
            .links{
                margin: 0;
                padding: 0;
                flex-direction: column;
                
               li{
                    margin: 0;                    
                    a{
                        transition: all 0.3s ease-in-out;
                        display: block;
                        padding: 10px;
                        text-align: left;
                        &:hover{
                            background-color: #288c12;
                            color: white;
                        }
                   }
               }
               
            }
            
        }
    }
`;

const Navbar = (props) => {
    const [size, setSize] = useState("50px");
    const changeSize = () => {
        if(size==="auto"){
             setSize("50px")
        }
        else{
            setSize("auto")
        }
    }

    return(
        <NavContainer size={size}>
      <div className="nav-center">
        {/* Nav header */}
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={changeSize}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
        {/* Liens */}
        <ul className="links">
          <li >
            <a onClick={props.scroll} href="#home">home</a>
          </li>
          <li>
            <a onClick={props.scroll} href="#about">about</a>
          </li>
          <li>
            <a onClick={props.scroll} href="#services">services</a>
          </li>
          <li>
            <a onClick={props.scroll} href="#tours">tours</a>
          </li>
        </ul>
        
      </div>
    </NavContainer>
    );
}

export default Navbar