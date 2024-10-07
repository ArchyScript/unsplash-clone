<template>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <span class="close-icon" @click="closeModal">✖</span> 
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
 
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    }
})
 
const emit = defineEmits(['update:modelValue'])
 
const isModalOpen = ref(false)
 
watch(() => props.modelValue, (newValue) => {
    isModalOpen.value = newValue
})

// Close modal function
const closeModal = () => {
    isModalOpen.value = false 
    emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
}
</style>
