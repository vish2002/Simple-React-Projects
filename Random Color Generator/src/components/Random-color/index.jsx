import React, { useState } from "react";

export default function RandomColor() {
    const [typeofcolor, settypeofcolor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function generateRandomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function generateRandomHex() {
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let temp = "#";
        for (let i = 0; i < 6; i++) {
            temp += hex[generateRandomColorUtility(hex.length)];
        }
        return temp;
    }

    function generateRandomRGB() {
        const r = generateRandomColorUtility(256);
        const g = generateRandomColorUtility(256);
        const b = generateRandomColorUtility(256);
        return `rgb(${r},${g},${b})`;
    }

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: color,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff"
            }}
        >
            <button onClick={() => settypeofcolor("hex")}>Hex Color</button>
            <button onClick={() => settypeofcolor("rgb")}>RGB Color</button>

            <button onClick={() => {
                setColor(typeofcolor === "hex" ? generateRandomHex() : generateRandomRGB());
            }}>
                Generate Random Color
            </button>

            <div style={{
                fontSize: "60px",
                marginTop: "20px"
            }}> 
                <h3>{color}</h3>
                <h3>{typeofcolor}</h3>
            </div>
        </div>
    );
}
