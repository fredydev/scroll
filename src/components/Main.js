import React,{useState,useEffect} from 'react';
import '../App.css';
import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer';
import styled from "styled-components"
import 'font-awesome/css/font-awesome.min.css';

function Main() {
 
  const [height, setHeight] = useState(0);
  const changeHeight = (navHeight) => setHeight(navHeight)
  
  const scrolling = (e) => {
    e.preventDefault();
    const navbar = document.getElementsByTagName("nav")[0];
    const links = document.querySelector(".links");
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight)
    changeHeight(navHeight)
    const containerHeight = links.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
    position = position - navHeight;
    }
    if (navHeight > 82) {
    position = position + containerHeight;
    }

    window.scrollTo({
    left: 0,
    top: position,
    });
    // close
    links.style.height = 0;
  }

  const handler = ()=> {
    const navbar = document.getElementsByTagName("nav")[0];
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
    // setup back to top link
  
    // if (scrollHeight > 500) {
    //   console.log("helo");
  
    //   topLink.classList.add("show-link");
    // } else {
    //   topLink.classList.remove("show-link");
    // }
  }

  useEffect(() => {
    // initiate the event handler
    window.addEventListener("scroll", handler);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener("scro", handler);
    };
  });
  return (
    <div className="App">
      <Navbar scroll={scrolling} height={height}/>
      <Landing height={height}/>
      <Footer/>
      <TopLink>
      <i class="fa fa-arrow-up"></i>
      </TopLink>
    </div>
  );
}

const TopLink = styled.a`
  font-size: 1.25rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background: hsla(182, 63%, 54%);
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
  color: #fff;
  animation: bounce 2s ease-in-out infinite;
  //visibility: hidden;
  z-index: 100;
`
export default Main;
