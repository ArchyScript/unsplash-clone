<template>
    <div class="no-results-container" @mouseover="startFadeOut" @mouseleave="startFadeIn">
        <div class="no-results-content">
            <p class="no-results-message">
                <span v-html="animatedText"></span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
    query: {
        type: String,
        required: true,
    },
});

const animatedText = ref('');
const originalText = `No results found for ❝${props.query}❞`;

const showMessage = ref(true);

const typeText = (text: string, delay = 100) => {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            animatedText.value += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
};

const startFadeOut = () => (showMessage.value = false);

const startFadeIn = () => {
    setTimeout(() => {
        showMessage.value = true;
    }, 300);
};

onMounted(() => typeText(originalText));
</script>

<style scoped lang="scss">
$primary-color: #1a202c;
$font-weight-bold: 700;
$font-weight-medium: 500;
$font-size-large: 40px;
$font-size-medium: 30px;
$container-padding: 150px;
$content-padding: 20px;
$border-radius: 8px;
$transition-duration: 0.5s;

.no-results-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: $container-padding;
    transition: background-color $transition-duration ease;

    @media (max-width: 768px) {
        padding: $container-padding 8px;
    }
}

.no-results-content {
    padding: $content-padding;
    border-radius: $border-radius;
    transform: scale(1);
    transition: transform 0.3s ease;
    animation: fadeInOut 1s ease-in-out;


    @media (max-width: 768px) {
        padding: $content-padding 8px;
    }
}

.no-results-message {
    font-size: $font-size-large;
    color: $primary-color;
    margin: 0;

    @media (max-width: 768px) {
        font-size: $font-size-medium;
    }
}

.no-results-message>span {
    font-weight: $font-weight-medium;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.no-results-content {
    animation: fadeIn $transition-duration forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
