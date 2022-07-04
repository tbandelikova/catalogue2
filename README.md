# catalogue
 Каталог драгоценных монет
Разработать интернет-приложение представляющее собой каталог драгоценных монет с возможностью поиска нужной монеты по различным параметрам и просмотра детальной информации о ней. 
Технические требования
Приложение должно представлять собой SPA с клиентской частью на React. Серверная часть должна быть реализована на NodeJS с использованием базы данных MySQL. Клиент-серверное взаимодействие должно быть сконструировано по REST-архитектуре.
Внешний вид страниц должен соответствовать макету. Приложение должно быть адаптировано под мобильные устройства.
Каталог монет
На главной странице представлены ссылки на три основных раздела каталога:
Памятные монеты
Инвестиционные монеты
Эксклюзивные монеты
Также есть фильтр для поиска.
![image](https://user-images.githubusercontent.com/93816022/177208957-54f1f7a3-6fa7-4d02-8204-2a32125e2fdd.png)

При выборе раздела каталога или задании параметров поиска пользователь попадает в список монет, отвечающих заданным параметрам.
Список монет
Каждый элемент списка представляет собой небольшое изображение монеты и краткое описание. Список дается в две колонки с постраничным просмотром и возможностью выбрать число элементов на странице.
![image](https://user-images.githubusercontent.com/93816022/177209048-45f5dd0a-4b78-4df2-8302-1992aae18e7c.png)

Нажатие на элемент списка приводит к переходу на страницу с детальной информацией о выбранной монете.
![image](https://user-images.githubusercontent.com/93816022/177209171-7fa08c38-cc35-4a7d-a327-41506aca1ff3.png)

На странице списка монет также присутствуют фильтр поиска.
При изменении параметров поиска список динамически меняется, чтобы соответствовать обновленным условиям.
Изображения монет и тексты с описанием и характеристиками располагаются по ссылке.
Детальная информация о монете
На странице с детальной информацией о монете представлены:
Название монеты
Фото аверса и реверса
Подробное описание
Таблица с характеристиками
Фильтр поиска
Основной элемент интерфейса представляет собой поле ввода, в которое можно ввести произвольную строку текста. При нажатии кнопку “Искать” пользователь попадает на страницу списка монет, подпадающих под критерии поиска.
Поиск вхождения строки, введенной пользователем, осуществляется по:
Названиям монет
Подробному описанию
Также можно раскрыть расширенный фильтр и в нем указать такие характеристики монет, как:
Диапазон цены
Диапазон года выпуска
Варианты стран-эмитентов
Металл
Качество чеканки

Дополнительные задания
Выполняются по желанию после завершения основной части проекта.
Административная часть
Для наполнения каталога реализовать рабочее место администратора с возможностью добавления и редактирования информации о монетах.
Вход в административную часть осуществляется по логину и паролю администратора.
Основная страница представляет собой список монет и поле ввода поиска по названию.
Каждый элемент списка содержит уменьшенное изображение монеты, краткое описание, кнопки редактировать и удалить.
Также на странице присутствует кнопка “Добавить новую монету”.
Нажатие на редактировать ведет на страницу редактирования параметров выбранной монеты. Кнопка “Добавить новую монету” ведет на страницу редактирования параметров новой монеты.
На странице параметров монеты можно задать все ее характеристики:
Название монеты
Номинал
Год выпуска
Цена
Страна
Металл
Качество чеканки
Масса
Ссылки на изображения аверса и реверса
Кнопка “Сохранить” сохраняет новые параметры в базе данных и возвращает администратора в список монет. Кнопка отменить возвращает в список без сохранения.
Также можно реализовать возможность загрузки изображений со своего компьютера при добавлении или редактировании монет. На клиенте можно использовать ant-компонент https://ant.design/components/upload/.
Покупка монет
Добавить корзину покупателя и возможность добавления монет в корзину для последующей покупки.
Статистика просмотров
Вести статистику просмотров монет на сайте, а также добавить в административную часть страницу для отображения этой статистики.
Похожие монеты
Отображать внизу страницы с детальной информацией о монете список других монет, похожих на просматриваемую. (Критерий “похожести” можно выбрать самостоятельно)
История просмотра
Отображать на главной странице список “Недавно вы просматривали” с монетами, в которые заходил пользователь.
