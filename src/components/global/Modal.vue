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
                <!-- <div class="close-icon" @click="closeModal">
                    <CloseIcon />
                </div> -->

                <div class="modal-body">
                    <slot />
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
$modal-background: rgba(137, 137, 137, 0.5);
$close-icon-background: rgba(255, 255, 255, 0.3);
$close-icon-hover-background: rgba(255, 255, 255, 0.5);

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: $modal-background;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: auto;
    transition: background-color 0.3s ease;
}

.modal-content {
    border-radius: 12px;
    margin: auto;
    position: relative;

    @media (max-width: 481px) {
        border-radius: 6px;
        width: 95%;
    }

    @media (min-width: 481px) and (max-width: 768px) {
        border-radius: 8px;
        width: 90%;
    }
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


    &:hover {
        background-color: $close-icon-hover-background;
    }
}

.modal-body {
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    padding: 20px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
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
