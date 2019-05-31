export default ({
    test() {
        $.get(CONFIG.host + CONFIG.path + "query", (value) => {
            console.log("jQuery version:", $.fn.jquery, value);
        });
    },
});