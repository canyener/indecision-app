//JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!'
}

var template = ( 
    <div>
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
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

ReactDOM.render(template, appRoot);