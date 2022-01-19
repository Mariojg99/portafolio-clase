import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Certificaciones from "../components/Certificaciones";
import Estudios from "../components/Estudios";
import Experiencia from "../components/Experiencia";
import Habilidades from "../components/Habilidades";

const GlobalStyle = styled.div`
    height: 100vh;
    body{
        font-family: 'Poppins', sans-serif;
    }
`

const App = () => {
    return (
        <GlobalStyle>
            <div style={{
                height: '100%',
                position: "fixed"
                
            }}>
                <About />
            </div>
            <div style={{
                marginLeft: '415px',
                width: '930px',
                position: "absolute"
            }}>
                <Estudios />
                <Experiencia />
                <Certificaciones />
                <Habilidades />
            </div>
        </GlobalStyle>
    )
}

export default App;