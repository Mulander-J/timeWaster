<script setup lang="ts">
const props = defineProps<{
  /**
   * 输入框赋值
   */
  value: string

  /**
   * 错误提示
   */
  errMsg?: string
  /**
   * 输入框类型
   */
  type?: 'text' | 'textarea' | 'password'
  /**
   * 图标尺寸
   */
  iconSize?: number
  /**
   * 提示语
   */
  placeholder?: string
  /**
   * 最大字数限制
   * @default 0:空
   */
  maxlength?: number
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 前缀图标-svg名
   */
  prefix?: string
  /**
   * 后缀图标-svg名
   */
  suffix?: string

  height?: string

  format?: any
}>()

const emit = defineEmits(['update:value', 'update:errMsg', 'on-enter'])

const input = ref<any>(null)
const { focused } = useFocus(input)

const state = reactive({
  value: ''
})

const changeInput = () => {
  emit('update:errMsg', '')
  const val = props.format ? props.format(state.value) : state.value
  state.value = val
  emit('update:value', val)
}

watch(
  () => props.value,
  (val) => {
    state.value = val
  },
  { immediate: true }
)
</script>

<template>
  <div class="input-outer">
    <div
      class="hq-input"
      :style="{ height: height || 'auto' }"
      :class="[focused && 'input__focus', disabled && 'input__disabled']"
    >
      <div class="input-inner">
        <slot name="prefix"/>
        <input
          ref="input"
          v-model="state.value"
          :placeholder="placeholder"
          :maxlength="props.maxlength || ''"
          :disabled="disabled"
          :type="type"
          @input="changeInput"
          @keyup.enter.native="$emit('on-enter')"
        />
        <slot name="suffix" />
      </div>
      <slot v-if="$slots.append" name="append"></slot>
    </div>

    <Transition name="show" mode="out-in">
      <div class="error-tip" v-if="errMsg">{{ errMsg }}</div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.input-outer {
  .hq-input {
    @apply flex items-center justify-start border-[#DDE0EE] border-1px rounded-4px overflow-hidden;
    background: rgba(255,255,255,.2);
    transition: all 0.38s ease;
    &:hover {
      @apply border-white;
    }
    .input-inner {
      @apply h-full prose prose-neutral border-box 
        grow flex items-center justify-start
        py-8px px-8px gap-x-8px md:(px-12px gap-x-12px);
      input {
        @apply h-full w-full font-400 outline-none bg-transparent;
      }
      input::placeholder {
        @apply prose prose-slate select-none;
      }
    }
  }
  .input__focus {
    @apply border-white;
  }
  .input__disabled {
    border-color: #dde0ee;
    background: #f7f9fc;
    &:hover {
      border-color: #dde0ee;
    }
  }
  .error-tip {
    color: #dde0ee;
    margin: 8px 0 0 16px;
    overflow-wrap: break-word;
  }
}
</style>
