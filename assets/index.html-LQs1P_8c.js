import{_ as s,c as a,b as p,o as e}from"./app-cBYekBN3.js";const t={};function o(l,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析"><span>复杂度分析</span></a></h1><p>复杂度分析犹如浩瀚的算法宇宙中的时空向导，它带领我们在时间与空间这两个维度上深入探索，寻找更优雅的解决方案。</p><h2 id="算法效率评估" tabindex="-1"><a class="header-anchor" href="#算法效率评估"><span>算法效率评估</span></a></h2><p>在算法设计中，我们先后追求以下两个层面的目标：</p><ol><li><strong>找到问题解法</strong>：算法需要在规定的输入范围内，可靠地求得问题的正确解。</li><li><strong>寻求最优解法</strong>：同一个问题可能存在多种解法，我们希望找到尽可能高效的算法。</li></ol><p>也就是说，在能够解决问题的前提下，算法效率已成为衡量算法优劣的主要评价指标，它包括以下两个维度。</p><ol><li><strong>时间效率</strong>：算法运行速度的快慢。</li><li><strong>空间效率</strong>：算法占用内存空间的大小。</li></ol><p>效率评估方法主要分为两种：实际测试、理论估算。由于实际测试具有较大的局限性，我们可以考虑仅通过一些计算来评估算法的效率。这种估算方法被称为「渐近复杂度分析 asymptotic complexity analysis」，简称「复杂度分析」。</p><p>复杂度分析体现算法运行所需的时间（空间）资源与输入数据大小之间的关系。<strong>它描述了随着输入数据大小的增加，算法执行所需时间和空间的增长趋势</strong>。</p><p>复杂度分析克服了实际测试方法的弊端，体现在以下两个方面：</p><ol><li>它独立于测试环境，分析结果适用于所有运行平台。</li><li>它可以体现不同数据量下的算法效率，尤其是在大数据量下的算法性能。</li></ol><h2 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h2><p>时间复杂度分析统计的不是算法运行时间，而是算法运行时间随着数据量变大时的增长趋势。</p><p>设输入数据的大小为<code>n</code>，则常见的时间复杂度类型如下：<br><strong>常数阶O(1)</strong> &lt; <strong>对数阶O(logn)</strong> &lt; <strong>线性阶O(n)</strong> &lt; <strong>线性对数阶O(nlogn)</strong> &lt; <strong>平方阶O(n²)</strong> &lt; <strong>指数阶O(2ⁿ)</strong> &lt; <strong>阶乘阶O(n!)</strong><img src="https://www.hello-algo.com/chapter_computational_complexity/time_complexity.assets/time_complexity_common_types.png" alt="常见时间复杂度类型"></p><h3 id="常数阶o-1" tabindex="-1"><a class="header-anchor" href="#常数阶o-1"><span>常数阶O(1)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 数量10000很大，但跟输入量n无关，依然为常数阶O(1)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">constant</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对数阶o-logn" tabindex="-1"><a class="header-anchor" href="#对数阶o-logn"><span>对数阶O(logn)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips：对数阶常见特性是：每轮缩减一半</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logarithmic</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">while</span><span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> count<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线性阶o-n" tabindex="-1"><a class="header-anchor" href="#线性阶o-n"><span>线性阶O(n)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 线性阶通常所输入量n线性增长，通常出现在单层遍历中。</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">linear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> count<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线性对数阶o-nlogn" tabindex="-1"><a class="header-anchor" href="#线性对数阶o-nlogn"><span>线性对数阶O(nlogn)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 线性对数阶常出现于嵌套循环中，两层循环的时间复杂度分别为O(logn)和O(n)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">linearLogRecur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">linearLogRecur</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">linearLogRecur</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> count<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="平方阶o-n2" tabindex="-1"><a class="header-anchor" href="#平方阶o-n2"><span>平方阶O(n²)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 平方阶通常出现在嵌套循环中，其中两层循环的时间复杂度都为O(n)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">quadratic</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> count<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指数阶o-2n" tabindex="-1"><a class="header-anchor" href="#指数阶o-2n"><span>指数阶O(2ⁿ)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 生物学中“细胞分裂”就是一个典型的指数阶案例，一生二，二生四...</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">exponential</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> base <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> base<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    base <span class="token operator">=</span> base <span class="token operator">*</span> <span class="token number">2</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 1 + 2 + 4 + ....+ 2^(n - 1) = 2^n - 1</span></span>
<span class="line">  <span class="token keyword">return</span> count<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阶乘阶o-n" tabindex="-1"><a class="header-anchor" href="#阶乘阶o-n"><span>阶乘阶O(n!)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 阶乘阶对应数学中的“全排列”问题：给定n个不重复的元素，求其所有可能的排列组合。</span></span>
<span class="line"><span class="token comment">// 公式：n! = n * (n - 1) * (n - 2) * ..... * 2 * 1</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">factorialRecur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    count <span class="token operator">+=</span> <span class="token function">factorialRecur</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> count<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度"><span>空间复杂度</span></a></h2><p>空间复杂度用于衡量算法占用内存空间随着数据量变大时的增长趋势，这个概念与时间复杂度非常类似，只需将“运行时间”替换为“占用内存空间”。</p><p>设输入数据的大小为<code>n</code>，则常见的空间复杂度类型如下： <strong>常数阶O(1)</strong> &lt; <strong>对数阶O(logn)</strong> &lt; <strong>线性阶O(n)</strong> &lt; <strong>平方阶O(n²)</strong> &lt; <strong>指数阶O(2ⁿ)</strong><img src="https://www.hello-algo.com/chapter_computational_complexity/space_complexity.assets/space_complexity_common_types.png" alt="常见空间复杂度类型"></p><h3 id="常数阶o-1-1" tabindex="-1"><a class="header-anchor" href="#常数阶o-1-1"><span>常数阶O(1)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 常数阶通常用于表示与输入量无关的常量，变量和对象的定义</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">constant</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 省略其他</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对数阶o-logn-1" tabindex="-1"><a class="header-anchor" href="#对数阶o-logn-1"><span>对数阶O(logn)</span></a></h3><p>对数阶常见与分治算法中。例如归并排序，输入长度为<code>n</code>的数组，每轮递归将数组从中点划分为两半，形成高度为<code>logn</code>的递归树，使用<code>O(logn)</code>栈帧空间。</p><h3 id="线性阶o-n-1" tabindex="-1"><a class="header-anchor" href="#线性阶o-n-1"><span>线性阶O(n)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 线性阶常见于元素数量与n成正比的数组、链表、栈、队列等</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">linear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="平方阶o-n2-1" tabindex="-1"><a class="header-anchor" href="#平方阶o-n2-1"><span>平方阶O(n²)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 平方阶常见于矩阵和图，元素数量与n成平方关系</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">quadratic</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> matrix</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指数阶o-2n-1" tabindex="-1"><a class="header-anchor" href="#指数阶o-2n-1"><span>指数阶O(2ⁿ)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// tips: 常见与二叉树结构中</span></span>
<span class="line"><span class="token comment">// 公式：2º + 2¹ + 2² + ... +2ⁿ﹣¹ = 2ⁿ - 1</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> root<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://www.hello-algo.com/chapter_computational_complexity/" target="_blank" rel="noopener noreferrer">Hello 算法 复杂度分析</a></li></ul>`,43)]))}const i=s(t,[["render",o]]),r=JSON.parse('{"path":"/algorithm/base/complexity/","title":"复杂度分析","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744560278000,"contributors":[{"name":"wangtunan","username":"wangtunan","email":"why583440138@gmail.com","commits":1,"url":"https://github.com/wangtunan"}],"changelog":[{"hash":"44e17fad17bb20449ce87cf5606b4f16dc25c479","time":1744560278000,"email":"why583440138@gmail.com","author":"wangtunan","message":"blog 设置CI/CD node版本"}]},"filePathRelative":"algorithm/base/complexity/README.md"}');export{i as comp,r as data};
