<template>
    <div class="image-card" @click="handleSelect">
        <img :src="photo.urls.regular" :alt="photo.description" class="image-card__image" />

        <div class="card-container">
            <div class="author__details">
                <p class="author__name">{{ photo.user.name }}</p>
                <p class="author__location">{{ photo.user.location }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Photo } from '@/types'

const props = defineProps({
    photo: {
        type: Object as () => Photo,
        required: true,
    },
})
const emit = defineEmits(['selected'])
const handleSelect = () => emit('selected', props.photo) 
</script>

<style scoped>
.image-card {
    position: relative;
    display: inline-block;
    border-radius: 10px;
    margin-bottom: 16px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.image-card__image {
    width: 100%;
    border-radius: 10px;
    height: 100%;
}

.card-container {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 2rem;
    margin: 0;
    color: white;
    display: flex;
    align-items: end;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.card-container:hover {
    background: rgba(0, 0, 0, 0.5);
}

.author__name {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 2px;
}

.author__location {
    font-size: 14px;
    font-weight: normal;
}
</style>
