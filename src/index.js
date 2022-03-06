import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const a = 1

function App() {
  return (
    <div className="App">
      爸爸
      <Son messageForson="你好"/>
    </div>
  )
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      n: 0
    }
  }

  add() {
    //this.staten +=1 为什么不行
    this.setState({n: this.state.n + 1})
  }

  render() {
    return (
      <div className="Son">
        我是儿子，我爸对我说{this.props.messageForson}
        儿子 n: {this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <Grandson messageForGrandson="儿子你好"/>
      </div>
    )
  }
}

const Grandson = (props) => {
  const [n, setN] = React.useState(0)
  return (
    <div className="Grandson">
      孙子 n:{n}
      <button onClick={() => setN(n + 1)}>+1</button>
      我是孙子，我爸对我说 {props.messageForGrandson}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)