<template>
    <div class="image-card">
        <img :src="photo.urls.regular" :alt="photo.alt_description" class="image-card__image" />

        <div class="image-card__content">
            <h2 class="image-card__title">{{ photo.description || 'No description available' }}</h2>
            <p class="image-card__description">{{ photo.alt_description }}</p>
        </div>

        <div class="image-card__author">
            <img :src="photo.user.profile_image.small" alt="Author profile image" class="author__image" />
            <div class="author__details">
                <p class="author__name">{{ photo.user.name }}</p>
                <p class="author__location">{{ photo.user.location }}</p>
            </div>
        </div>

        <div class="image-card__footer">
            <span class="likes">Likes: {{ photo.likes }}</span>
            <a :href="photo.links.html" target="_blank" class="view-link">View on Unsplash</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    photo: {
        type: Object,
        required: true,
    },
})

</script>

<style scoped>
.image-card {
    max-width: 100%;
    color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 20px;
}

.image-card__image {
    width: 100%;
    height: auto;
    display: block;
}

.image-card__content {
    padding: 16px;
}

.image-card__title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

.image-card__description {
    font-size: 14px;
    color: #555;
}

.image-card__author {
    display: flex;
    align-items: center;
    padding: 16px;
}

.author__image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
}

.author__details {
    font-size: 14px;
}

.author__name {
    font-weight: bold;
}

.author__location {
    color: #777;
}

.image-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-top: 1px solid #eee;
}

.likes {
    color: #777;
}

.view-link {
    text-decoration: none;
    color: #007bff;
}

.view-link:hover {
    text-decoration: underline;
}
</style>
