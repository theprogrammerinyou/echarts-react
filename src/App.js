import React from 'react'
import Charts from './Charts';

const App = () => {
    
    const data =
        [
            [
                ["1444667131", 10], ["1613435772", 15], ["1614243630", 20], ["1613159549", 25], ["1626991585", 30]
            ],
            [
                ["1769976177", 23], ["1265924005", 26.5], ["1298185447", 20.8], ["1792103517", 25.90], ["1626991585", 30]
            ],
        ]
    
    const timeData = data.map(item => {
        const time = item.map(test => test);
        return time;
    });

    const seriesData = data.map(item => {
        return {
            backgroundColor: '#4D86FF',
            name: 'Temperature',
            type: 'line',
            smooth: true,
            data: item.map(test => test)
        }
    });

    return (
        <div>
            <Charts time={seriesData}/>
        </div>
    )
}

export default App
//     [
    //         ["1866698320", 25], ["1682897895", 30], ["1612513630", 35], ["162551159549", 40], ["1625191585", 45]
    //     ],
    //     [
    //         ["1623526633", 31], ["1616425772", 39], ["1615436630", 45], ["1613125549", 40], ["1626936585", 44]
    //     ]
    // ]
    
    // const timeData = time.map(item => item[0]);
    // const tempData = time.map(item => item[1]);
    // const seriesData = time.map(t => {
    //     return {
    //         backgroundColor: '#4D86FF',
    //         name: 'Refuelling',
    //         type: 'line',
    //         smooth: true,
    //         itemStyle: { normal: { areaStyle: { type: 'default' } } },
    //         data: t.map(item => item[1])
    //     }
    // });