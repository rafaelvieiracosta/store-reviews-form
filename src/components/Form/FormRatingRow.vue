<template>
  <ul class="ul">
    <li>
      <input type="radio" id="row-option-1" class="input" value="1" v-model="rating" />
      <label for="row-option-1" class="label">
        <img src="@/assets/emojis/pouting-face.png" width="32" height="32" />
        <span class="label-popover left">Terrível</span>
      </label>
    </li>
    <li>
      <input type="radio" id="row-option-2" class="input" value="2" v-model="rating" />
      <label for="row-option-2" class="label">
        <img src="@/assets/emojis/confused-face.png" width="32" height="32" />
        <span class="label-popover left">Ruim</span>
      </label>
    </li>
    <li>
      <input type="radio" id="row-option-3" class="input" value="3" v-model="rating" />
      <label for="row-option-3" class="label">
        <img src="@/assets/emojis/neutral-face.png" width="32" height="32" />
        <span class="label-popover center">Não muito boa</span>
      </label>
    </li>
    <li>
      <input type="radio" id="row-option-4" class="input" value="4" v-model="rating" />
      <label for="row-option-4" class="label">
        <img src="@/assets/emojis/smiling-face-with-smiling-eyes.png" width="32" height="32" />
        <span class="label-popover right">Bem legal</span>
      </label>
    </li>
    <li>
      <input type="radio" id="row-option-5" class="input" value="5" v-model="rating" />
      <label for="row-option-5" class="label">
        <img src="@/assets/emojis/grinning-face-with-smiling-eyes.png" width="32" height="32" />
        <span class="label-popover right">Experiência incrível</span>
      </label>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const rating = ref(5)
</script>

<style scoped>
.ul {
  margin-top: 16px;
  display: flex;
  gap: 6px;
  padding-bottom: 38px;
  max-width: fit-content;
}
.label {
  position: relative;
  z-index: 0;
  display: block;
  padding: 9px;
  border: 1px solid transparent;
  transition: 250ms;
  border-radius: 50%;
  cursor: pointer;
}
.label-popover {
  opacity: 0;
  position: absolute;
  top: calc(100% + 8px);
  display: block;
  white-space: nowrap;
  padding: 4px 8px;
  background-color: var(--background_color);
  font: var(--lg_paragraph);
  color: var(--highlight_color);
  border-radius: 30px;
  transition: 250ms;
}
.label-popover::before {
  content: '';
  display: block;
  top: -5px;
  position: absolute;
  width: 12px;
  height: 5px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='5' viewBox='0 0 12 5' fill='none'%3E%3Cpath d='M6 0L12 5H0L6 0Z' fill='%23F2F2F2'/%3E%3C/svg%3E%0A");
}
.label-popover.left {
  left: 3px;
}
.label-popover.left::before {
  left: 16px;
}
.label-popover.right {
  right: 3px;
}
.label-popover.right::before {
  right: 16px;
}
.label-popover.center {
  left: 50%;
  transform: translateX(-50%);
}
.label-popover.center::before {
  left: 50%;
  transform: translateX(-50%);
}
.input {
  display: none;
}
input:checked ~ .label {
  background-color: var(--background_color);
  border-color: var(--border_active);
}
input:checked ~ .label .label-popover {
  opacity: 1;
}
@media (min-width: 1024px) {
  input:not(:checked) ~ .label:hover {
    border-color: var(--border);
    box-shadow: var(--shadow);
  }
}
</style>
