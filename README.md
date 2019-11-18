# sugonyak-kristina-otus-js
My homework

# Lesson 1 - Введение в курс Modern JavaScript Frameworks
Написать функцию суммирования значений
Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом.
Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.

sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

# Lesson 2 - Возможности современного JavaScript
promiseReduce - работа с асинхронными функциями
Цель: Написать функцию promiseReduce(asyncFunctions, reduce, initialValue) asyncFunctions - массив асинхронных функций, возвращающих промис reduce(memo, value) - функция, которая будет вызвана для каждого успешно завершившегося промиса. initialValue - стартовое значение для функции reduce promiseReduce последовательно вызывает переданные асинхронные функции и выполняет reduce функцию сразу при получении результата до вызова следующей асинхронной функции. Функция promiseReduce должна возвращать промис с конечным результатом.

var fn1 = () => {
console.log('fn1')
return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
console.log('fn2')
setTimeout(() => resolve(2), 1000)
})

function promiseReduce(asyncFunctions, reduce, initialValue) {
/*
* Реализация
*/
}

# Lesson 3 - Возможности современного JavaScript
getPath - поиск уникального селектора
Написать алгоритм и функцию `getPath()`, находяющую уникальный css-селектор для элемента в документе.
Уникальный селектор может быть использован `document.querySelector()` и возвращать исходный элемент.
`document.querySelectorAll()`, вызванный с этим селектором, не должен находить никаких элементов, кроме исходного.

```javascript
$0 // HTMLElement
getPath($0) // => "..."
```

# Lesson 8 - Основы React и JSX
Настройка react app
Цель: 
1. Развернуть приложение с помощью CRA (по желанию) 
2. Настроить кастомный webpack + babel проект (+2 балла) 
3. Заставить работать TypeScript через babel (+1 бал) 
4. Написать хелло ворлд (todo app или любое другое), сделать базовую верстку вашего приложения, поработать с JSX (+2 бал)
