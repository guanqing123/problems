define(function () {
    require.config({
        baseUrl: "js",
        paths: {
            "photoswipe": "lib/photoswipe.min",
            "photoswipe-ui": "lib/photoswipe-ui-default.min"
        }
    });
    require(['previewer'])
})