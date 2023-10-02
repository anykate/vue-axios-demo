<script setup>
import Comments from '@/components/Comments.vue'
import Posts from '@/components/Posts.vue'
import { ref } from 'vue'

const radioCheck = ref('')
const apiData = ref([])

const getAPIData = (data) => {
    apiData.value = data
}
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
    <label for="posts">Get Posts</label><br />

    <input
        type="radio"
        id="comments"
        name="jsonplaceholder"
        value="comments"
        v-model="radioCheck"
    />
    <label for="comments">Get Comments</label><br />

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
