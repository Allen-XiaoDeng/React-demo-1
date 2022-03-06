import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const a = 0

function App() {
  return (
    <div className="App">
      爸爸
      <Son messageForson={a}/>
    </div>
  )
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      n: 0,
      m: 0
    }
  }

  addN() {
    this.setState({n: this.state.n + 1})
  }

  addM() {
    this.setState({m: this.state.m + 1})
  }

  render() {
    return (
      <div className="Son">
        儿子 n: {this.state.n}
        <button onClick={() => this.addN()}>+1</button>
        m :{this.state.m}
        <button onClick={() => this.addM()}>+1</button>
        <Grandson/>
      </div>
    )
  }
}

const Grandson = () => {
  const [n, setN] = React.useState(0) //n用来读，setN用来写
  const [m, setM] = React.useState(0) //n用来读，setN用来写
  return (
    <div className="Grandson">
      孙子 n:{n}
      <button onClick={() => setN(n + 1)}>+1</button>
      m:{m}
      <button onClick={() => setM(m + 1)}>+1</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)