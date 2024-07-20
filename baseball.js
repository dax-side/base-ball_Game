function addToList(nlist) {
    let baseBallList = [];
    for (let i = 0; i < nlist.length; i++) {
        let p = nlist[i];
        if (p === '+') {
            if (baseBallList.length >= 2) {
                let nlist1 = baseBallList[baseBallList.length - 1];
            let nlist2 = baseBallList[baseBallList.length - 2];
              let nlist3 = nlist1 + nlist2;
            baseBallList.push(nlist3);    
            }
        }else if (p === 'D') {
            if (baseBallList.length >= 1) {
                let nlist1 = baseBallList[baseBallList.length - 1];
                baseBallList.push(nlist1 * 2);   
            }
        }else if (p === 'C') {
            if (baseBallList.length >= 1) {
                baseBallList.pop();   
            }
        }else{
            let score = Number(p);
            if (!isNaN(score)) {
                baseBallList.push(score);   
            }
        }
    }
    let total = 0;
    for (let i= 0; i < baseBallList.length; i++) {
        total += baseBallList[i];
    }
    return total;
}


console.log(addToList(["5", "2", "C", "D", "+"]));
console.log(addToList(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(addToList(["1", "C"]));
