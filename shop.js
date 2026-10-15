var id = 0;

function sell() {
    id++;
    var pname = frm.pname.value;
    var qty = Number(frm.qty.value) || 0;
    var price = Number(frm.up.value) || 0;
    var dc = Number(frm.dc.value) || 0;

    // Công thức tính tổng tiền giảm theo phần trăm %
    var sub = qty * price * (1 - dc / 100);

    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + dc + "%</td>";
    row += "<td>" + sub + "</td>";
    row += "</tr>";

    document.getElementById("tbl").innerHTML += row;
}