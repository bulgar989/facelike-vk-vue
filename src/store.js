import { createStore } from "vuex";
import User from './api/User'


export default createStore({ 
    state: {
        count: 10,
        user_random: null
    },
    mutations: {
        USER_RANDOM (state, payload) {
            state.user_random = payload
        }
    },
    actions: {
        async USER_RANDOM ({commit})  {
            function randomIntFromInterval(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }   
            const rndInt = randomIntFromInterval(1, 190)
            await User.search({offset: rndInt}).then(res => commit('USER_RANDOM', res.data))
        }
    },
    getters: {
        USER_RANDOM (state) {  
            return state.user_random
        }

    }
})