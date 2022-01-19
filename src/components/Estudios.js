import React from "react";
import { EstudiosH2, EstudiosStyle, ItemEstudio, ItemInstituto } from "../styleds/EstudiosStyleds";

const Estudios = () => {
    return (
        <EstudiosStyle>
            <div className="Estudios-container">
                <EstudiosH2>Estudios</EstudiosH2>
                <div>
                    <ul>
                        <ItemEstudio>
                            Ingeniería de Sistemas (2016 - 2021)
                            <ItemInstituto>Universidad Cooperativa de Colombia</ItemInstituto>
                        </ItemEstudio>
                        <ItemEstudio>
                            Desarrollo Web Frontend (2022)
                            <ItemInstituto>Academia Geek</ItemInstituto>
                        </ItemEstudio>
                    </ul>
                </div>
            </div>
        </EstudiosStyle>
    )
}

export default Estudios;