<script setup lang="ts">
import { ref, onMounted } from "vue"
import { searchPhotos } from '@/infrastructures/api';
import type { Photo, PhotoData, SearchQueryParams } from '@/types'

const photos = ref<Photo[]>([]);
const isLoading = ref<boolean>(true);

const queryParams = ref<SearchQueryParams>({
  query: 'African',
})

const fetchPhotos = async () => {
  try {
    const response: PhotoData = await searchPhotos(queryParams.value);
    if (!response) return
    photos.value = response.results
  } finally {
    isLoading.value = false;
  }
};

// Fetch photos on component mount
onMounted(() => {
  fetchPhotos();
});
</script>

<template>
  <div class="home-page">
    <!-- header -->
    <header> Photos </header>
    <div class="header-bg"></div>

    <div v-if="isLoading">
      <div class="loading-grid">
        <div v-for="n in 12" :key="n" class="loading-card">
          <div :class="['loading-image', `height-${n % 5 + 1}`]"></div>
          <div class="loading-content">
            <div class="loading-line w-3/4 mb-2"></div>
            <div class="loading-line w-1/2"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="image-grid">
        <div v-for="photo in photos" :key="photo.id">
          <div class="image-card">
            <img :src="photo.urls.regular" :alt="photo.description" class="image-card__image" />



            <div class="image-card__author">
              <img :src="photo.user.profile_image.small" alt="Author profile image" class="author__image" />
              <div class="author__details">
                <p class="author__name">{{ photo.user.name }}</p>
                <p class="author__location">{{ photo.user.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: #DDE3EA;
}

.image-grid {
  column-count: 2;
  column-gap: 16px;
}

.image-card {
  position: relative;
  display: inline-block;
  /* Ensures the cards remain inline and are wrapped in columns */
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  width: 100%;
  overflow: hidden;
}

.image-card__image {
  width: 100%;
  height: auto;
}

.image-card__content {
  padding: 16px;
}

.image-card__author {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
}

.author__image {
  border-radius: 50%;
  margin-right: 8px;
}

.image-card__footer {
  padding: 8px 16px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1024px) {
  .image-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .image-grid {
    column-count: 1;
  }
}

/* LOADING  */
/* Grid layout for loading cards */
.loading-grid {
  column-count: 3;
  gap: 16px;
}

/* Loading card styling */
.loading-card {
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

/* Image placeholders with variable heights */
.loading-image {
  background-color: #e0e0e0;
  animation: shimmer 1.5s infinite;
  background-image: linear-gradient(to right,
      #e0e0e0 0%,
      #f2f2f2 50%,
      #e0e0e0 100%);
  background-size: 200% 100%;
  border-radius: 8px;
  width: 100%;
}

/* Two different sizes for staggered effect */
.height-1 {
  height: 220px;
}

.height-2 {
  height: 260px;
}

.height-3 {
  height: 300px;
}

.height-4 {
  height: 320px;
}

.height-5 {
  height: 360px;
}

/* Content section inside the card */
.loading-content {
  padding: 16px;
}

/* Simulate text lines with different widths */
.loading-line {
  height: 20px;
  background-color: #e0e0e0;
  animation: shimmer 1.5s infinite;
  background-image: linear-gradient(to right,
      #e0e0e0 0%,
      #f2f2f2 50%,
      #e0e0e0 100%);
  background-size: 200% 100%;
  border-radius: 4px;
}

/* Different widths for the text lines */
.line-large {
  width: 75%;
  margin-bottom: 10px;
}

.line-medium {
  width: 50%;
}

/* Shimmer animation */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

@media (max-width: 480px) {
  .image-grid {
    column-count: 1;
    column-gap: 8px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .image-grid {
    column-count: 2;
    column-gap: 12px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .image-grid {
    column-count: 2;
    column-gap: 16px;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .image-grid {
    column-count: 3;
    column-gap: 20px;
  }
}

@media (min-width: 1441px) {
  .image-grid {
    column-count: 3;
    column-gap: 24px;
  }
}
</style>
