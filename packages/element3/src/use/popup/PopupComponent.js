import { Teleport, ref, Transition } from 'vue'
import { props } from './props'
import { useZindex, useBodyScroll } from './use'

const popupWrapper = {
  render({ $slots }) {
    return <div>{$slots.default ? $slots.default() : null}</div>
  }
}

export default {
  props,
  emits: ['close'],
  setup(props, { emit }) {
    const show = ref(true)

    const zIndex = useZindex()

    useBodyScroll(props)

    const close = () => {
      if (props.closeOnClickModal) {
        show.value = false
        emit('close')
      }
    }
    const popupRef = ref()
    return {
      zIndex,
      show,
      close,
      popupRef
    }
  },
  render({ $props, $attrs, $slots, zIndex, close }) {
    return (
      <Teleport to={this.target}>
        <Transition
          name={$props.transitionClass}
          onAfterLeave={$props.afterLeaveHandler}
          appear
        >
          <popupWrapper
            ref={(v) => {
              this.popupRef = v
            }}
            onClick={close}
            style={{ zIndex }}
            {...$attrs}
            v-show={$props.visiable}
          >
            {$slots.default ? $slots.default() : null}
          </popupWrapper>
        </Transition>
      </Teleport>
    )
  }
}
