module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'example',
  database: 'cars',
  entities: ['dist/**/entities/*{.ts,.js}'],
  synchronize: true, // 開発環境のみtrueが推奨
};
