import React, {useState} from 'react'
import { evaluate } from 'mathjs';

export default function FalseTest() {
    const [value, setValue] = useState('')

    const handleChange = ev => {
      ev.preventDefault()
      let eq = ev.currentTarget.value.split(",")[0]
      let xl = Number(ev.currentTarget.value.split(",")[1])
      let xr = Number(ev.currentTarget.value.split(",")[2])

      const false_cal = (xl,xr,oldx1,i) =>{

        let fxL = evaluate(eq, {x: xl});
        let fxR = evaluate(eq, {x: xr});
        let x1 = (((xl * fxR)-(xr * fxL))/(fxR-fxL));
        let fx1 = evaluate(eq, {x: x1});
        let abcilon  = Math.abs((x1-oldx1)/x1);

        if(abcilon < 0.000001){
            setValue(x1.toFixed(6))
            return;
        }else{
            if(fxR * fx1 > 0){
                false_cal(xl,x1,x1,i+1);
            }else{
                false_cal(x1,xr,x1,i+1);
            }
        }
    }
    false_cal(xl,xr,0)

    }
  
    return <input value={value} aria-label="cost-input" onChange={handleChange} />
  }