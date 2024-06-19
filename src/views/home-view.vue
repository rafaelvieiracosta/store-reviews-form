<script setup>
import TheSettings from '../components/the-settings/the-settings.vue'
import TheForm from '../components/the-form/the-form.vue'
</script>

<template>
  <main>
    <div class="grid">
      <the-settings />

      <div>
        <h1>Avaliação da loja</h1>
        <the-form />
      </div>
    </div>
  </main>
</template>

<style>
h1 {
  font: var(--sm_title);
  color: var(--highlight_color);
  text-transform: uppercase;
}
@media (min-width: 768px) {
  h1 {
    font: var(--lg_title);
  }
}

main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
}
.grid {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 100px;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  min-height: 613px;
}
</style>
