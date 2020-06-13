import React from "react";
import styled from "styled-components"
import hero from "../hero-bcg.jpeg"

const LandingWrapper = styled.main`
    .home{
        background-image:linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.7)), url(${hero});
        background-size: cover;
        height: 100vh;
        background-color: rgba(123,123,13,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        color: whitesmoke;
    }
    .about,.service,.tours{
        h1{
            padding: 0;
            margin: 0;
            font-size: 4rem;
            span{
                color: #6ed0d7;
                // background: red;
            }
        }
        height: 80vh;
    }
    .about, .tours{
        background: rgba(5,205,180,0.1);
    }

`

const Landing = (props) => {
    
    return(
        <LandingWrapper>
            <section className="home" id="home">
                <div className="home-inner">
                    <h1>scroll project</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos neque sunt in? Id, necessitatibus quos quisquam distinctio laudantium fugiat? </p>
                    <Button>explore tours</Button>
                </div>
            </section>
            <section className="about" id="about">
                <h1>about <span>us</span></h1>
            </section>
            <section className="service" id="services">
                <h1>our <span>services</span></h1>
            </section>
            <section className="tours" id="tours">
                <h1>featured <span>tours</span></h1> 
            </section>
        </LandingWrapper>
    );
}
const Button = styled.button`
    text-transform: uppercase;
    background: transparent;
    color: #222222;
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.25rem;
    display: inline-block;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid #222222;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    // border-radius: 0.5rem;
    &:hover{
        color: #ffffff;
        background: #222222;
    }
`
export default Landing;