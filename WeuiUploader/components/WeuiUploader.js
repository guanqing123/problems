define(['vue'], function (Vue) {
    return Vue.extend({
        name: 'WeuiUploader',
        template: `<div :id="id" class="weui-panel weui-panel_access">
            <div class="weui-gallery"></div>
            <div class="weui-panel__hd">{{title}} <span>{{images.length}}/{{options.max}}</span></div>
            <div class="weui-panel__bd">
                <div class="weui-uploader" style="padding: 0px 0px 15px 15px">
                    <div class="weui-uploader__bd">
                        <ul class="weui-uploader__files"></ul>
                        <div class="weui-uploader__input-box">
                            <input ref="file" class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        props: {
            id: {
                type: String
            },
            title: {
                type: String
            },
            options: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            images: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        data: function () {
            return {
                _id: 0
            }
        },
        methods: {
            // 设置上传
            setUploadFile: function (file) {
                file.url =
            }
        },
        mounted: function () {
            var URL = window.URL || window.webkitURL || window.mozURL,  self = this
            self.$refs['file'].addEventListener('change', function(e) {
                var files = e.target.files

                if (files.length === 0)
                    return;

                if (self.options.compress === false && self.options.type == 'file') {
                    // 以原文件方式上传
                    Array.prototype.forEach.call(files, function (file) {
                        file.id = ++self._id;

                        if (self.options.onBeforeQueued(file, files) === false) return;

                    })
                } else {
                    // base64上传 和 压缩上传
                    Array.prototype.forEach.call(files, function (file) {
                        file.id = ++self._id;

                        if (self.options.onBeforeQueued(file, files) === false) return;


                    })
                }

            })
        }
    })
})