# auth-service-migration
### Hướng dẫn sử dụng sequelize
* Cài đặt express generator [express generator] (https://expressjs.com/en/starter/generator.html);
* Cài đặt sequelize-cli trên máy: sudo npm install -g sequelize-cli 
* [sequelize document](https://sequelize.readthedocs.io/en/v3/docs/migrations/)

    * Hướng dẫn doc: 
  > sequelize --help

  * Tạo 1 file migration thêm sửa xoá cột: 
  > sequelize migration:create --name ten_bang_add_ten_truong

  * Tạo 1 table mới: 
  > sequelize model:generate --name users --attributes username:string,email:string  --underscored

  * Run migration: 
  > sequelize db:migrate
  
  * Undo gần nhất migration: 
  > sequelize db:migrate:undo

