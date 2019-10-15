class jstpsUnitTests{
    constructor(){

    }

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

        let test0 = document.createTextNode("Num equal to 0: " + (n.getNum() == 0) + "\n");
        
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

        node.appendChild(test0);
        node.appendChild(document.createElement("br"));
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

        let test0 = document.createTextNode("Num equal to 0: " + (n.getNum() == 0) + "\n");

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

        node.appendChild(test0);
        node.appendChild(document.createElement("br"));
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

        let test0 = document.createTextNode("Num equal to 0: " + (n.getNum() == 0) + "\n");

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

        node.appendChild(test0);
        node.appendChild(document.createElement("br"));                                    
        node.appendChild(test1);
        node.appendChild(document.createElement("br"));
        node.appendChild(test2);
        parent.appendChild(node);        
    }

    testUndo(){
        let tps = new jstps();
        let n = new num();
        let parent = document.getElementById("undo_tests");
        let node = document.createElement("p");

        let test0 = document.createTextNode("Num equal to 0: " + (n.getNum() == 0) + "\n" +
                                            "Doesn't have undo: " + (!tps.hasTransactionToUndo()) + "\n" +
                                            "Doesn't have redo: " + (!tps.hasTransactionToRedo()) + "\n");

        tps.addTransaction(new addToNumTransaction(n,5));
        tps.addTransaction(new addToNumTransaction(n,10));
        tps.addTransaction(new addToNumTransaction(n,20));
        let test1 = document.createTextNode("Add 5, 10, 20 (3 Transactions)\n" +
                                            "Has undo: " + (tps.hasTransactionToUndo()) + "\n" +
                                            "Doesn't have redo: " + (!tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 35: " + (n.getNum() == 35) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");


        tps.undoTransaction();
        let test2 = document.createTextNode("Undo 1st Transaction\n" +
                                            "Has undo: " + (tps.hasTransactionToUndo()) + "\n" +
                                            "Has redo: " + (tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 15: " + (n.getNum() == 15) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 1: " + (tps.getRedoSize() == 1) + "\n" +
                                            "Undo size is 2: " + (tps.getUndoSize() == 2) + "\n");

        tps.undoTransaction();
        let test3 = document.createTextNode("Undo 2nd Transaction\n" +
                                            "Has undo: " + (tps.hasTransactionToUndo()) + "\n" +
                                            "Has redo: " + (tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 5: " + (n.getNum() == 5) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 2: " + (tps.getRedoSize() == 2) + "\n" +
                                            "Undo size is 1: " + (tps.getUndoSize() == 1) + "\n");
        
        tps.undoTransaction();
        let test4 = document.createTextNode("Undo 3rd Transaction\n" +
                                            "Doesn't have undo: " + (!tps.hasTransactionToUndo()) + "\n" +
                                            "Has redo: " + (tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 0: " + (n.getNum() == 0) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 3: " + (tps.getRedoSize() == 3) + "\n" +
                                            "Undo size is 0: " + (tps.getUndoSize() == 0) + "\n");

        tps.undoTransaction();
        let test5 = document.createTextNode("Another Undo Call (should do nothing)\n" +
                                            "Doesn't have undo: " + (!tps.hasTransactionToUndo()) + "\n" +
                                            "Has redo: " + (tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 0: " + (n.getNum() == 0) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 3: " + (tps.getRedoSize() == 3) + "\n" +
                                            "Undo size is 0: " + (tps.getUndoSize() == 0) + "\n");                                    
    
        node.appendChild(test0);
        node.appendChild(document.createElement("br"));
        node.appendChild(test1);
        node.appendChild(document.createElement("br"));
        node.appendChild(test2);
        node.appendChild(document.createElement("br"));
        node.appendChild(test3);
        node.appendChild(document.createElement("br"));
        node.appendChild(test4);
        node.appendChild(document.createElement("br"));
        node.appendChild(test5);
        parent.appendChild(node);
    }

    testRedo(){
        let tps = new jstps();
        let n = new num();
        let parent = document.getElementById("redo_tests");
        let node = document.createElement("p");

        let test0 = document.createTextNode("Num equal to 0: " + (n.getNum() == 0) + "\n");

        tps.addTransaction(new addToNumTransaction(n,5));
        tps.addTransaction(new addToNumTransaction(n,10));
        tps.addTransaction(new addToNumTransaction(n,20));
        let test1 = document.createTextNode("Add 5, 10, 20 (3 Transactions)\n" +
                                            "Has undo: " + (tps.hasTransactionToUndo()) + "\n" +
                                            "Doesn't have redo: " + (!tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 35: " + (n.getNum() == 35) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");

        tps.undoTransaction();
        tps.doTransaction();
        let test2 = document.createTextNode("Undo x1 and Redo x1\n" +
                                            "Has undo: " + (tps.hasTransactionToUndo()) + "\n" +
                                            "Doesn't have redo: " + (!tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 35: " + (n.getNum() == 35) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");

        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        let test3 = document.createTextNode("Undo x2 and Redo x2\n" +
                                            "Has undo: " + (tps.hasTransactionToUndo()) + "\n" +
                                            "Doesn't have redo: " + (!tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 35: " + (n.getNum() == 35) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");

        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        let test4 = document.createTextNode("Undo x3 and Redo x3\n" +
                                            "Has undo: " + (tps.hasTransactionToUndo()) + "\n" +
                                            "Doesn't have redo: " + (!tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 35: " + (n.getNum() == 35) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");

        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        let test5 = document.createTextNode("Undo x3 and Redo x2\n" +
                                            "Has undo: " + (tps.hasTransactionToUndo()) + "\n" +
                                            "Has redo: " + (tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 15: " + (n.getNum() == 15) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 1: " + (tps.getRedoSize() == 1) + "\n" +
                                            "Undo size is 2: " + (tps.getUndoSize() == 2) + "\n");

        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        let test6 = document.createTextNode("Undo x3 and Redo x4 (should be same as undo x3 redo x3)\n" +
                                            "Has undo: " + (tps.hasTransactionToUndo()) + "\n" +
                                            "Doesn't have redo: " + (!tps.hasTransactionToRedo()) + "\n" +
                                            "Num equal to 35: " + (n.getNum() == 35) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");

        node.appendChild(test0);
        node.appendChild(document.createElement("br"));
        node.appendChild(test1);
        node.appendChild(document.createElement("br"));
        node.appendChild(test2);
        node.appendChild(document.createElement("br"));
        node.appendChild(test3);
        node.appendChild(document.createElement("br"));
        node.appendChild(test4);
        node.appendChild(document.createElement("br"));
        node.appendChild(test5);
        node.appendChild(document.createElement("br"));
        node.appendChild(test6);
        parent.appendChild(node);
    }

    testClear(){
        let tps = new jstps();
        let n = new num();
        let parent = document.getElementById("clear_tests");
        let node = document.createElement("p");

        let test0 = document.createTextNode("Num equal to 0: " + (n.getNum() == 0) + "\n");

        tps.addTransaction(new addToNumTransaction(n,5));
        tps.addTransaction(new addToNumTransaction(n,10));
        tps.addTransaction(new addToNumTransaction(n,20));
        let test1 = document.createTextNode("Add 5, 10, 20 (3 Transactions)\n" +
                                            "Num equal to 35: " + (n.getNum() == 35) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");
    
        tps.clearAllTransactions();
        let test2 = document.createTextNode("Clear Transactions\n" +
                                            "Num equal to 35: " + (n.getNum() == 35) + "\n" +
                                            "Stack size is 0: " + (tps.getSize() == 0) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 0: " + (tps.getUndoSize() == 0) + "\n");

        tps.addTransaction(new addToNumTransaction(n,5));
        tps.addTransaction(new addToNumTransaction(n,10));
        tps.addTransaction(new addToNumTransaction(n,20));
        let test3 = document.createTextNode("Add 5, 10, 20 (3 Transactions)\n" +
                                            "Num equal to 70: " + (n.getNum() == 70) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");

        tps.clearAllTransactions();
        let test4 = document.createTextNode("Clear Transactions\n" +
                                            "Num equal to 70: " + (n.getNum() == 70) + "\n" +
                                            "Stack size is 0: " + (tps.getSize() == 0) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 0: " + (tps.getUndoSize() == 0) + "\n");

        tps.addTransaction(new addToNumTransaction(n,5));
        tps.addTransaction(new addToNumTransaction(n,10));
        tps.addTransaction(new addToNumTransaction(n,20));
        let test5 = document.createTextNode("Add 5, 10, 20 (3 Transactions)\n" +
                                            "Num equal to 105: " + (n.getNum() == 105) + "\n" +
                                            "Stack size is 3: " + (tps.getSize() == 3) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 3: " + (tps.getUndoSize() == 3) + "\n");

        node.appendChild(test0);
        node.appendChild(document.createElement("br"));
        node.appendChild(test1);
        node.appendChild(document.createElement("br"));
        node.appendChild(test2);
        node.appendChild(document.createElement("br"));
        node.appendChild(test3);
        node.appendChild(document.createElement("br"));
        node.appendChild(test4);
        node.appendChild(document.createElement("br"));
        node.appendChild(test5);
        parent.appendChild(node);
    }
}