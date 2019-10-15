class jstpsTester{
    constructor(){
        this.tps = new jstps();
        this.n = new num();

        document.getElementById("add_button").addEventListener("click", this.addProcess.bind(this));
        document.getElementById("undo_button").addEventListener("click", this.undoProcess.bind(this));
        document.getElementById("redo_button").addEventListener("click", this.redoProcess.bind(this));
        document.getElementById("clear_button").addEventListener("click", this.clearProcess.bind(this));
        document.getElementById("reset_button").addEventListener("click", this.resetProcess.bind(this));
        this.displayTPS();
    }

    addProcess(){
        let numToAdd = document.getElementById("add_field").value;
        if(numToAdd == ""){
            alert("You need to put in a number!");
        }else{
            numToAdd = parseFloat(numToAdd);
            this.tps.addTransaction(new addToNumTransaction(this.n, numToAdd));
            this.displayTPS();
        }
    }

    undoProcess(){
        this.tps.undoTransaction();
        this.displayTPS();
    }

    redoProcess(){
        this.tps.doTransaction();
        this.displayTPS();
    }

    clearProcess(){
        this.tps.clearAllTransactions();
        this.displayTPS();
    }

    resetProcess(){
        this.tps.clearAllTransactions();
        this.n.setNum(0);
        this.displayTPS();
    }

    displayTPS(){
        document.getElementById("demo_info").innerHTML = "--Num Value: " + this.n.getNum() + "\n" + this.tps.toString();
    }
}