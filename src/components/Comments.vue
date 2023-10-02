<script setup>
import API from '@/services/api'
import { onMounted, onUnmounted, ref } from 'vue'

let comments = ref([])

const emit = defineEmits(['emitComments'])

const loadComments = async () => {
    let api = new API()
    await api.getComments().then((res) => (comments.value = res.data))
}

const getComments = () => {
    emit('emitComments', comments.value)
}

onMounted(() => {
    loadComments().then(() => getComments())
})

onUnmounted(() => {
    comments = ref([])
})
</script>

<template>
    <h3>Comments</h3>
</template>
