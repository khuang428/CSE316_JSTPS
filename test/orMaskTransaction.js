class orMaskTransaction extends jstpsTransaction{
    constructor(initNum, initIntNum, initMask){
        super();
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    doTransaction(){
        this.num.orMask(this.mask);
    }

    undoTransaction(){
        this.num.setNum(this.intNum);
    }

    toString(){
        return "Or Mask " + this.mask;
    }
}