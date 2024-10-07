<script setup lang="ts">
import { SearchIcon } from '@/components/global/icons'
import { ref, defineEmits } from 'vue'

const searchQuery = ref('')
const emit = defineEmits(['search'])

const onSearch = () => {
  if (!searchQuery.value) return
  emit('search', searchQuery.value)
}
</script>

<template>
  <form class="search-bar" @submit.prevent="onSearch">
    <span class="search-icon">
      <SearchIcon />
    </span>
    <input type="search" v-model="searchQuery" placeholder="Search for photo" />
  </form>
</template>

<style scoped lang="scss">
$search-background: #ffffff;
$search-placeholder-color: #a0aec0;
$search-input-color: #2d3748;
$search-padding: 1.2rem 1rem;
$search-border-radius: 0.75rem;
$search-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
$search-shadow-hover: 0 6px 18px rgba(0, 0, 0, 0.1);
$input-padding: 0.4rem;

.search-bar {
  display: flex;
  align-items: center;
  background-color: $search-background;
  padding: $search-padding;
  border-radius: $search-border-radius;
  width: 100%;
  transition: all 0.3s ease;
  gap: 1rem;
  box-shadow: $search-shadow;

  @media (max-width: 768px) {
    gap: 12px;
  }

  &:hover {
    box-shadow: $search-shadow-hover;
  }
}

.search-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
}

input {
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 1rem;
  color: $search-input-color;
  background-color: transparent;
  padding: $input-padding;


  @media (max-width: 768px) {
    font-size: 14px;
  }

  &::placeholder {
    color: $search-placeholder-color;
  }

  &:focus::placeholder {
    color: transparent;
  }
}
</style>
