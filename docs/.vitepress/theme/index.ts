import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './custom.css'
import mediumZoom from 'medium-zoom'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  setup() {
    const route = useRoute()
    let zoom: ReturnType<typeof mediumZoom> | null = null

    const initZoom = () => {
      zoom?.detach()
      zoom = mediumZoom('.vp-doc img', { background: 'rgba(0, 0, 0, 0.9)' })
    }

    onMounted(initZoom)
    // 路由切换后文章内容会重新渲染，需要重新绑定
    watch(() => route.path, () => nextTick(initZoom))
  },
}
