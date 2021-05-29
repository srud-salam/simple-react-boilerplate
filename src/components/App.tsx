import React, { ReactElement } from "react";

import WHATSAPP from "../assets/imgs/whatsapp.png";
import ACCESSIBILITY from "../assets/imgs/Accessibility.svg";

import "../styles.scss";
import { Counter } from "./Counter";

export default function App(): ReactElement {
    const error = 2;
    return (
        <>
            <h1>Simple React Boilerplate</h1>
            <div>
                <p>
                    PNG Example:{" "}
                    <img src={WHATSAPP} alt="whatsapp" width="64" height="64" />
                </p>
                <p>
                    SVG Example:{" "}
                    <img src={ACCESSIBILITY} alt="Accessibility" width="64" height="64" />
                </p>
                <p>Evenironment: {process.env.NODE_ENV}</p>
            </div>
            <Counter />
        </>
    );
}
