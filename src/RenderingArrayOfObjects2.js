import React from 'react'
import data2 from './data2'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function RenderingArrayOfObjects2() {

    const tableRows = data2.map(
        (element) => {
            return (
 
                <tr>
                    <td>{element.Name}</td>
                    <td>{element.Marks}</td>
                    <td>{element.Phone}</td>
                </tr>
 
            )
        }
    )
    return (
        <div>
 
            <Table hover>
                <thead>
                    <tr>
                        <th> Name</th>
                        <th>Marks</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
 
        </div>
    )
}

export default RenderingArrayOfObjects2;