## SETUP How to use this server

1. Clone the app

```
git clone git@github.com:YOUR_GITHUB_NAME/YOUR_PROJECT_NAME.git
```

2. cd into your project

```
cd YOUR_PROJECT_NAME
```

3. install dependencies

```
npm install
```

4. Configure your secrets in a .env file in the root of your folder

```
DATABASE_DEV=YOUR_POSTGRES_URL_HERE
JWT_SECRET_DEFAULT=YOUR_JWT_SECRET_DEFAULT_HERE

```

6. Create database, run migrations & seed data

`package.json` contains a script for this

```bash
npm run initdev
```

Or run the commands seperately

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

7. start server with `nodemon` (recommended for development)

```
npm run dev
```

8. or start normally

```
npm start
```
