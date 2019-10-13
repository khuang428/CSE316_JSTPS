class num{
    constructor(){
        this.num = 0;
    }
    

    setNum(n){
        this.num = n;
    }

    getNum(){
        return this.num;
    }

    andMask(mask){
        this.num = this.num & mask;
    }

    orMask(mask){
        this.num = this.num | mask;
    }
}