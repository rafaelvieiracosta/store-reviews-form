<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup></script>

<style scoped>
.button {
  margin-top: var(--sm_divider_space);
  width: 100%;
  padding: 10px;
  background-color: var(--button_color);
  transition: 250ms;
  border: none;
  text-transform: uppercase;
  color: var(--text_color);
  font: var(--sm_button);
  border-radius: 8px;
  cursor: pointer;
}
@media (min-width: 768px) {
  .button {
    margin-top: var(--lg_divider_space);
    max-width: 200px;
    font: var(--lg_button);
  }
}
@media (min-width: 1024px) {
  .button:hover {
    background-color: var(--button_color_hover);
  }
}
</style>
