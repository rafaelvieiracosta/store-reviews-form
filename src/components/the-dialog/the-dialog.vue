<template>
  <transition name="transition-dialog-wrapper" @after-enter="afterEnterWrapper">
    <div v-if="showDialog" class="dialog-wrapper" @click.self="closeDialog">
      <transition name="transition-dialog" @after-leave="afterLeaveWrapper">
        <slot v-if="showDialogWrapper" class="dialog" name="content" :closeDialog="closeDialog" />
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  showDialog: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:showDialog'])

const showDialogWrapper = ref(false)

function closeDialog() {
  showDialogWrapper.value = false
}
function afterEnterWrapper() {
  showDialogWrapper.value = true
}
function afterLeaveWrapper() {
  emit('update:showDialog', false)
}
</script>

<style scoped>
.dialog-wrapper {
  align-items: center;
  justify-content: center;
  background: #00000038;
  display: flex;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
  padding: 16px;
}

/* ANIMAÇÕES */
.transition-dialog-wrapper-enter-active,
.transition-dialog-wrapper-leave-active {
  transition: opacity 0.1s;
}
.transition-dialog-wrapper-enter-from,
.transition-dialog-wrapper-leave-to {
  opacity: 0;
}
.transition-dialog-wrapper-enter-to,
.transition-dialog-wrapper-leave-from {
  opacity: 1;
}

.transition-dialog-enter-from,
.transition-dialog-leave-to {
  opacity: 0;
  transform: translate3d(0, -10px, 0);
}
.transition-dialog-enter-to,
.transition-dialog-leave-from {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.transition-dialog-enter-active,
.transition-dialog-leave-active {
  transition: 200ms;
}
</style>
