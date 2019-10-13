class jstpsUnitTests{
    constructor(){

    }
    testAdd(){
        let tps = new jstps();
        let n = new num();
        let parent = document.getElementById('add_tests');
        let node = document.createElement("p");

        tps.addTransaction(new addToNumTransaction(n,5));
        let test1 = document.createTextNode("Add 5 Transaction\n" +
                                            "Num equal to 5: " + (n.num == 5) + "\n" +
                                            "Stack size is 1: " + (tps.getSize() == 1) + "\n" +
                                            "Redo size is 0: " + (tps.getRedoSize() == 0) + "\n" +
                                            "Undo size is 1: " + (tps.getUndoSize() == 1) + "\n");
        node.appendChild(test1);

        parent.appendChild(node);
    }
}