angular.module('oos')
    .controller('mainCtrl', [ '$window', '$rootScope', '$scope', '$location', '$http', '$q','$filter', '$document','lastInfoApi', function($window, $rootScope, $scope, $location, $http, $q, $filter, $document, api ) {
        $scope.currencyValue = {};
        $rootScope.dataValues = [];
        $rootScope.all = "";

        /* 마지막 거래 정보 */
        api.lastDeals(function(err,o){
            $rootScope.all = o.data;
            $scope.BTC_data = o.data.BTC;
            $scope.ETH_data = o.data.ETH;
            $scope.DASH_data = o.data.DASH;
            $scope.LTC_data = o.data.LTC;
            $scope.ETC_data = o.data.ETC;
            $scope.XRP_data = o.data.XRP;
            $scope.BCH_data = o.data.BCH;
            $scope.XMR_data = o.data.XMR;
            $scope.ZEC_data = o.data.ZEC;
            $scope.QTUM_data = o.data.QTUM;
            $scope.BTG_data = o.data.BTG;
            $scope.EOS_data = o.data.EOS;

            $rootScope.allMinValues = [['BTC',  Number(o.data.BTC.min_price)], ['ETH',  Number(o.data.ETH.min_price)], ['DASH', Number(o.data.DASH.min_price)], ['LTC',  Number(o.data.LTC.min_price)], ['ETC',  Number(o.data.ETC.min_price)], ['XRP',  Number(o.data.XRP.min_price)], ['BCH',  Number(o.data.BCH.min_price)], ['XMR',  Number(o.data.XMR.min_price)], ['ZEC',  Number(o.data.ZEC.min_price)], ['QTUM', Number(o.data.QTUM.min_price)], ['BTG',  Number(o.data.BTG.min_price)], ['EOS',  Number(o.data.EOS.min_price)]
            ];
        },'ALL');

        /* Bithumb 거래소 체결 완료 내역 */
        api.compleCurrency(function(err,o){
            $scope.bits = o.data[0]
        },'BTC')
        api.compleCurrency(function(err,o){
            $scope.zets = o.data[0]
        },'ZEC');

    }])

angular.module('oos').directive('priceInfoBox',['$rootScope','$timeout','$filter', function($rootScope, $timeout, $filter){
    return {
        restrict : 'A',
        replace : false,
        scope : {
            items : "="
        },
        link : function(scope, element, attrs) {
            var valueArrays;
            $rootScope.$watch("allMinValues", function () {
                if ($rootScope.allMinValues) {
                    valueArrays = $rootScope.allMinValues;
                    var arr = [];
                    var newColor = {
                        linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
                        stops: [[0, '#d73127'], [1, '#ff8c43']]
                    };
                    for (var i=0; i<valueArrays.length; i++) {
                        var arrdate = {name: valueArrays[i][0], y: valueArrays[i][1], r: 0, color: newColor};
                        arr.push(arrdate);
                    };

                    var charts = new Highcharts.Chart({
                        chart: {
                            renderTo : element[0],
                            type: 'column'
                        },
                        title: {
                            text: '평균금액'
                        },
                        plotOptions: {
                            column: {
                                borderWidth: 0
                            },
                            series: {
                                pointWidth: 5,
                                color: "#ff285a",
                                borderRadius: 2
                            }
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '12px'
                                }
                            }
                        },
                        yAxis: {
                            title: {
                                text: '',
                                style: {
                                    color: "#eee"
                                },
                                align: "low",
                                margin: 0,
                                rotation: 360
                            },
                            min: 0,
                            opposite: false,
                            labels: {
                                style: {
                                    fontSize: "12px"
                                }
                            },
                            gridLineWidth: 1,
                            gridLineColor: "#a7a7a7"
                        },
                        legend: {
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        series: [{
                            name: '평균금액',
                            data: arr
                        }]
                    });
                };
            });
        }
    }
}])

angular.module('oos').directive('makeChartBox',['$rootScope','$timeout','$filter', function($rootScope, $timeout, $filter){
    return {
        restrict : 'A',
        replace : false,
        scope : {
            items : "="
        },
        link : function(scope, element, attrs) {
            var valueArrays;
            $rootScope.$watch("allMinValues", function () {
                if ($rootScope.allMinValues) {
                    valueArrays = $rootScope.allMinValues;
                    var arr = [];
                    var newColor = {
                        linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
                        stops: [[0, '#d73127'], [1, '#ff8c43']]
                    };
                    for (var i=0; i<valueArrays.length; i++) {
                        var arrdate = {name: valueArrays[i][0], y: valueArrays[i][1], r: 0, color: newColor};
                        arr.push(arrdate);
                    };

                    var charts = new Highcharts.Chart({
                        chart: {
                            renderTo : element[0],
                            type: 'column'
                        },
                        title: {
                            text: '비트코인,제트캐시 체결내역 비교'
                        },
                        plotOptions: {
                            column: {
                                borderWidth: 0
                            },
                            series: {
                                pointWidth: 5,
                                color: "#ff285a",
                                borderRadius: 2
                            }
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '12px'
                                }
                            }
                        },
                        yAxis: {
                            title: {
                                text: '',
                                style: {
                                    color: "#eee"
                                },
                                align: "low",
                                margin: 0,
                                rotation: 360
                            },
                            min: 0,
                            opposite: false,
                            labels: {
                                style: {
                                    fontSize: "12px"
                                }
                            },
                            gridLineWidth: 1,
                            gridLineColor: "#a7a7a7"
                        },
                        legend: {
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        series: [{
                            name: '비트코인,제트캐시 체결내역 비교',
                            data: arr
                        }]
                    });
                };
            });
        }
    }
}]);
