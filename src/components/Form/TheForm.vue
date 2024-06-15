<template>
  <FormRoot>
    <FormQuestion>
      <FormQuestionTitle> Como foi sua experiência de compra conosco? </FormQuestionTitle>
      <FormQuestionDescription>
        Por favor, selecione um emoji e compartilhe seus pensamentos conosco abaixo.
      </FormQuestionDescription>
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
</script>
