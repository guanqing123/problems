var zhichumx = {
    "BianHao": "ZCMX201812240001",
    "IsShowBZZ": "true",
    "JinE": "180",
    "MingCheng": "工伤险",
    "FeiYongMX": [
        [
            {
                "BianHao": "FYMX201912090016",
                "Options": [
                    {
                        "Value": "FZXXZ201912060004",
                        "Text": "12"
                    },
                    {
                        "Value": "FZXXZ201912060005",
                        "Text": "121"
                    },
                    {
                        "Value": "FZXXZ201912060006",
                        "Text": "1212"
                    }
                ],
                "Type": 4,
                "BiaoZhunFZXH": "1",
                "FeiYongMXMC": "级别",
                "FeiYongMXZ": "FZXXZ201912060004"
            },
            {
                "BianHao": "FYMX201912090017",
                "Options": [
                    {
                        "Value": "FZXXZ201912060001",
                        "Text": "1"
                    },
                    {
                        "Value": "FZXXZ201912060003",
                        "Text": "12"
                    }
                ],
                "Type": 4,
                "BiaoZhunFZXH": "2",
                "FeiYongMXMC": "差旅费",
                "FeiYongMXZ": "FZXXZ201912060001"
            },
            {
                "BianHao": "FYMX201912090018",
                "Options": [
                    {
                        "Value": "FZXXZ201912060002",
                        "Text": "基本支出"
                    }
                ],
                "Type": 4,
                "BiaoZhunFZXH": "3",
                "FeiYongMXMC": "基本支出",
                "FeiYongMXZ": "FZXXZ201912060002"
            },
            {
                "BianHao": "FYMX201912090019",
                "Options": [],
                "Type": "1",
                "BiaoZhunFZXH": "",
                "FeiYongMXMC": "a",
                "FeiYongMXZ": "50"
            },
            {
                "BianHao": "FYMX201912090020",
                "Options": [],
                "Type": "1",
                "BiaoZhunFZXH": "",
                "FeiYongMXMC": "v",
                "FeiYongMXZ": "60"
            },
            {
                "Type": 0,
                "FeiYongMXMC": "标准费用",
                "FeiYongMXZ": "1"
            }
        ],
        [
            {
                "BianHao": "FYMX201912090016",
                "Options": [
                    {
                        "Value": "FZXXZ201912060004",
                        "Text": "12"
                    },
                    {
                        "Value": "FZXXZ201912060005",
                        "Text": "121"
                    },
                    {
                        "Value": "FZXXZ201912060006",
                        "Text": "1212"
                    }
                ],
                "Type": 4,
                "BiaoZhunFZXH": "1",
                "FeiYongMXMC": "级别",
                "FeiYongMXZ": "FZXXZ201912060004"
            },
            {
                "BianHao": "FYMX201912090017",
                "Options": [
                    {
                        "Value": "FZXXZ201912060001",
                        "Text": "1"
                    },
                    {
                        "Value": "FZXXZ201912060003",
                        "Text": "12"
                    }
                ],
                "Type": 4,
                "BiaoZhunFZXH": "2",
                "FeiYongMXMC": "差旅费",
                "FeiYongMXZ": "FZXXZ201912060001"
            },
            {
                "BianHao": "FYMX201912090018",
                "Options": [
                    {
                        "Value": "FZXXZ201912060002",
                        "Text": "基本支出"
                    }
                ],
                "Type": 4,
                "BiaoZhunFZXH": "3",
                "FeiYongMXMC": "基本支出",
                "FeiYongMXZ": "FZXXZ201912060002"
            },
            {
                "BianHao": "FYMX201912090019",
                "Options": [],
                "Type": "1",
                "BiaoZhunFZXH": "",
                "FeiYongMXMC": "a",
                "FeiYongMXZ": "40"
            },
            {
                "BianHao": "FYMX201912090020",
                "Options": [],
                "Type": "1",
                "BiaoZhunFZXH": "",
                "FeiYongMXMC": "v",
                "FeiYongMXZ": "30"
            },
            {
                "Type": 0,
                "FeiYongMXMC": "标准费用",
                "FeiYongMXZ": "1"
            }
        ]
    ]
}
/*console.log(JSON.stringify(_.flatMapDepth(zhichumx.FeiYongMX, function (v) {
    return v;
}, 1)))*/

var c = _.flatMapDepth(zhichumx.FeiYongMX, function (v) {
    return v;
}, 1);

console.log(JSON.stringify(_.groupBy(c, 'BianHao')));
var _BiaoZhuFY = 0;
_.forEach(_.groupBy(c, 'BianHao'), function (v, k) {
    if (k == 'undefined') {
        console.log('v>'+JSON.stringify(v))
        _.forEach(_.map(v, function (v) {
            if (v.Type == 0) {
                return v.FeiYongMXZ
            } else {
                return 0
            }
        }), function (v) {
            _BiaoZhuFY += _.toNumber(v)
        });
    }
})
console.log('11>'+_BiaoZhuFY);
