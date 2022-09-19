# Cockroach

Программирование для маленьких на русском(и английском)

Попробовать здесь - https://nizhikov.github.io/cockroach/

## V1

* Грамматика
* Возможность исполнить из файликов
* Возможность пошагового выполнения
* REPL

## V2

* веб-версия
* анимация выполнения
* онлайн-изменение программы
* онлайн-подсветка синтаксиса
* пошаговое выполнение
* сохранение/загрузка из внешних источников - YaDisk, GDrive и прочее.

## Разработка

Локально запустить web-версию (http://localhost:1234):
```bash
[~/work/cockroach/cockroach-web] parcel index.html
```
Собрать для публикации:

```bash
[~/work/cockroach/cockroach-web] parcel build index.html --no-minify --out-dir ../docs --public-url ./
```