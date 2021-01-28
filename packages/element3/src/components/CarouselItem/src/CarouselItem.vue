<template>
  <div v-show="ready" class="el-carousel__item"></div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

import { props } from './props'

export default defineComponent({
  props,
  setup() {
    const state = reactive({
      ready: false
    })

    const { ready } = toRefs(state)

    const translateItem = () => (state.ready = true)

    return {
      ready,
      translateItem
    }
  }
})
</script>
