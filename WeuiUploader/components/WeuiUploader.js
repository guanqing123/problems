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
                            <input class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="" />
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
        }
    })
})