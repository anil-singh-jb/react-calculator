import React, { useState } from 'react';
import '../App.css';

const Calculatorpart = () => {

    const [result, setResult] = useState("");

    const handalClick = (e) => {
        setResult(result.concat(e.target?.name));
    };

    const clear = () => {
        setResult("");
    };

    const bkspase = () => {
        setResult(result?.slice(0, -1));
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Invalid Formate");
        }
    }

    const createDigits = (n) => {
        let digits = [];
        for (let i = 1; i < n; i++) {
            digits.push(<button className="button" name={i} onClick={handalClick}>{i}</button>);
        }
        return digits;
    }


    return (
        <div>
            <div className="mainscreen">
                <input type='text' id='result' value={result} className="screen" />
            </div>
            <div className="keys">
                <div className="key-set">

                    <button onClick={clear} className="operator">AC</button>
                    <button onClick={bkspase} className="operator">Del</button>
                    <button onClick={handalClick} className="operator obold" name="%">%</button>
                    <button onClick={handalClick} className="operator obold" name="/">&#247;</button>

                </div>

                <div className="digits-set">
                    <div className="digits-b" >
                        {createDigits(10)}
                        <button onClick={handalClick} className="button" name="0">0</button>
                        <button onClick={handalClick} className="button" name="00">00</button>
                        <button onClick={handalClick} className="button obold" name=".">.</button>
                    </div>
                    <div className="oprators-b">
                        <button onClick={handalClick} className="operator obold" name="*">x</button>
                        <button onClick={handalClick} className="operator obold" name="+">+</button>
                        <button onClick={handalClick} className="operator obold" name="-">-</button>
                        <button onClick={calculate} className="button equal-sign yelloww obold">=</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculatorpart;