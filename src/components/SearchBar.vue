<script setup lang="ts">
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
      <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
    </span>

<Icon name="search" />
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
