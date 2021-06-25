const calc = (val) => {
    let val1 = parseInt(document.getElementById("Number1").value);
    let val2 = parseInt(document.getElementById("Number2").value);

    if (val == "add") display(val1 + val2);
    if (val == "sub") display(val1 - val2);
    if (val == "mul") display(val1 * val2);
    if (val == "div") display(val1 / val2);
    if (val == "mod") display(val1 % val2);
    if (val == "per") {
        if (val2 >= 100) {
            display(val1 * (val2 / 100));
        } else {
            display(val1 * (val2 / 100));
        }
    }
    if (val == "cube") {
        if ((val1 != 0) | (val2 > 0)) {
            display(val1 * val1 * val1);
        } else if ((val2 != 0) | (val1 > 0)) {
            display(val2 * val2 * val2);
        } else {
            display("Enter Any One Value");
        }
    }
    if (val == "sqr") {
        if ((val1 != 0) | (val2 >= 0)) {
            display(val1 * val1);
        } else if ((val2 != 0) | (val1 >= 0)) {
            display(val2 * val2);
        } else {
            display("Enter Any One Value");
        }
    }
    return null;
};

const display = (val) => {
    return (document.getElementById("answer").innerHTML = val);
};


// numberbuttons
function dis(val) {
    // document.getElementById("Number1").value+=val
    // document.getElementById("Number2").value+=val



    if (document.getElementById("Number1").focus()) {
        document.getElementById("Number1").value += val
    }
    if (document.getElementById("Number2").focus()) {
        document.getElementById("Number2").value += val
    }

}

function clr() {
    document.getElementById("Number1").value = " "
    document.getElementById("Number2").value = " "
}



r






