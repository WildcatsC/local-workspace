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


 //  var myChartLeft = echarts.init(document.getElementById('express'));
 //  var optionLeft = {
 //      backgroundColor: '#404a59',
 //      title: {
 //          text: '标快线路运行轨迹',
 //          x: 'center',
 //          top: 20,
 //          textStyle: {
 //              color: 'white',
 //              fontFamily: 'Microsoft YaHei'
 //          }
 //      },
 //      tooltip: {
 //          trigger: 'item'
 //      },
 //      geo: {
 //          map: 'china',
 //          left: 10,
 //          right: 10,
 //          label: {
 //              emphasis: {
 //                  show: false
 //              }
 //          },
 //          roam: true,
 //          hoverable: false,
 //          itemStyle: {
 //              normal: {
 //                  areaColor: '#323c48',
 //                  borderColor: '#404a59',
 //                  borderWidth: 0.5
 //              },
 //              emphasis: {
 //                  areaColor: '#323c48'
 //              }
 //          }
 //      },
 //      series: [{
 //          name: '标快',
 //          type: 'lines',
 //          roam: true,
 //          hoverable: false,
 //          zlevel: 1,
 //          effect: {
 //              show: true,
 //              period: 30,
 //              trailLength: 0.7,
 //              color: '#fff',
 //              symbolSize: 1
 //          },
 //          lineStyle: {
 //              normal: {
 //                  color: '#87CFFB2',
 //                  width: 1,
 //                  curveness: 0.2
 //              }
 //          },
 //          data: []
 //      }]
 //  };
 //  myChartLeft.setOption(optionLeft);



 //  var myChartRight = echarts.init(document.getElementById('sf'));
 //  var optionRight = {
 //      backgroundColor: '#404a59',
 //      title: {
 //          text: '竞品线路运行轨迹',
 //          x: 'center',
 //          top: 20,
 //          textStyle: {
 //              color: 'white',
 //              fontFamily: 'Microsoft YaHei'
 //          }
 //      },
 //      tooltip: {
 //          trigger: 'item'
 //      },
 //      geo: {
 //          map: 'china',
 //          left: 10,
 //          right: 10,
 //          label: {
 //              emphasis: {
 //                  show: false
 //              }
 //          },
 //          roam: true,
 //          hoverable: false,
 //          itemStyle: {
 //              normal: {
 //                  areaColor: '#323c48',
 //                  borderColor: '#404a59',
 //                  borderWidth: 0.5
 //              },
 //              emphasis: {
 //                  areaColor: '#323c48'
 //              }
 //          }
 //      },
 //      series: [{
 //          name: '竞品',
 //          type: 'lines',
 //          roam: true,
 //          hoverable: false,
 //          zlevel: 1,
 //          effect: {
 //              show: true,
 //              period: 30,
 //              trailLength: 0.7,
 //              color: '#fff',
 //              symbolSize: 1
 //          },
 //          lineStyle: {
 //              normal: {
 //                  color: '#FF7E50',
 //                  width: 1,
 //                  curveness: 0.2
 //              }
 //          },
 //          data: []
 //      }]
 //  };
 //  myChartRight.setOption(optionRight);


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




         //  var myChartLeft = echarts.init(document.getElementById('express'));
         //  var optionLeft = {
         //      backgroundColor: '#404a59',
         //      title: {
         //          text: '标快线路运行轨迹',
         //          x: 'center',
         //          top: 20,
         //          textStyle: {
         //              color: 'white',
         //              fontFamily: 'Microsoft YaHei'
         //          }
         //      },
         //      tooltip: {
         //          trigger: 'item'
         //      },
         //      geo: {
         //          map: 'china',
         //          left: 10,
         //          right: 10,
         //          label: {
         //              normal: {
         //                  show: false
         //              },
         //              emphasis: {
         //                  textStyle: {
         //                      color: 'white'
         //                  }
         //              }
         //          },
         //          roam: true,
         //          hoverable: false,
         //          itemStyle: {
         //              normal: {
         //                  areaColor: '#323c48',
         //                  borderColor: '#404a59',
         //                  borderWidth: 1
         //              },
         //              emphasis: {
         //                  areaColor: '#323c48'
         //              }
         //          }
         //      },
         //      series: [{
         //              name: '标快',
         //              type: 'lines',
         //              roam: true,
         //              hoverable: false,
         //              zlevel: 1,
         //              effect: {
         //                  show: true,
         //                  period: 6,
         //                  trailLength: 0.7,
         //                  color: '#fff',
         //                  symbolSize: 5
         //              },
         //              lineStyle: {
         //                  normal: {
         //                      color: '#87CFFB',
         //                      width: 1,
         //                      curveness: 0.2,
         //                      shadowBlur: 1,
         //                      shadowColor: '#87CFFB'
         //                  }
         //              },
         //              data: convertData(bkInputData)
         //          },
         //          {
         //              type: 'lines',
         //              zlevel: 1,
         //              symbol: ['none', 'arrow'],
         //              symbolSize: 1,
         //              effect: {
         //                  show: true,
         //                  period: 6,
         //                  trailLength: 0,
         //                  symbolSize: 1
         //              },
         //              lineStyle: {
         //                  normal: {
         //                      color: '#87CFFB',
         //                      width: 1,
         //                      opacity: 0.6,
         //                      curveness: 0.2
         //                  },
         //                  emphasis: {
         //                      opacity: 0.15,
         //                      shadowBlur: 10,
         //                      shadowColor: 'white'
         //                  }
         //              },
         //              data: convertData(bkInputData)
         //          },
         //          {
         //              type: 'effectScatter',
         //              coordinateSystem: 'geo',
         //              zlevel: 2,
         //              label: {
         //                  normal: {
         //                      show: true,
         //                      position: 'right',
         //                      formatter: '{b}',
         //                      textStyle: {
         //                          fontSize: 16
         //                      }
         //                  }
         //              },
         //              symbolSize: 5,
         //              itemStyle: {
         //                  normal: {
         //                      color: '#87CFFB'
         //                  }
         //              },
         //              data: tagConvertData(bkInputData)
         //          }
         //      ]
         //  };

         //  myChartLeft.setOption(optionLeft);


         //  var myChartRight = echarts.init(document.getElementById('sf'));
         //  var optionRight = {
         //      backgroundColor: '#404a59',
         //      color: ['#FF7E50'],
         //      title: {
         //          text: '竞品线路运行轨迹',
         //          x: 'center',
         //          top: 20,
         //          textStyle: {
         //              color: 'white',
         //              fontFamily: 'Microsoft YaHei'
         //          }
         //      },
         //      tooltip: {
         //          trigger: 'item'
         //      },
         //      geo: {
         //          map: 'china',
         //          left: 10,
         //          right: 10,
         //          label: {
         //              normal: {
         //                  show: false
         //              },
         //              emphasis: {
         //                  textStyle: {
         //                      color: 'white'
         //                  }
         //              }
         //          },
         //          roam: true,
         //          hoverable: false,
         //          itemStyle: {
         //              normal: {
         //                  areaColor: '#323c48',
         //                  borderColor: '#404a59',
         //                  borderWidth: 1
         //              },
         //              emphasis: {
         //                  areaColor: '#323c48'
         //              }
         //          }
         //      },
         //      series: [{
         //              name: '竞品',
         //              type: 'lines',
         //              roam: true,
         //              hoverable: false,
         //              zlevel: 1,
         //              effect: {
         //                  show: true,
         //                  period: 6,
         //                  trailLength: 0.7,
         //                  color: '#fff',
         //                  symbolSize: 5
         //              },
         //              lineStyle: {
         //                  normal: {
         //                      color: '#FF7E50',
         //                      width: 1,
         //                      curveness: 0.2,
         //                      shadowBlur: 1,
         //                      shadowColor: '#FF7E50'
         //                  }
         //              },
         //              data: convertData(sfInputData)
         //          },
         //          {
         //              type: 'lines',
         //              zlevel: 1,
         //              symbol: ['none', 'arrow'],
         //              symbolSize: 1,
         //              effect: {
         //                  show: true,
         //                  period: 6,
         //                  trailLength: 0,
         //                  symbolSize: 1
         //              },
         //              lineStyle: {
         //                  normal: {
         //                      color: '#FF7E50',
         //                      width: 1,
         //                      opacity: 0.6,
         //                      curveness: 0.2
         //                  },
         //                  emphasis: {
         //                      opacity: 0.15,
         //                      shadowBlur: 10,
         //                      shadowColor: 'white'
         //                  }
         //              },
         //              data: convertData(sfInputData)
         //          },
         //          {
         //              type: 'effectScatter',
         //              coordinateSystem: 'geo',
         //              zlevel: 2,
         //              label: {
         //                  normal: {
         //                      show: true,
         //                      position: 'right',
         //                      formatter: '{b}',
         //                      textStyle: {
         //                          fontSize: 16
         //                      }
         //                  }
         //              },
         //              symbolSize: 5,
         //              itemStyle: {
         //                  normal: {
         //                      color: '#FF7E50'
         //                  }
         //              },
         //              data: tagConvertData(sfInputData)
         //          }
         //      ]
         //  };

         //  myChartRight.setOption(optionRight);


         //  document.getElementById("leftTXT").innerHTML = "<table style='border:0.1px solid #ddd;width:230px;line-height:25px;'><tr><td align='center' colspan='2' cellpadding='5'>全程时限：" + Math.round(100 * bkQuancheng2) / 100 + "小时</td></tr><tr><td align='center'>收寄(" + Math.round(100 * bkShouji2) / 100 + ")</td><td align='center'>出口(" + Math.round(100 * bkChukou2) / 100 + ")</td></tr><tr><td align='center' colspan='2'>中转(" + Math.round(100 * bkZhongzhuan2) / 100 + ")</td></tr><tr><td align='center'>投递(" + Math.round(100 * bkToudi2) / 100 + ")</td><td align='center'>进口(" + Math.round(100 * bkJinkou2) / 100 + ")</td></tr></table>";
         //  document.getElementById("rightTXT").innerHTML = "<table style='border:0.1px solid #ddd;width:230px;line-height:25px;'><tr><td align='center' colspan='2'>全程时限：" + Math.round(100 * sfQuancheng2) / 100 + "小时</td></tr><tr><td align='center'>收寄(" + Math.round(100 * sfShouji2) / 100 + ")</td><td align='center'>出口(" + Math.round(100 * sfChukou2) / 100 + ")</td></tr><tr><td align='center' colspan='2'>中转(" + Math.round(100 * sfZhongzhuan2) / 100 + ")</td></tr><tr><td align='center'>投递(" + Math.round(100 * sfToudi2) / 100 + ")</td><td align='center'>进口(" + Math.round(100 * sfJinkou2) / 100 + ")</td></tr></table>";

         //  //右下角展示各种走法
         //  var str_bk = "<table style='border:0.1px solid #ddd;width:300px;line-height:25px;'><tr><td align='center'>" + bkLineInfo[0].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * bkLineInfo[0].Quancheng) / 100 + "&nbsp 邮件量:" + bkLineInfo[0].Volume + "</td></tr>";
         //  /*
         //  if (bkLineInfo.length>=2 && bkT>=2){
         //  	for (i=1;i<2;i++){
         //  		str_bk = str_bk + "<tr><td align='center'>"+bkLineInfo[i].routeCity.toString().replace(/,/g,'>')+"</td></tr><tr><td align='center'>&nbsp 全程时限:"+bkLineInfo[i].Quancheng+"&nbsp 邮件量:"+bkLineInfo[i].Volume+"</td></tr>";
         //  	}
         //  }
         //  */
         //  if (bkLineInfo.length >= 2 && bkT >= 2) {
         //      str_bk = str_bk + "<tr><td align='center'>" + bkLineInfo[1].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * bkLineInfo[1].Quancheng) / 100 + "&nbsp 邮件量:" + bkLineInfo[1].Volume + "</td></tr>";
         //  }
         //  if (bkLineInfo.length >= 3 && bkT >= 3) {
         //      str_bk = str_bk + "<tr><td align='center'>" + bkLineInfo[2].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * bkLineInfo[2].Quancheng) / 100 + "&nbsp 邮件量:" + bkLineInfo[2].Volume + "</td></tr>";
         //  }
         //  str_bk = str_bk + "</table>";
         //  document.getElementById("leftTXT1").innerHTML = str_bk;

         //  var str_sf = "<table style='border:0.1px solid #ddd;width:300px;line-height:25px;'><tr><td align='center'>" + sfLineInfo[0].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * sfLineInfo[0].Quancheng) / 100 + "&nbsp 邮件量:" + sfLineInfo[0].Volume + "</td></tr>";
         //  /*
         //  if (sfLineInfo.length>=2 && sfT>=2){
         //  	for (i=1;i<2;i++){
         //  		str_sf = str_sf + "<tr><td align='center'>"+sfLineInfo[i].routeCity.toString().replace(/,/g,'>')+"</td></tr><tr><td align='center'>&nbsp 全程时限:"+sfLineInfo[i].Quancheng+"&nbsp 邮件量:"+sfLineInfo[i].Volume+"</td></tr>";
         //  	}
         //  }
         //  */
         //  if (sfLineInfo.length >= 2 && sfT >= 2) {
         //      str_sf = str_sf + "<tr><td align='center'>" + sfLineInfo[1].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * sfLineInfo[1].Quancheng) / 100 + "&nbsp 邮件量:" + sfLineInfo[1].Volume + "</td></tr>";
         //  }
         //  if (sfLineInfo.length >= 3 && sfT >= 3) {
         //      str_sf = str_sf + "<tr><td align='center'>" + sfLineInfo[2].routeCity.toString().replace(/,/g, '>') + "</td></tr><tr><td align='center'>&nbsp 全程时限:" + Math.round(100 * sfLineInfo[2].Quancheng) / 100 + "&nbsp 邮件量:" + sfLineInfo[2].Volume + "</td></tr>";
         //  }
         //  str_sf = str_sf + "</table>";
         //  document.getElementById("rightTXT1").innerHTML = str_sf;



         var barchart = echarts.init(document.getElementById('bar'), 'light');

         option = {
             title: {
                 text: '拆分对标',
                 left: 'center'
             },
             tooltip: {},
             toolbox: {
                 show: false,
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
                 left: "right",
                 data: ['标快', '竞品'],
                 orient: 'vertical'
             },
             xAxis: {
                 data: ['出口', '进口', '全程', '收寄', '投递', '邮量', '中转'],
                 min: 'dataMin',
                 max: 'dataMax'
             },
             yAxis: {},
             series: [{
                 name: '标快',
                 type: 'bar',
                 stack: 's',
                 barWidth: 30,
                 data: [
                     bkChukou,
                     bkJinkou,
                     bkQuancheng,
                     bkShouji,
                     bkToudi,
                     bkVolumeAll[0],
                     bkZhongzhuan
                 ]

             }, {
                 name: '竞品',
                 type: 'bar',
                 stack: 's',
                 data: [
                     sfChukou,
                     sfJinkou,
                     sfQuancheng,
                     sfShouji,
                     sfToudi,
                     sfVolumeAll[0],
                     sfZhongzhuan
                 ]

             }]

         };

         barchart.setOption(option);
     }


     console.log(bkLineInfo[0])



 }