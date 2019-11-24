class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <p>Options Component here</p>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <p>Add Option Component here</p>
        )
    }
}

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))