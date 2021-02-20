import { makeAutoObservable } from 'mobx'

export class CounterStore {
  constructor() {
    makeAutoObservable(this)
  }

  // state
  count = 1

  // action
  increase = () => {
    this.count++
  }

  // computed
  get squareOfCount() {
    return this.count ** 2
  }
}
