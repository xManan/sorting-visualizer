class BubbleSort {
    constructor(arr) {
        this.arr = arr
        this.i = 0
        this.j = 0
    }
    sort() {
        if (this.arr[this.j] > this.arr[this.j + 1]) {
            let temp = this.arr[this.j]
            this.arr[this.j] = this.arr[this.j + 1]
            this.arr[this.j + 1] = temp
        }
        this.j++
        if (this.j === this.arr.length - this.i - 1) {
            this.j = 0
            this.i++
        }
        return this.i === this.arr.length - 1
    }
    reset(arr) {
        this.arr = arr
        this.i = 0
        this.j = 0
    }
}
