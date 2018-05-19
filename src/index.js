import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './styles.sass'

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
