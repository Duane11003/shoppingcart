import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Buttons from './components/Buttons.js'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
         <div>
             <Buttons />
         </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
  )