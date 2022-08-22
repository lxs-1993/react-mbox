import { observable,computed, action } from "mobx"


class Person {
  // @observable 变量名 = 值
  @observable obj = {
    username: "张三",
    sex:"男"
  }
  @observable age = 18
  // @action 方法名(参数) {
  //     console.log(参数)
  // }
  @computed //当age发生改变时， 自动触发
   get doubleAge() {
    return this.age * 2
   }

  @action setName(name){ // 用户操作  事件调用
      this.obj.username = name
  }
  @action setAge(){ // 用户操作  事件调用
      console.log("this.age",this.age)
      this.age+=this.age
  }
}
const person = new Person()
export default person