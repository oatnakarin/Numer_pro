import React, {useState} from 'react'
import { evaluate } from 'mathjs';

export default function BisecTest() {
    const [value, setValue] = useState('')

    const handleChange = ev => {
      ev.preventDefault()
      let eq = ev.currentTarget.value.split(",")[0]
      let xl = Number(ev.currentTarget.value.split(",")[1])
      let xr = Number(ev.currentTarget.value.split(",")[2])

      const bisec = (xl,xr,oldxm) =>{

          let xM = (xl+xr)/2;

          let fxM = evaluate(eq, {x: xM});
          let fxR = evaluate(eq, {x: xr});
          let abcilon  = Math.abs((xM-oldxm)/xM);

          if(abcilon < 0.000001){
             setValue(xM.toFixed(6));
              return;
          }else{
              if(fxR * fxM > 0){
                  bisec(xl,xM,xM);
              }else{
                  bisec(xM,xr,xM);
              }
          }
      }
      bisec(xl,xr,0)
    }
  
    return <input value={value} aria-label="cost-input" onChange={handleChange} />
  }