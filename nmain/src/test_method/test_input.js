import { evaluate } from "mathjs";
import {useState} from "react";

export default function Testinput() {
    const [value, setValue] = useState('')

    const handleChange = ev => {        
      ev.preventDefault()

      try{
        let eq = ev.currentTarget.value.split(",")[0];
        let x = ev.currentTarget.value.split(",")[1];
        console.log(evaluate(eq,{x:x}))
        setValue("valid input");
      }catch(err){
        setValue("invalid input")
      }
      
    }

    return <input value={value} aria-label="cost-input" onChange={handleChange} />
}
