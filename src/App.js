
import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
@inject('store')
@observer
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 18
    }
  }
  mutateAge = ()=>{
    this.props.store.person.setAge()
  }
  componentDidMount() {
    console.log("this.props",this.props)
  }
  render() {
    return (
      <div>
        我是App组件
        <ul>
          <li>姓名:{this.props.store.person.obj.username}</li>
          <li>年龄:{this.props.store.person.age}</li>
          <li>双倍年龄:{this.props.store.person.doubleAge}</li>
          <li>性别:{this.props.store.person.obj.sex}</li>
        </ul>
        <button onClick={this.mutateAge}>修改年龄</button>
      </div>
    )
  }
}
