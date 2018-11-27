const codes = ['100','101', '102', '103',
    '200', '201', '202', '204' ,'205',
    '300','301','304','308','400','401','402','403','404','405','406','408', '409','410',
    '500','502','503','504','508'];

document.getElementById("button").addEventListener("click", function(){
    const input = document.getElementById("codesearch").value;
    if (input !== "") {
        if (checkValidCode(input)){
            window.location = "codes/" + input.charAt(0) + "xx/" + input + ".html";
        } else {
            alert("This code/search query is unsupported for now")
        }
    }
});

function checkKeypress(event){
    var key = event.keyCode;
    const input = document.getElementById("codesearch").value;
    if (input !== "" && key === 13) {
        if (checkValidCode(input)){
            window.location = "codes/" + input.charAt(0) + "xx/" + input + ".html";
        } else {
            alert("This code/search query is unsupported for now")
        }
    }
}


function checkValidCode(code){
    var out = false;
    for (var x = 0; x < codes.length; x++) {
        if (codes[x] === code){
            out = true;
        }
    }
    return out;
}
