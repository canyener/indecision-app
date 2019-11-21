'use strict';

//JSX - JavaScript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
