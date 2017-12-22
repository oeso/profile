/**
 * bithumb api 로 받은 data를 firebase에 실시간으로 저장
 * author : osaraitne@gmail.com
 * date : 2017.12.22
 */

var cheerio = require("cheerio");
var request = require("request");

var firebase = require("firebase");

var config = {
    apiKey : "AIzaSyAEtHyBAIzFOHDFwPQqITuHtf5_Q0x9k14",
    authDomain : "bits-6d527.firebaseapp.com",
    databaseURL : "https://bits-6d527.firebaseio.com/",
    storageBucket : "bits.appspot.com"
};
firebase.initializeApp(config);
var currencyItem = ['BTC', 'ETH', 'DASH', 'LTC', 'ETC', 'XRP', 'BCH', 'XMR', 'ZEC', 'QTUM', 'BTG', 'EOS'];
var cnt = 0;

function publicBithumbLastInfo(cnt){
    for(var i=0; i<currencyItem.length; i++){
        var url = "https://api.bithumb.com/public/ticker/" + currencyItem[i];
        request(url, function(error, response, html){
            if(error){throw error};
            var odata = JSON.parse(html);
            var idx = "fire" + cnt + "/";

            firebase.database().ref(idx).set({
                data : {
                    BTC : odata,
                    ETH : odata,
                    DASH : odata,
                    LTC : odata,
                    ETC : odata,
                    XRP : odata,
                    BCH : odata,
                    XMR : odata,
                    ZEC : odata,
                    QTUM : odata,
                    BTG : odata,
                    EOS : odata
                }
            });
        });
    }
}

/* 최근 24시간 기록. 24시간 기록 완료시 새로 덮어씀 */
var publicLastInfo = setInterval(function(){
    if(cnt == 24){cnt = 0};
    publicBithumbLastInfo(cnt);
    cnt++;
}, 5000);