class andMaskTransaction extends jstpsTransaction{
    constructor(initNum, initIntNum, initMask){
        super();
        this.num = initNum;
        this.intNum - initIntNum;
        this.mask = initMask;
    }

    doTransaction(){
        this.num.andMask(this.mask);
    }

    undoTransaction(){
        this.num.setNum(this.intNum);
    }

    toString(){
        return "And Mask " + this.mask;
    }
}