var myChart1 = echarts.init(document.getElementById('d1'), 'dark');
var mychart2 = echarts.init(document.getElementById('d2'), 'dark');


var arr1 = [];
var arr2 = [];
var arr3 = [];

var x = []
for (i = 0; i < 200; i++) {
    x[i] = i
    arr1[i] = Math.sin(x[i] * 0.09);
    arr2[i] = Math.cos(x[i] * 0.04);
    arr3[i] = arr1[i] * Math.random() * 2;
}
// for (i = 150; i < 300; i++) {
//     x[i] = i
//     arr1[i] = Math.sin(x[i] * 0.09);
//     arr2[i] = Math.cos(x[i] * 0.04);
//     arr3[i] = arr1[i] * Math.random() * 2;
// }


var option1 = {
    title: {
        text: 'd1'
    },
    tooltip: {},
    toolbox: {
        show: true,
        itemSize: 18,
        feature: {
            dataZoom: {
                yAxisIndex: "none"
            },
            dataView: {
                readOnly: false
            },
            magicType: {
                type: ["line", "bar", "scatter"]
            },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        left: "center",
        data: ['t1', 't2', 't3']
    },
    xAxis: {
        data: x,
        min: 'dataMin',
        max: 'dataMax'
    },
    yAxis: {},
    series: [{
            name: 't1',
            type: 'bar',
            data: arr1,
            visualMap: false
        },
        {
            name: 't2',
            type: 'line',
            data: arr2,
        },
        {
            name: 't3',
            type: 'scatter',
            data: arr3,
        }
    ],
    visualMap: [{
        name: 't1',
        type: 'continuous',
        min: -2,
        max: 2,
        color: ["#313695", "#4575b4", "#74add1", "#abd9e9", "#e0f3f8"]
    }]
};

var option2 = {
    title: {
        text: "d2"
    },
    tooltip: {},
    legend: {},
    xAxis: {
        data: x,
    },
    yAxis: {},
    series: [{
        name: 'src',
        type: 'pie',
        radius: '55%',
        data: [
            { value: 200, name: 'fuck' },
            { value: 274, name: 'dat' },
            { value: 310, name: 'nigga' },
            { value: 335, name: 'yo' },
            { value: 400, name: 'mama' }
        ],
        visualMap: false,
        roseType: 'angle'
    }]
};


myChart1.setOption(option1);
mychart2.setOption(option2);