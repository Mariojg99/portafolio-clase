import React from "react";
import { AboutAvatar, AboutH2, AboutName, AboutStyle, AvatarImg, AboutLocation, AboutProfession, AboutSocial, AboutIconoRed } from "../styleds/AboutStyleds";

const About = () => {
    return (
        <AboutStyle className="About">
            <div className="About-container">
                <AboutAvatar className="About-Avatar">
                    <figure>
                        <AvatarImg src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png" alt="Avatar" />
                    </figure>
                </AboutAvatar>
                <AboutName className="About-name">
                    <AboutH2>Jose Mario Gulfo Urango</AboutH2>
                </AboutName>
                <AboutProfession className="About-profession">
                    <p>Ingeniero de Sistemas</p>
                </AboutProfession>
            </div>
            <div className="About-description">
                <p>Apasionado por el desarrollo web Frontend</p>
            </div>
            <AboutLocation className="About-location">
                <p>Cereté (Córdoba), Colombia</p>
            </AboutLocation>
            <AboutSocial className="About-social">
                <a href="#">
                    <AboutIconoRed src="https://icones.pro/wp-content/uploads/2021/02/facebook-icones.png"></AboutIconoRed>
                </a>
                <a href="#">
                    <AboutIconoRed src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"></AboutIconoRed>
                </a>
                <a href="#">
                    <AboutIconoRed src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"></AboutIconoRed>
                </a>
                <a href="#">
                    <AboutIconoRed src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></AboutIconoRed>
                </a>
            </AboutSocial>
        </AboutStyle>
    )
}

export default About;