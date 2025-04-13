import{_ as s,c as a,b as p,o as e}from"./app-cBYekBN3.js";const t={};function l(c,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="编写自己的plugin" tabindex="-1"><a class="header-anchor" href="#编写自己的plugin"><span>编写自己的Plugin</span></a></h1><p>与<code>loader</code>一样，我们在使用 Webpack 的过程中，也经常使用<code>plugin</code>，那么我们学习如何编写自己的<code>plugin</code>是十分有必要的。</p><div class="hint-container tip"><p class="hint-container-title">场景</p><p>编写我们自己的<code>plugin</code>的场景是在打包后的<code>dist</code>目录下生成一个<code>copyright.txt</code>文件</p></div><h2 id="plugin基础" tabindex="-1"><a class="header-anchor" href="#plugin基础"><span>plugin基础</span></a></h2><p><code>plugin</code>基础讲述了怎么编写自己的<code>plugin</code>以及如何使用，与创建自己的<code>loader</code>相似，我们需要创建如下的项目目录结构：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token operator">|</span><span class="token operator">--</span> plugins</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">--</span> copyWebpackPlugin<span class="token punctuation">.</span>js</span>
<span class="line"><span class="token operator">|</span><span class="token operator">--</span> src</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">--</span> index<span class="token punctuation">.</span>js</span>
<span class="line"><span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js</span>
<span class="line"><span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>copyWebpackPlugins.js</code>中的代码：使用<code>npm run build</code>进行打包时，我们会看到控制台会输出<code>hello, my plugin</code>这段话。</p><div class="hint-container tip"><p class="hint-container-title">说明</p><p><code>plugin</code>与<code>loader</code>不同，<code>plugin</code>需要我们提供的是一个类，这也就解释了我们必须在使用插件时，为什么要进行<code>new</code>操作了。</p></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">copyWebpackPlugin</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello, my plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> copyWebpackPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>webpack.config.js</code>中的代码：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 引用自己的插件</span></span>
<span class="line"><span class="token keyword">const</span> copyWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./plugins/copyWebpackPlugin.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// new自己的插件</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">copyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何传递参数" tabindex="-1"><a class="header-anchor" href="#如何传递参数"><span>如何传递参数</span></a></h2><p>在使用其他<code>plugin</code>插件时，我们经常需要传递一些参数进去，那么我们如何在自己的插件中传递参数呢？在哪里接受呢？<br> 其实，插件传参跟其他插件传参是一样的，都是在构造函数中传递一个对象，插件传参如下所示：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> copyWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./plugins/copyWebpackPlugin.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 向我们的插件传递参数</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">copyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;why&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>plugin</code>的构造函数中调用：使用<code>npm run build</code>进行打包，在控制台可以打印出我们传递的参数值<code>why</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">copyWebpackPlugin</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> copyWebpackPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何编写及使用自己的plugin" tabindex="-1"><a class="header-anchor" href="#如何编写及使用自己的plugin"><span>如何编写及使用自己的Plugin</span></a></h2><div class="hint-container tip"><p class="hint-container-title">说明</p><ul><li><code>apply</code>函数是我们插件在调用时，需要执行的函数</li><li><code>apply</code>的参数，指的是 Webpack 的实例</li><li><code>compilation.assets</code>打包的文件信息</li></ul></div><p>我们现在有这样一个需求：使用自己的插件，在打包目录下生成一个<code>copyright.txt</code>版权文件，那么该如何编写这样的插件呢？ 首先我们需要知道<code>plugin</code>的钩子函数，符合我们规则钩子函数叫：<code>emit</code>，它的用法如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">CopyWebpackPlugin</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&#39;CopyWebpackPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> copyrightText <span class="token operator">=</span> <span class="token string">&#39;copyright by why&#39;</span><span class="token punctuation">;</span></span>
<span class="line">      compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">&#39;copyright.txt&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> copyrightText</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> copyrightText<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CopyWebpackPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>npm run build</code>命名打包后，我们可以看到<code>dist</code>目录下，确实生成了我们的<code>copyright.txt</code>文件。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token operator">|</span><span class="token operator">--</span> dist</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> copyright<span class="token punctuation">.</span>txt</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js</span>
<span class="line"><span class="token operator">|</span><span class="token operator">--</span> plugins</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> copyWebpackPlugin<span class="token punctuation">.</span>js</span>
<span class="line"><span class="token operator">|</span><span class="token operator">--</span> src</span>
<span class="line"><span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js</span>
<span class="line"><span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js</span>
<span class="line"><span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们打开<code>copyright.txt</code>文件，它的内容如下：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">copyright by why</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,24)]))}const i=s(t,[["render",l]]),u=JSON.parse('{"path":"/webpack/webpack/plugin.html","title":"编写自己的Plugin","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744560278000,"contributors":[{"name":"wangtunan","username":"wangtunan","email":"why583440138@gmail.com","commits":1,"url":"https://github.com/wangtunan"}],"changelog":[{"hash":"44e17fad17bb20449ce87cf5606b4f16dc25c479","time":1744560278000,"email":"why583440138@gmail.com","author":"wangtunan","message":"blog 设置CI/CD node版本"}]},"filePathRelative":"webpack/webpack/plugin.md"}');export{i as comp,u as data};
