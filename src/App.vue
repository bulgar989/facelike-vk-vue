<template>
  <div>
    {{ rand }}
    <button type="button" @click="btnQuote">click</button>
  </div>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { mapActions, mapState, useStore } from 'vuex'

const store = useStore()


const btnQuote = () => store.dispatch('USER_RANDOM')
const rand = computed(() => {
  return store.state.user_random
})

onMounted(() => {
  store.dispatch('USER_RANDOM')
  
  console.log(store.state.count)
})
</script>