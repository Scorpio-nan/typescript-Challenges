import{_ as u,r as e,o as l,c as k,a as s,b as t,e as a,d as o}from"./app-b584e672.js";const i={},r={class:"custom-container tip"},d={href:"https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"};function m(y,n){const p=e("leetcode-link"),c=e("ExternalLinkIcon");return l(),k("div",null,[n[4]||(n[4]=s("h1",{id:"中等",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#中等","aria-hidden":"true"},"#"),t(" 中等")],-1)),n[5]||(n[5]=s("h2",{id:"_150-逆波兰表达式求值",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_150-逆波兰表达式求值","aria-hidden":"true"},"#"),t(" 150.逆波兰表达式求值")],-1)),a(p,{title:"150.逆波兰表达式求值",link:"https://leetcode.cn/problems/evaluate-reverse-polish-notation"}),s("div",r,[n[3]||(n[3]=s("p",{class:"custom-container-title"},"TIP",-1)),s("p",null,[n[1]||(n[1]=s("strong",null,"说明",-1)),n[2]||(n[2]=t("：")),s("a",d,[n[0]||(n[0]=t("逆波兰表达式")),a(c)])])]),n[6]||(n[6]=o(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为tokens字符串的长度</span>
<span class="token comment">// 时间复杂度：O(n)，需要完整遍历一遍tokens字符串</span>
<span class="token comment">// 空间复杂度：O(n)，栈存储的开销</span>
<span class="token keyword">var</span> <span class="token function-variable function">isNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">&#39;+&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> calculateMap <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;+&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;-&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;*&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num1 <span class="token operator">*</span> num2<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num1 <span class="token operator">/</span> num2 <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num1 <span class="token operator">/</span> num2<span class="token punctuation">)</span> <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>num1 <span class="token operator">/</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">evalRPN</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">tokens</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tokens<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> tokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNumber</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> num2 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> num1 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> num <span class="token operator">=</span> calculateMap<span class="token punctuation">[</span>token<span class="token punctuation">]</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_155-最小栈" tabindex="-1"><a class="header-anchor" href="#_155-最小栈" aria-hidden="true">#</a> 155.最小栈</h2>`,2)),a(p,{title:"155.最小栈",link:"https://leetcode.cn/problems/min-stack"}),n[7]||(n[7]=o(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为元素的数量</span>
<span class="token comment">// 时间复杂度：O(1)，入栈、出栈时间复杂度为常数阶</span>
<span class="token comment">// 空间复杂度：O(n + n)，常规栈空间大小 + 辅助栈空间大小</span>
<span class="token keyword">var</span> <span class="token function-variable function">MinStack</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>minStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">Infinity</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">top</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getMin</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_394-字符串解码" tabindex="-1"><a class="header-anchor" href="#_394-字符串解码" aria-hidden="true">#</a> 394.字符串解码</h2>`,2)),a(p,{title:"394.字符串解码",link:"https://leetcode.cn/problems/decode-string"}),n[8]||(n[8]=o(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为字符串的长度</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历字符串</span>
<span class="token comment">// 空间复杂度：O(n)，两个栈数组的开销</span>
<span class="token keyword">var</span> <span class="token function-variable function">decodeString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> numStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> strStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      numStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
      strStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> strStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>numStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res <span class="token operator">+=</span> char<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_739-每日温度" tabindex="-1"><a class="header-anchor" href="#_739-每日温度" aria-hidden="true">#</a> 739.每日温度</h2>`,2)),a(p,{title:"739.每日温度",link:"https://leetcode.cn/problems/daily-temperatures"}),n[9]||(n[9]=o(`<p>方法一：暴力对比</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>能运行测试用例，但提交会判定超时</p></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n是温度数组的长度</span>
<span class="token comment">// 时间复杂度：O(n²)，需要两次遍历对比</span>
<span class="token comment">// 空间复杂度：O(n)，返回结果数组的存储开销</span>
<span class="token keyword">var</span> <span class="token function-variable function">dailyTemperatures</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">temperatures</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> temperatures<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> temperatures<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>temperatures<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j <span class="token operator">-</span> i
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>方法二：单调栈</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n是温度数组的长度</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历一遍温度列表</span>
<span class="token comment">// 空间复杂度：O(n)，需要维护下标栈存储开销</span>
<span class="token keyword">var</span> <span class="token function-variable function">dailyTemperatures</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">temperatures</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> temperatures<span class="token punctuation">.</span>length；
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>；
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> temperatures<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&gt;</span> temperatures<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> peekIndex <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      result<span class="token punctuation">[</span>peekIndex<span class="token punctuation">]</span> <span class="token operator">=</span> index <span class="token operator">-</span> peekIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5))])}const w=u(i,[["render",m],["__file","index.html.vue"]]);export{w as default};
