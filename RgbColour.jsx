import React, { useState } from "react";

function RgbColour() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const handleGenerateColour = () => {
        const displayDiv = document.getElementById("displayColour");
        displayDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    };

    return (
        <>
            <label htmlFor="RED">RED</label>
            <input
                type="number"
                id="RED"
                value={red}
                onChange={(e) => setRed(Number(e.target.value))}
                min="0"
                max="255"
            />
            <label htmlFor="Green">Green</label>
            <input
                type="number"
                id="Green"
                value={green}
                onChange={(e) => setGreen(Number(e.target.value))}
                min="0"
                max="255"
            />
            <label htmlFor="Blue">Blue</label>
            <input
                type="number"
                id="Blue"
                value={blue}
                onChange={(e) => setBlue(Number(e.target.value))}
                min="0"
                max="255"
            />
            <button onClick={handleGenerateColour}>Generate Colour</button>
            <div
                id="displayColour"
                style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "20px",
                    marginTop: "10px",
                }}
            ></div>
        </>
    );
}

export default RgbColour;
