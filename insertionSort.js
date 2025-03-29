class InsertionSort {
    constructor(arr) {
        this.arr = arr
        this.i = 1
        this.j = 0
    }

    sort() {
        if (this.j >= 0 && this.arr[this.j] > this.arr[this.j + 1]) {
            let temp = this.arr[this.j]
            this.arr[this.j] = this.arr[this.j + 1]
            this.arr[this.j + 1] = temp
            this.j--
        } else {
            this.i++
            this.j = this.i - 1
        }
        return this.i === this.arr.length
    }

    reset(arr) {
        this.arr = arr
        this.i = 1
        this.j = 0
    }
}
