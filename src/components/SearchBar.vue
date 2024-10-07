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

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 1.2rem 1rem;
  border-radius: 0.75rem;
  width: 100%;
  transition: all 0.3s ease;
  gap: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-bar:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
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
  font-size: 14px;
  color: #2d3748;
  background-color: transparent;
  padding: 0.4rem;
}

input::placeholder {
  color: #a0aec0;
}

input:focus::placeholder {
  color: transparent;
}
</style>
