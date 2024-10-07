<script setup lang="ts">
import { LeftArrowIcon } from '@/components/global/icons'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isSearching: {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits(['back'])
</script>

<template>
  <div class="search-title-container">
    <span @click="emit('back')" class="back-icon" v-show="!isSearching">
      <LeftArrowIcon />
    </span>
    <p>
      {{ isSearching ? 'Searching for' : 'Search Results for' }}
      <span> ❝{{ title }}❞ </span>
    </p>
  </div>
</template>

<style scoped lang="scss">
$primary-color: #2B3B5E;
$secondary-color: #747D93;
$font-size-title: 2.5rem;
$font-size-medium: 1.5rem;
$font-weight-normal: 500;
$back-icon-size: 2.5rem;

.search-title-container {
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  p {
    color: $primary-color;
    font-size: $font-size-title;
    font-weight: $font-weight-normal;

    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 768px) {
      font-size: $font-size-medium;
    }

    span {
      color: $secondary-color;
      font-weight: $font-weight-normal;
    }
  }
}

.back-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -0.2rem;
  border: 1px solid $primary-color;
  border-radius: 50%;
  height: $back-icon-size;
  width: $back-icon-size;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
}
</style>
