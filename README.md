./web/.example.env -> .env

### At root folder

```bash
docker compose up
```

### to import dev database

```bash
docker exec -i <назва_контейнера_бд> mysql -u wordpress -pwordpress wordpress < dump.sql

```

My name of container db example is 'digitalfizmat-db-1'

##

To see changes at front, stop web container in docker and run:

```bash
cd ./web
npm i
npm run dev
```

### To export dev db

```bash
docker exec digitalfizmat-db-1 mysqldump -u root -psomewordpress wordpress > dump.sql
```
