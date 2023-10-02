<script setup>
import API from '@/services/api'
import { onMounted, onUnmounted, ref } from 'vue'

let posts = ref([])

const emit = defineEmits(['emitPosts'])

const loadPosts = async () => {
    let api = new API()
    await api.getPosts().then((res) => (posts.value = res.data))
}

const getPosts = () => {
    emit('emitPosts', posts.value)
}

onMounted(() => {
    loadPosts().then(() => getPosts())
})

onUnmounted(() => {
    posts = ref(null)
})
</script>

<template>
    <h3>Posts</h3>
</template>
