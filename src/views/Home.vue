<script setup lang="ts">
import { ref, onMounted } from "vue"
import { searchPhotos } from '@/infrastructures/api';
import PhotoCard from '@/components/PhotoCard.vue'
import LoadingCard from '@/components/LoadingCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import SearchResultTitle from '@/components/SearchResultTitle.vue'
import NoResultsFound from '@/components/NoResultsFound.vue'

import type { Photo, PhotoData, SearchQueryParams } from '@/types'

const queryParams = ref<SearchQueryParams>({ query: 'african' })
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

onMounted(() => fetchPhotos()); 
</script>

<template>
  <div class="home-page">
    <div class="header-bg"></div>
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
      <div class="modal-content">
        <img :src="selectedPhoto?.urls?.regular" :alt="selectedPhoto?.description" />
        <div class="author__details">
          <p class="author__name">{{ selectedPhoto?.user.name }}</p>
          <p class="author__location">{{ selectedPhoto?.user.location }}</p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
$primary-color: #DDE3EA;
$header-padding: 2.5rem 1rem;
$photo-grid-padding: 0 4rem;


.home-page {
  header {
    padding: $header-padding;

    @media (max-width: 481px) {
      padding: 2.5rem 0;
    }
  }

  .header-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: $primary-color;
    z-index: -1;
  }

  .photo-grid {
    column-count: 3;
    column-gap: 16px;
    padding: $photo-grid-padding;

    @media (max-width: 768px) {
      column-count: 1;
      padding: 0 0.5rem;
    }


    @media (min-width: 769px) and (max-width: 1024px) {
      column-count: 2;
      padding: 0 2rem;
    }
  }

  .modal-content {
    background-color: #fff;
    height: auto;
    border-radius: 1rem;

    >img {
      border-radius: 1rem 1rem 0 0;
      width: 100%;

      @media (max-width: 768px) {
        border-radius: 0.6rem 0.6rem 0 0;
      }
    }
  }

  .author__details {
    padding: 1.5rem 3rem;

    @media (max-width: 480px) {
      padding: 0.8rem 1rem;
    }

    @media (min-width: 481px) and (max-width: 768px) {
      padding: 1rem 1.5rem;
    }

    .author__name {
      color: #2B3B5E;
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: 1px;

      @media (max-width: 480px) {
        font-size: 1rem;
      }

      @media (min-width: 481px) and (max-width: 1024px) {
        font-size: 1.2rem;
      }
    }

    .author__location {
      font-size: 14px;
      font-weight: 500;
      color: #4b586d;
    }
  }
}
</style>
