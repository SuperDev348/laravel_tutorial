let data = [];

for (let i = 0; i <= 360; i++) {
    let t = i / 180 * Math.PI
    let r = Math.sin(2 * t) * Math.cos(2 * t)
    data.push([r, i])
}
const polarchartdata = {
    title: {
        text: 'Polar Chart',
        subtext: 'Sub text'
    },
    toolbox: {
        show: true,
        feature: {
            restore: { title: "Refresh Data" },
            saveAsImage: {
                title: "Save Image"
            }
        }
    },
    legend: {
        data: ['line']
    },
    polar: {
        center: ['50%', '54%']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
        startAngle: 0
    },
    radiusAxis: {
        min: 0
    },
    color: ['#626ed4'],
    series: [
        {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
        }
    ],
    animationDuration: 2000
}

const lineChart = {
    toolbox: {
        show: true,
        feature: {
            restore: { title: "Refresh Data" },
            saveAsImage: {
                title: "Save Image"
            }
        }
    },
    title: {
        text: 'Line Chart',
        subtext: 'Sub text'
    },
    legend: {
        data: ['Data1', 'Data2']
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: 'Data1',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    },
    {
        name: 'Data2',
        data: [620, 702, 500, 834, 920, 1030, 920],
        type: 'line'
    }],
    color: ['#626ed4'],
};

const barChart = {
    title: {
        text: 'Bar Chart',
        subtext: 'Sub text'
    },
    toolbox: {
        show: true,
        feature: {
            restore: { title: "Refresh Data" },
            saveAsImage: {
                title: "Save Image"
            }
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    legend: {
        data: ['Data1', 'Data2']
    },
    color: ['#02a499', '#626ed4'],
    yAxis: {
        type: 'value'
    },
    series: [{
        name: 'Data1',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    },
    {
        name: 'Data2',
        data: [60, 100, 50, 40, 80, 125, 140],
        type: 'bar'
    }]
};

const pieChart = {
    title: {
        text: 'Pie Chart',
        subtext: 'Sub text'
    },
    toolbox: {
        show: true,
        feature: {
            restore: { title: "Refresh Data" },
            saveAsImage: {
                title: "Save Image"
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        itemHeight: 10,
        itemWidth: 10,
        // orient: 'vertical',
        data: ['Chrome', 'IE', 'Firefox', 'Safari', 'Etc']
    },
    color: ['#f8b425', '#050505', '#02a499', '#6f42c1', '#9aa2ea'],
    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '55%'],
            data: [
                { value: 335, name: 'Chrome' },
                { value: 310, name: 'IE' },
                { value: 234, name: 'Firefox' },
                { value: 135, name: 'Safari' },
                { value: 1548, name: 'Etc' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

const donutChart = {
    title: {
        text: 'Doughnut Chart',
        subtext: 'Sub text'
    },
    toolbox: {
        show: true,
        feature: {
            restore: { title: "Refresh Data" },
            saveAsImage: {
                title: "Save Image"
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        data: ['Chrome', 'IE', 'Firefox', 'Safari']
    },
    color: ['#f8b425', '#050505', '#02a499', '#6f42c1'],
    series: [
        {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            data: [
                { value: 335, name: 'Chrome' },
                { value: 310, name: 'IE' },
                { value: 234, name: 'Firefox' },
                { value: 135, name: 'Safari' },
            ],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            }, labelLine: {
                normal: {
                    show: false
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

const areaChart = {
    title: {
        text: 'Area Chart',
        subtext: 'Sub text'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['c-1', 'c-2', 'c-3', 'c-4', 'c-5']
    },
    toolbox: {
        show: true,
        feature: {
            restore: { title: "Refresh Data" },
            saveAsImage: {
                title: "Save Image"
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    color: ['#f8b425', '#050505', '#02a499', '#6f42c1', '#9aa2ea'],
    series: [
        {
            name: 'c-1',
            type: 'line',
            stack: '1',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'c-2',
            type: 'line',
            stack: '1',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'c-3',
            type: 'line',
            stack: '1',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'c-4',
            type: 'line',
            stack: '1',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'c-5',
            type: 'line',
            stack: '1',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]

};

export { polarchartdata, lineChart, barChart, pieChart, donutChart, areaChart };
