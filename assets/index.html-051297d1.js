import{_ as t,r as o,o as e,c,a as s,b as a,e as u,d as l}from"./app-b584e672.js";const k={};function r(i,n){const p=o("leetcode-link");return e(),c("div",null,[n[0]||(n[0]=s("h1",{id:"困难",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#困难","aria-hidden":"true"},"#"),a(" 困难")],-1)),n[1]||(n[1]=s("h2",{id:"_4-寻找两个正序数组的中位数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-寻找两个正序数组的中位数","aria-hidden":"true"},"#"),a(" 4.寻找两个正序数组的中位数")],-1)),u(p,{title:"4.寻找两个正序数组的中位数",link:"https://leetcode.cn/problems/median-of-two-sorted-arrays"}),n[2]||(n[2]=l(`<p>方法一：暴力合并数组</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// m，n分别为两个数组的元素数量</span>
<span class="token comment">// 时间复杂度：O(m + n)</span>
<span class="token comment">// 空间复杂度：O(m + n)</span>
<span class="token keyword">var</span> <span class="token function-variable function">getNumsMid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMedianSortedArrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getNumsMid</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getNumsMid</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 第一个数组先遍历完毕时</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 第二个数组先遍历完毕时</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 按大小排序</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nums<span class="token punctuation">[</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      nums<span class="token punctuation">[</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 在新数组中去中位数</span>
  <span class="token keyword">return</span> <span class="token function">getNumsMid</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>方法二：虚拟合并</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// m，n分别为两个数组的元素数量</span>
<span class="token comment">// 时间复杂度：O(m + n)</span>
<span class="token comment">// 空间复杂度：O(1)</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMedianSortedArrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> m <span class="token operator">+</span> n<span class="token punctuation">;</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> aStart <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> bStart <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>aStart <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>aStart<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">[</span>bStart<span class="token punctuation">]</span> <span class="token operator">||</span> bStart <span class="token operator">&gt;=</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right <span class="token operator">=</span> nums1<span class="token punctuation">[</span>aStart<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      right <span class="token operator">=</span> nums2<span class="token punctuation">[</span>bStart<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> right<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>方法三：二分法</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 撰写中。。。</span>
</code></pre></div>`,6))])}const d=t(k,[["render",r],["__file","index.html.vue"]]);export{d as default};
