class addToNumTransaction extends jstpsTransaction{
    constructor(n,a){
        super();
        this.num = n;
        this.amountToAdd = a;
    }

    doTransaction(){
        let oldNum = this.num.getNum();
        let newNum = oldNum + this.amountToAdd;
        this.num.setNum(newNum);
    }

    undoTransaction(){
        let oldNum = this.num.getNum();
        let newNum = oldNum - this.amountToAdd;
        this.num.setNum(newNum);
    }

    toString(){
        return "Add " + this.amountToAdd;
    }
}