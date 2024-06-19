<template>
  <textarea class="textarea"></textarea>
</template>

<script setup></script>

<style scoped>
.textarea {
  margin-top: 16px;
  resize: none;
  height: 113px;
  width: 100%;
  font: var(--sm_paragraph);
  padding: 10px 14px;
  outline: none;
  border-radius: 8px;
  border: 1px solid var(--border);
  transition: 250ms;
  color: var(--highlight_color);
}
.textarea::placeholder {
  color: var(--border_active);
}
.textarea:focus {
  border-color: var(--border_active);
  box-shadow: var(--shadow);
}
@media (min-width: 768px) {
  .textarea {
    max-width: 400px;
    font: var(--lg_paragraph);
  }
}
@media (min-width: 1024px) {
  .textarea:hover {
    box-shadow: var(--shadow);
  }
}
</style>
