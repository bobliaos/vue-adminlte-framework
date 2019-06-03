// 注意:在请求头中设置cookie让后台得到token即可

export default ({
    test() {
        $.get(CONFIG.host + CONFIG.path + "query", (value) => {
            console.log("[API.test()]:jQuery version:", $.fn.jquery, value, $(window).resize());
        });
    },
});