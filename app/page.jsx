"use client"
import { useState } from "react"            // Keeps track of changing data

import Form from "./components/Form"
import Table from "./components/Table"
function HomePage(){
    
const [newFavLink, setNewFavLink] = useState({})

    function handleNewFavLink(favLink){
                                            // favlink is an object containing a {name, URL}
        console.log(favLink, "in HomePage")

        setNewFavLink(favLink)
    }
    
    return (
        <div>
            <h1>FavLinks</h1>

            <Form submitFavLink={handleNewFavLink} />            

            <Table data={newFavLink}/>
        </div>

    )
}

export default HomePage