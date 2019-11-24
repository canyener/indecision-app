'use strict';

var visibility = false;

var onShowDetails = function onShowDetails() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onShowDetails },
            !visibility ? 'Show Details' : 'Hide Details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'Here are the details'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
