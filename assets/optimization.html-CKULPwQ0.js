import{_ as s,c as a,b as e,o as p}from"./app-cBYekBN3.js";const t={};function o(c,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h1><p>尽管<code>Vue2</code>已经足够优秀，但随着前端技术的发展和<code>Vue2</code>所面临的问题越来越多，新版的<code>Vue3</code>不得不做出一些优化、引入新特性，甚至是重构来解决这些问题。</p><p>新版<code>Vue3</code>它所做的优化包含几大方面：<strong>源码优化</strong>、<strong>性能优化</strong>、<strong>语法API优化</strong>以及<strong>引入RFC</strong>。</p><h2 id="源码优化" tabindex="-1"><a class="header-anchor" href="#源码优化"><span>源码优化</span></a></h2><p>源码优化体现在两个方面：<strong>使用Monorepo进行代码管理</strong>以及<strong>使用TypeScript来进行静态类型检查</strong>。</p><p>如果你对<code>Monorepo</code>还不是特别了解，你可以去<a href="/vueNextAnalysis/monorepo/" target="_blank" rel="noopener noreferrer">Monorepo</a>章节去了解更多。</p><h3 id="更好的代码组织方式" tabindex="-1"><a class="header-anchor" href="#更好的代码组织方式"><span>更好的代码组织方式</span></a></h3><p>在<code>Vue3</code>中，代码组织方式采用<code>Monorepo</code>来进行管理，其<code>packages</code>目录如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token operator">|</span>-- packages              </span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- compiler-core</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- compiler-dom</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- compiler-sfc</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- compiler-ssr</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- reactivity</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- ref-transform</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- runtime-core</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- runtime-dom</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- runtime-test</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- server-renderer</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- sfc-playground</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- shared</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- size-check</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- template-explorer</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- vue</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- vue-compat</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span>-- global.d.ts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做的好处有很多：</p><ul><li>将不同的模块拆分成单独的<code>package</code>包，每个包下都有各自的<code>API</code>、类型定义以及代码测试，使每个包职责更加明确，开发人员也更容易阅读。</li><li>有些<code>package</code>包，甚至可脱离<code>Vue</code>单独使用，例如我们只想使用其响应式能力，则可以单独使用<a href="https://www.npmjs.com/package/@vue/reactivity" target="_blank" rel="noopener noreferrer">@vue/reactivity</a>。</li></ul><h3 id="静态类型检查" tabindex="-1"><a class="header-anchor" href="#静态类型检查"><span>静态类型检查</span></a></h3><p>在<code>Vue2</code>中，类型检查采用的是<code>Flow</code>，但在<code>Vue3</code>中则使用<code>TypeScript</code>来进行重构。</p><p>之所以选择<code>TypeScript</code>，有以下几个方面的原因：</p><ul><li><code>TypeScript</code>比<code>Flow</code>更适合用来进行复杂类型的推断。</li><li><code>TypeScript</code>生态越来越丰富，同时<code>TypeScript</code>团队一直保持着一定频率的更新和维护，相反<code>Flow</code>则有点烂尾。</li></ul><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2><p>性能优化体现在：<strong>源码体积优化</strong>、<strong>数据劫持优化</strong>以及<strong>编译优化</strong>等。</p><h3 id="源码体积优化" tabindex="-1"><a class="header-anchor" href="#源码体积优化"><span>源码体积优化</span></a></h3><p>源码体积优化主要体现在两个方面：<strong>移除冷门的API</strong>、<strong>引入tree-shaking技术</strong>。</p><p>在<code>Vue2</code>中，由于需要照顾各个版本的开发人员的开发体验，因此不得不保留一些冷门的<code>API</code>，例如<code>filter</code>，<code>inline-template</code>，<code>$on</code>以及<code>$off</code>等等。而在<code>Vue3</code>中，它们已经从源代码中被移除了，因此也意味着源码体积越来越小。</p><p>如果你想知道哪些API被废弃了，可以点击<a href="https://v3.cn.vuejs.org/guide/migration/introduction.html" target="_blank" rel="noopener noreferrer">Vue3迁移指南</a>去了解更多。</p><p>在<code>Vue3</code>中，其引入了<code>tree-shaking</code>技术，它依赖于<code>ES Module</code>模块规范，当那些没有使用<code>import</code>引入的代码，在打包到正式环境时会被压缩工具剔除掉。例如：如果我们在项目中没有使用<code>transition</code>这个内置组件，那么<code>transition</code>相关的代码就不会被打包到我们的项目中，这在<code>Vue2</code>中是办不到的。</p><h3 id="数据劫持优化" tabindex="-1"><a class="header-anchor" href="#数据劫持优化"><span>数据劫持优化</span></a></h3><p>数据劫持优化体现在新版<code>Vue</code>采用<code>Proxy</code>，和<code>Object.defineProperty()</code>相比，它有如下几个特点：</p><ul><li><code>Proxy</code>是劫持整个对象的操作，无论是新增属性，删除属性都能被劫持到，而<code>Object.defineProperty()</code>无法劫持到删除属性和添加新属性，因此在<code>Vue2</code>中额外定义了<code>$set()</code>和<code>$delete()</code>这两个方法来弥补。</li><li>当存在嵌套对象时，<code>Proxy</code>可以做到懒劫持，例如：</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Fe&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> val <span class="token operator">=</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> handler<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">Reflect</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// job对象没有进行数据劫持</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>job<span class="token punctuation">)</span>  <span class="token comment">// job对象进行了数据劫持</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从以上代码可以看出，当真正访问到嵌套对象时，嵌套对象才会进行数据劫持，这在很大程度上提升了性能，而在<code>Vue2</code>中，当遇到嵌套对象时，必须递归遍历嵌套对象的所有<code>key</code>进行响应式处理。</p><ul><li>IE11浏览器不支持<code>Proxy</code>，意味着如果你的项目需要兼容<code>IE11</code>，那么你不得不慎重选择<code>Vue</code>的版本。</li></ul><h3 id="编译优化" tabindex="-1"><a class="header-anchor" href="#编译优化"><span>编译优化</span></a></h3><p><code>Vue3</code>编译优化用一句话来总结就是：<strong>从模板大小正相关提升到与动态节点正相关</strong>。</p><p>下图是<code>Vue</code>完整的编译流程</p><p><img src="https://s0.lgstatic.com/i/image/M00/2C/FF/CgqCHl8Cuf2AZw70AAEFU2EMA50521.png" alt="编译流程"></p><p>从图中可以看出，影响编译性能的两大步骤主要是<code>compile</code>和<code>patch</code>阶段，其中<code>compile</code>到<code>render</code>的过程可以借助<code>vue-loader</code>这类插件进行离线编译，而<code>patch</code>的过程正是<code>Vue3</code>着重优化的步骤。</p><p>我们知道，<code>Vue</code>的最小的更新粒度是组件级别，它能最小化通知哪些组件需要更新，但在组件内部它任然需要去对比每一个节点。</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>static text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>static text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>Vue2</code>中，虽然第一个、第三个<code>p</code>节点是静态节点，但依旧会去比较节点，这在很大程度上属于性能的浪费。</p><p>在<code>Vue3</code>中，它在编译时会对节点进行分析，将那些动态节点(第二个<code>p</code>节点)编译到一个<code>Block Tree</code>中，当下一次组件更新时只需要处理<code>Block Tree</code>即可。</p><h2 id="语法api优化" tabindex="-1"><a class="header-anchor" href="#语法api优化"><span>语法API优化</span></a></h2><p><code>Vue3</code>中对于语法<code>API</code>的优化，主要归功于引入了<code>Composition API</code>来帮助我们更好的进行逻辑组织和逻辑复用。</p><h3 id="优化逻辑组织" tabindex="-1"><a class="header-anchor" href="#优化逻辑组织"><span>优化逻辑组织</span></a></h3><p>当我们使用<code>Vue2</code>开发项目时，更像是根据<code>Vue2</code>规定好的格式来撰写代码，如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">say</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式本质上没什么问题，但问题是当我们的模块相对比较复杂时，往往为了完成一个需求，不得不将这些有关联的逻辑拆散到各个<code>option</code>中，从而造成了一个完整的逻辑变得相对分散的场景。</p><p>当使用<code>Composition API</code>时，它能很好的解决以上问题，从下图可以很直观的看到效果。</p><p><img src="https://s0.lgstatic.com/i/image/M00/2C/E9/CgqCHl8CoI-ACOXEAAM5NZiddQs980.png" alt="Composition API"></p><h3 id="优化逻辑复用" tabindex="-1"><a class="header-anchor" href="#优化逻辑复用"><span>优化逻辑复用</span></a></h3><p>在<code>Vue2</code>中，当存在抽离复用逻辑时，我们会使用<code>mixins</code>来处理，如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> mousePositionMixin  <span class="token keyword">from</span> <span class="token string">&#39;./mouse.js&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mousePositionMixin<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用的<code>mixins</code>越来越多时，我们必须要面对两大问题：<strong>数据来源不清晰</strong>和<strong>命名冲突</strong>。</p><p>既然<code>mixins</code>有以上两大问题，那么<code>Composition API</code>又会是怎么样的呢？</p><p>还是使用相同的例子，我们来看一下使用<code>Composition API</code>是什么样的结果。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> useMousePosition   <span class="token keyword">from</span> <span class="token string">&#39;./mouse.js&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMousePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以很直观的看出：<code>x</code>和<code>y</code>这两个变量是从<code>useMousePosition()</code>中引入的，这就很好的解决了数据来源不清晰地问题。</p><p>以下是<code>mousePosition</code>在<code>Vue2</code>和<code>Vue3</code>中不同定义方式的对比：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// vue2定义方式</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>update<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>update<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX</span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// vue3定义方式</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useMousePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    x<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX</span>
<span class="line">    y<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为<code>mixins</code>本质上是在<code>this</code>组件实例上去挂载不同的属性，所以极其容易发生命名冲突的问题，但在<code>Composition API</code>中，其变量定义是隔离的，这就很好的解决了命名冲突的问题。</p><h2 id="引入rfc" tabindex="-1"><a class="header-anchor" href="#引入rfc"><span>引入RFC</span></a></h2><p><code>RFC</code>全称叫：<code>Request For Comments</code>。</p><p>在<code>Vue2</code>版本后期，它引入了<code>RFC</code>，其本质是希望一个新功能在引入框架时，应该受到社区的讨论。只有那些讨论通过的<code>RFC</code>，才会最终被实现并添加到框架中。这为框架的发展，提供了一个一致且可控的路径。</p><p>在<code>Vue3</code>新版本中，其全面启用了<code>RFC</code>，你可以在<a href="https://github.com/vuejs/rfcs" target="_blank" rel="noopener noreferrer">RFC</a>这个链接中看到有哪些<code>RFC</code>正在被讨论，又有哪些<code>RFC</code>已经被实现合并。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><ul><li><a href="https://kaiwu.lagou.com/course/courseInfo.htm?courseId=946&amp;sid=20-h5Url-0&amp;lgec_type=website&amp;lgec_sign=86228E00A960E2EB44DCA4027393428B&amp;buyFrom=2&amp;pageId=1pz4#/sale" target="_blank" rel="noopener noreferrer">Vue.js 3.0 核心源码解析 (黄轶)</a></li></ul>`,62)]))}const i=s(t,[["render",o]]),u=JSON.parse('{"path":"/vueNextAnalysis/introduction/optimization.html","title":"优化","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744560278000,"contributors":[{"name":"wangtunan","username":"wangtunan","email":"why583440138@gmail.com","commits":1,"url":"https://github.com/wangtunan"}],"changelog":[{"hash":"44e17fad17bb20449ce87cf5606b4f16dc25c479","time":1744560278000,"email":"why583440138@gmail.com","author":"wangtunan","message":"blog 设置CI/CD node版本"}]},"filePathRelative":"vueNextAnalysis/introduction/optimization.md"}');export{i as comp,u as data};
