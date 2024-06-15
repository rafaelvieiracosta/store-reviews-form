<template>
  <form class="form">
    <slot />
  </form>
</template>

<script setup></script>

<style scoped>
.form {
  margin-top: var(--sm_divider_space);
}
@media (min-width: 768px) {
  .form {
    margin-top: var(--lg_divider_space);
  }
}
</style>
