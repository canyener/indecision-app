import React from 'react'
import ReactDOM from 'react-dom'

const template = React.createElement('p', {}, 'testing 123')

ReactDOM.render(template, document.getElementById('app'))
