---
title: Capacitor Firebase Sign in with Apple
lang: zh-CN
description: 
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

1. 在 `Firebase Console` > `Authentication`, 启动 `Sign in with Apple`. 记下 Firebase 提供的 `callback URL`.
   ![picture 1](assets/b1a3924323380e01be61f2d87434b027f683366e4589233e192cca3d4501a7fa.png)
2. 在 `Apple Developer` > [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources) 找到当前应用. 增加 `Sign in with Apple` 能力, 同时填入之前之前步骤记下的 `callback URL`.
   ![picture 3](assets/be935cef129a29478ba09ef22cd0dc778b7e1e01511586c0ede6ac3c3315bcc1.png)
3. 在 `Xcode` 中增加 `Capability` > `Sign in with Apple`
   ![picture 5](assets/db1bfcb28c7ff263055cc7680f1992c9888669184e81f44c1bb35f6da8a65827.png)
4. 增加 `Sign in with Apple` 相关的代码
   ```ts
   // src/stores/auth.ts
   import { FirebaseAuthentication } from '@capacitor-firebase/authentication'

   const signInWithApple = async (): Promise<User | null> => {
      try {
         const { user } = await FirebaseAuthentication.signInWithApple()
         console.log('[signInWithApple] success, uid = ', user?.uid)
         currentUser.value = user
         return user
      }
      catch (error) {
         console.log('[signInWithApple] error ', JSON.stringify(error, null, 2))
         return null
      }
   }
   ```
5. 如果整合是成功的, 点下苹果登录的按钮后, 一个描述为 "Create an account for APP_NAME using your Apple ID YOUR_APPLE_ID" 的对话框会弹出
   ![picture 6](assets/9a852817cdc36289ddab6ca0f3889c884f501df36e3a0b1f1e0119ef52487dbf.png)
