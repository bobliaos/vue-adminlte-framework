import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        msg: "Welcome from vuex",
        msg_error: "...",
        msg_info: "...",
        modal_tips_data: {
            class: "modal-danger",
            title: "警告",
            msg: "",
        },
    },
    getter: {
        doneTodos: (state, getters) => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        msg_tips(state, data) {
            state.modal_tips_data.class = data.class || "modal-primary";
            state.modal_tips_data.title = data.title || "提示";
            state.modal_tips_data.msg = data.msg;
        }
    },
    actions: {}
});