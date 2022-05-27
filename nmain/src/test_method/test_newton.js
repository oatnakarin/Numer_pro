import React, {useState} from 'react'
import { evaluate,derivative,abs } from 'mathjs';

export default function NewtonTest() {
    
    const [value,setvalue] = useState('');

    const handleChange = ev => {

        ev.preventDefault()
        let eq = ev.currentTarget.value.split(",")[0]
        let x1 = Number(ev.currentTarget.value.split(",")[1])

            const Fderi = (x) =>{
                return evaluate(derivative(eq,'x').toString(),{x:x})
            }
        
            const F = (x) =>{
                return evaluate(eq,{x:x});
            }
            
        
            const Newton_Rap = (Xi,oldx) =>{
        
                let x = Xi - (F(Xi)/Fderi(Xi));

                if(isNaN(x) || x===Infinity){
                    setvalue("Cannot calculate this equation!")
                    return;
                }

                let abcilon = abs((x-oldx)/x);

        
                if(abcilon<0.000001){
                    setvalue(x.toFixed(6));
                }else{
                    Newton_Rap(x,x);
                }
            }
        
            Newton_Rap(x1,0)
    }

    return <input value={value} aria-label="cost-input" onChange={handleChange} />
  }