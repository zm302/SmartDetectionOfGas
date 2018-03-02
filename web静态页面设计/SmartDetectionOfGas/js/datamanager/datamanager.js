// JavaScript Document
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

option = {
    title: {
        text: '一周厨房燃气浓度汇总',
        subtext: '测试'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高浓度','平均浓度']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} ppm'
        }
    },
    series: [
        {
            name:'最高浓度',
            type:'line',
            data:[1, 0.08, 0.75, 1.1, 1.2, 1.02, 1.3],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'平均浓度',
            type:'line',
            data:[0.05, 0.01, 0.01, 0.08, 0.04, 0.02, 0.05],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};

window.onresize = myChart.resize;
//setInterval(function(){alert(1)},1000);
setInterval(function () {
	
	myChart.setOption(option);
    /*myChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            name:'成交',
            data: data
        }]
    });*/
}, 100);

