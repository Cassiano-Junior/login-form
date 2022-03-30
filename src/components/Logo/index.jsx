import React from 'react';
import LogoTeste from "../../assets/logo.svg";
import {Container} from "./style";

export default function Logo() {
    return (
        <Container>
            <img src={LogoTeste} alt="" />
        </Container>    
    );
}

