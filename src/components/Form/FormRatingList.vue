<template>
  <ul class="rating-list">
    <li>
      <input
        type="radio"
        id="list-option-5"
        class="rating-list__input"
        value="5"
        v-model="rating"
      />
      <label for="list-option-5" class="rating-list__label">
        <img src="@/assets/emojis/grinning-face-with-smiling-eyes.png" width="21" height="21" />
        Excelente
      </label>
    </li>
    <li>
      <input
        type="radio"
        id="list-option-4"
        class="rating-list__input"
        value="4"
        v-model="rating"
      />
      <label for="list-option-4" class="rating-list__label">
        <img src="@/assets/emojis/smiling-face-with-smiling-eyes.png" width="21" height="21" />
        Positiva
      </label>
    </li>
    <li>
      <input
        type="radio"
        id="list-option-3"
        class="rating-list__input"
        value="3"
        v-model="rating"
      />
      <label for="list-option-3" class="rating-list__label">
        <img src="@/assets/emojis/neutral-face.png" width="21" height="21" />
        Neutra
      </label>
    </li>
    <li>
      <input
        type="radio"
        id="list-option-2"
        class="rating-list__input"
        value="2"
        v-model="rating"
      />
      <label for="list-option-2" class="rating-list__label">
        <img src="@/assets/emojis/confused-face.png" width="21" height="21" />
        Insatisfatória
      </label>
    </li>
    <li>
      <input
        type="radio"
        id="list-option-1"
        class="rating-list__input"
        value="1"
        v-model="rating"
      />
      <label for="list-option-1" class="rating-list__label">
        <img src="@/assets/emojis/pouting-face.png" width="21" height="21" />
        Ruim
      </label>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const rating = ref(5)
</script>

<style scoped>
.rating-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 16px;
}
.rating-list__label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 14px;
  background-color: var(--bases-neutral);
  border: 1px solid var(--border);
  border-radius: 8px;
  font: var(--sm_paragraph);
  color: var(--highlight_color);
  transition: 250ms;
  cursor: pointer;
}
.rating-list__input {
  display: none;
}
@media (min-width: 768px) {
  .rating-list {
    max-width: 400px;
  }
  .rating-list__label {
    font: var(--lg_paragraph);
  }
}

/* type list: itens selecionados */
.rating-list__input:checked ~ .rating-list__label {
  background-color: var(--background_color);
  border-color: var(--border_active);
}
@media (min-width: 1024px) {
  .rating-list__input:not(:checked) ~ .rating-list__label:hover {
    box-shadow: var(--shadow);
  }
}
</style>
