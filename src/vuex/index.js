import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        msg: "Welcome from vuex",
    },
    getter: {
        doneTodos: (state, getters) => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        increment(state, payload) {
            state.count++
        }
    },
    actions: {
        addCount(context) {
            // 可以包含异步操作
            // context 是一个与 store 实例具有相同方法和属性的 context 对象
        }
    }
});