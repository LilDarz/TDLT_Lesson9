// let namCan0="Canh";
// let namCan1="Tân";
// let namCan2="Nhâm";
// let namCan3="Quý";
// let namCan4="Giáp";
// let namCan5="Ất";
// let namCan6="Bính";
// let namCan7="Đinh";
// let namCan8="Mậu";
// let namCan9="Kỷ";

// let namChi0="Thân";
// let namChi1="Dậu";
// let namChi2="Tuất";
// let namChi3="Hợi";
// let namChi4="Tý";
// let namChi5="Sửu";
// let namChi6="Dần";
// let namChi7="Mẹo";
// let namChi8="Thìn";
// let namChi9="Tỵ";
// let namChi10="Ngọ";
// let namChi11="Mùi";

let namDuongLich = prompt("Nhập năm dương lịch cần chuyển đổi");
let namCanDu = Number(namDuongLich) % 10;
let namChiDu = Number(namDuongLich) % 12;
let namCan;
let namChi;
switch (namCanDu) {
    case 0:
        namCan = "Canh";
        break;
    case 1:
        namCan = "Tân";
        break;
    case 2:
        namCan = "Nhâm";
        break;
    case 3:
        namCan = "Quý";
        break;
    case 4:
        namCan = "Giáp";
        break;
    case 5:
        namCan = "Ất";
        break;
    case 6:
        namCan = "Bính";
        break;
    case 7:
        namCan = "Đinh";
        break;
    case 8:
        namCan = "Mậu";
        break;
    case 9:
        namCan = "Kỷ";
        break;

}

switch (namChiDu) {
    case 0:
        namChi = "Thân"
        break;
    case 1:
        namChi = "Dậu"
        break;
    case 2:
        namChi = "Tuất"
        break;
    case 3:
        namChi = "Hợi"
        break;
    case 4:
        namChi = "Tý"
        break;
    case 5:
        namChi = "Sửu"
        break;
    case 6:
        namChi = "Dần"
        break;
    case 7:
        namChi = "Mẹo"
        break;
    case 8:
        namChi = "Thìn"
        break;
    case 9:
        namChi = "Tỵ"
        break;
    case 10:
        namChi = "Ngọ"
        break;
    case 11:
        namChi = "Mùi"
        break;
}

alert(`Năm nay là năm ${namCan} ${namChi}`)