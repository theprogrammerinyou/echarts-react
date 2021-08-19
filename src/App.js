import React from 'react'
import Charts from './Charts';

// declarre the function with name same as the file name. 
const App = () => {
    
    const data =
    [
        [
    [
        1629365299,
        null
    ],
    [
        1629365400,
        26
    ],
    [
        1629366000,
        26.11
    ],
    [
        1629366600,
        26.06
    ],
    [
        1629367200,
        26.02
    ],
    [
        1629368899,
        null
    ]
],
    ]
    
    const seriesData = data.map(item => {
        return {
            backgroundColor: '#4D86FF',
            name: 'Temperature',
            type: 'line',
            data: item
        }
    });

    // return statement.
    return (
        <div>
            <Charts titleText="Time Vs Temperature" axisLabel="X Axis" seriesData={seriesData}/>
        </div>
    )
}

export default App