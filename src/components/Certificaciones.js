import React from "react";
import { CertificacionesH2, CertificacionesStyle, ItemCertificacion, ItemCertificado } from "../styleds/CertificacionesStyleds";

const Certificaciones = () => {
    return (
        <CertificacionesStyle>
            <div className="Experiencia-container">
                <CertificacionesH2>Certificaciones</CertificacionesH2>
                <div className="Experiencia-lista">
                    <ul>
                        <ItemCertificacion>
                            V Semana de Economía Solidaria (2019)
                            <ItemCertificado>Eccosol (Bogotá)</ItemCertificado>
                        </ItemCertificacion>
                        <ItemCertificacion>
                            Proyectos (2019)
                            <ItemCertificado>Cámara de Comercio</ItemCertificado>
                        </ItemCertificacion>
                    </ul>
                </div>
            </div>
        </CertificacionesStyle>
    )
}

export default Certificaciones;