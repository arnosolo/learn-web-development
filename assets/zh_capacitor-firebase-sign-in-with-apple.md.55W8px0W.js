import{_ as e,c as n,m as s,a as t,t as a,a2 as l,o as p}from"./chunks/framework.4fslPEqk.js";const h="/learn-web-development/assets/b1a3924323380e01be61f2d87434b027f683366e4589233e192cca3d4501a7fa.BfHOh2DB.png",k="/learn-web-development/assets/be935cef129a29478ba09ef22cd0dc778b7e1e01511586c0ede6ac3c3315bcc1.Ap75aaX8.png",r="/learn-web-development/assets/db1bfcb28c7ff263055cc7680f1992c9888669184e81f44c1bb35f6da8a65827.CY6YkadZ.png",c="/learn-web-development/assets/9a852817cdc36289ddab6ca0f3889c884f501df36e3a0b1f1e0119ef52487dbf.DjL4lSwU.png",m=JSON.parse('{"title":"Capacitor Firebase Sign in with Apple","description":null,"frontmatter":{"title":"Capacitor Firebase Sign in with Apple","lang":"zh-CN","description":null},"headers":[],"relativePath":"zh/capacitor-firebase-sign-in-with-apple.md","filePath":"zh/capacitor-firebase-sign-in-with-apple.md"}'),d={name:"zh/capacitor-firebase-sign-in-with-apple.md"},o={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),g=l('<ol><li>在 <code>Firebase Console</code> &gt; <code>Authentication</code>, 启动 <code>Sign in with Apple</code>. 记下 Firebase 提供的 <code>callback URL</code>. <img src="'+h+'" alt="picture 1"></li><li>在 <code>Apple Developer</code> &gt; <a href="https://developer.apple.com/account/resources" target="_blank" rel="noreferrer">Certificates, Identifiers &amp; Profiles</a> 找到当前应用. 增加 <code>Sign in with Apple</code> 能力, 同时填入之前之前步骤记下的 <code>callback URL</code>. <img src="'+k+'" alt="picture 3"></li><li>在 <code>Xcode</code> 中增加 <code>Capability</code> &gt; <code>Sign in with Apple</code><img src="'+r+`" alt="picture 5"></li><li>增加 <code>Sign in with Apple</code> 相关的代码<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// src/stores/auth.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { FirebaseAuthentication } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@capacitor-firebase/authentication&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> signInWithApple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FirebaseAuthentication.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signInWithApple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[signInWithApple] success, uid = &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user?.uid)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      currentUser.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[signInWithApple] error &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li>如果整合是成功的, 点下苹果登录的按钮后, 一个描述为 &quot;Create an account for APP_NAME using your Apple ID YOUR_APPLE_ID&quot; 的对话框会弹出 <img src="`+c+'" alt="picture 6"></li></ol>',1);function y(i,F,f,u,A,b){return p(),n("div",null,[s("h1",o,[t(a(i.$frontmatter.title)+" ",1),E]),s("p",null,a(i.$frontmatter.description),1),g])}const C=e(d,[["render",y]]);export{m as __pageData,C as default};