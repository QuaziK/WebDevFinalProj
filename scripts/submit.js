const codes = ['100','101', '102', '103',
    '200', '201', '202', '204' ,'205',
    '300','301','304','308','400','401','402','403','404','405','406','408', '409','410',
    '500','502','503','504','508'];

const validStart = [1,2,3,4,5];

document.getElementById("change").addEventListener("change", function(){
    var ddl = document.getElementById("change");
    var input = ddl.options[ddl.selectedIndex].value;
    if(input == "add"){
        document.getElementById("add").style.display = "flex";
        document.getElementById("adjust").style.display = "none";
    } else if (input == "adjust"){
        document.getElementById("adjust").style.display = "flex";
        document.getElementById("add").style.display = "none";
    }
});

document.getElementById("addNewCode").addEventListener("change", function(){
    const input = document.getElementById("addNewCode").value;
    if (codes.includes(input)){
        document.getElementById("outAdd").innerText = "This code is already added, adjust it instead";
    } else if (isNaN(input)){
        document.getElementById("outAdd").innerText = "Not a code";
    } else if (validStart.includes(parseInt(input.charAt(0)))){
        document.getElementById("outAdd").innerText = "Create another code to add";
    } else {
        document.getElementById("outAdd").innerText = "Invalid";
    }
});

document.getElementById("adjustCode").addEventListener("change", function(){
    const input = document.getElementById("adjustCode").value;
    if (input !== "") {
        if (isNaN(input)){
            document.getElementById("outAdj").innerText = "Not a code";
        } else if (codes.includes(input)){
            document.getElementById("outAdj").innerText = "Change a code's description";
        } else if (!validStart.includes(parseInt(input.charAt(0)))){
            document.getElementById("outAdj").innerText = "Must start with 1-5";
        } else {
            document.getElementById("outAdj").innerText = "Not an existing code yet, add it first";
        }
    }
});

function checkValidCode(code){
    var out = false;
    for (var x = 0; x < codes.length; x++) {
        if (codes[x] === code){
            out = true;
        }
    }
    return out;
}
