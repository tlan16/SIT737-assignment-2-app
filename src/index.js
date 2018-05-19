import App from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const reactContainerId = 'react-root'

const component = () => {
  const element = document.createElement('div')
  element.id = reactContainerId

  return element
}

document.body.appendChild(component())

ReactDOM.render(
  React.createElement(App),
  document.getElementById(reactContainerId)
)
