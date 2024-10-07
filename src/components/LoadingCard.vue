<template>
    <div class="loading-grid">
        <div v-for="n in 12" :key="n" class="loading-card">
            <div :class="['loading-image', `height-${n % 6 + 1}`]"></div>

            <div class="loading-content">
                <div class="loading-line name w-3/4  "></div>
                <div class="loading-line desc w-1/2"></div>
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

<style scoped lang="scss">
$primary-color: #f6f6f6;
$shimmer-color: #e0e0e0;
$border-radius: 8px;
$transition-time: 0.3s;

// Grid Layout
.loading-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    @media (max-width: 480px) {
        gap: 8px;
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        gap: 12px;
    }

    @media (min-width: 1025px) {
        gap: 16px;
    }
}

.loading-card {
    background-color: $primary-color;
    border-radius: $border-radius;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: background-color $transition-time ease-in-out;
    margin-bottom: 16px;

    &:hover {
        background-color: $primary-color;
    }
}

// Shimmer Effect
.loading-image,
.loading-line {
    background: linear-gradient(to right,
            $shimmer-color 0%,
            $primary-color 50%,
            $shimmer-color 100%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite linear;
    transition: background-position $transition-time;

    border-radius: 8px;

    // Height Variations
    &.height-1 {
        height: 220px;
    }

    &.height-2 {
        height: 260px;
    }

    &.height-3 {
        height: 300px;
    }

    &.height-4 {
        height: 320px;
    }

    &.height-5 {
        height: 360px;
    }

    &.height-6 {
        height: 400px;
    }
}

// Loading content
.loading-content {
    padding: 16px;
}

.loading-line {
    height: 20px;
    margin-bottom: 10px;
    border-radius: 4px;

    &.name {
        width: 75%;
    }

    &.desc {
        width: 50%;
    }
}

// Keyframes for shimmer effect
@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
}
</style>
