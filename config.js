var api = 'http://explorer.balkancoin.org:38777';
var blockTargetInterval = 30;
var coinUnits = 100000000;
var symbol = 'BKC';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "bkc": [
        ["pool.balkancoin.org", "http://miner.balkancoin.org:8147/stats"],
        ["bkc.mininggood.com", "http://us2.mininggood.com:8147/stats"],
        ["youpool.io", "http://118.178.122.224:8118"]
    ]
};
