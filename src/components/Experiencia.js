import React from "react";
import { ExperienciaStyle, ExperienciaH2, ItemExperiencia, ItemDescription } from "../styleds/ExperienciaStyleds";

const Experiencia = () => {
    return(
        <ExperienciaStyle>
            <div className="Experiencia-container">
                <ExperienciaH2>Experiencia</ExperienciaH2>
                <div>
                    <ul>
                        <ItemExperiencia>
                            Proyecto BEIES (Ago 2018 - Ago 2020)
                            <ItemDescription>Encargado del Modelado UML y documentación</ItemDescription>
                        </ItemExperiencia>
                        <ItemExperiencia>
                            Academia Geek (Dic 2021 - Marzo 2022)
                            <ItemDescription>Desarrollo Frontend React.JS</ItemDescription>
                        </ItemExperiencia>
                    </ul>
                </div>
            </div>
        </ExperienciaStyle>
    )
}

export default Experiencia;