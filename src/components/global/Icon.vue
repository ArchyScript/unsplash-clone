<script lang="ts" setup>
import { ref, watchEffect, onMounted } from 'vue'
import type { IconType } from '@/types'

// Define the props for the component
interface Props {
  name: IconType
  filled?: boolean
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  filled: true,
  size: 24
})

const hasStroke = ref(false)
const icon = ref<string>('')

// Fetch the SVG icon dynamically
const fetchIcon = async () => {
  try {
    const iconsImport = import.meta.glob('@/assets/icons/**/*.svg', {
      eager: false,
      query: '?raw',
      import: 'default'
    })

    const iconPath = `/src/assets/icons/${props.name}.svg`

    if (!iconsImport[iconPath]) {
      throw new Error(`Icon "${props.name}" not found`)
    }

    const rawIcon = await iconsImport[iconPath]()
    const iconSvgContent = rawIcon as string
 
    hasStroke.value = iconSvgContent.includes('stroke')
    icon.value = iconSvgContent
  } catch (error) { 
    throw new Error(`Icon "${props.name}" not found`)
  }
}
 
onMounted(() => fetchIcon()) 
watchEffect(() => fetchIcon())
</script>

<template> 
  <span class="base-icon" :class="{ 'icon--fill': filled, 'icon--stroke': hasStroke && !filled }" v-html="icon"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }" />
</template>

<style scoped> 
.base-icon {
  line-height: 0;
}
 
.base-icon.icon--fill,
.base-icon.icon--fill * {
  fill: currentColor !important;
}
 
.base-icon.icon--stroke,
.base-icon.icon--stroke * {
  stroke: currentColor !important;
}
</style>
