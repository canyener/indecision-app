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

var userName = 'Can Yener';
var userAge = 35;
var userLocation = 'Istanbul';
var templateTwo = (
    <div>
        <h1>{userName}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);