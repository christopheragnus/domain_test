<template>
  <div>
        <CardForm/>
    
  </div>
</template>

<script>
import CardForm from './components/CardForm.vue'
import CardPreview from './components/CardPreview.vue'

export default {
  name: 'app',
  components: {
    CardForm,
    CardPreview
  }
}
</script>

<style>

</style>
