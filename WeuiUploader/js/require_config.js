define(function () {
    require.config({
        baseUrl: "js",
        paths: {
            "vue": "lib/vue",
            "gqui": "lib/gqui.min",
            "zepto": "lib/zepto.min",
            "components": "../components"
        }
    });
    require(['entry'])
})