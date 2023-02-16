
let chart1={
    series: [
        {
            name: 'Total Revenue',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Organic Search',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Facebook Ads',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
    ],
    chartOptions: {
        responsive:[
            {
                breakpoint:500,
                options:{
                    redrawOnWindowResize: true,
                    width: '200px',
                    legend:{
                        fontSize: '12px'
                    }
                }
            }
        ],
        chart: {
            type: 'bar',
            height: 350,
            fontFamily:'Montserrat,sans-serif',
            foreColor:'rgba(108,117,125,1)',
            stacked: false,
            toolbar:{
                show:true,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: true,
                    zoomout: true,
                    pan: false,
                    reset:false,
                    customIcons: [],
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {

            }
        },
        fill: {
            opacity: 1,
            colors: ['rgba(79,70,229,0.9)', 'rgba(79,70,229,0.3)', 'rgba(220,38,38,0.9)']
        },
        tooltip: {
            y: {
                formatter: function (val:string) {
                    return "$ " + val + " thousands"
                }
            }
        },
        legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '16px',
            fontFamily: 'Montserrat,sans-serif',
            fontWeight: 400,
            formatter: undefined,
            inverseOrder: false,
            width: undefined,
            height: undefined,
            tooltipHoverFormatter: undefined,
            customLegendItems: [],
            offsetX: 0,
            offsetY: 0,
            labels: {
                colors: undefined,
                useSeriesColors: false
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors:['rgba(79,70,229,0.9)', 'rgba(79,70,229,0.3)', 'rgba(220,38,38,0.9)'],
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 15,
                vertical: 10
            },
            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            },
        }
    },
}
let chart2={
    series: [44, 55, 41, 17, 15],
    chartOptions: {
        chart: {
            type: 'donut',
            fontFamily: 'Montserrat,sans-serif',

        },
        fill:{
            colors: ['rgba(2,132,199,1)', 'rgba(2,132,199,0.8)', 'rgba(2,132,199,0.6)','rgba(2,132,199,0.5)','rgba(2,132,199,0.4)']

        },
        legend:{
            show:false,

        },
        dataLabels:{
            enabled:false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
}
let chart3={
    series: [42, 47, 52, 58, 65],
    chartOptions: {
        chart: {
            width: 201,
            type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1,
            colors:['rgba(79,70,229,1)','rgba(79,70,229,0.9)','rgba(79,70,229,0.8)','rgba(79,70,229,0.7)','rgba(79,70,229,0.6)']
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            show:false
        },
        dataLabels:{
            enabled:false
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        }
    },
}
let chart4={
    series: [{
        name: "Cost",
        data: [10, 41, 30, 51, 35, 62, 52, 59, 40]
    }],
    chartOptions: {
        chart: {

            fontFamily:'Montserrat,sans-serif',
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar:{
                show:false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            show:false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        tooltip: {
            y: {
                formatter: function (val:string) {
                    return "$ " + val
                }
            }
        }
    },
}
let chart5={
    series: [67],
    chartOptions: {
        chart: {
            fontFamily:'Montserrat,sans-serif',
            height: 350,
            type: 'radialBar',
            offsetY: -10
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val:string) {
                            return val + " Hours";
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            colors: 'rgba(22,163,74,1)',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Median Ratio'],
    },

}
let chart6={
    series: [85],
    chartOptions: {
        chart: {
            fontFamily:'Montserrat,sans-serif',
            height: 350,
            type: 'radialBar',
            offsetY: -10
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val:string) {
                            return val + " Completed";
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            colors: 'rgba(79,70,229,1)',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Median Ratio'],
    },

}
let chart7={

    series: [70],
    chartOptions: {
        chart: {
            height: 350,
            type: 'radialBar',
            fontFamily:'Montserrat,sans-serif',
            fontSize:'13px'

        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70',
                }
            },
        },
        fill: {
            type: 'gradient',
            colors: 'rgba(79,70,229,1)',
        },
        labels: ['Hours'],
        colors:['rgba(79,70,229,1)']


    },
}
let chart8={

    series: [30],
    chartOptions: {
        chart: {
            height: 350,
            type: 'radialBar',
            fontFamily:'Montserrat,sans-serif',
            fontSize:'13px'

        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70',
                }
            },
        },
        fill: {
            type: 'gradient',
            colors: 'rgba(22,163,74,1)',
        },
        labels: ['Completed'],
        colors:['rgba(22,163,74,1)']


    },
}
let chart9={
    series: [{
        name: "Cost",
        data: [10, 41, 56, 90, 50, 62, 70, 89]
    }],
    chartOptions: {

        chart: {
            fontFamily:'Montserrat,sans-serif',
            height: 350,
            type: 'line',
            colors: ['rgba(79,70,229,1)'],

            zoom: {
                enabled: false
            },
            toolbar:{
                show:false
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['rgba(79,70,229,1)'],

        stroke: {
            colors: ['rgba(79,70,229,1)'],

            curve: 'smooth'
        },
        grid: {
            show:false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        tooltip: {
            y: {
                formatter: function (val:string) {
                    return "$ " + val
                }
            }
        }
    },
}
let chart10={

    series: [39],
    chartOptions: {
        chart: {
            height: 350,
            type: 'radialBar',
            fontFamily:'Montserrat,sans-serif',
            fontSize:'13px'

        },
        responsive:[
            {
                breakpoint:500,
                options:{
                    redrawOnWindowResize: true,
                    width: '200px',
                    legend:{
                        fontSize: '12px'
                    }
                }
            }
        ],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70',
                }
            },
        },
        fill: {
            type: 'gradient',
            colors: 'rgba(219,39,119)',
        },
        labels: ['Credit Used'],
        colors:[ 'rgba(219,39,119)']

    },
}
let chart11={

    series: [39],
    chartOptions: {
        chart: {
            height: '100%',
            type: 'radialBar',
            fontFamily:'Montserrat,sans-serif',
            fontSize:'13px'

        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70',
                }
            },
        },
        fill: {
            type: 'gradient',
            colors: 'rgb(13,148,136)',
        },
        labels: ['Completed'],
        colors:[ 'rgb(13,148,136)']


    },
}
let chart12={
    series: [{
        name: "Profile Visitor",
        data: [30, 41, 35, 48, 31, 59, 42, 48]
    }],
    chartOptions: {

        chart: {
            fontFamily:'Montserrat,sans-serif',
            height: 350,
            type: 'line',
            colors: ['rgba(220,38,38,1)'],

            zoom: {
                enabled: false
            },
            toolbar:{
                show:false
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['rgba(220,38,38,1)'],

        stroke: {
            colors: ['rgba(220,38,38,1)'],

            curve: 'smooth'
        },
        grid: {
            show:false
        },
        xaxis: {
            labels: {
                show: false,
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        yaxis: {
            labels: {
                show: false,
            }
        },
        tooltip: {
            y: {
                formatter: function (val:string) {
                    return "" + val
                }
            }
        }
    },
}

let chart13={
    series: [{
        name: "Data Set One",
        data: [30, 50, 40, 61, 42, 35, 40],
    }, {
        name: "Data Set Two",
        data: [50, 40, 50, 40, 45, 40, 30],
    }],
    chartOptions: {
        chart: {
            height: 350,
            type: 'area',
            fontFamily:'Montserrat,sans-serif',
            zoom: {
                enabled: false
            },
            toolbar:{
                show:false
            }
        },
        legend:{
            show:false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },
}
let chart14={
    series: [{
        name: "STOCK ABC",
        data: [30, 50, 40, 61, 42, 35, 40],
    }],
    chartOptions: {
        chart: {
            type: 'area',
            height: 200,
            fontFamily:'Montserrat,sans-serif',
            fontSize:'13px',
            zoom: {
                enabled: false
            },
            toolbar:{
                show:false
            }
        },
        legend:{
            show:false
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#4f46e5'],

        stroke: {
            curve: 'smooth',
            colors: '#4f46e5',

        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
        },
        fill: {
            type: 'gradient',
            colors: '#4f46e5',
        },

        xaxis: {
            labels: {
                show: false,
            },
        },
        yaxis: {

        },
    },
}

let chart15={

    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105,91]
    }],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 200,
            fontFamily:'Montserrat,sans-serif',
            fontSize:'13px',
            toolbar:{
                show:false
            }
        },
        colors: ['#4f46e5','#02c744'],

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            labels: {
                show: false,
            },
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val:string) {
                    return "$ " + val + " thousands"
                }
            }
        }
    },
}
let chart16={
    series: [44,56],
    chartOptions: {
        chart: {
            type: 'donut',
            fontFamily: 'Montserrat,sans-serif',
        },
        fill:{
            colors: ['rgba(2,132,199,1)','rgba(2,132,199,0.4)']

        },
        colors: ['rgba(2,132,199,1)','rgba(2,132,199,0.4)'],
        labels: ['Tasks Done', 'Remaining'],
        dataLabels:{
            enabled:false
        },
        legend:{
            position: 'top'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
}
let chart17={

    series: [{
        name: 'Sunny Days',
        data: [44, 55, 57, 56, 61, 58, 63]
    }],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 200,
            fontFamily:'Montserrat,sans-serif',
            fontSize:'13px',
            toolbar:{
                show:false
            }
        },
        fill: {
            type: 'gradient',
            color:'rgba(219,39,119)',
        },

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ['rgba(219,39,119)'],
        stroke: {
            show: true,
            width: 2,
            colors: 'rgba(219,39,119)',
        },
        xaxis: {
            labels: {
                show: false,
            },
        },

        tooltip: {
            y: {
                formatter: function (val:string) {
                    return "$ " + val + " thousands"
                }
            }
        }
    },
}
let chart18={
    series: [44, 55, 41, 17],
    chartOptions: {
        chart: {
            type: 'donut',
            fontFamily: 'Montserrat,sans-serif',

        },
        legend:{
            position: 'top'
        },
        labels: ['label 1', 'label 2','label 3','label 4'],
        fill:{
            colors: ['rgba(2,132,199,1)', 'rgba(2,132,199,0.8)', 'rgba(2,132,199,0.6)','rgba(2,132,199,0.5)']

        },
        colors: ['rgba(2,132,199,1)', 'rgba(2,132,199,0.8)', 'rgba(2,132,199,0.6)','rgba(2,132,199,0.5)'],

        dataLabels:{
            enabled:false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
}
let chart19={
    series: [25, 15, 44, 55],
    chartOptions: {
        chart: {
            width: '100%',
            type: 'pie',
            fontFamily: 'Montserrat,sans-serif',

        },
        labels: ["label 1", "label 2", "label 3", "label 4"],
        theme: {
            monochrome: {
                enabled: true
            }
        },
        fill:{
            colors:['rgba(79,70,229,1)','rgba(79,70,229,0.9)','rgba(79,70,229,0.8)','rgba(79,70,229,0.7)','rgba(79,70,229,0.6)']
        },
        colors:['rgba(79,70,229,1)','rgba(79,70,229,0.9)','rgba(79,70,229,0.8)','rgba(79,70,229,0.7)','rgba(79,70,229,0.6)'],
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5
                }
            }
        },
        dataLabels:{
            enabled:false
        },
        legend: {
            show: true,
            position:"top",
            markers:{
                fillColors: ['rgba(79,70,229,1)','rgba(79,70,229,0.9)','rgba(79,70,229,0.8)','rgba(79,70,229,0.7)','rgba(79,70,229,0.6)'],
            }
        }
    },
}


export {chart3,chart4,chart5,chart6,chart7,chart8,chart9,chart11,chart10,chart12,chart1,chart2,chart13,chart14,chart15,chart16,chart17,chart18,chart19}