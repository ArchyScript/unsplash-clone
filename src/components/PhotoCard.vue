<template>
    <div class="image-card" @click="handleSelect">
        <img :src="photo.urls.regular" :alt="photo.description" class="image-card__image" />

        <div class="image-card__author">
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
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.image-card__image {
    width: 100%;
    height: auto;
}

.image-card__author {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    align-items: end;
    height: 100%;
    width: 100%;

}

.author__name {
    font-size: 1rem;
    font-weight: semibold;
    margin-bottom: 2px;
}

.author__location {
    font-size: 12px;
    font-weight: normal;
}
</style>
