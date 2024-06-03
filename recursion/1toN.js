//Print numbers from 1 to N without the help of loops.
class Solution{
    constructor() {
        this.s = ""; //empty string to store the numbers
    }
    printNosRecur(N) {
        if(N===0) {
            return;
        }
        this.printNosRecur(N - 1); //recursive call
        this.s += N + " ";
    }
    printNos(N){ 
      this.printNosRecur(N);
      console.log(this.s) //print the final string
    }
}
