import { createStore } from "vuex";
import User from './api/User'


export default createStore({
    state: {
        count: 10,
        user_random: []
    },
    mutations: {
        USER_RANDOM (state, payload) {
            state.user_random = payload
        }
    },
    actions: {
        USER_RANDOM ({commit})  {
            function randomIntFromInterval(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }   
            const rndInt = randomIntFromInterval(1, 200)
            User.search({offset: rndInt}).then(res => commit('USER_RANDOM', res.data[0]))
        }
    },
    getters: {
        USER_RANDOM (state) {
            return state.user_random
        }

    }
})