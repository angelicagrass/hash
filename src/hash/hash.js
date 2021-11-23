export default class Hash {
  constructor(string) {
    this.string = string
    this.max = 256
    this.hashValue = this.hash()
  }

hash() {
  let hash = 0
  for (let i = 1; i < this.string.length; i++) {
    hash = hash + (this.string.charCodeAt(i) * i)
  }
  return hash % this.max
  }
}


