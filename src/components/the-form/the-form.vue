<template>
  <form-root @submit.prevent="showDialog = !showDialog">
    <form-question>
      <form-question-title> Como foi sua experiência de compra conosco? </form-question-title>

      <form-question-description>
        Por favor, selecione um emoji e compartilhe seus pensamentos conosco abaixo.
      </form-question-description>

      <transition name="fast-fade" mode="out-in">
        <component :is="is" />
      </transition>
    </form-question>

    <form-question>
      <form-question-title>
        Como podemos tornar sua próxima experiência ainda melhor?
      </form-question-title>

      <form-question-description>
        Sinta-se à vontade para compartilhar qualquer ideia ou preocupação abaixo.
      </form-question-description>

      <form-textarea placeholder="Digite sua crítica ou sugestão" />
    </form-question>

    <form-button>Enviar</form-button>
  </form-root>

  <the-dialog :showDialog="showDialog" @update:showDialog="updateShowDialog">
    <template #content="{ closeDialog }">
      <div class="feedback-dialog">
        <button class="feedback-dialog__close" @click="closeDialog">
          <img src="@/assets/images/dialog-close.svg" width="24" height="24" />
        </button>

        <template v-if="activedResponse === 'then'">
          <div class="feedback-dialog-content">
            <img src="@/assets/images/success-dialog-icon.png" width="56" height="56" />

            <div class="feedback-dialog-informations">
              <div class="feedback-dialog__title">Sucesso!</div>
              <div class="feedback-dialog__description">Sua avaliação foi enviado com sucesso.</div>
            </div>
          </div>
        </template>

        <template v-else-if="activedResponse === 'catch'">
          <div class="feedback-dialog-content">
            <img src="@/assets/images/failure-dialog-icon.png" width="56" height="56" />

            <div class="feedback-dialog-informations">
              <div class="feedback-dialog__title">Erro ao enviar</div>
              <div class="feedback-dialog__description">
                Houve um erro ao processar sua avaliação. Por favor, tente novamente.
              </div>
            </div>
          </div>
        </template>

        <button class="feedback-dialog__button" @click="closeDialog">OK</button>
      </div>
    </template>
  </the-dialog>
</template>

<script setup>
import FormButton from './the-form-button.vue'
import FormQuestionDescription from './the-form-question-description.vue'
import FormQuestionTitle from './the-form-question-title.vue'
import FormQuestion from './the-form-question.vue'
import FormRatingList from './the-form-rating-list.vue'
import FormRatingRange from './the-form-rating-range.vue'
import FormRatingRow from './the-form-rating-row.vue'
import FormRoot from './the-form-root.vue'
import FormTextarea from './the-form-textarea.vue'

import TheDialog from '../the-dialog/the-dialog.vue'

import { ref, computed } from 'vue'
import { useSettingStore } from '@/stores/settings'

const store = useSettingStore()

const showDialog = ref(false)

const activedType = computed(() => {
  return store.defType
})
const activedResponse = computed(() => {
  return store.defResponse
})
const is = computed(() => {
  const types = {
    list: FormRatingList,
    row: FormRatingRow,
    range: FormRatingRange
  }

  return types[activedType.value]
})

function updateShowDialog(newValue) {
  showDialog.value = newValue
}
</script>

<style>
/* feedback dialog */
.feedback-dialog {
  background-color: var(--bases-neutral);
  padding: 24px;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  position: relative;
  z-index: 0;
}
.feedback-dialog__close {
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  cursor: pointer;
}
.feedback-dialog-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.feedback-dialog__title {
  font: var(--lg_subtitle);
  color: var(--highlight_color);
}
.feedback-dialog__description {
  font: var(--lg_paragraph);
  color: var(--highlight_color);
}
.feedback-dialog__button {
  display: block;
  margin-top: 16px;
  font: var(--lg_button);
  color: var(--text_color);
  background-color: var(--button_color);
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: 250ms;
}
@media (min-width: 768px) {
  .feedback-dialog {
    max-width: 446px;
  }
  .feedback-dialog-content {
    flex-direction: row;
    align-items: center;
  }
  .feedback-dialog__button {
    max-width: 130px;
    margin-left: auto;
  }
  .feedback-dialog__button:hover {
    background-color: var(--button_color_hover);
  }
}
</style>
