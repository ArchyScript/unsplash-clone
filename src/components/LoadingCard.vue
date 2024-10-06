<template>
    <div class="loading-grid">
        <div v-for="n in 12" :key="n" class="loading-card">
            <div :class="['loading-image', `height-${n % 6 + 1}`]"></div>
            <div class="loading-content">
                <div class="loading-line w-3/4 mb-2"></div>
                <div class="loading-line w-1/2"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    numOfCards: {
        type: Number,
        default: 10,
    },
}) 
</script>

<style scoped>
.loading-grid {
    column-count: 3;
    gap: 16px;
    z-index: 999; 
    top: 0;
    left: 0;
    width: 100%;
}

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

.height-6 {
    height: 400px;
}

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
</style>
