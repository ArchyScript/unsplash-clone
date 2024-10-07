<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import { CloseIcon } from '@/components/global/icons'

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

const closeModal = () => {
    isModalOpen.value = false
    emit('update:modelValue', false)
}
</script>

<template>
    <transition name="fade">
        <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <div class="close-icon" @click="closeModal">
                    <CloseIcon />
                </div>

                <!--  -->
                <div class="modal-body">
                    <slot />
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #89898950;
    display: flex;
    z-index: 1000;
    overflow: auto;
}

.modal-content {
    border-radius: 12px;
    margin: auto;
    position: relative;
}

.close-icon {
    position: absolute;
    top: -2rem;
    right: -3rem;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    padding: 0.5rem;
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.close-icon:hover {
    background-color: rgba(255, 255, 255, 0.5);
}

.modal-body {
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    padding: 20px;
}

.modal-body::-webkit-scrollbar {
    display: none;
}

.modal-body {
    scrollbar-width: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
