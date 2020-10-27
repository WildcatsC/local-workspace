 var convertData = function(oriData) {
     var res = [];
     for (var i = 0, l = oriData.length; i < l; i++) {
         var dataItem = oriData[i];
         var fromCoord = GeoInfo[dataItem[0].name];
         var toCoord = GeoInfo[dataItem[1].name];
         if (fromCoord && toCoord) {
             res.push({
                 fromName: dataItem[0].name,
                 toName: dataItem[1].name,
                 coords: [fromCoord, toCoord]
             });
         }
     }
     return res;
 };


 var tagConvertData = function(oriData) {
     var res = [];
     for (var i = 0, l = oriData.length; i < l; i++) {
         var dataItem = oriData[i];
         if (i == 0) {
             res.push({
                 name: dataItem[0].name,
                 value: GeoInfo[dataItem[0].name].concat(10)
             });
             res.push({
                 name: dataItem[1].name,
                 value: GeoInfo[dataItem[1].name].concat(10)
             });
         } else {
             res.push({
                 name: dataItem[1].name,
                 value: GeoInfo[dataItem[1].name].concat(10)
             });
         }
     }
     return res;
 }


 var dotProduct = function(data1, data2) {
     var res = 0;
     if (!data1 || !data2 || data1.length != data2.length) { return; }
     for (var i = 0, l = data1.length; i < l; i++) {
         res += data1[i] * data2[i];
     }
     return res;
 };





 //初始化空白地图

 var myChartLeft = echarts.init(document.getElementById('express'));
 var optionLeft = {
     backgroundColor: '#404a59',
     title: {
         text: '标快线路运行轨迹',
         x: 'center',
         top: 20,
         textStyle: {
             color: 'white',
             fontFamily: 'Microsoft YaHei'
         }
     },
     tooltip: {
         trigger: 'item'
     },
     geo: {
         map: 'china',
         left: 10,
         right: 10,
         label: {
             emphasis: {
                 show: false
             }
         },
         roam: true,
         hoverable: false,
         itemStyle: {
             normal: {
                 areaColor: '#323c48',
                 borderColor: '#404a59',
                 borderWidth: 0.5
             },
             emphasis: {
                 areaColor: '#323c48'
             }
         }
     },
     series: [{
         name: '标快',
         type: 'lines',
         roam: true,
         hoverable: false,
         zlevel: 1,
         effect: {
             show: true,
             period: 30,
             trailLength: 0.7,
             color: '#fff',
             symbolSize: 1
         },
         lineStyle: {
             normal: {
                 color: '#87CFFB2',
                 width: 1,
                 curveness: 0.2
             }
         },
         data: []
     }]
 };

 myChartLeft.setOption(optionLeft);



 var myChartRight = echarts.init(document.getElementById('sf'));
 var optionRight = {
     backgroundColor: '#404a59',
     title: {
         text: '竞品线路运行轨迹',
         x: 'center',
         top: 20,
         textStyle: {
             color: 'white',
             fontFamily: 'Microsoft YaHei'
         }
     },
     tooltip: {
         trigger: 'item'
     },
     geo: {
         map: 'china',
         left: 10,
         right: 10,
         label: {
             emphasis: {
                 show: false
             }
         },
         roam: true,
         hoverable: false,
         itemStyle: {
             normal: {
                 areaColor: '#323c48',
                 borderColor: '#404a59',
                 borderWidth: 0.5
             },
             emphasis: {
                 areaColor: '#323c48'
             }
         }
     },
     series: [{
         name: '竞品',
         type: 'lines',
         roam: true,
         hoverable: false,
         zlevel: 1,
         effect: {
             show: true,
             period: 30,
             trailLength: 0.7,
             color: '#fff',
             symbolSize: 1
         },
         lineStyle: {
             normal: {
                 color: '#FF7E50',
                 width: 1,
                 curveness: 0.2
             }
         },
         data: []
     }]
 };

 myChartRight.setOption(optionRight);


 //点击下拉框筛选城市，加载数据
 var tmpList = [];
 var org_city = document.getElementById("org_city");
 var dest_city = document.getElementById("dest_city");
 tmpList.push(bkData[0].City[0]);
 for (var i = 1, l = bkData.length; i < l; i++) {
     if (tmpList.indexOf(bkData[i].City[0]) == -1) {
         tmpList.push(bkData[i].City[0]);
     }
 }
 tmpList.sort(function(a, b) {
     return a.localeCompare(b);
 });
 for (var i = 0, l = tmpList.length; i < l; i++) {
     org_city.options.add(new Option(tmpList[i], tmpList[i]));
 }
 org_city.onchange = function() {
     var dest_city = document.getElementById("dest_city");
     dest_city.options.length = 1;
     tmpList = [];
     for (var i = 0, l = bkData.length; i < l; i++) {
         if (bkData[i].City[0] == org_city.value) {
             tmpList.push(bkData[i].City[1]);
             break;
         }
     }
     for (var i = 0, l = bkData.length; i < l; i++) {
         if (bkData[i].City[0] == org_city.value && tmpList.indexOf(bkData[i].City[1]) == -1) {
             tmpList.push(bkData[i].City[1]);
         }
     }
     tmpList.sort(function(a, b) {
         return a.localeCompare(b);
     });
     for (var i = 0, l = tmpList.length; i < l; i++) {
         dest_city.options.add(new Option(tmpList[i], tmpList[i]));
     }
     $('#dest_city').searchableSelect()
     console.log(dest_city)
 }


 var bkInputData = [];
 var bkLineInfo = [];
 var bkVolumeAll = [];
 var bkQuanchengAll = [];
 var bkShoujiAll = [];
 var bkChukouAll = [];
 var bkZhongzhuanAll = [];
 var bkJinkouAll = [];
 var bkToudiAll = [];
 var bkQuancheng = 0;
 var bkShouji = 0;
 var bkChukou = 0;
 var bkZhongzhuan = 0;
 var bkJinkou = 0;
 var bkToudi = 0;
 var bkCounts = 0;
 var bkQuancheng2 = 0;
 var bkShouji2 = 0;
 var bkChukou2 = 0;
 var bkZhongzhuan2 = 0;
 var bkJinkou2 = 0;
 var bkToudi2 = 0;
 var sfInputData = [];
 var sfLineInfo = [];
 var sfVolumeAll = [];
 var sfQuanchengAll = [];
 var sfShoujiAll = [];
 var sfChukouAll = [];
 var sfZhongzhuanAll = [];
 var sfJinkouAll = [];
 var sfToudiAll = [];
 var sfQuancheng = 0;
 var sfShouji = 0;
 var sfChukou = 0;
 var sfZhongzhuan = 0;
 var sfJinkou = 0;
 var sfToudi = 0;
 var sfCounts = 0;
 var sfQuancheng2 = 0;
 var sfShouji2 = 0;
 var sfChukou2 = 0;
 var sfZhongzhuan2 = 0;
 var sfJinkou2 = 0;
 var sfToudi2 = 0;

 var pushData = function(t_data, city1, city2) {
     t_data.push([{ name: city1 }, { name: city2 }]);
 }
 dest_city.onchange = function() {
     if ($("#dest_city").val() != -1) {
         bkInputData = [];
         bkLineInfo = [];
         bkVolumeAll = [];
         bkQuanchengAll = [];
         bkShoujiAll = [];
         bkChukouAll = [];
         bkZhongzhuanAll = [];
         bkJinkouAll = [];
         bkToudiAll = [];
         bkQuancheng = 0;
         bkShouji = 0;
         bkChukou = 0;
         bkZhongzhuan = 0;
         bkJinkou = 0;
         bkToudi = 0;
         bkCounts = 0;
         bkT = 0;
         bkQuancheng2 = 0;
         bkShouji2 = 0;
         bkChukou2 = 0;
         bkZhongzhuan2 = 0;
         bkJinkou2 = 0;
         bkToudi2 = 0;

         for (var i = 0, l = bkData.length; i < l; i++) {
             if (bkData[i].City[0] == org_city.value && bkData[i].City[1] == dest_city.value) {
                 bkLineInfo.push(bkData[i]);
                 bkCounts += bkData[i].Volume;
                 bkVolumeAll.push(bkData[i].Volume);
                 bkQuanchengAll.push(bkData[i].Quancheng);
                 bkShoujiAll.push(bkData[i].Shouji);
                 bkChukouAll.push(bkData[i].Chukou);
                 bkZhongzhuanAll.push(bkData[i].Zhongzhuan);
                 bkJinkouAll.push(bkData[i].Jinkou);
                 bkToudiAll.push(bkData[i].Toudi);
             }
         }
         //console.log(bkLineInfo)
         bkQuancheng = Math.round(100 * dotProduct(bkQuanchengAll, bkVolumeAll) / bkCounts) / 100;
         bkShouji = Math.round(100 * dotProduct(bkShoujiAll, bkVolumeAll) / bkCounts) / 100;
         bkChukou = Math.round(100 * dotProduct(bkChukouAll, bkVolumeAll) / bkCounts) / 100;
         bkZhongzhuan = Math.round(100 * dotProduct(bkZhongzhuanAll, bkVolumeAll) / bkCounts) / 100;
         bkJinkou = Math.round(100 * dotProduct(bkJinkouAll, bkVolumeAll) / bkCounts) / 100;
         bkToudi = Math.round(100 * dotProduct(bkToudiAll, bkVolumeAll) / bkCounts) / 100;

         for (var i = 0, l = bkData2.length; i < l; i++) {
             if (bkData2[i].City[0] == org_city.value && bkData2[i].City[1] == dest_city.value) {
                 bkQuancheng2 = bkData2[i].Quancheng;
                 bkShouji2 = bkData2[i].Shouji;
                 bkChukou2 = bkData2[i].Chukou;
                 bkZhongzhuan2 = bkData2[i].Zhongzhuan;
                 bkJinkou2 = bkData2[i].Jinkou;
                 bkToudi2 = bkData2[i].Toudi;
             }
         }


         for (var i = 0, l = bkLineInfo.length; i < l; i++) {
             if (bkLineInfo[i].Volume / bkCounts > 0.05 && bkLineInfo[i].Volume >= 5) {
                 bkT += 1;
                 if (bkT <= 3) {
                     var bk_city_1 = bkLineInfo[i].routeCity[0];
                     var bk_city_2 = bkLineInfo[i].routeCity[1];
                     pushData(bkInputData, bk_city_1, bk_city_2);
                     for (var j = 1, k = bkLineInfo[i].routeCity.length; j < (k - 1); j++) {
                         var bk_city_1 = bkLineInfo[i].routeCity[j];
                         var bk_city_2 = bkLineInfo[i].routeCity[j + 1];
                         pushData(bkInputData, bk_city_1, bk_city_2);
                     }
                 }
             }
         }

         sfInputData = [];
         sfLineInfo = [];
         sfVolumeAll = [];
         sfQuanchengAll = [];
         sfShoujiAll = [];
         sfChukouAll = [];
         sfZhongzhuanAll = [];
         sfJinkouAll = [];
         sfToudiAll = [];
         sfQuancheng = 0;
         sfShouji = 0;
         sfChukou = 0;
         sfZhongzhuan = 0;
         sfJinkou = 0;
         sfToudi = 0;
         sfCounts = 0;
         sfT = 0;
         sfQuancheng2 = 0;
         sfShouji2 = 0;
         sfChukou2 = 0;
         sfZhongzhuan2 = 0;
         sfJinkou2 = 0;
         sfToudi2 = 0;

         for (var i = 0, l = sfData.length; i < l; i++) {
             if (sfData[i].City[0] == org_city.value && sfData[i].City[1] == dest_city.value) {
                 sfLineInfo.push(sfData[i]);
                 sfCounts += sfData[i].Volume;
                 sfVolumeAll.push(sfData[i].Volume);
                 sfQuanchengAll.push(sfData[i].Quancheng);
                 sfShoujiAll.push(sfData[i].Shouji);
                 sfChukouAll.push(sfData[i].Chukou);
                 sfZhongzhuanAll.push(sfData[i].Zhongzhuan);
                 sfJinkouAll.push(sfData[i].Jinkou);
                 sfToudiAll.push(sfData[i].Toudi);
             }
         }
         sfQuancheng = Math.round(100 * dotProduct(sfQuanchengAll, sfVolumeAll) / sfCounts) / 100;
         sfShouji = Math.round(100 * dotProduct(sfShoujiAll, sfVolumeAll) / sfCounts) / 100;
         sfChukou = Math.round(100 * dotProduct(sfChukouAll, sfVolumeAll) / sfCounts) / 100;
         sfZhongzhuan = Math.round(100 * dotProduct(sfZhongzhuanAll, sfVolumeAll) / sfCounts) / 100;
         sfJinkou = Math.round(100 * dotProduct(sfJinkouAll, sfVolumeAll) / sfCounts) / 100;
         sfToudi = Math.round(100 * dotProduct(sfToudiAll, sfVolumeAll) / sfCounts) / 100;

         for (var i = 0, l = sfData2.length; i < l; i++) {
             if (sfData2[i].City[0] == org_city.value && sfData2[i].City[1] == dest_city.value) {
                 sfQuancheng2 = sfData2[i].Quancheng;
                 sfShouji2 = sfData2[i].Shouji;
                 sfChukou2 = sfData2[i].Chukou;
                 sfZhongzhuan2 = sfData2[i].Zhongzhuan;
                 sfJinkou2 = sfData2[i].Jinkou;
                 sfToudi2 = sfData2[i].Toudi;
             }
         }


         for (var i = 0, l = sfLineInfo.length; i < l; i++) {
             if (sfLineInfo[i].Volume / sfCounts > 0.05 && sfLineInfo[i].Volume >= 5) {
                 sfT += 1;
                 if (sfT <= 3) {
                     var sf_city_1 = sfLineInfo[i].routeCity[0];
                     var sf_city_2 = sfLineInfo[i].routeCity[1];
                     pushData(sfInputData, sf_city_1, sf_city_2);
                     for (var j = 1, k = sfLineInfo[i].routeCity.length; j < (k - 1); j++) {
                         var sf_city_1 = sfLineInfo[i].routeCity[j];
                         var sf_city_2 = sfLineInfo[i].routeCity[j + 1];
                         pushData(sfInputData, sf_city_1, sf_city_2);
                     }
                 }
             }
         }




         var myChartLeft = echarts.init(document.getElementById('express'));
         var optionLeft = {
             backgroundColor: '#404a59',
             title: {
                 text: '标快线路运行轨迹',
                 x: 'center',
                 top: 20,
                 textStyle: {
                     color: 'white',
                     fontFamily: 'Microsoft YaHei'
                 }
             },
             tooltip: {
                 trigger: 'item'
             },
             geo: {
                 map: 'china',
                 left: 10,
                 right: 10,
                 label: {
                     normal: {
                         show: false
                     },
                     emphasis: {
                         textStyle: {
                             color: 'white'
                         }
                     }
                 },
                 roam: true,
                 hoverable: false,
                 itemStyle: {
                     normal: {
                         areaColor: '#323c48',
                         borderColor: '#404a59',
                         borderWidth: 1
                     },
                     emphasis: {
                         areaColor: '#323c48'
                     }
                 }
             },
             series: [{
                     name: '标快',
                     type: 'lines',
                     roam: true,
                     hoverable: false,
                     zlevel: 1,
                     effect: {
                         show: true,
                         period: 6,
                         trailLength: 0.7,
                         color: '#fff',
                         symbolSize: 5
                     },
                     lineStyle: {
                         normal: {
                             color: '#87CFFB',
                             width: 1,
                             curveness: 0.2,
                             shadowBlur: 1,
                             shadowColor: '#87CFFB'
                         }
                     },
                     data: convertData(bkInputData)
                 },
                 {
                     type: 'lines',
                     zlevel: 1,
                     symbol: ['none', 'arrow'],
                     symbolSize: 1,
                     effect: {
                         show: true,
                         period: 6,
                         trailLength: 0,
                         symbolSize: 1
                     },
                     lineStyle: {
                         normal: {
                             color: '#87CFFB',
                             width: 1,
                             opacity: 0.6,
                             curveness: 0.2
                         },
                         emphasis: {
                             opacity: 0.15,
                             shadowBlur: 10,
                             shadowColor: 'white'
                         }
                     },
                     data: convertData(bkInputData)
                 },
                 {
                     type: 'effectScatter',
                     coordinateSystem: 'geo',
                     zlevel: 2,
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{b}',
                             textStyle: {
                                 fontSize: 16
                             }
                         }
                     },
                     symbolSize: 5,
                     itemStyle: {
                         normal: {
                             color: '#87CFFB'
                         }
                     },
                     data: tagConvertData(bkInputData)
                 }
             ]
         };

         myChartLeft.setOption(optionLeft);


         var myChartRight = echarts.init(document.getElementById('sf'));
         var optionRight = {
             backgroundColor: '#404a59',
             color: ['#FF7E50'],
             title: {
                 text: '竞品线路运行轨迹',
                 x: 'center',
                 top: 20,
                 textStyle: {
                     color: 'white',
                     fontFamily: 'Microsoft YaHei'
                 }
             },
             tooltip: {
                 trigger: 'item'
             },
             geo: {
                 map: 'china',
                 left: 10,
                 right: 10,
                 label: {
                     normal: {
                         show: false
                     },
                     emphasis: {
                         textStyle: {
                             color: 'white'
                         }
                     }
                 },
                 roam: true,
                 hoverable: false,
                 itemStyle: {
                     normal: {
                         areaColor: '#323c48',
                         borderColor: '#404a59',
                         borderWidth: 1
                     },
                     emphasis: {
                         areaColor: '#323c48'
                     }
                 }
             },
             series: [{
                     name: '竞品',
                     type: 'lines',
                     roam: true,
                     hoverable: false,
                     zlevel: 1,
                     effect: {
                         show: true,
                         period: 6,
                         trailLength: 0.7,
                         color: '#fff',
                         symbolSize: 5
                     },
                     lineStyle: {
                         normal: {
                             color: '#FF7E50',
                             width: 1,
                             curveness: 0.2,
                             shadowBlur: 1,
                             shadowColor: '#FF7E50'
                         }
                     },
                     data: convertData(sfInputData)
                 },
                 {
                     type: 'lines',
                     zlevel: 1,
                     symbol: ['none', 'arrow'],
                     symbolSize: 1,
                     effect: {
                         show: true,
                         period: 6,
                         trailLength: 0,
                         symbolSize: 1
                     },
                     lineStyle: {
                         normal: {
                             color: '#FF7E50',
                             width: 1,
                             opacity: 0.6,
                             curveness: 0.2
                         },
                         emphasis: {
                             opacity: 0.15,
                             shadowBlur: 10,
                             shadowColor: 'white'
                         }
                     },
                     data: convertData(sfInputData)
                 },
                 {
                     type: 'effectScatter',
                     coordinateSystem: 'geo',
                     zlevel: 2,
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{b}',
                             textStyle: {
                                 fontSize: 16
                             }
                         }
                     },
                     symbolSize: 5,
                     itemStyle: {
                         normal: {
                             color: '#FF7E50'
                         }
                     },
                     data: tagConvertData(sfInputData)
                 }
             ]
         };

         myChartRight.setOption(optionRight);


         document.getElementById("leftTXT").innerHTML = "<table style='border:0.1px solid #ddd;width:230px;line-height:25px;'><tr><td align='center' colspan='2' cellpadding='5'>全程时限：" + Math.round(100 * bkQuancheng2) / 100 + "小时</td></tr><tr><td align='center'>收寄(" + Math.round(100 * bkShouji2) / 100 + ")</td><td align='center'>出口(" + Math.round(100 * bkChukou2) / 100 + ")</td></tr><tr><td align='center' colspan='2'>中转(" + Math.round(100 * bkZhongzhuan2) / 100 + ")</td></tr><tr><td align='center'>投递(" + Math.round(100 * bkToudi2) / 100 + ")</td><td align='center'>进口(" + Math.round(100 * bkJinkou2) / 100 + ")</td></tr></table>";
         document.getElementById("rightTXT").innerHTML = "<table style='border:0.1px solid #ddd;width:230px;line-height:25px;'><tr><td align='center' colspan='2'>全程时限：" + Math.round(100 * sfQuancheng2) / 100 + "小时</td></tr><tr><td align='center'>收寄(" + Math.round(100 * sfShouji2) / 100 + ")</td><td align='center'>出口(" + Math.round(100 * sfChukou2) / 100 + ")</td></tr><tr><td align='center' colspan='2'>中转(" + Math.round(100 * sfZhongzhuan2) / 100 + ")</td></tr><tr><td align='center'>投递(" + Math.round(100 * sfToudi2) / 100 + ")</td><td align='center'>进口(" + Math.round(100 * sfJinkou2) / 100 + ")</td></tr></table>";

         //右下角展示各种走法
         var str_bk = "<table style='border:0.1px solid #ddd;width:300px;line-height:25px;'><tr><td align='center'>" + bkLineInfo[0].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * bkLineInfo[0].Quancheng) / 100 + "&nbsp 邮件量:" + bkLineInfo[0].Volume + "</td></tr>";
         /*
         if (bkLineInfo.length>=2 && bkT>=2){
         	for (i=1;i<2;i++){
         		str_bk = str_bk + "<tr><td align='center'>"+bkLineInfo[i].routeCity.toString().replace(/,/g,'>')+"</td></tr><tr><td align='center'>&nbsp 全程时限:"+bkLineInfo[i].Quancheng+"&nbsp 邮件量:"+bkLineInfo[i].Volume+"</td></tr>";
         	}
         }
         */
         if (bkLineInfo.length >= 2 && bkT >= 2) {
             str_bk = str_bk + "<tr><td align='center'>" + bkLineInfo[1].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * bkLineInfo[1].Quancheng) / 100 + "&nbsp 邮件量:" + bkLineInfo[1].Volume + "</td></tr>";
         }
         if (bkLineInfo.length >= 3 && bkT >= 3) {
             str_bk = str_bk + "<tr><td align='center'>" + bkLineInfo[2].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * bkLineInfo[2].Quancheng) / 100 + "&nbsp 邮件量:" + bkLineInfo[2].Volume + "</td></tr>";
         }
         str_bk = str_bk + "</table>";
         document.getElementById("leftTXT1").innerHTML = str_bk;

         var str_sf = "<table style='border:0.1px solid #ddd;width:300px;line-height:25px;'><tr><td align='center'>" + sfLineInfo[0].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * sfLineInfo[0].Quancheng) / 100 + "&nbsp 邮件量:" + sfLineInfo[0].Volume + "</td></tr>";
         /*
         if (sfLineInfo.length>=2 && sfT>=2){
         	for (i=1;i<2;i++){
         		str_sf = str_sf + "<tr><td align='center'>"+sfLineInfo[i].routeCity.toString().replace(/,/g,'>')+"</td></tr><tr><td align='center'>&nbsp 全程时限:"+sfLineInfo[i].Quancheng+"&nbsp 邮件量:"+sfLineInfo[i].Volume+"</td></tr>";
         	}
         }
         */
         if (sfLineInfo.length >= 2 && sfT >= 2) {
             str_sf = str_sf + "<tr><td align='center'>" + sfLineInfo[1].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * sfLineInfo[1].Quancheng) / 100 + "&nbsp 邮件量:" + sfLineInfo[1].Volume + "</td></tr>";
         }
         if (sfLineInfo.length >= 3 && sfT >= 3) {
             str_sf = str_sf + "<tr><td align='center'>" + sfLineInfo[2].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * sfLineInfo[2].Quancheng) / 100 + "&nbsp 邮件量:" + sfLineInfo[2].Volume + "</td></tr>";
         }
         str_sf = str_sf + "</table>";
         document.getElementById("rightTXT1").innerHTML = str_sf;
     }
 }

 var GeoInfo = {
     '海北州': [100.907395, 36.960702],
     '海西州': [97.377823, 37.382839],
     '恩施州': [109.494763, 30.277908],
     '湘西州': [109.745507, 28.317399],
     '甘孜州': [101.969084, 30.055207],
     '果洛州': [100.251341, 34.477207],
     '甘南州': [102.917605, 34.98901],
     '昌吉州': [87.314822, 44.016923],
     '海南州': [100.626831, 36.292132],
     '西双版纳州': [100.803836, 22.013792],
     '黔西南州': [104.910858, 25.095974],
     '黄南州': [102.021495, 35.526125],
     '临夏州': [103.217303, 35.607475],
     '德宏州': [98.591419, 24.438031],
     '黔东南州': [107.990602, 26.589858],
     '玉树州': [97.01308, 33.011061],
     '黔南州': [107.528663, 26.260586],
     '迪庆州': [99.70948, 27.825264],
     '红河州': [103.38215, 23.369914],
     '凉山州': [102.273965, 27.887685],
     '大理州': [100.274223, 25.612206],
     '伊犁州': [81.330697, 43.922815],
     '克州地区': [76.173127, 39.721257],
     '巴州': [86.151584, 41.770226],
     '延边州': [129.515602, 42.897211],
     '文山州': [104.221606, 23.404187],
     '阿坝州': [102.231186, 31.905609],
     '昌江县': [109.062514, 19.288219],
     '天门市': [113.16551, 30.656201],
     '吴江市': [120.648167, 31.156446],
     '义乌市': [120.073246, 29.333949],
     '定安县': [110.364386, 19.686984],
     '石河子市': [86.062744, 44.309911],
     '三沙市': [112.347629, 16.840414],
     '张家港市': [120.562275, 31.882673],
     '格尔木市': [94.934898, 36.413642],
     '东方市': [108.658639, 19.100763],
     '楚雄市': [101.534699, 25.052166],
     '屯昌县': [110.110085, 19.35724],
     '神农架林区': [110.681947, 31.751357],
     '陵水县': [110.043772, 18.511707],
     '昆山市': [120.986732, 31.391726],
     '琼中县': [109.845261, 19.039266],
     '奎屯市': [84.913027, 44.417272],
     '潜江市': [112.906196, 30.408108],
     '白沙县': [109.451512, 19.230917],
     '保亭县': [109.706786, 18.64641],
     '文昌市': [110.759883, 19.616702],
     '儋州市': [109.587029, 19.526464],
     '常熟市': [120.759066, 31.660277],
     '琼海市': [110.481203, 19.264093],
     '澄迈县': [110.014011, 19.744962],
     '五指山市': [109.523465, 18.78072],
     '万宁市': [110.405546, 18.825224],
     '仙桃市': [113.448062, 30.367056],
     '临高县': [109.697296, 19.918863],
     '乐东县': [109.183355, 18.755948],
     '鄂尔多斯市': [109.787314, 39.61463],
     '秦皇岛市': [119.606184, 39.941259],
     '驻马店市': [114.029465, 33.017546],
     '金华市': [119.654027, 29.084455],
     '芜湖市': [118.439561, 31.358798],
     '白山市': [126.431052, 41.94643],
     '宿迁市': [118.282062, 33.967686],
     '汕尾市': [115.381693, 22.791322],
     '张家口市': [114.894165, 40.830172],
     '黄山市': [118.345096, 29.721365],
     '汕头市': [116.688739, 23.359289],
     '湛江市': [110.365494, 21.277163],
     '烟台市': [121.454425, 37.469868],
     '成都市': [104.071216, 30.576279],
     '临沧市': [100.09528, 23.89053],
     '威海市': [122.128245, 37.519322],
     '内江市': [105.065028, 29.585836],
     '武威市': [102.644524, 37.934078],
     '辽源市': [125.150107, 42.8943],
     '泉州市': [118.682316, 24.880242],
     '钦州市': [108.66089, 21.985392],
     '西安市': [108.946306, 34.347436],
     '德州市': [116.365825, 37.441313],
     '齐齐哈尔市': [123.924531, 47.360087],
     '塔城地区': [82.987095, 46.751068],
     '渭南市': [109.516739, 34.505687],
     '大兴安岭地区': [124.59866, 51.92993],
     '荆州市': [112.24722, 30.340606],
     '日照市': [119.533606, 35.422798],
     '开封市': [114.313904, 34.802941],
     '江门市': [113.088165, 22.584459],
     '沧州市': [116.845272, 38.31022],
     '舟山市': [122.214339, 29.991092],
     '三明市': [117.645742, 26.269683],
     '巴中市': [106.753912, 31.872851],
     '阜新市': [121.676518, 42.027983],
     '呼和浩特市': [111.758518, 40.847461],
     '鹤岗市': [130.304284, 47.356043],
     '蚌埠市': [117.395835, 32.921498],
     '自贡市': [104.784891, 29.345379],
     '眉山市': [103.85507, 30.081369],
     '扬州市': [119.419107, 32.39986],
     '亳州市': [115.785767, 33.850774],
     '菏泽市': [115.487696, 35.239435],
     '鹤壁市': [114.304044, 35.752656],
     '绍兴市': [120.586673, 30.036519],
     '遵义市': [106.933658, 27.731749],
     '河源市': [114.707097, 23.749829],
     '东莞市': [113.758231, 23.026997],
     '铜陵市': [117.818795, 30.950899],
     '大同市': [113.306446, 40.082539],
     '赤峰市': [118.895463, 42.264586],
     '延安市': [109.496361, 36.591003],
     '莆田市': [119.014232, 25.45996],
     '枣庄市': [117.328513, 34.816569],
     '太原市': [112.55706, 37.876885],
     '盘锦市': [122.077269, 41.125939],
     '萍乡市': [113.86077, 27.62897],
     '沈阳市': [123.438973, 41.811339],
     '阿里地区': [81.151894, 30.406574],
     '乌兰察布市': [113.140223, 40.999972],
     '长治市': [113.123046, 36.201585],
     '上海市': [121.480237, 31.236305],
     '吕梁市': [111.148086, 37.525476],
     '绥化市': [126.975678, 46.658789],
     '福州市': [119.302938, 26.080447],
     '上饶市': [117.950028, 28.460864],
     '嘉兴市': [120.762045, 30.750912],
     '保定市': [115.471052, 38.880055],
     '乌海市': [106.80185, 39.660154],
     '来宾市': [109.228844, 23.758226],
     '云浮市': [112.051045, 22.921154],
     '玉溪市': [102.5537, 24.357512],
     '淄博市': [118.061254, 36.819182],
     '无锡市': [120.318954, 31.496704],
     '信阳市': [114.099264, 32.153186],
     '清远市': [113.062619, 23.688238],
     '青岛市': [120.389445, 36.072358],
     '吉林市': [126.556073, 43.843512],
     '昆明市': [102.839667, 24.885953],
     '白银市': [104.144182, 36.550821],
     '七台河市': [131.009618, 45.776512],
     '海南省直辖': [109.587145, 19.527081],
     '阿克苏地区': [80.266525, 41.174545],
     '朔州市': [112.438184, 39.33789],
     '汉中市': [107.030197, 33.07382],
     '吴忠市': [106.205161, 38.003863],
     '丽水市': [119.929503, 28.472979],
     '伊春市': [128.84704, 47.733329],
     '晋中市': [112.759375, 37.692757],
     '日喀则地区': [88.956063, 29.26816],
     '东营市': [118.681046, 37.43999],
     '嘉峪关市': [98.296514, 39.778268],
     '宣城市': [118.765196, 30.946576],
     '宝鸡市': [107.243899, 34.367747],
     '商洛市': [109.94688, 33.876525],
     '天水市': [105.731276, 34.587162],
     '湖州市': [120.094566, 30.899015],
     '淮北市': [116.804878, 33.96064],
     '潍坊市': [119.168138, 36.713212],
     '咸宁市': [114.328967, 29.847123],
     '兰州市': [103.840692, 36.067312],
     '景德镇市': [117.184967, 29.274337],
     '中卫市': [105.203332, 37.506058],
     '南充市': [106.117231, 30.843297],
     '那曲地区': [92.0578, 31.482375],
     '深圳市': [114.066112, 22.548515],
     '珠海市': [113.583235, 22.276392],
     '运城市': [111.013379, 35.032587],
     '和田地区': [79.928877, 37.120556],
     '苏州市': [120.589613, 31.304566],
     '随州市': [113.389071, 31.696341],
     '哈密地区': [93.522785, 42.824642],
     '泸州市': [105.449092, 28.877577],
     '泰安市': [117.094893, 36.205905],
     '长沙市': [112.945333, 28.233971],
     '铁岭市': [123.848797, 42.292573],
     '衢州市': [118.880768, 28.941661],
     '莱芜市': [117.683221, 36.219357],
     '天津市': [117.205914, 39.090908],
     '阿勒泰地区': [88.146856, 47.851367],
     '北海市': [109.126614, 21.486955],
     '固原市': [106.24917, 36.021609],
     '揭阳市': [116.37922, 23.555773],
     '石嘴山市': [106.39078, 38.989783],
     '商丘市': [115.662798, 34.420378],
     '晋城市': [112.857706, 35.496081],
     '安顺市': [105.952622, 26.259904],
     '武汉市': [114.311831, 30.598428],
     '德阳市': [104.404319, 31.133105],
     '安庆市': [117.070127, 30.548594],
     '乌鲁木齐市': [87.623314, 43.832806],
     '漯河市': [114.02323, 33.587703],
     '吉安市': [115.00027, 27.119751],
     '酒泉市': [98.500427, 39.738615],
     '贵港市': [109.604155, 23.118929],
     '马鞍山市': [118.512691, 31.67633],
     '茂名市': [110.931773, 21.669051],
     '怀化市': [110.008116, 27.575595],
     '孝感市': [113.922962, 30.930712],
     '三门峡市': [111.206832, 34.778442],
     '郴州市': [113.021311, 25.776711],
     '佛山市': [113.128432, 23.027707],
     '滁州市': [118.323252, 32.308165],
     '四平市': [124.356844, 43.172447],
     '荆门市': [112.205843, 31.041792],
     '葫芦岛市': [120.843388, 40.717364],
     '普洱市': [100.97281, 22.830987],
     '河池市': [108.091898, 24.698828],
     '广安市': [106.639772, 30.461708],
     '衡水市': [115.676942, 37.745166],
     '鸡西市': [130.976161, 45.300906],
     '邵阳市': [111.474133, 27.245167],
     '洛阳市': [112.460033, 34.624376],
     '本溪市': [123.773468, 41.299847],
     '乐山市': [103.77193, 29.558141],
     '永州市': [111.618703, 26.426612],
     '南昌市': [115.864528, 28.687675],
     '防城港市': [108.361138, 21.693439],
     '达州市': [107.474504, 31.214347],
     '朝阳市': [120.457301, 41.579487],
     '宁波市': [121.556686, 29.880177],
     '阜阳市': [115.821389, 32.895879],
     '许昌市': [113.858804, 34.041737],
     '重庆市': [106.557165, 29.570997],
     '盐城市': [120.168187, 33.355301],
     '广州市': [113.270793, 23.135308],
     '北京市': [116.413554, 39.911013],
     '白城市': [122.845302, 45.6254],
     '济源市': [112.609314, 35.072867],
     '鞍山市': [123.000974, 41.114122],
     '昌都地区': [97.185582, 31.140576],
     '龙岩市': [117.023668, 25.081257],
     '淮南市': [117.006189, 32.631837],
     '新余市': [114.923664, 27.823541],
     '贵阳市': [106.636816, 26.652747],
     '承德市': [117.969798, 40.957855],
     '唐山市': [118.187036, 39.636673],
     '合肥市': [117.235447, 31.82687],
     '肇庆市': [112.47177, 23.052984],
     '湘潭市': [112.950575, 27.83585],
     '六安市': [116.529651, 31.741226],
     '襄阳市': [112.129089, 32.014789],
     '益阳市': [112.361677, 28.559818],
     '遂宁市': [105.599152, 30.539156],
     '海口市': [110.206424, 20.050057],
     '张家界市': [110.484925, 29.122477],
     '贺州市': [111.573078, 24.409403],
     '金昌市': [102.194197, 38.525777],
     '台州市': [121.426996, 28.662297],
     '宜昌市': [111.292971, 30.697602],
     '常德市': [111.704994, 29.037723],
     '邢台市': [114.510889, 37.076646],
     '焦作市': [113.248557, 35.221493],
     '巴彦淖尔市': [107.394129, 40.749427],
     '拉萨市': [91.121025, 29.650088],
     '通化市': [125.946506, 41.733906],
     '张掖市': [100.456221, 38.932187],
     '杭州市': [120.161693, 30.280059],
     '锦州市': [121.133631, 41.100869],
     '曲靖市': [103.802685, 25.496328],
     '惠州市': [114.423348, 23.116409],
     '池州市': [117.497839, 30.67098],
     '十堰市': [110.80454, 32.635042],
     '陇南市': [104.928233, 33.406825],
     '黄冈市': [114.878872, 30.459422],
     '百色市': [106.624969, 23.907845],
     '兴安盟': [122.044544, 46.088444],
     '桂林市': [110.296442, 25.279893],
     '徐州市': [117.29235, 34.210143],
     '临沂市': [118.36299, 35.110531],
     '抚州市': [116.364627, 27.953603],
     '哈尔滨市': [126.542417, 45.807782],
     '新疆维吾尔自治区直辖': [86.085507, 44.312423],
     '大庆市': [125.109727, 46.593216],
     '南宁市': [108.373351, 22.823037],
     '周口市': [114.703433, 33.631958],
     '安阳市': [114.3996, 36.103649],
     '长春市': [125.33017, 43.82178],
     '铜仁地区': [109.168558, 27.674903],
     '郑州市': [113.631349, 34.753488],
     '崇左市': [107.371369, 22.384864],
     '南通市': [120.900301, 31.985237],
     '宜春市': [114.422683, 27.820089],
     '连云港市': [119.229571, 34.602342],
     '赣州市': [114.94126, 25.837179],
     '阳泉市': [113.587087, 37.86234],
     '林芝地区': [94.368109, 29.654792],
     '九江市': [116.007993, 29.711328],
     '松原市': [124.831633, 45.147201],
     '宜宾市': [104.648103, 28.75761],
     '济南市': [117.001319, 36.671627],
     '鄂州市': [114.901557, 30.396522],
     '株洲市': [113.140431, 27.833737],
     '毕节地区': [105.333323, 27.408562],
     '攀枝花市': [101.725262, 26.588109],
     '温州市': [120.705869, 28.001095],
     '榆林市': [109.741195, 38.290886],
     '克拉玛依市': [84.89587, 45.585765],
     '中山市': [113.399023, 22.522262],
     '昭通市': [103.723311, 27.344057],
     '雅安市': [103.04636, 30.021277],
     '黑河市': [127.535014, 50.251193],
     '阳江市': [111.989051, 21.864421],
     '大连市': [121.621391, 38.919345],
     '抚顺市': [123.963595, 41.886078],
     '资阳市': [104.634415, 30.134846],
     '济宁市': [116.593852, 35.420269],
     '平顶山市': [113.198935, 33.772051],
     '潮州市': [116.62943, 23.662923],
     '衡阳市': [112.578397, 26.899517],
     '忻州市': [112.740804, 38.422382],
     '淮安市': [119.022429, 33.616272],
     '丹东市': [124.362564, 40.00569],
     '南京市': [118.802891, 32.064735],
     '定西市': [104.631662, 35.587354],
     '阿拉善盟': [105.735357, 38.857806],
     '海东地区': [102.085207, 36.51761],
     '新乡市': [113.933349, 35.308973],
     '玉林市': [110.18743, 22.660656],
     '营口市': [122.241475, 40.672565],
     '呼伦贝尔市': [119.77221, 49.217977],
     '临汾市': [111.526153, 36.094052],
     '包头市': [109.846755, 40.663636],
     '山南地区': [91.779601, 29.24309],
     '绵阳市': [104.686164, 31.473364],
     '滨州市': [117.9792, 37.388387],
     '庆阳市': [107.649305, 35.716096],
     '鹰潭市': [117.075765, 28.265879],
     '佳木斯市': [130.32696, 46.806581],
     '厦门市': [118.095915, 24.485821],
     '西宁市': [101.784269, 36.623477],
     '湖北省直辖': [113.46109, 30.368184],
     '双鸭山市': [131.165442, 46.652966],
     '广元市': [105.849993, 32.441808],
     '六盘水市': [104.836786, 26.599086],
     '梧州市': [111.285647, 23.482873],
     '韶关市': [113.603757, 24.816174],
     '邯郸市': [114.545808, 36.631222],
     '宁德市': [119.554701, 26.671748],
     '镇江市': [119.431494, 32.195688],
     '常州市': [119.980142, 31.816791],
     '通辽市': [122.251207, 43.658363],
     '牡丹江市': [129.638976, 44.558647],
     '梅州市': [116.129179, 24.294311],
     '平凉市': [106.671741, 35.549266],
     '漳州市': [117.653827, 24.519197],
     '辽阳市': [123.243726, 41.274452],
     '濮阳市': [115.035917, 35.767586],
     '岳阳市': [113.135679, 29.363262],
     '娄底市': [112.001082, 27.703196],
     '保山市': [99.168373, 25.117882],
     '石家庄市': [114.520828, 38.048684],
     '吐鲁番地区': [89.196029, 42.957303],
     '三亚市': [109.518646, 18.258217],
     '聊城市': [115.992077, 36.462681],
     '宿州市': [116.970454, 33.652034],
     '廊坊市': [116.69034, 39.54352],
     '咸阳市': [108.715712, 34.335599],
     '铜川市': [108.951558, 34.902957],
     '锡林郭勒盟': [116.054141, 43.939525],
     '银川市': [106.238976, 38.492392],
     '博州': [82.073064, 44.912168],
     '安康市': [109.03592, 32.690575],
     '太仓市': [121.136606, 31.463984],
     '黄石市': [115.045433, 30.205336],
     '喀什地区': [75.99625, 39.476419],
     '南阳市': [112.535009, 32.996701],
     '南平市': [118.1843, 26.647662],
     '泰州市': [119.932115, 32.4612],
     '丽江市': [100.23357, 26.862521],
     '怒江州': [98.863189, 25.823736],
     '柳州市': [109.42198, 24.331519],
     '乐东黎族自治县': [109.179073, 18.755323],
     '图木舒克市': [79.080493, 39.875203],
     '黄南藏族自治州': [102.021823, 35.525529],
     '凉山彝族自治州': [102.274189, 27.887442],
     '海北藏族自治州': [100.907346, 36.960783],
     '甘南藏族自治州': [102.918248, 34.989025],
     '铜仁市': [109.195779, 27.737852],
     '海南藏族自治州': [100.629362, 36.302297],
     '阿拉尔市': [81.287224, 40.553845],
     '昌吉回族自治州': [87.274164, 44.020693],
     '延边朝鲜族自治州': [129.514529, 42.897749],
     '恩施土家族苗族自治州': [109.49463, 30.278393],
     '侯马市': [111.378351, 35.625489],
     '琼中黎族苗族自治县': [109.84502, 19.039202],
     '楚雄彝族自治州': [101.534728, 25.052015],
     '阿坝藏族羌族自治州': [102.23091, 31.905656],
     '甘孜藏族自治州': [101.968649, 30.055425],
     '海西蒙古族藏族自治州': [97.376278, 37.382892],
     '文山壮族苗族自治州': [104.2222, 23.406659],
     '黔西南布依族苗族自治州': [104.912843, 25.093919],
     '毕节市': [105.298328, 27.289416],
     '大理白族自治州': [100.274192, 25.612269],
     '迪庆藏族自治州': [99.70856, 27.825391],
     '果洛藏族自治州': [100.251753, 34.477971],
     '德宏傣族景颇族自治州': [98.592179, 24.43887],
     '黔南布依族苗族自治州': [107.528641, 26.259373],
     '红河哈尼族彝族自治州': [103.382265, 23.368691],
     '玉树藏族自治州': [97.01572, 32.998662],
     '白沙黎族自治县': [109.457962, 19.231484],
     '怒江傈僳族自治州': [98.863089, 25.823659],
     '克孜勒苏柯尔克孜自治州': [76.173855, 39.720667],
     '保亭黎族苗族自治县': [109.706723, 18.646446],
     '陵水黎族自治县': [110.043994, 18.512331],
     '伊犁哈萨克自治州': [81.330217, 43.923017],
     '黔东南苗族侗族自治州': [107.989299, 26.589967],
     '博尔塔拉蒙古自治州': [82.072686, 44.912246],
     '昌江黎族自治县': [109.062072, 19.303566],
     '西双版纳傣族自治州': [100.803424, 22.015359],
     '巴音郭楞蒙古自治州': [86.151709, 41.770686],
     '临夏回族自治州': [103.216825, 35.608067],
     '湘西土家族苗族自治州': [109.74501, 28.31757]
 };