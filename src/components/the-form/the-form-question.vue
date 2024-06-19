<template>
  <div class="question">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.question + .question {
  margin-top: var(--sm_divider_space);
}
@media (min-width: 768px) {
  .question + .question {
    margin-top: var(--lg_divider_space);
  }
}
</style>
