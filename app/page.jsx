"use client"
import { useState } from "react"            // Keeps track of changing data

function HomePage(){

    //create state variable [variable, tracker] = start number for counter
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>{          //Inline function that reads JavaScript
                setCount (count + 1)        //Using state, this re-renders the changing data and reflects it on the page.
            }}> Add One</button>
        </div>

    )
}

export default HomePage