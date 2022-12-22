<template>
  <div>
    <img :src="user.photo_400_orig" alt="">
    <button type="button" @click="btnQuote">click</button>
  </div>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { mapActions, mapState, useStore } from 'vuex'

const store = useStore()

const btnQuote = () => store.dispatch('USER_RANDOM')
const user = computed(() => {
  return store.state.user_random
})

onMounted(() => store.dispatch('USER_RANDOM'))
</script>