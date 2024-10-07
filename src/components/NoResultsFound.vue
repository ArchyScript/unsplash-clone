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

const startFadeOut = () => showMessage.value = false;

const startFadeIn = () => {
    setTimeout(() => {
        showMessage.value = true;
    }, 300);
};

onMounted(() => typeText(originalText));
</script>

<style scoped>
.no-results-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 150px;
    transition: background-color 0.5s ease;
}

.no-results-content { 
    padding: 20px;
    border-radius: 8px; 
    transform: scale(1);
    transition: transform 0.3s ease;
    animation: fadeInOut 1s ease-in-out;
}

.no-results-message {
    font-size: 40px;
    color: #1a202c;
    margin: 0;
}

.no-results-message>span {
    font-weight: 500;
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
    animation: fadeIn 0.5s forwards;
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
