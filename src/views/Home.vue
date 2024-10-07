<script setup lang="ts">
import { ref, onMounted } from "vue"
import { searchPhotos } from '@/infrastructures/api';
import PhotoCard from '@/components/PhotoCard.vue'
import LoadingCard from '@/components/LoadingCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import SearchResultTitle from '@/components/SearchResultTitle.vue'
import NoResultsFound from '@/components/NoResultsFound.vue'
import Modal from '@/components/Modal.vue'

import type { Photo, PhotoData, SearchQueryParams } from '@/types'

const queryParams = ref<SearchQueryParams>({
  query: 'wewsdfrr',
})
const photos = ref<Photo[]>([]);
const showSearchBar = ref(false)
const isSearching = ref(false)
const isModalVisible = ref(false)
const selectedPhoto = ref<Photo>()

const openModal = (photo: Photo) => {
  selectedPhoto.value = photo
  isModalVisible.value = true
}
const handleSearch = async (query: string) => {
  queryParams.value.query = query
  await fetchPhotos()
}

const fetchPhotos = async () => {
  isSearching.value = true
  showSearchBar.value = false
  try {
    const response: PhotoData = await searchPhotos(queryParams.value);
    if (!response) return
    photos.value = response.results
  } finally {
    isSearching.value = false;
  }
};
const handleBack = () => showSearchBar.value = true

onMounted(() =>    fetchPhotos() );
</script>

<template>
  <div class="home-page">
    <div class="header-bg"></div>
    <!-- header -->
    <header>
      <SearchBar v-if="showSearchBar" @search="handleSearch" />
      <SearchResultTitle v-else :title="queryParams.query" :isSearching @back="handleBack" />
    </header>

    <div>
      <LoadingCard v-if="isSearching" :numOfCards="30" />

      <div v-else>
        <div v-if="photos.length" class="photo-grid">
          <PhotoCard v-for="photo in photos" :key="photo.id" :photo @selected="openModal" />
        </div>

        <NoResultsFound v-else :query="queryParams.query" />
      </div>
    </div>

    <Modal v-model="isModalVisible">
      <!-- Passing custom content into the modal via slot -->
      <img :src="selectedPhoto?.urls?.regular" alt="Selected image" class="modal-image" />
    </Modal>
  </div>
</template>

<style scoped>
header {
  padding: 2.5rem 1rem;
}

.header-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: #DDE3EA;
  z-index: -1;
}

.photo-grid {
  column-count: 3;
  column-gap: 16px;
  padding: 0 4rem;
}


@media (max-width: 1024px) {
  .photo-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .photo-grid {
    column-count: 1;
  }
}

/* LOADING  */

.loading-grid {
  column-count: 3;
  gap: 16px;
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
  .photo-grid {
    column-count: 1;
    column-gap: 8px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .photo-grid {
    column-count: 2;
    column-gap: 12px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .photo-grid {
    column-count: 2;
    column-gap: 16px;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .photo-grid {
    column-count: 3;
    column-gap: 20px;
  }
}

@media (min-width: 1441px) {
  .photo-grid {
    column-count: 3;
    column-gap: 24px;
  }
}
</style>
