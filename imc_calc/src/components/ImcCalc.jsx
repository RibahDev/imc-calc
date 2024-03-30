import { useState } from "react";
import "./ImcCalc.css";
import Button from "./Button";

const ImcCalc = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setWeight("");
        setHeight("");
    }

    const handleHeightChange = (e) => {

    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" id="height" placeholder="Ex: 1,75" onChange={(e) => handleHeightChange(e)} value={height}/>
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight" placeholder="Ex: 87,5" onChange={(e) => setWeight(e.target.value)} value={weight}/>
                </div>
            </div>
            <div className="action-control">
            <Button id="calc-btn" text="Calcular" />
            <Button id="clear-btn" text="Limpar" action={clearForm} />
            </div>
        </form>
    </div>
  )
}

export default ImcCalc