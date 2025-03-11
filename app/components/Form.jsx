import {useState} from 'react'

function Form(props){

    const [name, setName] = useState("")
    const [URL, setURL] = useState("")

    function handleClick(){
       // console.log(name, URL)

        props.submitFavLink({name, URL})
    }

    function handleInputChange(event){
        
        console.log(event.target.value)  // The target is defines which input triggered the event
        
        setName(event.target.value)     // Update state with new data
    }

    function handleNameInputChange(event){

        console.log(event.target.value) // Logs data

        setName(event.target.value) // Update state with new data
    }

    function handleURLInputChange(event){
        console.log(event.target.value) // Logs data

        setName(event.target.value) // Update state with new data
    }

    return(
    <div>
        
        <form>                                 {/* Event Listeners: calls a function when an event is activated. */}
                <label> Name </label>               {/* onClick, onChange & onSubmit are Event Listeners */}
                <input type = "text" onChange={handleInputChange}/>

                <label> URL </label>
                <input type = "text" onChange={handleInputChange}/>

            </form>

            <button onClick={handleClick}> Submit </button> 
            
            </div>
)

}

export default Form