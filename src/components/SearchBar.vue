<template>
    <div class="w-full bg-gray-100 p-4">
        <input type="text" placeholder="Search for photo" v-model="searchQuery" @keyup.enter="onSearch"
            class="w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
const emit = defineEmits(['search']);

const onSearch = () => {
    emit('search', searchQuery.value);
};
</script>

<style scoped></style>
