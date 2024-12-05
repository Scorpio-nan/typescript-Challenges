import{_ as e,o as h,c as r,d}from"./app-b584e672.js";const i={};function n(t,a){return h(),r("div",null,a[0]||(a[0]=[d('<h1 id="深入浅出vue-js" tabindex="-1"><a class="header-anchor" href="#深入浅出vue-js" aria-hidden="true">#</a> 深入浅出Vue.js</h1><h2 id="vue简介" tabindex="-1"><a class="header-anchor" href="#vue简介" aria-hidden="true">#</a> Vue简介</h2><h2 id="架构设计和项目结构" tabindex="-1"><a class="header-anchor" href="#架构设计和项目结构" aria-hidden="true">#</a> 架构设计和项目结构</h2><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><h3 id="架构设计" tabindex="-1"><a class="header-anchor" href="#架构设计" aria-hidden="true">#</a> 架构设计</h3><h2 id="数据响应式原理" tabindex="-1"><a class="header-anchor" href="#数据响应式原理" aria-hidden="true">#</a> 数据响应式原理</h2><h3 id="object的变化侦测" tabindex="-1"><a class="header-anchor" href="#object的变化侦测" aria-hidden="true">#</a> Object的变化侦测</h3><h3 id="array的变化侦测" tabindex="-1"><a class="header-anchor" href="#array的变化侦测" aria-hidden="true">#</a> Array的变化侦测</h3><h3 id="变化侦测扩展api的实现原理" tabindex="-1"><a class="header-anchor" href="#变化侦测扩展api的实现原理" aria-hidden="true">#</a> 变化侦测扩展API的实现原理</h3><h2 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom" aria-hidden="true">#</a> 虚拟DOM</h2><h3 id="虚拟dom简介" tabindex="-1"><a class="header-anchor" href="#虚拟dom简介" aria-hidden="true">#</a> 虚拟DOM简介</h3><h3 id="vnode介绍" tabindex="-1"><a class="header-anchor" href="#vnode介绍" aria-hidden="true">#</a> VNode介绍</h3><h3 id="patch介绍" tabindex="-1"><a class="header-anchor" href="#patch介绍" aria-hidden="true">#</a> Patch介绍</h3><h2 id="模板编译原理" tabindex="-1"><a class="header-anchor" href="#模板编译原理" aria-hidden="true">#</a> 模板编译原理</h2><h3 id="模板编译" tabindex="-1"><a class="header-anchor" href="#模板编译" aria-hidden="true">#</a> 模板编译</h3><h3 id="解析器" tabindex="-1"><a class="header-anchor" href="#解析器" aria-hidden="true">#</a> 解析器</h3><h3 id="优化器" tabindex="-1"><a class="header-anchor" href="#优化器" aria-hidden="true">#</a> 优化器</h3><h3 id="代码生成器" tabindex="-1"><a class="header-anchor" href="#代码生成器" aria-hidden="true">#</a> 代码生成器</h3><h2 id="实例方法和全局api的实现原理" tabindex="-1"><a class="header-anchor" href="#实例方法和全局api的实现原理" aria-hidden="true">#</a> 实例方法和全局API的实现原理</h2><h3 id="数据相关的实例方法" tabindex="-1"><a class="header-anchor" href="#数据相关的实例方法" aria-hidden="true">#</a> 数据相关的实例方法</h3><h3 id="事件相关的实例方法" tabindex="-1"><a class="header-anchor" href="#事件相关的实例方法" aria-hidden="true">#</a> 事件相关的实例方法</h3><h3 id="生命周期相关的实例方法" tabindex="-1"><a class="header-anchor" href="#生命周期相关的实例方法" aria-hidden="true">#</a> 生命周期相关的实例方法</h3><h3 id="全局api" tabindex="-1"><a class="header-anchor" href="#全局api" aria-hidden="true">#</a> 全局API</h3><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h3 id="生命周期图示" tabindex="-1"><a class="header-anchor" href="#生命周期图示" aria-hidden="true">#</a> 生命周期图示</h3><h3 id="初始化阶段" tabindex="-1"><a class="header-anchor" href="#初始化阶段" aria-hidden="true">#</a> 初始化阶段</h3><h3 id="模板编译阶段" tabindex="-1"><a class="header-anchor" href="#模板编译阶段" aria-hidden="true">#</a> 模板编译阶段</h3><h3 id="挂载阶段" tabindex="-1"><a class="header-anchor" href="#挂载阶段" aria-hidden="true">#</a> 挂载阶段</h3><h3 id="卸载阶段" tabindex="-1"><a class="header-anchor" href="#卸载阶段" aria-hidden="true">#</a> 卸载阶段</h3><h2 id="从源码深入了解初始化实例" tabindex="-1"><a class="header-anchor" href="#从源码深入了解初始化实例" aria-hidden="true">#</a> 从源码深入了解初始化实例</h2><h3 id="初始化实例属性" tabindex="-1"><a class="header-anchor" href="#初始化实例属性" aria-hidden="true">#</a> 初始化实例属性</h3><h3 id="初始化事件" tabindex="-1"><a class="header-anchor" href="#初始化事件" aria-hidden="true">#</a> 初始化事件</h3><h3 id="初始化inject" tabindex="-1"><a class="header-anchor" href="#初始化inject" aria-hidden="true">#</a> 初始化inject</h3><h3 id="初始化状态" tabindex="-1"><a class="header-anchor" href="#初始化状态" aria-hidden="true">#</a> 初始化状态</h3><h3 id="初始化provide" tabindex="-1"><a class="header-anchor" href="#初始化provide" aria-hidden="true">#</a> 初始化provide</h3><h2 id="指令的奥秘" tabindex="-1"><a class="header-anchor" href="#指令的奥秘" aria-hidden="true">#</a> 指令的奥秘</h2><h3 id="指令原理" tabindex="-1"><a class="header-anchor" href="#指令原理" aria-hidden="true">#</a> 指令原理</h3><h3 id="自定义指令原理" tabindex="-1"><a class="header-anchor" href="#自定义指令原理" aria-hidden="true">#</a> 自定义指令原理</h3><h3 id="虚拟dom的钩子函数" tabindex="-1"><a class="header-anchor" href="#虚拟dom的钩子函数" aria-hidden="true">#</a> 虚拟DOM的钩子函数</h3><h2 id="过滤器的奥秘" tabindex="-1"><a class="header-anchor" href="#过滤器的奥秘" aria-hidden="true">#</a> 过滤器的奥秘</h2><h3 id="过滤器的原理" tabindex="-1"><a class="header-anchor" href="#过滤器的原理" aria-hidden="true">#</a> 过滤器的原理</h3><h3 id="解析过滤器" tabindex="-1"><a class="header-anchor" href="#解析过滤器" aria-hidden="true">#</a> 解析过滤器</h3><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="合理使用key" tabindex="-1"><a class="header-anchor" href="#合理使用key" aria-hidden="true">#</a> 合理使用key</h3><h3 id="动态路由组件复用" tabindex="-1"><a class="header-anchor" href="#动态路由组件复用" aria-hidden="true">#</a> 动态路由组件复用</h3><h3 id="路由向下传递query" tabindex="-1"><a class="header-anchor" href="#路由向下传递query" aria-hidden="true">#</a> 路由向下传递query</h3><h3 id="一些需要避免的问题" tabindex="-1"><a class="header-anchor" href="#一些需要避免的问题" aria-hidden="true">#</a> 一些需要避免的问题</h3><h3 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h3>',48)]))}const s=e(i,[["render",n],["__file","vue.html.vue"]]);export{s as default};
