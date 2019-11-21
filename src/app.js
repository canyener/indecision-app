//JSX - JavaScript XML

var template = ( 
    <div>
        <h1>Indecision App</h1> 
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);