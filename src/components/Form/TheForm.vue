<template>
  <FormRoot>
    <FormQuestion>
      <FormQuestionTitle> Como foi sua experiência de compra conosco? </FormQuestionTitle>
      <FormQuestionDescription>
        Por favor, selecione um emoji e compartilhe seus pensamentos conosco abaixo.
      </FormQuestionDescription>

      <Transition mode="out-in">
        <component :is="is" />
      </Transition>
    </FormQuestion>

    <FormQuestion>
      <FormQuestionTitle>
        Como podemos tornar sua próxima experiência ainda melhor?
      </FormQuestionTitle>
      <FormQuestionDescription>
        Sinta-se à vontade para compartilhar qualquer ideia ou preocupação abaixo.
      </FormQuestionDescription>
      <FormTextarea placeholder="Digite sua crítica ou sugestão" />
    </FormQuestion>

    <FormButton>Enviar</FormButton>
  </FormRoot>
</template>

<script setup>
import FormRoot from './FormRoot.vue'
import FormQuestion from './FormQuestion.vue'
import FormQuestionTitle from './FormQuestionTitle.vue'
import FormQuestionDescription from './FormQuestionDescription.vue'
import FormTextarea from './FormTextarea.vue'
import FormButton from './FormButton.vue'

import FormRatingRow from './FormRatingRow.vue'
import FormRatingList from './FormRatingList.vue'
import FormRatingRange from './FormRatingRange.vue'

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

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
