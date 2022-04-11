import React, { useState } from 'react';
import '../App.css';

function CurrencyConverter() {

    const createDigits = (n) => {
        let digits = [];
        for( let i = 0; i < n; i++){
            digits.push(<button key={i}>{i}</button>);
        }
        return digits;
    }

    const [result2, setResult2] = useState("");

    // const handalClick2 = (e) => {
    //     setResult2(result2.concat(e.target?.name));
    // };

    const clear2 = () => {
        setResult2("");
    };
    return (
        <>
            <div className="line"></div>

            <h4>Currency Converter</h4>

            <div className="mainscreen-cur">
                <input type="text" id="result2" value={result2} className="screen2" />
                <button onclick={clear2} className="cu-botton">Clear</button>
            </div>

            <div className="key-set">

            { createDigits(10) }

            </div>

            <div className="keyss">
                <div className="key-setss">
                    <button type='button' onclick="usd()" className="cu-botton">USD</button>
                    <button type='button' onclick="euro()" className="cu-botton">Euro</button>
                    <button type='button' onclick="jpy()" className="cu-botton">JPY</button>
                    <button type='button' onclick="pound()" className="cu-botton">Pound</button>
                    <button type='button' onclick="cad()" className="cu-botton">CAD $</button>
                    <button type='button' onclick="inr()" class="cu-botton">&#8593;&#8595;</button>
                </div>
            </div>

            <div className="c-display">
                <p type='number' id="show-doller">0 &#8377;</p>
            </div>
        </>
    )
}

export default CurrencyConverter