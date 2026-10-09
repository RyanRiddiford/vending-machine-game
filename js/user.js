
export class User {
    
    score;
    change;

    constructor() {
        this.change = 0.00;
        this.score = 0;
    }


    decreaseUserChange(deduction) {
        console.log(`Change: ${this.change}`);
        console.log(`Deducting change by: ${deduction}`);
        this.change = this.change - deduction;
        console.log(`Deducted change: ${this.change}`);
    }

    increaseUserChange(increaseBy) {
        console.log(`Change: ${this.change}`);
        console.log(`Increasing change by: ${increaseBy}`);
        this.change = this.change + increaseBy;
        console.log(`Increased change: ${this.change}`);        
    }

}


function rng(type = "credit", min = 0, max = 100) {
    const number = (Math.random() * (max - min) + min).toFixed(2);
}