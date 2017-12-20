'use strict';

angular.module('oos')
    .factory('lastInfoApi', ['$rootScope', '$http','$q', function ($rootScope, $http, $q) {
        function proxyCallback(callback) {
            return function (res) {
                if (res.status < 200 || res.status >= 300) {
                    return callback(res);
                }
                if (!res.data) {
                    callback({message: 'no data!'});
                }
                return callback(null, res.data);
            };
        }
        $rootScope.proxyCallback = proxyCallback;

        var currency = '';

        /* Bithumb 거래소 마지막 거래 정보 */
        function lastDeals(callback, currency) {
            var rest = 'https://api.bithumb.com/public/ticker/' + currency;
            var req = {
                method : "GET",
                url : rest
            }
            $http(req).then(proxyCallback(callback));
        };

        return {
            lastDeals : lastDeals
        }

    }])
