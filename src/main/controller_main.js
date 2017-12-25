angular.module('oos')
    .controller('mainCtrl', [ '$window', '$rootScope', '$scope', '$location', '$http', '$filter', '$document','lastInfoApi', function($window, $rootScope, $scope, $location, $http, $filter, $document, api ) {

        var currency = ['BTC', 'ETH', 'DASH', 'LTC', 'ETC', 'XRP', 'BCH', 'XMR', 'ZEC', 'QTUM', 'BTG', 'EOS'];

        $rootScope.dataValues = [];

        /* 마지막 거래 정보 */
        api.lastDeals(function(err,o){
            $scope.BTC_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['BTC', recentValues]);
        },'BTC')
        api.lastDeals(function(err,o){
            $scope.ETH_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['ETH', recentValues]);
        },'ETH')
        api.lastDeals(function(err,o){
            $scope.DASH_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['DASH', recentValues]);
        },'DASH')
        api.lastDeals(function(err,o){
            $scope.LTC_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['LTC', recentValues]);
        },'LTC')
        api.lastDeals(function(err,o){
            $scope.ETC_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['ETC', recentValues]);
        },'ETC')
        api.lastDeals(function(err,o){
            $scope.XRP_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['XRP', recentValues]);
        },'XRP')
        api.lastDeals(function(err,o){
            $scope.BCH_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['BCH', recentValues]);
        },'BCH')
        api.lastDeals(function(err,o){
            $scope.XMR_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['XMR', recentValues]);
        },'XMR')
        api.lastDeals(function(err,o){
            $scope.ZEC_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['ZEC', recentValues]);
        },'ZEC')
        api.lastDeals(function(err,o){
            $scope.QTUM_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['QTUM', recentValues]);
        },'QTUM')
        api.lastDeals(function(err,o){
            $scope.BTG_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            var sd = ['BTG', recentValues]
            console.log(recentValues)
            $rootScope.dataValues.push(sd);
        },'BTG')
        api.lastDeals(function(err,o){
            $scope.EOS_data = o.data;
            var recentValues = $filter('number')(o.data.average_price, 0);
            $rootScope.dataValues.push(['EOS', recentValues]);
        },'EOS');

        console.log( $rootScope.dataValues)

        /* Bithumb 거래소 체결 완료 내역 */
        api.compleCurrency(function(err,o){
            console.log(o.data[0])
            $scope.bits = o.data[0]
        },'BTC')
        api.compleCurrency(function(err,o){
            $scope.zets = o.data[0]
        },'ZEC');
console.log($rootScope.dataValues)

    }])

angular.module('oos').directive('makeChartBox',['$rootScope','$timeout','$filter', function($rootScope, $timeout, $filter){
    /*
    return {
    restrict: 'A',
    template: '<div></div>',
    templateUrl: 'directive.html',
    replace: false,
    priority: 0,
    transclude: false,
    scope: false,
    terminal: false,
    require: false,
    controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        post: function postLink(scope, iElement, iAttrs, controller) { ... }
      }
    },
    link: function postLink(scope, iElement, iAttrs) { ... }
  };
  */
    return {
        replace : false,
        scope : false,
        link : function(scope, element, attrs){
            setTimeout(function(){console.log($rootScope.dataValues)},3000)
            var valueArrays =  [['BTC', 23.7],
                               ['Lagos', 16.1],
                               ['Istanbul', 14.2],
                               ['Karachi', 14.0],
                               ['Mumbai', 12.5],
                               ['Moscow', 12.1],
                               ['São Paulo', 11.8],
                               ['Beijing', 11.7],
                               ['Guangzhou', 11.1],
                               ['Delhi', 11.1],
                               ['Shenzhen', 10.5],
                               ['Seoul', 10.4]]//var $rootScope.dataValues;

            var charts = new Highcharts.Chart({
                chart: {
                    type: 'column',
                    renderTo:element[0]
                },
                title: {
                    text: 'Bithumb 최근 24시간 내 평균 거래금액'
                },
                subtitle: {
                    text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'unit (원)'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: 'Bithumb <b>{point.y:.1f} 원</b>'
                },
                series: [{
                    name: 'value',
                    data: valueArrays,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}',
                        y: 10,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });

        }
    }
}])
