class jstps{
    constructor(){
        this.transactions = new Array();
        this.mostRecentTransaction = -1; //keep track of where we are
        
        //signal operation is happening
        this.performingDo = false;
        this.performingUndo = false;
    }

    isPerformingDo(){
        return this.performingDo;
    }
    
    isPerformingUndo(){
        return this.PerformingUndo;
    }

    /** 
     * @param {jstpsTransaction} transaction
     * 
     * adds a new transaction to the top of the stack
    */
    addTransaction(transaction){
        if((this.mostRecentTransaction < 0) || 
           (this.mostRecentTransaction < this.transactions.length -1)){
               for(let i = this.transactions.length - 1;i > this.mostRecentTransaction;i--){
                   this.transactions.splice(i,1);
               }
           }
        this.transactions.push(transaction);

        this.doTransaction();
    }

    //does transaction at current transaction counter(could be in the middle of stack)
    doTransaction(){
        if(this.hasTransactionToRedo()){
            this.performingDo = true;
            let transaction = this.transactions[this.mostRecentTransaction+1];
            transaction.doTransaction();
            this.mostRecentTransaction++;
            this.performingDo = false;
        }
    }

    peekUndo(){
        if(this.hasTransactionToUndo()){
            return this.transactions[this.mostRecentTransaction];
        }else{
            return null;
        }
    }

    peekDo(){
        if(this.hasTransactionToRedo()){
            return this.transactions[this.mostRecentTransaction+1];
        }else{
            return null;
        }
    }

    undoTransaction(){
        if(this.hasTransactionToUndo()){
            this.performingUndo = true;
            let transaction = this.transactions[this.mostRecentTransaction];
            transaction.undoTransaction();
            this.mostRecentTransaction--;
            this.performingUndo = false;
        }
    }

    clearAllTransactions(){
        this.transactions.splice(0);
        this.mostRecentTransaction = -1;
    }

    getSize(){
        return this.transactions.length;
    }

    getRedoSize(){
        return this.getSize() - this.mostRecentTransaction - 1;
    }

    getUndoSize(){
        return this.mostRecentTransaction + 1;
    }

    hasTransactionToUndo(){
        return this.mostRecentTransaction >= 0;
    }

    hasTransactionToRedo(){
        return this.mostRecentTransaction < this.transactions.length -1;
    }

    toString(){
        let text = "--Number of Transactions: " + this.transactions.length + "\n" +
                   "--Current Index on Stack: " + this.mostRecentTransaction + "\n" +
                   "--Current Transaction Stack:\n";
        for(let i = 0; i <= this.mostRecentTransaction; i++){
            let t = this.transactions[i];
            text += "----" + t.toString() + "\n";
        }
        return text;
    }

}