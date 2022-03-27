## アプリの稼働ページ

https://develop.d2v7zf0q29ma8x.amplifyapp.com/

please try it!
<br>

## 機能概要

1. 問題解決機能<br>
指示に従い、項目を入力していくことで手軽にベーシックな問題解決の４STEPを再現することが出来ます。
  + 問題定義 → 原因分析 → 解決立案 → アクション評価・決定
 
2. 問題解決保存機能（要サインアップ）<br>
行った問題解決を保存し、いつでも参照することが出来ます。
  
3. 問題解決サーチ機能【未実装】<br>
他人が後悔する問題解決を探し、参照することが出来ます

4. SNS投稿【未実装】

<br>

## システム構成

+ フロントエンド
  + React(Next.js)　
  + 主要ライブラリに、MUI・Recoil・Amplifyライブラリ
  + Amplify Consoleにホスト

<br>

+ バックエンド
  + サーバレス構成（aws系のサービス使用）
  + 認証系： Cognito
  + バックエンドAPI+データ永続化 :  AppSync+DynamoDB

## サービスの狙い
<br>
+ 対象課題
人生のライフタスクについて、大きいものも小さいものも「わかっちゃいるけど動き出せない」という状況に陥ることがある。<br>
この時の原因としては、現実的に行動力というものの源泉になるものである、対象目標・欲求に対する把握可能感・処理可能感・有意味感の実感（コヒーレンス感）が不足が挙げられる。

+ ソリューション
上記課題に対し、言うまでもなく意味のない精神論ではなく、具体的な補助を提供すべきと考える。<br>
この時、ビジネス上で定番となっている問題解決のフレームワークを適応することで、日常課題についてもコヒーレンス感獲得の助けになると考えた。<br>
よって、① フレームワークを知る必要がなく ② 手軽にそれを駆使できるサービスを作成した。
