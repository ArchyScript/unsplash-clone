<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps({
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
    <div @click="emit('back')" class="back-icon" v-show="!isSearching">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" stroke="#2B3B5E">
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
      </svg>
    </div>

    <p> {{ isSearching ? 'Searching for' : 'Search Results for' }} <span> ❝{{ title }}❞ </span> </p>
  </div>
</template>

<style scoped>
.search-title-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.search-title-container p {
  color: #2B3B5E;
  font-size: 2.5rem;
  font-weight: 500;
}

.search-title-container span {
  color: #747D93;
  font-size: 2.5rem;
  font-weight: 500;
}

.back-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -.2rem;
  border: 1px solid #2B3B5E;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
}
</style>
