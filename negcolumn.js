Highcharts.chart('negcolumncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Rambutan', 'Durian', 'Longan', 'Lychee', 'Soursop']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Kim',
        data: [7, 1, 3, -1, 5]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});