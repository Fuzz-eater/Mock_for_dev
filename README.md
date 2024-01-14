## Mock for dev
モックを簡単に利用することのできるアプリケーション

UI: モックのエンドポイント・値を登録することが可能

API: UIで登録したエンドポイントにリクエストすることで、登録した値を返す

## 使用技術
フロントエンド: [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/)

バックエンド: [prisma](https://www.prisma.io/)

## 利用方法

1. `compose.yml`ファイルにMySQLのrootユーザのパスワードを記載
2. `.env`ファイルを修正

```bash
# DBサーバ情報・ホスト名を記載する
vi .env
```

3. マイグレーション、シードを実行

```bash
npx prisma migrate dev
```

4. サーバーを起動

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:8080](http://localhost:8080) へアクセスすることでアプリケーションを利用できます。
