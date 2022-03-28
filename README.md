1) Запустить контейнер c БД Postgres:
```shell
docker-compose -d up
```
2) Скопировать конфигурацию `.env.example` в `.env`
3) Собрать и запустить приложение:
```shell
npm install
npm run db:create && npm run db:migrate && npm run db:seeds
npm run dev
```