<template>
    <div class="facelike-bg"  @dragover.prevent @drop="onDrop">
        <div v-for="user in users" :key="user.id">
            <img 
                class="ficelike-img"
                :src="user.photo_200"
                :draggable="true" 
                @dragstart="onDragStart($event, o)"
                v-touch:swipe="onSwipeItem"
            >
        </div>
    </div>
</template>
<script>
export default {
    props: {
        users: {
            required: true
        }
    },
    setup(props, { emit }){

        const onDragStart = (ev, text) => {
            console.log('rtrtrtrtdf')
        }
        const onDrop = (ev) => {
            emit('onClickSwipe')
        }
        const onSwipeItem = (ev) => {
            emit('onClickSwipe')
        }


        return {
            onDragStart, onDrop, onSwipeItem
        }
    }
}
</script>
<style scoped>
    .facelike-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: blue;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        /* flex-direction: row;
        align-items: stretch; */
    }
    .ficelike-img {
        border-radius: 15px;
    }
</style>