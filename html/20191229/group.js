var fymx = [
    {
        "BianHao":"FYMX201911190015",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"name",
        "FeiYongMXMC":"乘车人",
        "FeiYongMXZ":"曹思培"
    },
    {
        "BianHao":"FYMX201911190016",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"startStation",
        "FeiYongMXMC":"出发站",
        "FeiYongMXZ":"杭州东站"
    },
    {
        "BianHao":"FYMX201911190017",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"arriveStation",
        "FeiYongMXMC":"到达站",
        "FeiYongMXZ":"南京南站"
    },
    {
        "BianHao":"FYMX201911190018",
        "Options":[

        ],
        "Type":"3",
        "BiaoZhunFZXH":"",
        "OcrCode":"date",
        "FeiYongMXMC":"出发日期",
        "FeiYongMXZ":"2016-10-15"
    },
    {
        "BianHao":"FYMX201911190019",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"seatCategory",
        "FeiYongMXMC":"座位类型",
        "FeiYongMXZ":"二等座"
    },
    {
        "BianHao":"FYMX201911190020",
        "Options":[

        ],
        "Type":"1",
        "BiaoZhunFZXH":"",
        "OcrCode":"ticketPrice",
        "FeiYongMXMC":"票价",
        "FeiYongMXZ":"117.5"
    },
    {
        "BianHao":"FYMX201911190021",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"trainNum",
        "FeiYongMXMC":"车次",
        "FeiYongMXZ":"G7608"
    },
    {
        "Type":-1,
        "OcrCode":"FuJianXX",
        "FeiYongMXMC":"附件",
        "FeiYongMXZ":"http://119.18.195.153:8089/bpm/image//upload/FJ200106102100044.jpg",
        "FuJianMC":"FJ200106102100044.jpg",
        "FuJianKey":"94b484373a523f62899683f32efcac45"
    },
    {
        "Type": 0,
        "FeiYongMXMC": "标准费用",
        "FeiYongMXZ": "1"
    },
    {
        "BianHao":"FYMX201911190015",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"name",
        "FeiYongMXMC":"乘车人",
        "FeiYongMXZ":"官青"
    },
    {
        "BianHao":"FYMX201911190016",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"startStation",
        "FeiYongMXMC":"出发站",
        "FeiYongMXZ":"衢州站"
    },
    {
        "BianHao":"FYMX201911190017",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"arriveStation",
        "FeiYongMXMC":"到达站",
        "FeiYongMXZ":"祁东站"
    },
    {
        "BianHao":"FYMX201911190018",
        "Options":[

        ],
        "Type":"3",
        "BiaoZhunFZXH":"",
        "OcrCode":"date",
        "FeiYongMXMC":"出发日期",
        "FeiYongMXZ":"2020-01-06"
    },
    {
        "BianHao":"FYMX201911190019",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"seatCategory",
        "FeiYongMXMC":"座位类型",
        "FeiYongMXZ":"二等座"
    },
    {
        "BianHao":"FYMX201911190020",
        "Options":[

        ],
        "Type":"1",
        "BiaoZhunFZXH":"",
        "OcrCode":"ticketPrice",
        "FeiYongMXMC":"票价",
        "FeiYongMXZ":"409"
    },
    {
        "BianHao":"FYMX201911190021",
        "Options":[

        ],
        "Type":"2",
        "BiaoZhunFZXH":"",
        "OcrCode":"trainNum",
        "FeiYongMXMC":"车次",
        "FeiYongMXZ":"G2343"
    },
    {
        "Type":-1,
        "OcrCode":"FuJianXX",
        "FeiYongMXMC":"附件",
        "FeiYongMXZ":"",
        "FuJianMC":"FJ200106102100044.jpg",
        "FuJianKey":"94b484373a523f62899683f32efcac45"
    },
    {
        "Type": 0,
        "FeiYongMXMC": "标准费用",
        "FeiYongMXZ": "1"
    }
]
console.log(JSON.stringify(_.groupBy(fymx, 'BianHao')));