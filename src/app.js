//JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['Option One', 'Option Two']
}

const template = ( 
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options to show'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');

