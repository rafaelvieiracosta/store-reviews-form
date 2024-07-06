<template>
  <div class="rating-rage">
    <div class="rating-rage__image-and-range">
      <img :src="getData.image" width="44" height="44" class="rating-rage__image" />

      <input
        ref="range"
        type="range"
        min="1"
        max="100"
        v-model="inputModel"
        class="rating-rage__range"
        @input="updateRangeBackground"
      />
    </div>

    <span class="rating-rage__message">
      {{ getData.message }}
    </span>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useSettingStore } from '@/stores/settings'

const store = useSettingStore()

const inputModel = ref(50)
const range = ref(null)
const feedbacks = [
  {
    min: 80,
    max: 100,
    message: 'Minha experiência foi incrível! Tudo correu perfeitamente',
    image: new URL('@/assets/emojis/grinning-face-with-smiling-eyes.png', import.meta.url).href
  },
  {
    min: 60,
    max: 79,
    message: 'Tudo correu muito bem!',
    image: new URL('@/assets/emojis/smiling-face-with-smiling-eyes.png', import.meta.url).href
  },
  {
    min: 40,
    max: 59,
    message: 'Minha experiência foi ok.',
    image: new URL('@/assets/emojis/neutral-face.png', import.meta.url).href
  },
  {
    min: 20,
    max: 39,
    message: 'Tive alguns problemas durante minha compra.',
    image: new URL('@/assets/emojis/confused-face.png', import.meta.url).href
  },
  {
    min: 0,
    max: 19,
    message: 'Minha experiência foi terrível.',
    image: new URL('@/assets/emojis/pouting-face.png', import.meta.url).href
  }
]

const getData = computed(() => {
  const range = inputModel.value
  return feedbacks.find((feedback) => range >= feedback.min && range <= feedback.max)
})
const activedTheme = computed(() => {
  return store.defTheme
})

watch(activedTheme, () => {
  updateRangeBackground()
})

const updateRangeBackground = () => {
  const { value, max, style } = range.value
  const progress = (value / max) * 100

  const rootStyles = getComputedStyle(document.documentElement)
  const colorProgress = rootStyles.getPropertyValue('--highlight_color').trim()
  const colorBackground = rootStyles.getPropertyValue('--background_color').trim()

  style.background = `linear-gradient(to right, ${colorProgress} ${progress}%, ${colorBackground} ${progress}%)`
}
</script>

<style scoped>
.rating-rage {
  margin-top: 16px;
  max-width: 400px;
}
.rating-rage__image-and-range {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* type range: input */
.rating-rage__range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 12px;
  height: 6px;
  background: linear-gradient(to right, var(--highlight_color) 50%, var(--background_color) 50%);
}
.rating-rage__range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  background-color: var(--highlight_color);
  border: 3px solid var(--bases-neutral);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}
.rating-rage__range::-moz-range-thumb {
  height: 14px;
  width: 14px;
  background-color: var(--highlight_color);
  border: 3px solid var(--bases-neutral);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}
.rating-rage__range::-webkit-slider-thumb:hover {
  box-shadow: var(--shadow);
}
.rating-rage__range:active::-webkit-slider-thumb {
  box-shadow: var(--shadow_active);
}
.rating-rage__range::-moz-range-thumb:hover {
  box-shadow: var(--shadow);
}
.rating-rage__range:active::-moz-range-thumb {
  box-shadow: var(--shadow_active);
}

/* type range: message */
.rating-rage__message {
  display: block;
  margin-top: 8px;
  font: var(--lg_paragraph);
  color: var(--highlight_color);
  max-width: 213px;
  min-height: 42px;
}
</style>
