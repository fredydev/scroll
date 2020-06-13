import React from "react";
import styled from "styled-components";

const Footer = () => {
    return(
        <FooterWrapper>
            <p>copyright © backroads travel tours company 2020. all rights reserved </p>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    height: 200px;
    background: #112542;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
`
export default Footer;