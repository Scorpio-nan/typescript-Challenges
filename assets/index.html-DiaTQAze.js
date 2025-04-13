import{_ as s,c as a,b as e,o as p}from"./app-cBYekBN3.js";const l={};function t(o,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="配置项类型提示" tabindex="-1"><a class="header-anchor" href="#配置项类型提示"><span>配置项类型提示</span></a></h1><p>为了方便在写<code>Rollup</code>配置项时，有充足的<code>ts</code>类型提示，可使用如下两种方式：</p><p>第一种：<code>JSDoc</code>形式，如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// rollup.config.mjs</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;rollup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>RollupOptions<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span>省略</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种，使用<code>Rollup</code>提供的<code>defineConfig</code>方法，如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// rollup.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span>省略</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上仅列举官方提供的两种方式，你可以点击<a href="https://cn.rollupjs.org/command-line-interface/#config-intellisense" target="_blank" rel="noopener noreferrer">Rollup配置智能提示</a>了解更多。</p>`,7)]))}const i=s(l,[["render",t]]),r=JSON.parse('{"path":"/rollup/config/","title":"配置项类型提示","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744560278000,"contributors":[{"name":"wangtunan","username":"wangtunan","email":"why583440138@gmail.com","commits":1,"url":"https://github.com/wangtunan"}],"changelog":[{"hash":"44e17fad17bb20449ce87cf5606b4f16dc25c479","time":1744560278000,"email":"why583440138@gmail.com","author":"wangtunan","message":"blog 设置CI/CD node版本"}]},"filePathRelative":"rollup/config/README.md"}');export{i as comp,r as data};
