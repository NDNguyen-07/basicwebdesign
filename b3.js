let weather = "mưa";
function kiemtra(tt){
    if(tt=="thoitiet == bao"){       
        console.log ("Bão rồi, Nghỉ học thôi!");
    }
    else if (tt != "thoitiet == khong bao"){ 
        console.log("Không có bão, đi học bình thường.")
    }
}

let a = prompt("Nhập thông tin thời tiết: ");
alert(kiemtra(a));

let b = prompt("Nhập thông tin thời tiết: ");
alert(kiemtra(b));
