import{_ as e,a as c}from"./python-vscode-f5c829e2.js";import{_ as l,r as u,o as k,c as i,d as o,a as s,b as a,e as t}from"./app-f337e525.js";const r={},d={href:"https://docs.python.org/zh-cn/3.13/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://pypi.org/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.conda.io/projects/conda/en/stable/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.anaconda.com/docs/main",target:"_blank",rel:"noopener noreferrer"},g={class:"custom-container tip"},b={href:"https://pypi.org/",target:"_blank",rel:"noopener noreferrer"};function w(f,n){const p=u("ExternalLinkIcon");return k(),i("div",null,[n[7]||(n[7]=o('<h1 id="python快速入门" tabindex="-1"><a class="header-anchor" href="#python快速入门" aria-hidden="true">#</a> Python快速入门</h1><h2 id="生态全景" tabindex="-1"><a class="header-anchor" href="#生态全景" aria-hidden="true">#</a> 生态全景</h2><p><img src="'+e+'" alt="Python生态"></p><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>',4)),s("ul",null,[s("li",null,[s("a",d,[n[0]||(n[0]=a("官方文档")),t(p)])]),s("li",null,[s("a",m,[n[1]||(n[1]=a("第三方库")),t(p)])]),s("li",null,[s("a",y,[n[2]||(n[2]=a("Conda")),t(p)])]),s("li",null,[s("a",h,[n[3]||(n[3]=a("Miniconda")),t(p)])])]),n[8]||(n[8]=o('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>Python：推荐安装v3.10+版本，以下所有代码示例均基于Python@3.10+。</li><li>Conda：推荐安装Miniconda。</li></ul><h2 id="vscode插件" tabindex="-1"><a class="header-anchor" href="#vscode插件" aria-hidden="true">#</a> VSCode插件</h2><p><img src="'+c+`" alt="python VSCode插件"></p><h2 id="虚拟环境" tabindex="-1"><a class="header-anchor" href="#虚拟环境" aria-hidden="true">#</a> 虚拟环境</h2><p>强烈建议任何时候都通过类似<code>Conda</code>这样的工具创建一个虚拟环境并指定<code>Python</code>版本。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 规则</span>
$ conda create <span class="token operator">-</span>n your_env_name python<span class="token operator">=</span>版本号

<span class="token comment"># 示例</span>
$ conda create <span class="token operator">-</span>n open_webui python<span class="token operator">=</span><span class="token number">3.11</span>
</code></pre></div><p><code>Conda</code>常见命令如下：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 激活某个虚拟环境</span>
$ conda activate your_env_name

<span class="token comment"># 取消激活当前虚拟环境</span>
$ conda deactivate

<span class="token comment"># 查看所有虚拟环境</span>
$ conda env <span class="token builtin">list</span>

<span class="token comment"># 删除某个虚拟环境</span>
$ conda env remove <span class="token operator">-</span>n your_env_name
</code></pre></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>在<code>Python</code>中，主要有6个标准的数据类型，分别是：数字、字符串、列表、元组、集合、字典。</p><h3 id="number数字" tabindex="-1"><a class="header-anchor" href="#number数字" aria-hidden="true">#</a> Number数字</h3><p>Number数字: 主要有四种类型，整数、布尔型(布尔型继承Int)、浮点数和复数。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 整数</span>
num1 <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># 布尔型</span>
flag <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token comment"># 浮点数</span>
num2 <span class="token operator">=</span> <span class="token number">3.1415926</span>

<span class="token comment"># 复数</span>
num3 <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2j</span>
</code></pre></div><h3 id="string字符串" tabindex="-1"><a class="header-anchor" href="#string字符串" aria-hidden="true">#</a> String字符串</h3><p>字符串：多个字符组合在一起就是字符串。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
</code></pre></div><p>字符串的常见操作如下：</p><ul><li><code>startswith</code>：判断字符串是否以指定的子字符串开头。</li><li><code>endswith</code>：判断字符串是否以指定的字符串结尾。</li><li><code>find</code>: 查找子字符串的索引位置，未找到返回-1。</li><li><code>replace</code>: 将指定的子字符串全部替换为新的子字符串。</li><li><code>split</code>: 按指定字符进行分割，返回列表。</li><li><code>strip</code>: 移除字符串前、后的空白符。</li><li><code>upper</code>：将所有字符全部大写。</li><li><code>lower</code>: 将所有字符全部小写。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 字符串的常见操作</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;abcdef&#39;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># true</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># true</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># -1</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;def&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xyz&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># &#39;abcxyz&#39;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;a,b,c,d,e,f&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39; abc def &#39;</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># &#39;abc def&#39;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;AbcDef&#39;</span><span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># &#39;ABCDEF&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;AbcDef&#39;</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># &#39;abcdef&#39;</span>
</code></pre></div><h3 id="list列表" tabindex="-1"><a class="header-anchor" href="#list列表" aria-hidden="true">#</a> List列表</h3><p>列表：把多个元素排放在一起，就形成了列表。</p><div class="language-python" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Red&#39;</span><span class="token punctuation">]</span>
list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre></div><p>列表的常见操作如下：</p><ul><li><code>append</code>: 向列表尾部添加新元素。</li><li><code>insert</code>: 在指定索引位置插入新元素。</li><li><code>pop</code>: 移除制定索引位置的元素，不传索引则默认移除列表最后一个，返回被移除的元素。</li><li><code>remove</code>: 和pop用法一样，区别是不会返回被移除的元素。</li><li><code>reverse</code>: 反转列表</li><li><code>sort</code>: 排序列表</li><li><code>clear</code>: 清除列表</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

list1<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span> <span class="token comment"># [1, 2, 3, 4, 5, 6]</span>

list1<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span> <span class="token comment"># [1, 20, 2, 3, 4, 5, 6]</span>

list1<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span> <span class="token comment"># [1, 20, 2, 3, 4, 5]</span>
list1<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span> <span class="token comment"># [1, 2, 3, 4, 5]</span>

list1<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span> <span class="token comment"># [5, 4, 3, 2, 1]</span>

list1<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span> <span class="token comment"># []</span>
</code></pre></div><h3 id="tuple元组" tabindex="-1"><a class="header-anchor" href="#tuple元组" aria-hidden="true">#</a> Tuple元组</h3><p>元组：元组和列表类似，不同的是：元组的元素不能修改，元组使用的是小括号定义，而列表使用方括号。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 元组</span>
tup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;Blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Red&#39;</span><span class="token punctuation">)</span>
tup2 <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Red&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># 和tup1等价</span>

tup3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="set集合" tabindex="-1"><a class="header-anchor" href="#set集合" aria-hidden="true">#</a> Set集合</h3><p><code>Set</code>集合是一组由唯一集合对象构成的无序、多项集合，其核心功能是自动去重，因此特别适合进行集合运算，例如：交集、并集。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 通过set函数创建</span>
s1 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 通过花括号创建</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;Blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Yellow&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p><code>Set</code>集合常见的操作如下：</p><ul><li><code>add</code>：向集合中添加元素，如果已存在则自动去重。</li><li><code>remove</code>: 移除列表元素，如果被移除的元素不存在，则会报<code>KeyErrorc</code>错误。</li><li><code>discard</code>: 移除列表元素，和remove不同的是，被删除元素如果不存在，则不会报错。</li><li><code>clear</code>: 清空元素列表。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>s1<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token comment"># {&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;}</span>

<span class="token keyword">if</span> <span class="token string">&#39;d&#39;</span> <span class="token keyword">in</span> s1<span class="token punctuation">:</span>
  s1<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token comment"># { &#39;a&#39;, &#39;b&#39;, &#39;c&#39; }</span>

s1<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token comment"># {&#39;a&#39;, &#39;b&#39;, &#39;c&#39;}</span>

s1<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="dictionary集合" tabindex="-1"><a class="header-anchor" href="#dictionary集合" aria-hidden="true">#</a> Dictionary集合</h3><p><code>Dictionary</code>字典是一系列key/value键值对的集合。</p><div class="language-python" data-ext="py"><pre class="language-python"><code>dict1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;AAA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
dict2 <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>admin<span class="token operator">=</span><span class="token string">&#39;AAA&#39;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>dict1<span class="token punctuation">)</span> <span class="token comment"># { &#39;admin&#39;: &#39;AAA&#39;, &#39;age&#39;: 18 }</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict2<span class="token punctuation">)</span> <span class="token comment"># { &#39;admin&#39;: &#39;AAA&#39;, &#39;age&#39;: 18 }</span>
</code></pre></div><p>dict字段常见的操作如下：</p><ul><li><code>d[key] = value</code>: 设置一个新的键值对。</li><li><code>get</code>: 获取指定键的值。</li><li><code>pop</code>: 移除指定key，如果key不存在则报错KeyError。</li><li><code>keys</code>: 返回由key组成的视图对象。</li><li><code>values</code>: 返回由value组成的视图对象。</li><li><code>items</code>: 返回由key/value组成的视图对象。</li><li><code>clear</code>: 清空列表。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>dict1<span class="token punctuation">[</span><span class="token string">&#39;phone&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;18222221111&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict1<span class="token punctuation">)</span> <span class="token comment"># { &#39;admin&#39;: &#39;AAA&#39;, &#39;age&#39;: 18, &#39;phone&#39;: &#39;18222221111&#39; }</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>dict1<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;phone&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># &#39;18222221111&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict1<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># key不存在，返回None</span>

<span class="token keyword">if</span> <span class="token string">&#39;phone&#39;</span> <span class="token keyword">in</span> dict1<span class="token punctuation">:</span>
  dict1<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&#39;phone&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>dict1<span class="token punctuation">)</span> <span class="token comment"># { &#39;admin&#39;: &#39;AAA&#39;, &#39;age&#39;: 18 }</span>

<span class="token keyword">for</span> key <span class="token keyword">in</span> dict1<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment"># &#39;admin&#39;;&#39;age&#39;</span>

<span class="token keyword">for</span> value <span class="token keyword">in</span> dict1<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment"># &#39;AAA&#39;; 18</span>

<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> dict1<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token string">&#39;admin&#39;</span> <span class="token string">&#39;AAA&#39;</span><span class="token punctuation">;</span> <span class="token string">&#39;age&#39;</span> <span class="token number">18</span>

dict1<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict1<span class="token punctuation">)</span> <span class="token comment"># {}</span>
</code></pre></div><h3 id="类型判断" tabindex="-1"><a class="header-anchor" href="#类型判断" aria-hidden="true">#</a> 类型判断</h3><p>类型判断一般常用<code>type</code>和<code>isinstance</code>这两个函数，其用法如下：</p><ul><li><code>type</code>:</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># type用法</span>
n <span class="token operator">=</span> <span class="token number">123</span>
s <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
f <span class="token operator">=</span> <span class="token boolean">True</span>
l <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">list</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre></div><ul><li><code>isinstance</code>：</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># isinstance用法</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span> <span class="token keyword">pass</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">pass</span><span class="token punctuation">;</span>
dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>dog<span class="token punctuation">,</span> Dog<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>dog<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre></div><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h3><p>类型转换一般可通过对应的构造函数进行，例如<code>int()</code>, <code>str()</code>等，其用法如下：</p><div class="language-python" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>
n1 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token comment"># True</span>

n2 <span class="token operator">=</span> <span class="token number">456</span>
s2 <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre></div><h2 id="流程控制语句" tabindex="-1"><a class="header-anchor" href="#流程控制语句" aria-hidden="true">#</a> 流程控制语句</h2><p>流程控住语句常用的是<code>if/else</code>和<code>match</code>。</p><h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> if/else</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>a<span class="token operator">=</span><span class="token number">3</span>
b<span class="token operator">=</span><span class="token number">5</span>

<span class="token keyword">if</span> a<span class="token operator">&lt;</span>b<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a&lt;b&quot;</span><span class="token punctuation">)</span> <span class="token comment"># a&lt;b</span>
<span class="token keyword">elif</span> a<span class="token operator">==</span>b<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a==b&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a&gt;b&quot;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> match</h3><p><code>match</code>语句是<code>Python 3.10+</code>引入的新语法。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">http_status</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">match</span> status<span class="token punctuation">:</span>
    <span class="token keyword">case</span> <span class="token number">200</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> <span class="token string">&quot;OK&quot;</span>
    <span class="token keyword">case</span> <span class="token number">404</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Not Found&quot;</span>
    <span class="token keyword">case</span> <span class="token number">500</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Server Error&quot;</span>
    <span class="token keyword">case</span> <span class="token keyword">_</span><span class="token punctuation">:</span>  <span class="token comment"># 默认情况</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Unknown Status&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>http_status<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># OK</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>http_status<span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Not Found</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>http_status<span class="token punctuation">(</span><span class="token number">503</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Unknown Status</span>
</code></pre></div><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h2><p>循环语句一般常用的是<code>for</code>循环和<code>while</code>循环。</p><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 遍历列表</span>
<span class="token keyword">for</span> fruit <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>fruit<span class="token punctuation">)</span> <span class="token comment"># apple banana cherry</span>

<span class="token comment"># 遍历字符串</span>
<span class="token keyword">for</span> char <span class="token keyword">in</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token comment"># P y t h o n</span>

<span class="token comment"># 遍历字典</span>
person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;New York&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> person<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span> <span class="token comment"># name: Alice age: 25 city: New York</span>

<span class="token comment"># 遍历范围</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 从1到5</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment"># 1 2 3 4 5</span>
</code></pre></div><h3 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h3><p><code>while</code>循环中可以使用<code>continue</code>和<code>break</code>继续和中断。</p><div class="language-python" data-ext="py"><pre class="language-python"><code>count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
  <span class="token comment"># break中断</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">break</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment"># 0 1 2</span>
  count <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数" aria-hidden="true">#</a> 内置函数</h3><p>在<code>Python</code>中有一些内置函数，可以直接使用。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 数字类</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span><span class="token number">3.1415</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 10</span>

<span class="token comment"># 字符串类</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World&quot;</span><span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># HELLO, WORLD</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World&quot;</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># hello, world</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World&quot;</span><span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;He&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World&quot;</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;ld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre></div><h3 id="函数定义" tabindex="-1"><a class="header-anchor" href="#函数定义" aria-hidden="true">#</a> 函数定义</h3><p>以实现<code>abs</code>函数为例，其定义如下：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_abs</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> num <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> num
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token operator">-</span>num

<span class="token keyword">print</span><span class="token punctuation">(</span>my_abs<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_abs<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_abs<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0</span>
</code></pre></div><p>如果函数体没有什么内容，称为空函数。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">noop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">pass</span><span class="token punctuation">;</span> <span class="token comment"># pass表示什么都不做</span>
</code></pre></div><h3 id="函数参数" tabindex="-1"><a class="header-anchor" href="#函数参数" aria-hidden="true">#</a> 函数参数</h3><p>函数支持多种参数传递形式，主要有如下几种：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 位置参数，按顺序传入</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token comment"># a = 3 b = 5</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 8</span>

<span class="token comment"># 不用按顺序传入，只要和参数名对应即可</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>message<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">!&quot;</span></span>

<span class="token keyword">print</span><span class="token punctuation">(</span>greet<span class="token punctuation">(</span>message<span class="token operator">=</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Hi, Bob!</span>

<span class="token comment"># 有些参数可以不传，不传则运用默认值</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> message<span class="token operator">=</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>message<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">!&quot;</span></span>

<span class="token keyword">print</span><span class="token punctuation">(</span>greet<span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Hello, Alice!</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>greet<span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Hi, Bob!</span>
</code></pre></div><h3 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值" aria-hidden="true">#</a> 函数返回值</h3><p>函数可以返回一个或者多个值，返回多个值是实质上是一个元组。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 返回一个值</span>
<span class="token keyword">def</span> <span class="token function">is_even</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>
  <span class="token keyword">return</span> <span class="token boolean">False</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>is_even<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>is_even<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>

<span class="token comment"># 返回多个值</span>
<span class="token keyword">def</span> <span class="token function">min_max</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> <span class="token builtin">min</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">max</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>

low<span class="token punctuation">,</span> high <span class="token operator">=</span> min_max<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>  <span class="token comment"># 1 9</span>
</code></pre></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><p>Python中的模块一般主要有三类：</p><ul><li>内置模块：<code>Python</code>中自带的，可直接使用，例如<code>math</code>。</li><li>第三方模块：社区开发的模块，需要安装。</li><li>自定义模块：自己实现的模块。</li></ul><h3 id="内置模块" tabindex="-1"><a class="header-anchor" href="#内置模块" aria-hidden="true">#</a> 内置模块</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 内置math和datetime模块</span>
<span class="token keyword">import</span> math
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime

<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 4.0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>pi<span class="token punctuation">)</span>        <span class="token comment"># 3.141592653589793</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>factorial<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 120</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="第三方模块" tabindex="-1"><a class="header-anchor" href="#第三方模块" aria-hidden="true">#</a> 第三方模块</h3>`,85)),s("div",g,[n[6]||(n[6]=s("p",{class:"custom-container-title"},"TIP",-1)),s("p",null,[n[5]||(n[5]=a("第三方模块包地址：")),s("a",b,[n[4]||(n[4]=a("https://pypi.org/")),t(p)])])]),n[9]||(n[9]=o(`<p>第三方模块需要安装，安装后才能使用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ pip <span class="token function">install</span> pandas
</code></pre></div><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
   Name  Age
<span class="token number">0</span>  Alice   <span class="token number">25</span>
<span class="token number">1</span>    Bob   <span class="token number">30</span>
</code></pre></div><h3 id="自定义模块" tabindex="-1"><a class="header-anchor" href="#自定义模块" aria-hidden="true">#</a> 自定义模块</h3><p>自定义模块是指项目中自己模块。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># env_tools.py</span>
<span class="token keyword">import</span> os
<span class="token keyword">from</span> dotenv <span class="token keyword">import</span> load_dotenv<span class="token punctuation">,</span> find_dotenv

<span class="token keyword">def</span> <span class="token function">get_api_key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  load_dotenv<span class="token punctuation">(</span>find_dotenv<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">&#39;OPENAI_API_KEY&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_base_url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  load_dotenv<span class="token punctuation">(</span>find_dotenv<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">&#39;OPENAI_BASE_URL&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>在其它模块中引入(例如<code>main.py</code>)：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># main.py中引入</span>
<span class="token keyword">from</span> env_tools <span class="token keyword">import</span> get_api_key<span class="token punctuation">,</span> get_base_url

<span class="token keyword">print</span><span class="token punctuation">(</span>get_api_key<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>get_base_url<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="面向对象编程" tabindex="-1"><a class="header-anchor" href="#面向对象编程" aria-hidden="true">#</a> 面向对象编程</h2><p>面向对象编程(OOP)是<code>Python</code>的核心特性之一，它通过类(<code>Class</code>)和对象(<code>Object</code>)组织代码，提高代码的复用性和可维护性。</p><h3 id="类和实例" tabindex="-1"><a class="header-anchor" href="#类和实例" aria-hidden="true">#</a> 类和实例</h3><ul><li>类(<code>Class</code>): 类是定义对象的模版(属性和方法)。</li><li>实例(<code>Instance</code>)：实例是根据类创建的具体对象。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
  <span class="token comment"># 类属性（所有实例共享）</span>
  species <span class="token operator">=</span> <span class="token string">&quot;Canis familiaris&quot;</span>

  <span class="token comment"># 初始化方法（构造函数）</span>
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> name  <span class="token comment"># 实例属性</span>
    self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

  <span class="token comment"># 实例方法</span>
  <span class="token keyword">def</span> <span class="token function">bark</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> says Woof!&quot;</span></span>

<span class="token comment"># 创建实例</span>
dog1 <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;Buddy&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
dog2 <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;Milo&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>dog1<span class="token punctuation">.</span>bark<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出: Buddy says Woof!</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dog2<span class="token punctuation">.</span>species<span class="token punctuation">)</span>  <span class="token comment"># 输出: Canis familiaris</span>
</code></pre></div><h3 id="访问限制" tabindex="-1"><a class="header-anchor" href="#访问限制" aria-hidden="true">#</a> 访问限制</h3><p><code>Python</code>通过命名约定实现封装，控制属性和方法的访问权限。</p><ul><li>公有成员：默认，例如命名为<code>name</code>。</li><li>受保护成员：约定为内部使用，例如命名为<code>_name</code>。</li><li>私有成员：无法直接访问，例如命名为<code>__name</code>。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">BankAccount</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> balance<span class="token punctuation">,</span> phone<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token comment"># 公共属性</span>
    self<span class="token punctuation">.</span>_phone <span class="token operator">=</span> phone <span class="token comment"># 受保护属性</span>
    self<span class="token punctuation">.</span>__balance <span class="token operator">=</span> balance  <span class="token comment"># 私有属性</span>

  <span class="token comment"># 公有方法访问私有属性</span>
  <span class="token keyword">def</span> <span class="token function">get_balance</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>__balance
  
  <span class="token keyword">def</span> <span class="token function">get_phone</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>_phone

  <span class="token keyword">def</span> <span class="token function">deposit</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_phone<span class="token punctuation">)</span>
    <span class="token keyword">if</span> amount <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
      self<span class="token punctuation">.</span>__balance <span class="token operator">+=</span> amount

<span class="token comment"># 创建实例</span>
account <span class="token operator">=</span> BankAccount<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;13211112222&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># &#39;admin&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>get_phone<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 13211112222</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>get_balance<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 1000</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>_phone<span class="token punctuation">)</span>  <span class="token comment"># 访问受保护属性，不报错</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>__balance<span class="token punctuation">)</span>  <span class="token comment"># 访问私有属性，会报错</span>
</code></pre></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>子类可以继承父类(一个或者多个)的属性和方法，并可以扩展或重写。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

  <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">raise</span> NotImplementedError<span class="token punctuation">(</span><span class="token string">&quot;子类必须实现此方法&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> says Meow!&quot;</span></span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> says Woof!&quot;</span></span>

<span class="token comment"># 创建子类实例</span>
cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token string">&quot;Whiskers&quot;</span><span class="token punctuation">)</span>
dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;Buddy&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>cat<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出: Whiskers says Meow!</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出: Buddy says Woof!</span>
</code></pre></div>`,20))])}const q=l(r,[["render",w],["__file","index.html.vue"]]);export{q as default};
