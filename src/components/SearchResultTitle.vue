<script setup lang="ts">
import { LeftArrowIcon } from '@/components/global/icons'
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
    <span @click="emit('back')" class="back-icon" v-show="!isSearching"> 
      <LeftArrowIcon/> 
    </span>

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
