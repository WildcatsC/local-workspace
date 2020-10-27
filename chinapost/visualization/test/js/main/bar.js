//initialization
var org_city = document.getElementById("org_city");
var dest_city = document.getElementById("dest_city");

var date = document.getElementById("date");

var time = [];
var time_date = [];
var init = [];
var init_date = [];

var counter = 22;

for (var i = 0; i < 745; i++) {
    init[i] = 0;

    var hour = i % 24;
    if (hour == 0) hour = 24;

    if (counter < 32) {
        time[i] = '7月' + counter.toString() + '日' + hour.toString() + '点';
    } else {
        var second_counter = counter - 31;
        time[i] = '8月' + second_counter.toString() + '日' + hour.toString() + '点';;
    }
    if (i % 24 == 0) {
        counter++;
    }
}

var early_arr = init;
var normal_arr = init;;
var late_arr = init;

var early_dep = init;;
var normal_dep = init;
var late_dep = init;
var abnormal = init;



for (var i = 0; i < 72; i++) {
    init_date[i] = 0;
    if (i % 24 == 0) {
        time_date[i] = '0' + '点';
    } else {
        var t = i % 24;
        time_date[i] = t.toString() + '点';
    }
}

var early_arr_date = init_date;
var normal_arr_date = init_date;
var late_arr_date = init_date;

var early_dep_date = init_date;
var normal_dep_date = init_date;
var late_dep_date = init_date;
var abnormal_date = init_date;


// helper functions
function onlyUnique(value, index, self) { // filter out repeated values 
    return self.indexOf(value) === index;
};

function convert_data(data, org_city_param, dest_city_param, org_param, early, normal, late) {

    for (var i = 0; i < data.length; i++) {
        if (org_city_param == data[i].City[0] && dest_city_param == data[i].City[1] && org_param == data[i].Org) {
            for (var j = 0; j < data[i].Date.length; j++) {
                if (parseInt(data[i].Date[j].substr(0, 2)) == 7) {
                    for (var k = 0; k < data[i].Hour[j].length; k++) {
                        var day = parseInt(data[i].Date[j].substr(3, 5));
                        var hour = parseInt(data[i].Hour[j][k]);
                        early[(day - 22) * 24 + hour] = data[i].Early[j][k];
                        normal[(day - 22) * 24 + hour] = data[i].Normal[j][k];
                        late[(day - 22) * 24 + hour] = data[i].Normal[j][k];
                        // if (((day - 22) * 24 + hour) % 24 != 0) {
                        //     time[(day - 22) * 24 + hour] = hour.toString() + '点';
                        // }
                    }
                } else {
                    for (var k = 0; k < data[i].Hour[j].length; k++) {
                        var day = parseInt(data[i].Date[j].substr(3, 5));
                        var hour = parseInt(data[i].Hour[j][k]);
                        early[10 * 24 + day * 24 + hour] = data[i].Early[j][k];
                        normal[10 * 24 + day * 24 + hour] = data[i].Normal[j][k];
                        late[10 * 24 + day * 24 + hour] = data[i].Normal[j][k];
                        // if ((10 * 24 + day * 24 + hour) % 24 != 0) {
                        //     time[10 * 24 + day * 24 + hour] = hour.toString() + '点';
                        // }
                    }
                }
            }
        }
    }

}

function convert_data_de(data, org_city_param, dest_city_param, org_param, early, normal, late, abnormal) {

    for (var i = 0; i < data.length; i++) {
        if (org_city_param == data[i].City[0] && dest_city_param == data[i].City[1] && org_param == data[i].Org) {
            for (var j = 0; j < data[i].Date.length; j++) {
                if (parseInt(data[i].Date[j].substr(0, 2)) == 7) {
                    for (var k = 0; k < data[i].Hour[j].length; k++) {
                        var day = parseInt(data[i].Date[j].substr(3, 5));
                        var hour = parseInt(data[i].Hour[j][k]);;
                        early[(day - 22) * 24 + hour] = data[i].Early[j][k];
                        normal[(day - 22) * 24 + hour] = data[i].Normal[j][k];
                        late[(day - 22) * 24 + hour] = data[i].Normal[j][k];
                        abnormal[(day - 22) * 24 + hour] = data[i].Abnormal[j][k];
                        // if ((day - 22) * 24 + hour % 24 != 0) {
                        //     time[(day - 22) * 24 + hour] = hour.toString() + '点';
                        // }
                    }
                } else {
                    for (var k = 0; k < data[i].Hour[j].length; k++) {
                        var day = parseInt(data[i].Date[j].substr(3, 5));
                        var hour = parseInt(data[i].Hour[j][k]);
                        early[10 * 24 + day * 24 + hour] = data[i].Early[j][k];
                        normal[10 * 24 + day * 24 + hour] = data[i].Normal[j][k];
                        late[10 * 24 + day * 24 + hour] = data[i].Normal[j][k];
                        abnormal[10 * 24 + day * 24 + hour] = data[i].Abnormal[j][k];
                        // if ((10 * 24 + day * 24 + hour) % 24 != 0) {
                        //     time[10 * 24 + day * 24 + hour] = hour.toString() + '点';
                        // }
                    }
                }
            }
        }
    }

}

function convert_data_with_date(data, org_city_param, dest_city_param, org_param, date_param, early, normal, late) {
    for (var i = 0; i < data.length; i++) {
        if (org_city_param == data[i].City[0] && dest_city_param == data[i].City[1] && org_param == data[i].Org) {
            for (var j = 0; j < data[i].Date.length; j++) {
                if (date_param == date[i].Date[j]) {
                    for (var k = 0; k < date[i].Hour.length; k++) {
                        var hour = parseInt(date[i].Hour[j][k]);
                        early[hour + 24] = date[i].Early[j][k];
                        normal[hour + 24] = date[i].Normal[j][k];
                        late[hour + 24] = date[i].Late[j][k];
                    }
                }
                if (j + 1 < data[i].Date.length && j - 1 > 0) {
                    var hour = parseInt(date[i].Hour[j][k]);
                    var today = parseInt(date[i].Date[j].substr(0, 2));
                    var tomorrow = parseInt(date[i].Date[j + 1].substr(0, 2));
                    var yesterday = parseInt(date[i].Date[j - 1].substr(0, 2))
                    if (today == tomorrow - 1 && today == yesterday + 1) {
                        early[hour] = date[i].Early[j - 1][k];
                        normal[hour] = date[i].Normal[j - 1][k];
                        late[hour] = date[i].Late[j - 1][k];
                        early[hour + 48] = date[i].Early[j + 1][k];
                        normal[hour + 48] = date[i].Normal[j + 1][k];
                        late[hour + 48] = date[i].Late[j + 1][k];
                    }
                }
            }

        }
    }
}


function get_org_city(bkData, org_city_list) {

    org_city_list.push(bkData[0].City[0]);

    for (var i = 1, l = bkData.length; i < l; i++) {
        if (org_city_list.indexOf(bkData[i].City[0]) == -1) {
            org_city_list.push(bkData[i].City[0]);
        }
    }
    org_city_list.sort(function(a, b) {
        return a.localeCompare(b);
    });
}

function get_dest_city(bkData, dest_list) {

    for (var i = 0, l = bkData.length; i < l; i++) {
        if (bkData[i].City[0] == org_city.value) {
            dest_list.push(bkData[i].City[1]);
            break;
        }
    }
    for (var i = 0, l = bkData.length; i < l; i++) {
        if (bkData[i].City[0] == org_city.value && dest_list.indexOf(bkData[i].City[1]) == -1) {
            dest_list.push(bkData[i].City[1]);
        }
    }

}

function get_org(bkData, org_list) {

    if ($("#dest_city").val() != -1) {
        for (var i = 0; i < bkData.length; i++) {
            if (bkData[i].City[0] == org_city.value && bkData[i].City[1] == dest_city.value) {
                org_list.push(bkData[i].Org);
            }
        }
    }
}

function get_date(bkData, date_list) {

    var org = document.getElementById("org");

    if ($("#org").val() != -1) {
        for (var i = 0; i < bkData.length; i++) {
            if (bkData[i].City[0] == org_city.value && bkData[i].City[1] == dest_city.value && bkData[i].Org == org.value) {
                for (var j = 0; j < bkData[i].Date.length; j++)
                    date_list.push(bkData[i].Date[j]);
            }
        }
    }
}


// searchable select MAIN
var org_city_list = [];
get_org_city(data_arrival, org_city_list);
get_org_city(data_departure, org_city_list);
org_city_list = org_city_list.filter(onlyUnique);
for (var i = 0, l = org_city_list.length; i < l; i++) {
    org_city.options.add(new Option(org_city_list[i], org_city_list[i]));
}

org_city.onchange = function() {

    dest_city.options.length = 1;
    var dest_list = [];

    get_dest_city(data_arrival, dest_list);
    get_dest_city(data_departure, dest_list);

    dest_list = dest_list.filter(onlyUnique);
    dest_list = dest_list.sort();

    for (var i = 0, l = dest_list.length; i < l; i++) {
        dest_city.options.add(new Option(dest_list[i], dest_list[i]));
    }
    $('#dest_city').searchableSelect();
}


dest_city.onchange = function() {

    org.options.length = 1;
    var org_list = [];

    get_org(data_arrival, org_list);
    get_org(data_departure, org_list);

    org_list = org_list.filter(onlyUnique);
    org_list = org_list.sort();

    for (var i = 0; i < org_list.length; i++) {
        org.options.add(new Option(org_list[i], org_list[i]));
    }
    $('#org').searchableSelect();

}


// refresh barchart onchange from now on
org.onchange = function() {

    var barchart_arr = echarts.init(document.getElementById('bar1'), 'light');
    var barchart_dep = echarts.init(document.getElementById('bar2'), 'light');

    convert_data(data_arrival, org_city.value, dest_city.value, org.value, early_arr, normal_arr, late_arr);
    convert_data_de(data_departure, org_city.value, dest_city.value, org.value, early_dep, normal_dep, late_dep, abnormal);


    option_arrival = {
        title: {
            text: '到达',
            left: 'center'
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
            left: "left",
            data: ['早到', '正常', '晚到'],
            orient: 'vertical'
        },
        xAxis: {
            data: time,
            axisLabel: {
                show: true
                    // interval: 
            },
            axisTick: {
                show: true
            }
        },
        yAxis: {},
        series: [{
            name: '早到',
            type: 'bar',
            stack: 's',
            data: early_arr
        }, {
            name: '正常',
            type: 'bar',
            stack: 's',
            data: normal_arr
        }, {
            name: '晚到',
            type: 'bar',
            stack: 's',
            data: late_arr
        }]

    };

    option_departure = {
        title: {
            text: '离开',
            left: 'center'
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
            left: "left",
            data: ['早到', '正常', '晚到', '异常'],
            orient: 'vertical'
        },
        xAxis: {
            data: time,
            axisLabel: {
                show: true
                    // interval: 
            },
            axisTick: {
                show: true
            }
        },
        yAxis: {},
        series: [{
                name: '早到',
                type: 'bar',
                stack: 's',
                data: early_dep
            }, {
                name: '正常',
                type: 'bar',
                stack: 's',
                data: early_dep
            }, {
                name: '晚到',
                type: 'bar',
                stack: 's',
                data: late_dep
            },
            {
                name: '异常',
                type: 'bar',
                stack: 's',
                data: abnormal
            }
        ]

    };

    date.options.length = 1;
    var date_list = [];

    get_date(data_arrival, date_list);
    get_date(data_departure, date_list);

    date_list = date_list.filter(onlyUnique);
    date_list = date_list.sort();

    for (var i = 0; i < date_list.length; i++) {
        date.options.add(new Option(date_list[i], date_list[i]));
    }
    $('#date').searchableSelect();

    barchart_arr.setOption(option_arrival);
    barchart_dep.setOption(option_departure);
}

// var button = document.getElementById('button');
// button.onclick = function() {
//     window.alert("显示连续三天");
// }

date.onchange = function() {

    if (org.value != -1) {
        var barchart_arr = echarts.init(document.getElementById('bar1'), 'light');
        var barchart_dep = echarts.init(document.getElementById('bar2'), 'light');

        convert_data_with_date(data_arrival, org_city.value, data_arrival, org_city.value, dest_city.value, org.value, early_arr_date, normal_arr_date, late_arr_date);

        var title = '';
        if (date.value != -1) title = date.value;

        option_arrival = {
            title: {
                text: title + '到达',
                left: 'center'
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
                left: "left",
                data: ['早到', '正常', '晚到'],
                orient: 'vertical'
            },
            xAxis: {
                data: time_date,
                axisLabel: {
                    show: true
                        // interval: 
                },
                axisTick: {
                    show: true
                }
            },
            yAxis: {},
            series: [{
                name: '早到',
                type: 'bar',
                stack: 's',
                data: early_arr_date
            }, {
                name: '正常',
                type: 'bar',
                stack: 's',
                data: normal_arr_date
            }, {
                name: '晚到',
                type: 'bar',
                stack: 's',
                data: late_arr_date
            }]

        };

        option_departure = {
            title: {
                text: title + '离开',
                left: 'center'
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
                left: "left",
                data: ['早到', '正常', '晚到', '异常'],
                orient: 'vertical'
            },
            xAxis: {
                data: time_date,
                axisLabel: {
                    show: true
                        // interval: 
                },
                axisTick: {
                    show: true
                }
            },
            yAxis: {},
            series: [{
                    name: '早到',
                    type: 'bar',
                    stack: 's',
                    data: early_dep_date
                }, {
                    name: '正常',
                    type: 'bar',
                    stack: 's',
                    data: early_dep_date
                }, {
                    name: '晚到',
                    type: 'bar',
                    stack: 's',
                    data: late_dep_date
                },
                {
                    name: '异常',
                    type: 'bar',
                    stack: 's',
                    data: abnormal_date
                }
            ]

        };
        barchart_arr.setOption(option_arrival);
        barchart_dep.setOption(option_departure);
    }
}