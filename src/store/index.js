import { createStore } from 'vuex';

function getUserInfo() {
    return new Promise((resolve) => {
        resolve({ name: '左伯桥傻逼' })
    });
}

const store = createStore({
    state() {
        return {
            userInfo: {}
        }
    },
    getters: {
        userName(state) {
            return state.userInfo.name;
        }
    },
    mutations: {
        setUserInfo(state, value) {
            state.userInfo = value;
        }
    },
    actions: {
        async getUserInfo({ commit }) {
            const userInfo = await getUserInfo();
            commit('setUserInfo', userInfo)
        }
    },
    modules:{}
});

export default store;