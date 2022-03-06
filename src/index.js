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
      n: 0
    }
  }

  add() {
    //this.staten +=1 为什么不行
    this.setState({n:this.state.n+1}) //n:1
    this.setState((state) => { //setState 写成函数的形式
      const n = state.n+1
      return {n}
    })
  }

  render() {
    return (
      <div className="Son">
        儿子 n: {this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <Grandson/>
      </div>
    )
  }
}

const Grandson = () => {
  const [n, setN] = React.useState(0) //n用来读，setN用来写
  return (
    <div className="Grandson">
      孙子 n:{n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)