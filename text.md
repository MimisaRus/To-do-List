npx create-react-app@latest . -создание реакта
npm install --save-dev- sass - сохраняет библиеоткии на уровне разработки, для добавленяя инструменты для облегчения работы
npm install react-bootstrap bootstrap - установка библиеотеки bootstrap
src исходный код 
npm start

root- элемент сохраняем в root и внутри рендерем app const root-readid
внутри root находится app.js, app,js- внутри него структура сайта
 span- столбцы
 props-данные из вне

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

use state- возвращает 2 элемента, переменная следит и сохраняет значение, другое позволяет изменять
useState()
Хук, который позволяет работать с состояниями. Возвращает массив из двух 2 элементов: состояние и функцию смены состояния.

```js
const counterArr = useState();
const [counter, setCounter] = useState(0); // Параметр по умолчанию
const [num, setNumb] = useState(randomNum); // Если передать ссылку на функцию, то она выполнится 1 раз. Если функцию вызывать, то будет вызывать она при каждом ре-рендеринге.
// Асинхронное выполнение. Возвращает новое значение
setCounter(counter => counter + 1);
// Баг! Изменит состояние только на единицу при двух вызовах. Если делать асинхронно, то будет counter увеличится на 2.
setCounter(counter + 1);
setCounter(counter + 1);
 
 ```


Формировать компоненты в верстке, с передачей нужных данных
В TaskItem использовать все переданные пропсы и вызывать функцию удаления по Id.
Реализовать функции по выполнению задачи
Вызывать функцию в TaskItem и менять состояние кнопки (цвет, надпись), менять цвет карточки и текста задачи