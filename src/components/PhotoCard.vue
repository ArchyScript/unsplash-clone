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
    background: white;
    border-radius: 10px;
    margin-bottom: 16px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /*
box-shadow: -3px 0px 36px 6px rgba(210, 216, 229, 0.77);
    -webkit-box-shadow: -3px 0px 36px 6px rgba(210, 216, 229, 0.77);
    -moz-box-shadow: -3px 0px 36px 6px rgba(210, 216, 229, 0.77); 
    */
}

.image-card__image {
    width: 100%;
    border-radius: 10px;
    height: 100%;
}

.card-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    margin: 0;
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
