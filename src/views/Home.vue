<script setup>
import Comments from '@/components/Comments.vue'
import Posts from '@/components/Posts.vue'
import { onUnmounted, ref } from 'vue'

const radioCheck = ref('')
let apiData = ref([])

const getAPIData = (data) => {
    apiData.value = data
}

onUnmounted(() => {
    apiData = ref(null)
})
</script>

<template>
    <h1>Home</h1>

    <input
        type="radio"
        id="posts"
        name="jsonplaceholder"
        value="posts"
        v-model="radioCheck"
    />
    <label for="posts"> Get Posts</label><br />

    <input
        type="radio"
        id="comments"
        name="jsonplaceholder"
        value="comments"
        v-model="radioCheck"
    />
    <label for="comments"> Get Comments</label><br />

    <div>
        <br />
        <hr />
        <br />
    </div>

    <Posts
        v-if="radioCheck === 'posts'"
        @emit-posts="getAPIData"
    />

    <Comments
        v-if="radioCheck === 'comments'"
        @emit-comments="getAPIData"
    />

    <div v-if="apiData?.length">
        {{ apiData }}
    </div>
</template>
