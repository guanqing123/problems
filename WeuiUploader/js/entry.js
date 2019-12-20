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
                    max: 10
                }
            }
        }
    })
})