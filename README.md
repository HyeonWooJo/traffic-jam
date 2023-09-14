# Sequelize Migration

## Sequelize init
```
npx sequelize-cli init 
```

## config.json 설정
- init 후 config/config.json 경로 및 파일이 생성됨
- config.json에 DB 연결에 필요한 정보 작성

## Model 생성
```
npx sequelize-cli model:generate --name {modelName} --attributes {columnName}:{datatype}
```

## Migration
```
npx sequelize-cli db:migrate     
```