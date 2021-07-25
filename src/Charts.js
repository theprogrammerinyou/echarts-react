import ReactEcharts from "echarts-for-react";
import moment from 'moment';

const Charts = ({ time }) => {
    console.log('temperature', time);
    const option =    {
        color: ["#253egf","#324abd"],
        title : {
            text: 'Time Vs Temperature',
            textStyle: {
                fontFamily: 'lato'
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: (function (value) {
                
            })
        },
        calculable : true,
        xAxis : [
            {
                boundaryGap:false,
                axisLabel: {
                    formatter: (function (value) {
                        return moment(value * 1000).format('DD-MM-YYYY [\r\n\n] HH:mm:ss');
                    })
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        toolbox: {
            feature: {
                dataZoom: {
                    // show: true,
                    title: {
                        zoom: 'Area Zooming',
                        back: 'Restore Area Zooming',
                    },
                    yAxisIndex: false,
                },
                dataView: {
                    title: 'View Data',
                    lang: ['List View', 'Turn Off', 'Refresh'],
                },
                restore: {
                    title: 'Reset',
                },
            },
        },
        series: time,
        dataZoom: [{
            type: 'slider',
            start: 0,
            end: 100,
            height: 20,
            bottom: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '100%',
            showDataShadow: true,
            fillerColor: '#cd5c5c',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(200, 200, 200, 1)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
    }

    return (
        <ReactEcharts option={option} style={{width: '100%', height: '500px'}} />
    )
};

export default Charts;