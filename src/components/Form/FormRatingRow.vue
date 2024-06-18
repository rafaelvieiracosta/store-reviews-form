<template>
  <ul class="rating-row">
    <li>
      <input type="radio" id="row-option-1" class="rating-row__input" value="1" v-model="rating" />
      <label for="row-option-1" class="rating-row__label">
        <img src="@/assets/emojis/pouting-face.png" width="32" height="32" />
        <span class="rating-row__label__popover left">Terrível</span>
      </label>
    </li>
    <li>
      <input type="radio" id="row-option-2" class="rating-row__input" value="2" v-model="rating" />
      <label for="row-option-2" class="rating-row__label">
        <img src="@/assets/emojis/confused-face.png" width="32" height="32" />
        <span class="rating-row__label__popover left">Ruim</span>
      </label>
    </li>
    <li>
      <input type="radio" id="row-option-3" class="rating-row__input" value="3" v-model="rating" />
      <label for="row-option-3" class="rating-row__label">
        <img src="@/assets/emojis/neutral-face.png" width="32" height="32" />
        <span class="rating-row__label__popover center">Não muito boa</span>
      </label>
    </li>
    <li>
      <input type="radio" id="row-option-4" class="rating-row__input" value="4" v-model="rating" />
      <label for="row-option-4" class="rating-row__label">
        <img src="@/assets/emojis/smiling-face-with-smiling-eyes.png" width="32" height="32" />
        <span class="rating-row__label__popover right">Bem legal</span>
      </label>
    </li>
    <li>
      <input type="radio" id="row-option-5" class="rating-row__input" value="5" v-model="rating" />
      <label for="row-option-5" class="rating-row__label">
        <img src="@/assets/emojis/grinning-face-with-smiling-eyes.png" width="32" height="32" />
        <span class="rating-row__label__popover right">Experiência incrível</span>
      </label>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const rating = ref(5)
</script>

<style scoped>
.rating-row {
  margin-top: 16px;
  display: flex;
  gap: 6px;
  padding-bottom: 38px;
  max-width: fit-content;
}
.rating-row__label {
  position: relative;
  z-index: 0;
  display: block;
  padding: 9px;
  border: 1px solid transparent;
  transition: 250ms;
  border-radius: 50%;
  cursor: pointer;
}
.rating-row__input {
  display: none;
}

/* type row: mensagem */
.rating-row__label__popover {
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
.rating-row__label__popover::before {
  content: '';
  display: block;
  top: -5px;
  position: absolute;
  width: 12px;
  height: 5px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='5' viewBox='0 0 12 5' fill='none'%3E%3Cpath d='M6 0L12 5H0L6 0Z' fill='%23F2F2F2'/%3E%3C/svg%3E%0A");
}
.rating-row__label__popover.left {
  left: 3px;
}
.rating-row__label__popover.left::before {
  left: 16px;
}
.rating-row__label__popover.right {
  right: 3px;
}
.rating-row__label__popover.right::before {
  right: 16px;
}
.rating-row__label__popover.center {
  left: 50%;
  transform: translateX(-50%);
}
.rating-row__label__popover.center::before {
  left: 50%;
  transform: translateX(-50%);
}

/* type row: itens selecionados */
.rating-row__input:checked ~ .rating-row__label {
  background-color: var(--background_color);
  border-color: var(--border_active);
}
.rating-row__input:checked ~ .rating-row__label .rating-row__label__popover {
  opacity: 1;
}
@media (min-width: 1024px) {
  .rating-row__input:not(:checked) ~ .rating-row__label:hover {
    border-color: var(--border);
    box-shadow: var(--shadow);
  }
}
</style>
