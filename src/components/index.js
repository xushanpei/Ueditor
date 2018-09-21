/*
 自定义组件
 */
import ueditor from '@/components/ueditor.vue'

const components = [
  ueditor
]

export default {
  install(Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}
