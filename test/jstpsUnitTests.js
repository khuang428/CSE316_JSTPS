class jstpsUnitTests{
    constructor(){

    }

    //to do print tps stack

    runTests(){
        this.testAdd();
        this.testAndMask();
        this.testOrMask();
        this.testUndo();
        this.testRedo();
        this.testClear();
    }

    testAdd(){
        let tps = new jstps();
        let n = new num();
        let parent = document.getElementById('add_tests');
        let node = document.createElement("p");
        
        tps.addTransaction(new addToNumTransaction(n,5));
        let test1 = document.createTextNode("Add 5 Transaction\n" +
                                            "Num equal to 5: " + (n.getNum() == 5) + "\n" +
                                            "Stack size is 1: " + (tps.getSize() == 1) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 1: " + (tps.getUndoSize() == 1) + "\n");

        tps.addTransaction(new addToNumTransaction(n,10));
        let test2 = document.createTextNode("Add 10 Transaction\n" +
                                            "Num equal to 15: " + (n.getNum() == 15) + "\n" +
                                            "Stack size is 2: " + (tps.getSize() == 2) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 2: " + (tps.getUndoSize() == 2) + "\n");

        tps.addTransaction(new addToNumTransaction(n,20));
        let test3 = document.createTextNode("Add 20 Transaction\n" +
                                            "Num equal to 35: " + (n.getNum() == 35) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");


        node.appendChild(test1);
        node.appendChild(document.createElement("br"));
        node.appendChild(test2);
        node.appendChild(document.createElement("br"));
        node.appendChild(test3);
        parent.appendChild(node);
    }

    testAndMask(){
        let tps = new jstps();
        let n = new num();
        let parent = document.getElementById("and_mask_tests");
        let node = document.createElement("p");

        tps.addTransaction(new addToNumTransaction(n, 12)); //1100
        tps.addTransaction(new andMaskTransaction(n, n.getNum(), 4)); //0100
        let test1 = document.createTextNode("12(1100) Mask With 4(0100)\n"+
                                            "Num equal to 4: " + (n.getNum() == 4) + "\n" +
                                            "Stack size is 2: " + (tps.getSize() == 2) + "\n");
        
        tps.undoTransaction();
        let test2 = document.createTextNode("Undo Mask\n" + 
                                            "Num equal to 12: " + (n.getNum() == 12) + "\n" +
                                            "Stack size is 2: " + (tps.getSize() == 2) + "\n" +
                                            "Redo size is 1: " + (tps.getRedoSize() == 1) + "\n" +
                                            "Undo size is 1: " + (tps.getUndoSize() == 1) + "\n");

        node.appendChild(test1);
        node.appendChild(document.createElement("br"));
        node.appendChild(test2);
        parent.appendChild(node);               
    }

    testOrMask(){
        let tps = new jstps();
        let n = new num();
        let parent = document.getElementById("or_mask_tests");
        let node = document.createElement("p");

        tps.addTransaction(new addToNumTransaction(n, 12)); //1100
        tps.addTransaction(new orMaskTransaction(n, n.getNum(), 1)); //0001
        let test1 = document.createTextNode("12(1100) Mask With 1(0001)\n"+
                                            "Num equal to 13: " + (n.getNum() == 13) + "\n" +
                                            "Stack size is 2: " + (tps.getSize() == 2) + "\n");
        
        tps.undoTransaction();
        let test2 = document.createTextNode("Undo Mask\n" + 
                                            "Num equal to 12: " + (n.getNum() == 12) + "\n" +
                                            "Stack size is 2: " + (tps.getSize() == 2) + "\n" +
                                            "Redo size is 1: " + (tps.getRedoSize() == 1) + "\n" +
                                            "Undo size is 1: " + (tps.getUndoSize() == 1) + "\n");

        node.appendChild(test1);
        node.appendChild(document.createElement("br"));
        node.appendChild(test2);
        parent.appendChild(node);        
    }

    testUndo(){

    }

    testRedo(){

    }

    testClear(){
        
    }
}