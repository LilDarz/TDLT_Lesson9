let thang_1 = "1";
let thang_2 = "2";
let thang_3 = "3";
let thang_4 = "4";
let thang_5 = "5";
let thang_6 = "6";
let thang_7 = "7";
let thang_8 = "8";
let thang_9 = "9";
let thang_10 = "10";
let thang_11 = "11";
let thang_12 = "12";


// function kiemTra() {
//     let checkedMonth = document.getElementById("month").value;
//     if (checkedMonth == 1 || checkedMonth == 3 || checkedMonth == 5 || checkedMonth == 7 || checkedMonth == 8 ||checkedMonth == 10 ||checkedMonth == 12) {
//         alert("tháng này có 31 ngày");
//     }else if (checkedMonth == 2) {
//         alert("tháng này có 28 hoặc 29 ngày");
//     }else if(checkedMonth == 4|| checkedMonth == 6|| checkedMonth==9||checkedMonth==11){
//         alert("tháng này có 30 ngày");
//     }else{
//         alert("ko có tháng này trong năm")
//     }
// }


function kiemTra() {
    let checkedMonth = document.getElementById("month").value;
    switch (checkedMonth) {
        case thang_1:
        case thang_3:
        case thang_5:
        case thang_7:
        case thang_8:
        case thang_10:
        case thang_12:
            alert(`Tháng ${checkedMonth} có 31 ngày`);
            break;
        case thang_4:
        case thang_6:
        case thang_9:
        case thang_11:
            alert(`Tháng ${checkedMonth} có 30 ngày`);
            break;
        case thang_2:
            alert(`Tháng ${checkedMonth} có 28 hoặc 29 ngày`);
            break;
        default:
            alert(`Không tồn tại tháng ${checkedMonth} trong năm`);
            break;
    }
}