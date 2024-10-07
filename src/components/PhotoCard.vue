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
import { defineProps, defineEmits } from 'vue';
import type { Photo } from '@/types';

const props = defineProps({
    photo: {
        type: Object as () => Photo,
        required: true,
    },
});

const emit = defineEmits(['selected']);
const handleSelect = () => emit('selected', props.photo);
</script>

<style scoped lang="scss">
$image-border-radius: 10px;
$image-margin-bottom: 16px;
$card-padding: 2rem;
$card-background-color: rgba(0, 0, 0, 0.3);
$card-hover-background-color: rgba(0, 0, 0, 0.5);
$font-size-author: 1rem;
$font-size-location: 14px;
$font-weight-bold: 600;
$font-weight-normal: 400;

.image-card {
    position: relative;
    display: inline-block;
    border-radius: $image-border-radius;
    margin-bottom: $image-margin-bottom;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 16px;


    &__image {
        width: 100%;
        height: 100%;
        border-radius: $image-border-radius;
        object-fit: cover;
    }
}

.card-container {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: $card-padding;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    background: $card-background-color;
    transition: background-color 0.3s ease;

    &:hover {
        background: $card-hover-background-color;
    }
}

.author__details {
    color: white;

    .author__name {
        font-size: $font-size-author;
        font-weight: $font-weight-bold;
        margin-bottom: 2px;
    }

    .author__location {
        font-size: $font-size-location;
        font-weight: $font-weight-normal;
    }
}
</style>
