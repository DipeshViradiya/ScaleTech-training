let bigMatrix  =   [[45,78,12,23,56],
                    [15,26,48,59,26],
                    [86,75,42,53,12],
                    [74,85,96,55,63],
                    [36,25,69,47,14]];

let smallMatrix =  [[42,53,12],
                    [96,55,63],
                    [69,47,14]];

function checkPresent(big, small) {
    let mapB = new Map();
    let mapS = new Map();

    for(let i = 0; i < big.length; i++) {
        for(let j = 0; j < big[0].length; j++) {
            if(mapB.has(big[i][j])) {
                mapB.set(big[i][j], mapB.get(big[i][j]) + 1);
            } else { 
                mapB.set(big[i][j], 1);
            }
        }
    }

    for(let i = 0; i < small.length; i++) {
        for(let j = 0; j < small[0].length; j++) {
            if(mapS.has(small[i][j])) {
                mapS.set(small[i][j], mapS.get(small[i][j]) + 1);
            } else {
                mapS.set(small[i][j], 1);
            }
        }
    }
    for(let x of mapS.keys()){
        if(mapB.has(x)) {
            if(mapB.get(x) < mapS.get(x)) {  
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

function checkPattern(big, small) {
    for(let i = 0; i < big.length-(small.length-1); i++){
        for(let j = 0; j < big[0].length-(small[0].length-1); j++){
            if(big[i][j] == small[0][0]){
                if(validateMatrix(big, small, i, j)){
                    console.log("Found at :" + (i+1) + "th row, " + (j+1) + "th column...");
                    return true;
                }
            }
        }
    }
    console.log("small matrix is set of big matrix, But big matrix does not contain the exact pattern...");
}

function validateMatrix(big, small, i, j) {
    for(let k = 0; k < small.length; k++){
        for(let l = 0; l < small[0].length; l++){
            if(small[k][l] != big[i+k][j+l]){
                return false;
            }
        }
    }
    return true;
}


if(checkPresent(bigMatrix, smallMatrix)){
    checkPattern(bigMatrix, smallMatrix);
} else {
    console.log("Small matrix is not part of big matrix...");
}



