---
title: Capacitor Firebase Sign in with Apple
lang: zh-CN
description: 
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

1. 在 Firebase Console > Auth, 启动 Sign in with Apple. 记下 Firebase 提供的 callback URL.
2. 在 Apple developer > [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources) 找到当前应用.
3. 增加 Sign in with Apple 能力, 同时填入之前之前步骤记下的 callback URL
   ![picture 3](assets/be935cef129a29478ba09ef22cd0dc778b7e1e01511586c0ede6ac3c3315bcc1.png)
4. 在 https://developer.apple.com/account/resources/authkeys/list 页面, 创建一个新的`key`, 记得必须勾选 `Sign in with Apple`, 下载该`key`.
   ![picture 4](assets/6daaa27e1d7790facdc7ce0ffa060d1d3391ac536cdb6402a040ac723dda6f37.png)
5. 在 `Xcode` 中增加 `Capability` > `Sign in with Apple`
   ![picture 5](assets/db1bfcb28c7ff263055cc7680f1992c9888669184e81f44c1bb35f6da8a65827.png)
6. 增加 `Sign in with Apple` 相关的代码
7. 如果整合是成功的, 点下苹果登录的按钮后, 一个描述为 "Create an account for APP_NAME using your Apple ID YOUR_APPLE_ID" 的对话框会弹出
   ![picture 6](assets/9a852817cdc36289ddab6ca0f3889c884f501df36e3a0b1f1e0119ef52487dbf.png)
