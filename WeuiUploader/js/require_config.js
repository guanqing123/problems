define(function () {
    require.config({
        baseUrl: "js",
        paths: {
            "vue": "lib/vue",
            "components": "../components"
        }
    });
    require(['entry'])
})