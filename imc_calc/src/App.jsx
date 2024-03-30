import {data} from "./data/data";

import { useState } from "react";

import ImcCalc from "./components/ImcCalc";
import imcTable from "./components/imcTable";

import './App.css'

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();
    console.log("Executou");
  }

  const [imc, setImc] = useState("");
  const[info, setInfo] = useState("");
  const[infoClass, setInfoClass] = useState("");

  return (
      <div className='container'>
        {!imc ? (
          <ImcCalc calcImc={calcImc} />
         ) : (
          <imcTable />
         )}          
      </div>
     
  )
}

export default App
