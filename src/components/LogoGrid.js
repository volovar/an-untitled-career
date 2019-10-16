import React from "react";
import aeo from "../assets/images/logos/aeo-logo.png";
import dpz from "../assets/images/logos/dpz-logo.svg";
import magna from "../assets/images/logos/magna-logo.png";
import studyblue from "../assets/images/logos/studyblue-logo.svg";
import vodori from "../assets/images/logos/vodori-logo.png";
import vouch from "../assets/images/logos/vouch-logo.png";

const images = [
    { src: magna },
    { src: aeo },
    { src: vodori },
    { color: "#00a2e2", src: studyblue },
    { src: vouch },
    { src: dpz, width: "80%" }
];

const Logo = ({ color = "transparent", src, width = "100%" }) => (
    <div
        style={{
            alignItems: "center",
            background: color,
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            padding: "1em"
        }}
    >
        <img style={{ display: "block", width: width }} src={src} />
    </div>
);

const LogoGrid = () => (
    <div
        style={{
            display: "grid",
            gridAutoRows: "1fr",
            gridGap: "1em",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr"
        }}
    >
        {images.map(image => (
            <Logo color={image.color} src={image.src} width={image.width} />
        ))}
    </div>
);

export default LogoGrid;
