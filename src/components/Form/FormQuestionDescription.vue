<template>
  <p class="question__description">
    <slot />
  </p>
</template>

<style scoped>
.question__description {
  margin-top: 4px;
  font: var(--sm_paragraph);
  color: var(--highlight_color);
}
@media (min-width: 768px) {
  .question__description {
    margin-top: 0;
    font: var(--lg_paragraph);
  }
}
</style>
