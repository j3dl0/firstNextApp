"use client"
import { useState } from "react"            // Keeps track of changing data

import Form from "./components/Form"
import Table from "./components/Table"
function HomePage(){
    return (
        <div>
            <h1>FavLinks</h1>

            <Form/>         {/* Imported component element. The Form has been created in a separate folder to keep organized code*/}
            <Table/>
        </div>

    )
}

export default HomePage