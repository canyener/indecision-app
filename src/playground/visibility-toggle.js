
let visibility = false

const onShowDetails = () => {
    visibility = !visibility
    render()
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>{!visibility ? 'Show Details' : 'Hide Details'}</button>
            {visibility && <p>Here are the details</p>}
        </div>
    )

    ReactDOM.render(template, appRoot)
}

render()