angular.module('oos')
    .controller('mainCtrl', [ '$window', '$rootScope', '$scope', '$location', '$http', '$filter', '$document','lastInfoApi', function($window, $rootScope, $scope, $location, $http, $filter, $document, api ) {

        var currency = ['BTC', 'ETH', 'DASH', 'LTC', 'ETC', 'XRP', 'BCH', 'XMR', 'ZEC', 'QTUM', 'BTG', 'EOS'];


        api.lastDeals(function(err,o){
            $scope.BTC_data = o.data;
        },'BTC')
        api.lastDeals(function(err,o){
            $scope.ETH_data = o.data;
        },'ETH')
        api.lastDeals(function(err,o){
            $scope.DASH_data = o.data;
        },'DASH')
        api.lastDeals(function(err,o){
            $scope.LTC_data = o.data;
        },'LTC')
        api.lastDeals(function(err,o){
            $scope.ETC_data = o.data;
        },'ETC')
        api.lastDeals(function(err,o){
            $scope.XRP_data = o.data;
        },'XRP')
        api.lastDeals(function(err,o){
            $scope.BCH_data = o.data;
        },'BCH')
        api.lastDeals(function(err,o){
            $scope.XMR_data = o.data;
        },'XMR')
        api.lastDeals(function(err,o){
            $scope.ZEC_data = o.data;
        },'ZEC')
        api.lastDeals(function(err,o){
            $scope.QTUM_data = o.data;
        },'QTUM')
        api.lastDeals(function(err,o){
            $scope.BTG_data = o.data;
        },'BTG')
        api.lastDeals(function(err,o){
            $scope.EOS_data = o.data;
        },'EOS')
    }])
