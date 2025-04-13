import{_ as a,c as s,b as e,o as i}from"./app-cBYekBN3.js";const p="/blog/assets/rag-architecture-B4FIpxvJ.png",l={};function t(c,n){return i(),s("div",null,n[0]||(n[0]=[e('<h1 id="rag基础" tabindex="-1"><a class="header-anchor" href="#rag基础"><span>RAG基础</span></a></h1><h2 id="系统架构" tabindex="-1"><a class="header-anchor" href="#系统架构"><span>系统架构</span></a></h2><p><img src="'+p+`" alt="RAG系统架构"></p><h2 id="相关名词" tabindex="-1"><a class="header-anchor" href="#相关名词"><span>相关名词</span></a></h2><ul><li>RAG</li><li>Embedding</li><li>Vector</li><li>Vector DB</li><li>Retriever</li><li>LCEL</li></ul><h2 id="关键技术" tabindex="-1"><a class="header-anchor" href="#关键技术"><span>关键技术</span></a></h2><h3 id="embedding" tabindex="-1"><a class="header-anchor" href="#embedding"><span>Embedding</span></a></h3><h3 id="vector和vector-db" tabindex="-1"><a class="header-anchor" href="#vector和vector-db"><span>Vector和Vector DB</span></a></h3><h3 id="retriever" tabindex="-1"><a class="header-anchor" href="#retriever"><span>Retriever</span></a></h3><h2 id="简易rag" tabindex="-1"><a class="header-anchor" href="#简易rag"><span>简易RAG</span></a></h2><h3 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备"><span>前置准备</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所有跟llm请求相关的，默认都基于DeepSeek</p></div><p>首先定义环境变量文件<code>.env</code>，其代码如下：</p><div class="language-env line-numbers-mode" data-highlighter="prismjs" data-ext="env"><pre><code><span class="line"># DeepSeek api key</span>
<span class="line">DEEPSEEK_API_KEY = &#39;your api key&#39;</span>
<span class="line"></span>
<span class="line"># DeepSeek endpoint</span>
<span class="line">DEEPSEEK_API_BASE = &#39;https://api.deepseek.com/v1&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后安装一个依赖包：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">$ pip <span class="token function">install</span> dotenv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接着定义两个文件<code>env_tools.py</code>和<code>chain.py</code>，其代码分别是：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># env_tools.py</span></span>
<span class="line"><span class="token keyword">import</span> os</span>
<span class="line"><span class="token keyword">from</span> dotenv <span class="token keyword">import</span> load_dotenv<span class="token punctuation">,</span> find_dotenv</span>
<span class="line"></span>
<span class="line">load_dotenv<span class="token punctuation">(</span>find_dotenv<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">get_api_key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token keyword">return</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">&#39;DEEPSEEK_API_KEY&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">get_api_base</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token keyword">return</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">&#39;DEEPSEEK_API_BASE&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># chain.py</span></span>
<span class="line"><span class="token keyword">from</span> env_tools <span class="token keyword">import</span> get_api_key<span class="token punctuation">,</span> get_api_base</span>
<span class="line"></span>
<span class="line">api_key <span class="token operator">=</span> get_api_key<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">api_base <span class="token operator">=</span> get_api_base<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>api_key<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>api_base<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="langchain实现rag" tabindex="-1"><a class="header-anchor" href="#langchain实现rag"><span>LangChain实现RAG</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="langgraph实现rag" tabindex="-1"><a class="header-anchor" href="#langgraph实现rag"><span>LangGraph实现RAG</span></a></h3><h3 id="langchain-vs-langgraph" tabindex="-1"><a class="header-anchor" href="#langchain-vs-langgraph"><span>LangChain vs LangGraph</span></a></h3><h3 id="自定义实现rag" tabindex="-1"><a class="header-anchor" href="#自定义实现rag"><span>自定义实现RAG</span></a></h3>`,24)]))}const d=a(l,[["render",t]]),o=JSON.parse('{"path":"/rag/base/","title":"RAG基础","lang":"zh-CN","frontmatter":{"sidebar":"heading"},"git":{"updatedTime":1744560278000,"contributors":[{"name":"wangtunan","username":"wangtunan","email":"why583440138@gmail.com","commits":1,"url":"https://github.com/wangtunan"}],"changelog":[{"hash":"44e17fad17bb20449ce87cf5606b4f16dc25c479","time":1744560278000,"email":"why583440138@gmail.com","author":"wangtunan","message":"blog 设置CI/CD node版本"}]},"filePathRelative":"rag/base/README.md"}');export{d as comp,o as data};
