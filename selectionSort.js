class SelectionSort {
    constructor(arr) {
        this.arr = arr
        this.i = 0
        this.j = 0
    }

    sort() {
        if (this.j < this.arr.length) {
            if (this.arr[this.j] < this.arr[this.i]) {
                let temp = this.arr[this.j]
                this.arr[this.j] = this.arr[this.i]
                this.arr[this.i] = temp
            }
            this.j++
        } else {
            this.i++
            this.j = this.i
        }
        return this.i >= this.arr.length - 1
    }

    reset(arr) {
        this.arr = arr
        this.i = 0
        this.j = 0
    }
}
