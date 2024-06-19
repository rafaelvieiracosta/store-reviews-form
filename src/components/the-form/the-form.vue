<template>
  <form-root>
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

import { computed } from 'vue'
import { useSettingStore } from '@/stores/settings'

const store = useSettingStore()

const activedType = computed(() => {
  return store.defType
})
const is = computed(() => {
  const types = {
    list: FormRatingList,
    row: FormRatingRow,
    range: FormRatingRange
  }

  return types[activedType.value]
})
</script>
