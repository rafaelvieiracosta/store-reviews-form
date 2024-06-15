<template>
  <h2 class="question__title">
    <slot />
  </h2>
</template>

<style scoped>
.question__title {
  font: var(--sm_subtitle);
  color: var(--highlight_color);
}
@media (min-width: 768px) {
  .question__title {
    font: var(--lg_subtitle);
  }
}
</style>
