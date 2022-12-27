<template>
    <FaceLikeSwiper 
      :users="users" 
      @onClickSwipe="btnQuote"
    />
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { mapActions, mapState, useStore } from 'vuex'
import FaceLikeSwiper from './components/FaceLikeSwiper.vue'

const store = useStore()

const btnQuote = () => store.dispatch('USER_RANDOM')
const users = computed(() => { return store.state.user_random })
onMounted(() => store.dispatch('USER_RANDOM'))
</script>