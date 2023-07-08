import React from 'react'
import data from './data'
function RenderingArrayOfObjects() {

    const listItems = data.map(
        (element) => {
            return (
                <ul type="disc">
                    <li style={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}
                    >
                        {element.State}
                    </li>
                    <li>{element.Capital}</li>
                </ul>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}
export default RenderingArrayOfObjects;