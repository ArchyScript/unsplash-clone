<template>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <span class="close-icon" @click="closeModal">✖</span>
            <!-- Slot for dynamic content passed from the parent -->
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'

// Props to control the modal visibility from parent
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    }
})

// Emit function to communicate with the parent component
const emit = defineEmits(['update:modelValue'])

// Internal modal open state
const isModalOpen = ref(false)

// Watch for prop changes from the parent
watch(() => props.modelValue, (newValue) => {
    isModalOpen.value = newValue
})

// Close modal function
const closeModal = () => {
    isModalOpen.value = false
    // Emit event to parent to update the modal state
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
