var map = {
    "undefined":[
        {
            "Type":-1,
            "OcrCode":"FuJianXX",
            "FeiYongMXMC":"附件",
            "FeiYongMXZ":"http://119.18.195.153:8089/bpm/image//upload/FJ200106102100044.jpg",
            "FuJianMC":"FJ200106102100044.jpg",
            "FuJianKey":"94b484373a523f62899683f32efcac45"
        },
        {
            "Type":0,
            "FeiYongMXMC":"标准费用",
            "FeiYongMXZ":"1"
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
            "Type":0,
            "FeiYongMXMC":"标准费用",
            "FeiYongMXZ":"1"
        }
    ]
}
console.log(JSON.stringify(_.map(map.undefined, function (v) {
    if (v.Type == 0) {
        return v.FeiYongMXZ
    } else {
        return 0
    }
})))
var _BiaoZhuFY = 0;
_.forEach(_.map(map.undefined, function (v) {
    if (v.Type == 0) {
        return v.FeiYongMXZ
    } else {
        return 0
    }
}), function (v) {
    _BiaoZhuFY += _.toNumber(v);
})
console.log('bz>'+_BiaoZhuFY)