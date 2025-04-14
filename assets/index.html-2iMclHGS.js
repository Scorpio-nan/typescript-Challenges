import{_ as s,c as a,b as e,o as p}from"./app-BfeJmovj.js";const i="/blog/assets/rag-architecture-B4FIpxvJ.png",l={};function t(c,n){return p(),a("div",null,n[0]||(n[0]=[e('<h1 id="rag基础" tabindex="-1"><a class="header-anchor" href="#rag基础"><span>RAG基础</span></a></h1><h2 id="系统架构" tabindex="-1"><a class="header-anchor" href="#系统架构"><span>系统架构</span></a></h2><p><img src="'+i+`" alt="RAG系统架构"></p><h2 id="相关名词" tabindex="-1"><a class="header-anchor" href="#相关名词"><span>相关名词</span></a></h2><ul><li>RAG</li><li>Embedding</li><li>Vector</li><li>Vector DB</li><li>Retriever</li><li>LCEL</li></ul><h2 id="关键技术" tabindex="-1"><a class="header-anchor" href="#关键技术"><span>关键技术</span></a></h2><h3 id="embedding" tabindex="-1"><a class="header-anchor" href="#embedding"><span>Embedding</span></a></h3><h3 id="vector和vector-db" tabindex="-1"><a class="header-anchor" href="#vector和vector-db"><span>Vector和Vector DB</span></a></h3><h3 id="retriever" tabindex="-1"><a class="header-anchor" href="#retriever"><span>Retriever</span></a></h3><h2 id="简易rag" tabindex="-1"><a class="header-anchor" href="#简易rag"><span>简易RAG</span></a></h2><h3 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备"><span>前置准备</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所有跟llm请求相关的，默认都基于DeepSeek</p></div><p>首先定义环境变量文件<code>.env</code>，其代码如下：</p><div class="language-env line-numbers-mode" data-highlighter="prismjs" data-ext="env"><pre><code><span class="line"># DeepSeek api key</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公共部分" tabindex="-1"><a class="header-anchor" href="#公共部分"><span>公共部分</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>公共部分指的是LangChain和LangGraph中部分处理代码是一样的。</p></div><p>安装<code>langchain_community</code>包，并使用<code>loader</code>加载网页数据。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> langchain_community<span class="token punctuation">.</span>document_loaders <span class="token keyword">import</span> WebBaseLoader</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 加载网页数据</span></span>
<span class="line">web_data <span class="token operator">=</span> WebBaseLoader<span class="token punctuation">(</span></span>
<span class="line">  web_path<span class="token operator">=</span><span class="token string">&quot;https://zh.wikipedia.org/wiki/黑神话：悟空&quot;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>web_data<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装<code>langchain_text_splitters</code>包，并使用分割器分割网页数据。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> langchain_text_splitters <span class="token keyword">import</span> RecursiveCharacterTextSplitter</span>
<span class="line">text_splitter <span class="token operator">=</span> RecursiveCharacterTextSplitter<span class="token punctuation">(</span></span>
<span class="line">  chunk_size<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">  chunk_overlap<span class="token operator">=</span><span class="token number">200</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line">text_split_data <span class="token operator">=</span> text_splitter<span class="token punctuation">.</span>split_documents<span class="token punctuation">(</span>web_data<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>text_split_data<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装<code>langchain-huggingface</code>，并设置<code>embedding</code>。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> langchain_huggingface <span class="token keyword">import</span> HuggingFaceEmbeddings</span>
<span class="line"></span>
<span class="line">embedding <span class="token operator">=</span> HuggingFaceEmbeddings<span class="token punctuation">(</span></span>
<span class="line">  model_name<span class="token operator">=</span><span class="token string">&quot;BAAI/bge-small-zh-v1.5&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装<code>langchain_core</code>，并设置向量存储。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> langchain_core<span class="token punctuation">.</span>vectorstores <span class="token keyword">import</span> InMemoryVectorStore</span>
<span class="line"></span>
<span class="line">vector_store <span class="token operator">=</span> InMemoryVectorStore<span class="token punctuation">(</span>embeddings<span class="token punctuation">)</span></span>
<span class="line">vector_store<span class="token punctuation">.</span>add_documents<span class="token punctuation">(</span>text_split_data<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，网页数据已经向量化存入到我们的内存中。</p><h3 id="langchain实现rag" tabindex="-1"><a class="header-anchor" href="#langchain实现rag"><span>LangChain实现RAG</span></a></h3><p>存入内存以后，接下来需要做检索相关的工作。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># retriever</span></span>
<span class="line">question <span class="token operator">=</span> <span class="token string">&quot;黑神话是哪家公司开发的，是什么类型的游戏，什么时间发布的？&quot;</span></span>
<span class="line">retriever_docs <span class="token operator">=</span> vector_store<span class="token punctuation">.</span>similarity_search<span class="token punctuation">(</span></span>
<span class="line">  query<span class="token operator">=</span>question<span class="token punctuation">,</span></span>
<span class="line">  k<span class="token operator">=</span><span class="token number">2</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line">retriever_content <span class="token operator">=</span> <span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>doc<span class="token punctuation">.</span>page_content <span class="token keyword">for</span> doc <span class="token keyword">in</span> retriever_docs<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>retriever_content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向量存储检索完毕后，接下来要准备检索内容放置到提示词中。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># prompt</span></span>
<span class="line"><span class="token keyword">from</span> langchain_core<span class="token punctuation">.</span>prompts <span class="token keyword">import</span> ChatPromptTemplate</span>
<span class="line"></span>
<span class="line">prompt <span class="token operator">=</span> ChatPromptTemplate<span class="token punctuation">.</span>from_template<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">  请你依据上下文来回答问题\\n</span>
<span class="line">  如果上下文中没有，你直接回答&quot;抱歉，我无法从上下文中提供相关信息。&quot;</span>
<span class="line">  上下文：{context}</span>
<span class="line">  问题：{question}</span>
<span class="line">  回答：</span>
<span class="line">&quot;&quot;&quot;</span><span class="token punctuation">)</span></span>
<span class="line">query <span class="token operator">=</span> prompt<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span></span>
<span class="line">  context<span class="token operator">=</span>retriever_content<span class="token punctuation">,</span></span>
<span class="line">  question<span class="token operator">=</span>question</span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，安装<code>langchain_deepseek</code>，并调用大模型<code>api</code>得到结果。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">llm <span class="token operator">=</span> ChatDeepSeek<span class="token punctuation">(</span></span>
<span class="line">  model<span class="token operator">=</span><span class="token string">&quot;deepseek-chat&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  api_key<span class="token operator">=</span>api_key<span class="token punctuation">,</span></span>
<span class="line">  temperature<span class="token operator">=</span><span class="token number">0.5</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line">response <span class="token operator">=</span> llm<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span></span>
<span class="line">  <span class="token builtin">input</span><span class="token operator">=</span>query</span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后回答：</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token list punctuation">1.</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">开发公司</span><span class="token punctuation">**</span></span>：游戏科学（Game Science）  </span>
<span class="line"><span class="token list punctuation">2.</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">游戏类型</span><span class="token punctuation">**</span></span>：动作角色扮演（ARPG）  </span>
<span class="line"><span class="token list punctuation">3.</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">发布时间</span><span class="token punctuation">**</span></span>：  </span>
<span class="line">   <span class="token list punctuation">-</span> Microsoft Windows 和 PlayStation 5 平台：<span class="token bold"><span class="token punctuation">**</span><span class="token content">2024年8月20日</span><span class="token punctuation">**</span></span>  </span>
<span class="line">   <span class="token list punctuation">-</span> Xbox Series X/S 版：<span class="token bold"><span class="token punctuation">**</span><span class="token content">待定</span><span class="token punctuation">**</span></span>（暂未发售）  </span>
<span class="line"></span>
<span class="line">其他补充：  </span>
<span class="line"><span class="token list punctuation">-</span> 中国新华社称其为“中国首款3A游戏”，改编自《西游记》。  </span>
<span class="line"><span class="token list punctuation">-</span> 首发3天销量破1000万份，一个月内销量超2000万份。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="langgraph实现rag" tabindex="-1"><a class="header-anchor" href="#langgraph实现rag"><span>LangGraph实现RAG</span></a></h3><h3 id="langchain-vs-langgraph" tabindex="-1"><a class="header-anchor" href="#langchain-vs-langgraph"><span>LangChain vs LangGraph</span></a></h3>`,41)]))}const r=s(l,[["render",t]]),d=JSON.parse('{"path":"/rag/base/","title":"RAG基础","lang":"zh-CN","frontmatter":{"sidebar":"heading"},"git":{"updatedTime":1744642898000,"contributors":[{"name":"wangtunan","username":"wangtunan","email":"why583440138@gmail.com","commits":1,"url":"https://github.com/wangtunan"}],"changelog":[{"hash":"67dfbfe40bcf31038248062c4771bc2d023c7824","time":1744642898000,"email":"why583440138@gmail.com","author":"wangtunan","message":"blog RAG基础文章撰写"}]},"filePathRelative":"rag/base/README.md"}');export{r as comp,d as data};
