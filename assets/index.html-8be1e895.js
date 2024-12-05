import{_ as e,r as c,o as u,c as l,a as p,b as o,e as a,d as t}from"./app-b584e672.js";const k={};function i(r,n){const s=c("leetcode-link");return u(),l("div",null,[n[0]||(n[0]=p("h1",{id:"简单",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#简单","aria-hidden":"true"},"#"),o(" 简单")],-1)),n[1]||(n[1]=p("h2",{id:"_94-二叉树的中序遍历",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#_94-二叉树的中序遍历","aria-hidden":"true"},"#"),o(" 94.二叉树的中序遍历")],-1)),a(s,{title:"94.二叉树的中序遍历",link:"https://leetcode.cn/problems/binary-tree-inorder-traversal"}),n[2]||(n[2]=t(`<p>方法一：递归</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为二叉树节点的数量</span>
<span class="token comment">// way1: 递归</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历每一个节点</span>
<span class="token comment">// 空间复杂度：O(n)，需要维护递归调用栈</span>
<span class="token keyword">var</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
  list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">inOrderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>方法二：栈</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为二叉树节点的数量</span>
<span class="token comment">// way1: 栈</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历每一个节点</span>
<span class="token comment">// 空间复杂度：O(n)，维护栈空间的大小</span>
<span class="token keyword">var</span> <span class="token function-variable function">inOrderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>root <span class="token operator">||</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
      root <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      root <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_101-对称二叉树" tabindex="-1"><a class="header-anchor" href="#_101-对称二叉树" aria-hidden="true">#</a> 101.对称二叉树</h2>`,5)),a(s,{title:"101.对称二叉树",link:"https://leetcode.cn/problems/symmetric-tree"}),n[3]||(n[3]=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为二叉树节点的数量</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历每一个节点</span>
<span class="token comment">// 空间复杂度：O(n)，需要维护递归栈的内存开销</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> left<span class="token punctuation">.</span>val <span class="token operator">===</span> right<span class="token punctuation">.</span>val
    <span class="token operator">&amp;&amp;</span> <span class="token function">checkNode</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>left<span class="token punctuation">,</span> right<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">checkNode</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>right<span class="token punctuation">,</span> right<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSymmetric</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">checkNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_104-二叉树的最大深度" tabindex="-1"><a class="header-anchor" href="#_104-二叉树的最大深度" aria-hidden="true">#</a> 104.二叉树的最大深度</h2>`,2)),a(s,{title:"104.二叉树的最大深度",link:"https://leetcode.cn/problems/maximum-depth-of-binary-tree"}),n[4]||(n[4]=t(`<p>方法一：深度优先遍历(DFS)</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为二叉树中节点的数量</span>
<span class="token comment">// way1: 深度优先遍历(DFS)</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历每个节点</span>
<span class="token comment">// 空间复杂度：O(n)，最坏情况下是一个链表，递归调用栈的内存开销</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>方法二：广度优先遍历(BFS)</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为二叉树中节点的数量</span>
<span class="token comment">// way1: 广度优先遍历(BFS)</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历每个节点</span>
<span class="token comment">// 空间复杂度：O(n)，最坏情况下是一个平衡二叉树，对了中存储n/2个节点</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    size<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_108-将有序数组转换为二叉搜索树" tabindex="-1"><a class="header-anchor" href="#_108-将有序数组转换为二叉搜索树" aria-hidden="true">#</a> 108.将有序数组转换为二叉搜索树</h2>`,5)),a(s,{title:"108.将有序数组转换为二叉搜索树",link:"https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree"}),n[5]||(n[5]=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为数组的长度</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历每一个数组元素</span>
<span class="token comment">// 空间复杂度：O(logn)，递归栈的内存开销</span>
<span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortedArrayToBST</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_226-翻转二叉树" tabindex="-1"><a class="header-anchor" href="#_226-翻转二叉树" aria-hidden="true">#</a> 226.翻转二叉树</h2>`,2)),a(s,{title:"226.翻转二叉树",link:"https://leetcode.cn/problems/invert-binary-tree"}),n[6]||(n[6]=t(`<p>方法一：递归</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为二叉树节点的数量</span>
<span class="token comment">// way1: 递归</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历每一个节点</span>
<span class="token comment">// 空间复杂度：O(n)，最坏情况下是一个链表，递归调用栈的内存开销是O(n)</span>
<span class="token keyword">var</span> <span class="token function-variable function">invertTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> leftNode <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>方法二：辅助栈</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为二叉树节点的数量</span>
<span class="token comment">// way2: 辅助栈</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历每一个节点</span>
<span class="token comment">// 空间复杂度：O(n)，最坏情况下是一个链表，辅助栈内存开销为O(n)</span>
<span class="token keyword">var</span> <span class="token function-variable function">invertTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> leftNode <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    node<span class="token punctuation">.</span>left <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    node<span class="token punctuation">.</span>right <span class="token operator">=</span> leftNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_543-二叉树的直径" tabindex="-1"><a class="header-anchor" href="#_543-二叉树的直径" aria-hidden="true">#</a> 543.二叉树的直径</h2>`,5)),a(s,{title:"543.二叉树的直径",link:"https://leetcode.cn/problems/diameter-of-binary-tree"}),n[7]||(n[7]=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// n为二叉树节点的数量</span>
<span class="token comment">// 时间复杂度：O(n)，需要遍历一遍每个节点</span>
<span class="token comment">// 空间复杂度：O(n)，最坏情况下为一个链表，递归栈空间开销为o(n)</span>
<span class="token keyword">var</span> <span class="token function-variable function">diameterOfBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> left <span class="token operator">+</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,1))])}const f=e(k,[["render",i],["__file","index.html.vue"]]);export{f as default};