import Vue from 'vue'

// 自动加载 components 目录下的 .vue 结尾的文件
const context = require.context('./', true, /\.vue/)

context.keys().forEach(component => {
    const componentConfig = context(component)
    /**
     * 兼容 import export 和 require module.export 两种规范
     */
    const ctrl = componentConfig.default || componentConfig
    Vue.component(ctrl.name, ctrl)
})
