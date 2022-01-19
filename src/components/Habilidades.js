import React from "react";
import { HabilidadesH2, HabilidadesStyle, ProgressBar, ProgressContainer, ProgressLabel } from "../styleds/HabilidadesStyleds";

const Habilidades = () => {
    return (
        <HabilidadesStyle>
            <div>
                <HabilidadesH2>Habilidades</HabilidadesH2>
                <div>
                    <form>
                        <ProgressContainer>
                            <ProgressLabel>HTML</ProgressLabel>
                            <ProgressBar value={100} max={100}></ProgressBar>
                        </ProgressContainer>
                        <ProgressContainer>
                            <ProgressLabel>CSS</ProgressLabel>
                            <ProgressBar value={80} max={100}></ProgressBar>
                        </ProgressContainer>
                        <ProgressContainer>
                            <ProgressLabel>JavaScript</ProgressLabel>
                            <ProgressBar value={60} max={100}></ProgressBar>
                        </ProgressContainer>
                        <ProgressContainer>
                            <ProgressLabel>React.JS</ProgressLabel>
                            <ProgressBar value={10} max={100}></ProgressBar>
                        </ProgressContainer>
                    </form>
                </div>
            </div>
        </HabilidadesStyle>
    )
}

export default Habilidades;