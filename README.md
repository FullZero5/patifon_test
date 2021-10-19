# Тестовое задание на позицию Frontend-разработчика

Приложение состоит одной страницы разделенной на две части.   
В левой части отображаются списки сущностей с переключателем.   
В правой части отображаются формы редактирования сущностей.   
Форма редактирования проблемы должна предоставлять возможность редактировать все поля сущности, кроме id, longitude, latitude.  
Форма редактирования задачи должна предоставлять возможность редактировать название задачи и пользователя, на которого она назначена.  

Если имеющиеся компоненты чем-то не устраивают их можно удалить/переделать/заменить на другие.   
Главное чтобы в левой части были переключаемые списки задач/проблем, в правой части — формы редактирования.  
При необходимости можно устанавливать любые дополнительные библиотеки.  

### Результатом выполненного тестового является веб-приложение, которое:
1) загружает список проблем из API и показывает их в списке в левой части интерфейса
1) загружает список задач из API и показывает их в списке в левой части интерфейса
1) корректно обрабатывает переключение между задачами и проблемами
1) при выборе в списке проблемы — отображает форму редактирования в правой части окна, 
   список остается виден, в поля формы подставляются данные выбранной записи
1) загружает список программ для формы из API
1) сохраняет данные в API при сохранении формы редактирования проблемы
1) позволяет запускать задачи для проблемы с формы редактирования по нажатию кнопки, 
   используя специальный метод API
1) при выборе в списке задачи — отображает форму редактирования в правой части окна, 
   список остается виден, в поля формы подставляются данные выбранной задачи
1) загружает список пользователей для назначения задач из API
1) сохраняет изменения на форме редактирования задачи в API
1) при обновлении проблемы или задачи с формы — запись в списке так же должна обновиться


#### Дополнительно:
1) в списке задач в каждом элементе отображается название потребности связанной с задачей и имя пользователя
1) на форме задачи отображается название потребности к которой относится задача
1) постраничная загрузка записей в список задач/проблем(так называемый infinity scroll)
1) на форме редактирования проблемы есть секция со списком задач, который отображает задачи только указанной проблемы
1) выбор задачи для редактирования из списка задач проблемы
1) юнит-тесты
1) приложение развернуто на github-pages и путь к API можно указать на странице приложения



## API
В реализации данного тестового задания необходимо взаимодействие с API.   
API сервер запускается следующими командами:
```
docker build -t server - < Dockerfile
docker run -d --name api-server -p 8015:8084 server
```
после запуска контейнера на порту 8015 доступен API-сервер со следующими возможностями

Получить список пользователей: `GET /api/user`  
Получить список программ: `GET /api/program`  
Получить список роблем (1): `GET /api/issue`  
Получить одну запись проблемы: `GET /api/issue/<issue_id>`  
Отредактировать запись пробелмы: `PUT /api/issue/<issue_id>`  
Создать задачу для решения проблемы: `POST /api/issue/<issue_id>/start-task`    
Получить список задач по проблеме: `GET /api/issue/<issue_id>/task`  
Получить список задач (1): `GET /api/task`  
Получить задачу: `GET /api/task/<task_id>`  
Отредактировать задачу: `PUT /api/task/<task_id>`  

(1) - поддерживает параметры limit и offset  
