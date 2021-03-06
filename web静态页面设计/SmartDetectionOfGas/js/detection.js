// JavaScript Document
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

var base = new Date(2018,1,1);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() ];
var now = new Date(base);
var time ="";

function addData(shift) {
    //now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
	//now = new Date().toLocaleTimeString();
	now = new Date();
	time=now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    date.push(time);
    data.push((Math.random() - 0.4)  + data[data.length - 1]);

    if (shift) {
        date.shift();
        data.shift();
    }

    now = new Date(+new Date(now) + oneDay);
}

for (var i = 1; i < 100; i++) {
    addData();
}

option = {
	title: {
        text: '实时燃气检测'
    },
	legend: {
        data:['燃气浓度']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        boundaryGap: [0, '50%'],
        type: 'value'
    },
    series: [
        {
            name:'燃气浓度',
            type:'line',
            smooth:true,
            symbol: 'none',
            stack: '数值',
            /*areaStyle: {
                normal: {}//填充
            },*/
            data: data
        }
    ]
};
window.onresize = myChart.resize;
//setInterval(function(){alert(1)},1000);
setInterval(function () {
    addData(true);
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

fun
