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

<style scoped>
.loading-grid {
    column-count: 3;
    gap: 16px;
}

.loading-card {
    background-color: #f6f6f6;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

.loading-image {
    background-color: #e0e0e0;
    border-radius: 8px 8px 0 0;
    width: 100%;
    background: linear-gradient(to right,
            #e0e0e0 0%,
            #f6f6f6 50%,
            #e0e0e0 100%);
    background-size: 200% 100%;
    animation: loading-shimmer 1.5s infinite linear;
}

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
    background: linear-gradient(to left,
            #e0e0e0 0%,
            #f6f6f6 50%,
            #e0e0e0 100%);
    background-size: 200% 100%;
    animation: loading-shimmer 1.5s infinite linear;
}

.loading-line {
    height: 20px;
    background: linear-gradient(to left,
            #e0e0e0 0%,
            #f6f6f6 50%,
            #e0e0e0 100%);
    background-size: 200% 100%;
    animation: loading-shimmer 1.5s infinite linear;
    border-radius: 4px;

}

.loading-line.name {
    width: 75%;
    margin-bottom: 10px;
}

.loading-line.desc {
    width: 50%;
}

@keyframes loading-shimmer {
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
}
</style>
