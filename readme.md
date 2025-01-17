[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Использование виджета на сайте костела
Для использования виджета необходимо получить ключ парафии, который далее указывается в свойствах импортируемого компонента.
В блоке head необходимо указать два скрипта, поддерживающих работу компонента с виджетом.

## Код виджета может выглядеть следующим образом:

    <!DOCTYPE html>
    <html>
    <head>
        ...

        <script type="module" src="https://cdn.jsdelivr.net/npm/imshaby-schedule@latest/dist/imshaby-schedule/imshaby-schedule.esm.js"></script>


        ...
    </head>
    <body>
        ...

        <imshaby-schedule parish-id="<insert_parish_key_here>"></imshaby-schedule>

        ...
    </body>
    </html>

# Автоматически развернутые Имшы

При импорте виджета на страницу сайта кроме ключа парафии можно указать опцию автоматически развернутых карточек. По умолчанию все карточки с Имшами развернуты (<code>expanded="true"</code>), однако если требуется, чтобы они были свернуты по умолчанию, необходимо задать параметр <code>expanded="false"</code> в свойствах импортируемого кода:

    ...

    <imshaby-schedule parish-id="<insert_parish_key_here>" expanded="false"></imshaby-schedule>

    ...

# Ограничение по размеру

По умолчанию виджет занимает максимальный размер экрана. Ограничить его можно посредством помещения компонента в div с заданными параметрами ширины и высоты:

    ...
    <div style="width: 400px; height: 500px;">
        <imshaby-schedule parish-id="<insert_parish_key_here>"></imshaby-schedule>
    </div>
    ...

Также виджет можно ограничить посредством применения стилей (в т.ч. без директивы <strong>!important</strong>):

    ...
    <head>
    ...

    <style>
      .w-50 {width: 50%;}
      .h-50 {height: 50%;}
      .widgetDiv {border: 1px solid mediumaquamarine;}
    </style>

    </head>
    <body>

        ...

        <div class="w-50 h-50 widgetDiv">
          <imshaby-schedule parish-id="<insert_parish_key_here>" expanded="false"></imshaby-schedule>
        </div>

        ...
    </body>
