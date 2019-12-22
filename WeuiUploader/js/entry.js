define(['vue', 'components/WeuiUploader'], function (Vue, WeuiUploader) {
    new Vue({
        el: '#uploader',
        components: {
            'weui-uploader': WeuiUploader
        },
        template:`<weui-uploader id="upload" title="附件上传" :options="options"></weui-uploader>`,
        data: function () {
            return {
                options: {
                    url: "http://wxdev.hongyancloud.com:8082/bpm/common/upload3", // 上传地址
                    auto: true, // 自动上传
                    type: 'file', // 上传类型, file为文件上传; base64为以base64上传
                    fileVal: 'file', // 文件上传域的name
                    filekey : "FuJianMC",
                    maxM: 20, // 单张 20M
                    max: 10, // 总张数
                    onSuccess: function (ret) {
                        if (ret.msgCode === "1") {
                            return ret.list[0];
                        }
                    }
                }
            }
        }
    })
})