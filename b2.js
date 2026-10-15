function DTHCN(cd, cr){
    return cd * cr;
}

function CVHCN(cd, cr){
    let cv =2* (cd + cr);
    return cv;
}

var cd = parseFloat(prompt("Nhập chiều dài: "));
var cr = parseFloat(prompt("Nhập chiều rộng: "));
alert("Diện tích HCN: " + DTHCN(cd, cr));
alert("Chu vi HCN: " + CVHCN(cd, cr));