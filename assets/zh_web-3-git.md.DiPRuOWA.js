import{_ as t,c as n,m as s,a as l,t as a,a2 as h,o as e}from"./chunks/framework.4fslPEqk.js";const p="/learn-web-development/assets/0cfc143ddfaf6dfb87025ee61b68a2860b4a99f1f09a8cfe61383ef9b91ef7a5.C2KyLQt2.png",k="/learn-web-development/assets/6b59c98925b15b450c4c22e0c9b47b9a86b747bbe3c06303f45747c4732e457e.ADtmZO-9.png",d="/learn-web-development/assets/42a1612112f6a1cf45b8de332b3dfe0692aa55cae01faeb576a45fcd6f5a2920.DuI7nIcJ.png",r="/learn-web-development/assets/9505e7005b367e6b79e51dfddef56c4d07c6d8760697c8bc43de610585afe2be.Cl1E1fx_.png",o="/learn-web-development/assets/85ef90911887963c27dc590a9ca60984f9e7b4ff6f2b2b2b8e0ef989ab448732.B87Uvise.png",g="/learn-web-development/assets/3efa0c747a13af9c961b69117881cb8705b58159c45b5367d1a00e5d45fb2696.vc9g45gh.png",A=JSON.parse('{"title":"Git 的基本使用","description":"阅读完本文后, 您将了解到如何初始化 git, 增加 commit, 撤销 commit, 将 commit 提交到 Github, 如何发起一个 Pull request.","frontmatter":{"title":"Git 的基本使用","lang":"zh-CN","description":"阅读完本文后, 您将了解到如何初始化 git, 增加 commit, 撤销 commit, 将 commit 提交到 Github, 如何发起一个 Pull request."},"headers":[],"relativePath":"zh/web-3-git.md","filePath":"zh/web-3-git.md"}'),c={name:"zh/web-3-git.md"},F={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),E=h(`<h2 id="创建-github-仓库" tabindex="-1">创建 Github 仓库 <a class="header-anchor" href="#创建-github-仓库" aria-label="Permalink to &quot;创建 Github 仓库&quot;">​</a></h2><h3 id="初始化-git" tabindex="-1">初始化 Git <a class="header-anchor" href="#初始化-git" aria-label="Permalink to &quot;初始化 Git&quot;">​</a></h3><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> demo1-learn-git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入文件夹</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> demo1-learn-git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始化 Git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>列出该目录下的所有文件, 如果多出了一个 <code>.git</code> 文件夹, 则初始化成功.</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span></code></pre></div><h3 id="增加-commit" tabindex="-1">增加 commit <a class="header-anchor" href="#增加-commit" aria-label="Permalink to &quot;增加 commit&quot;">​</a></h3><p>这一步使用了<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code 文本编辑器</a>来帮助理解.</p><ol><li>使用<code>VS Code</code>打开上一步创建的文件夹.</li><li>在该文件夹下创建一个文件, 可以是任何文件, 这里我选择创建一个<code>index.html</code>文件</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Document&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol><li>接下来我们将<code>index.html</code>文件放入<code>暂存区(index)</code>. 实现的方式有两种, 第一种是使用<code>VS Code</code>的图像界面进行操作. 具体来说就是先点击左侧导航栏中的分支图标按钮, 然后将<code>Changes</code>列表下的点击<code>index.html</code>行中的加号. 点击后我们会发现<code>index.html</code>行会从<code>Changes</code>列表转移到<code>Staged Changes</code>. 此时我们便知道<code>index.html</code>文件被放入了<code>暂存区</code>. <img src="`+p+`" alt="picture 0"></li><li>上一步操作也可以使用命令行来完成. 当你输入此命令时, 图形界面会同步变化.<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add index.html # 放入暂存区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm index.html # 移出暂存区</span></span></code></pre></div></li><li>这一步, 我们使用<code>暂存区</code>的文件变化创建一个<code>commit</code>. 第一种是图形界面的方式. 在 Message 输入框中输入一段文字, 然后点击 Commit 按钮. <img src="`+k+`" alt="picture 2"> 它的等效命令是<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit -m &quot;Create index page&quot;</span></span></code></pre></div></li><li>列出所有的<code>commits</code><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # f8563535fa07b82892b04b8100799308d61a06c7 是当前 commit 的 ID</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f8563535fa07b82892b04b8100799308d61a06c7 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HEAD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Arno Solo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">..@outlook.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Tue Jun </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:09:47 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index page</span></span></code></pre></div></li><li>尝试在多增加几个<code>commits</code>, 比如说把网页的标题修改为&quot;Ha ha&quot;.</li></ol><blockquote><p>你可以使用 <code>git -h</code> 命令列出帮助信息</p></blockquote><h3 id="撤销-commit" tabindex="-1">撤销 commit <a class="header-anchor" href="#撤销-commit" aria-label="Permalink to &quot;撤销 commit&quot;">​</a></h3><ol><li>首先列出所有的<code>commits</code><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acb6201a4cc1038014eb19ce1f84337ab79fc767 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HEAD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Arno Solo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...@outlook.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Wed Jun </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 06</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:27:15 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f8563535fa07b82892b04b8100799308d61a06c7</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Arno Solo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...@outlook.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Tue Jun </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:09:47 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index page</span></span></code></pre></div></li><li>然后撤销<code>commit</code>. 预期最新的一个<code>commit</code>会被移除, 转入<code>暂存区</code><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset --soft HEAD~1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f8563535fa07b82892b04b8100799308d61a06c7 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HEAD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Arno Solo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...@outlook.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Tue Jun </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:09:47 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index page</span></span></code></pre></div></li><li>最后撤回上一步的撤销操作. 预期上一步撤销的<code>commit</code>又出现在了<code>commit</code>记录的顶部<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset &#39;HEAD@{1}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acb6201a4cc1038014eb19ce1f84337ab79fc767 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HEAD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Arno Solo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...@outlook.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Wed Jun </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 06</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:27:15 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f8563535fa07b82892b04b8100799308d61a06c7</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Arno Solo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...@outlook.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Tue Jun </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:09:47 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index page</span></span></code></pre></div></li></ol><h3 id="上传代码到-github-仓库" tabindex="-1">上传代码到 Github 仓库 <a class="header-anchor" href="#上传代码到-github-仓库" aria-label="Permalink to &quot;上传代码到 Github 仓库&quot;">​</a></h3><h4 id="首次上传" tabindex="-1">首次上传 <a class="header-anchor" href="#首次上传" aria-label="Permalink to &quot;首次上传&quot;">​</a></h4><ol><li>打开 <a href="https://github.com" target="_blank" rel="noreferrer">https://github.com</a> 网站.</li><li>(如需) 注册一个 Github 帐号.</li><li>创建一个<a href="https://github.com/new" target="_blank" rel="noreferrer">新的repository</a>. <code>仓库(Repository)</code>类型选择<code>Private</code>.</li><li>创建完成后, 您将会被重定向到<code>repository</code>的详情页. 可以看到上传代码的基本的流程已被给出.<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 添加一个名为 origin 的远程仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote add origin https://github.com/YOUR_USER_NAME/demo1-learn-git.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 重命名当前分支为 main. -M 的意思是 move</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch -M main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 将本地的 main 分支上传到叫做 origin 的远程仓库. 同时设置本地 main 分支的 upstream 分支为 origin 仓库的 main 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push -u origin main</span></span></code></pre></div></li><li>刷新 Github 仓库网页, 预期此时仓库不再为空. <img src="`+d+`" alt="picture 3"></li></ol><h4 id="再次上传" tabindex="-1">再次上传 <a class="header-anchor" href="#再次上传" aria-label="Permalink to &quot;再次上传&quot;">​</a></h4><p>当又有新的<code>commit</code>被创建, 需要再次上传时, 就不再需要设置远程仓库了, 直接使用<code>git push</code>命令即可.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><h2 id="发起-pull-request" tabindex="-1">发起 Pull Request <a class="header-anchor" href="#发起-pull-request" aria-label="Permalink to &quot;发起 Pull Request&quot;">​</a></h2><p>在多人合作的项目中, 我们作为普通开发者一般没有使用<code>git push</code>命令直接上传代码的权限. 此时我们就需要发起一个 <code>Pull Request</code> 请求项目维护者合并我们的<code>commit</code>.</p><h3 id="创建分支" tabindex="-1">创建分支 <a class="header-anchor" href="#创建分支" aria-label="Permalink to &quot;创建分支&quot;">​</a></h3><ol><li>首先, 列出所有分支. 可以看到, 一共有两个分支, 一个是<code>main</code>分支. 另一个是<code>origin/main</code>分支, 也就是<code>main</code>分支的远程分支<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch -avv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main                acb6201 [origin/main] Update title</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   remotes/origin/main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acb6201 Update title</span></span></code></pre></div></li><li>创建一个新的分支<code>rename-page-title</code><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout -b rename-page-title</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch -avv</span></span></code></pre></div></li><li>尝试在<code>rename-page-title</code>分支和<code>main</code>分支之间相互切换<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout rename-page-title</span></span></code></pre></div></li></ol><h3 id="修改代码" tabindex="-1">修改代码 <a class="header-anchor" href="#修改代码" aria-label="Permalink to &quot;修改代码&quot;">​</a></h3><ol><li>切换到<code>rename-page-title</code>分支, 开始修改<code>index.html</code>的代码<div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">- &lt;h1&gt;Ha ha&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ &lt;h1&gt;Hello&lt;/h1&gt;</span></span></code></pre></div></li><li>将改动后的<code>index.html</code>文件放入<code>暂存区</code><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add index.html</span></span></code></pre></div></li><li>使用<code>暂存区</code>中的文件创建一个<code>commit</code><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit -m &quot;Rename page title&quot;</span></span></code></pre></div></li><li>打印 git 日志. 预期一个新的<code>commit</code>被创建, 且不是在<code>main</code>分支<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1856</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">f815500d8923503b99fcb542e2acc6dd6df7 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HEAD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rename-page-title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Arno Solo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...@outlook.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Wed Jun </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 08</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:07:36 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Rename</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> page title</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acb6201a4cc1038014eb19ce1f84337ab79fc767 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">origin/main,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Arno Solo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...@outlook.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Wed Jun </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 06</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:27:15 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title</span></span></code></pre></div></li></ol><h3 id="上传分支" tabindex="-1">上传分支 <a class="header-anchor" href="#上传分支" aria-label="Permalink to &quot;上传分支&quot;">​</a></h3><ol><li>上传分支<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push -u origin rename-page-title</span></span></code></pre></div></li><li>(可选) 列出所有分支, 预期会出现 origin/rename-page-title 分支<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch -avv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                             acb6201 [origin/main] Update title</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rename-page-title                </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1856</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">f81 [origin/rename-page-title] Rename page title</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   remotes/origin/main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              acb6201 Update title</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   remotes/origin/rename-page-title</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1856</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">f81 Rename page title</span></span></code></pre></div></li><li>后续有改动时使用<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div></li></ol><h3 id="创建-pull-request" tabindex="-1">创建 Pull Request <a class="header-anchor" href="#创建-pull-request" aria-label="Permalink to &quot;创建 Pull Request&quot;">​</a></h3><ol><li>打开你的 Github 仓库, 点击 <code>Pull Request</code> 标签, 点击 <code>New pull request</code><img src="`+r+'" alt="picture 4"></li><li>选择对比分支为 <code>rename-page-title</code><img src="'+o+'" alt="picture 5"></li><li>点击<code>Create pull request</code></li><li>复制新创建的 <code>Pull Request</code> 的地址, 发给有 <code>Pull Request</code> 合并权限的人. 示例 <a href="https://github.com/arnosolo/demo1-learn-git/pull/1" target="_blank" rel="noreferrer">https://github.com/arnosolo/demo1-learn-git/pull/1</a><img src="'+g+`" alt="picture 6"></li></ol><h3 id="合并-pull-request" tabindex="-1">合并 Pull Request <a class="header-anchor" href="#合并-pull-request" aria-label="Permalink to &quot;合并 Pull Request&quot;">​</a></h3><ol><li>仓库维护者打开你发送的<code>Pull Request</code>地址, 开始阅读你的<code>commits</code></li><li>如果他觉得你的修改没有问题, 他就会点击网页上的 <code>Merge pull request</code> 来合并你的代码.</li><li>代码被仓库维护者合并的意思是, <code>origin/main</code>分支(也就是 Github 上的分支)上增加了一个<code>commit</code>, 里面是你发起的 <code>Pull Request</code> 的内容.</li><li>我们可以使用 <code>git pull</code> 命令获取最新的变化.</li><li>此时我们再列出 git 日志, 可以发现最新的<code>commit</code>的消息中显示它创建自一个 <code>Pull Request</code> 的合并.<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f7dd80caa809bbf71c28673cc2293568579edc13 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HEAD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main, origin/main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Merge:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acb6201 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1856</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">f81</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Arno Solo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">46125820+arnosolo@users.noreply.github.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Sat Jun </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:09:34 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   Merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull request #1 from arnosolo/rename-page-title</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   Rename</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> page title</span></span></code></pre></div></li></ol>`,31);function C(i,u,m,b,B,v){return e(),n("div",null,[s("h1",F,[l(a(i.$frontmatter.title)+" ",1),y]),s("p",null,a(i.$frontmatter.description),1),E])}const D=t(c,[["render",C]]);export{A as __pageData,D as default};
