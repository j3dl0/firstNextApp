function Table(props){

    return(

        <table>
            <thead>        {/* Table Header */} 
                <tr>        {/* Table Row */}
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>GitHub</td> {/* Table Data */}
                    <td>https://www.github.com</td>
                </tr>

                <tr>
                    <td>Google</td>
                    <td>https://www.google.com</td>
                </tr>
                
                <tr>
                    <td>Amazon</td>
                    <td>https://www.amazon.com</td>
                </tr>

                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.URL}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table