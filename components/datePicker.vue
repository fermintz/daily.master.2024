<script lang="ts" setup>
import { DatePicker as VDatePicker } from 'v-calendar'
import type { DatePickerDate, DatePickerRangeObject } from 'v-calendar/dist/types/src/components/DatePicker';
import 'v-calendar/dist/style.css'

const props = defineProps({
  modelValue: {
    type: [Date, Object] as PropType<DatePickerDate | DatePickerRangeObject | null>,
    default: null
  }
})

const emit = defineEmits(['update:model-value', 'close'])

const date = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:model-value', value)
    emit('close')
  }
})

const attrs = {
  transparent: true,
  borderless: true,
}

onMounted(()=>{
  console.log()
})
</script>

<template>
  <VDatePicker  v-model.range="date" v-bind="attrs" v-if="date.start" />    
  <VDatePicker  v-model="date" v-bind="attrs" v-else /> 
</template>


<style lang="scss" scoped>

</style>