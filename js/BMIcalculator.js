let height = prompt("Nhập chiều cao của bạn:");
let weight = prompt("Nhập cân nặng của bạn");
let bmi = Number(weight)/(Math.pow(Number(height),2));
if (bmi < 16) {
    alert("Gầy cấp độ 3");
}else if(bmi<17){
    alert("Gầy cấp độ 2");
}else if(bmi<18.5){
    alert("Gầy cấp độ 1");
}else if(bmi<25){
    alert("Bình thường");
}else if(bmi<30){
    alert("Béo cấp độ 1");
}else if(bmi<35){
    alert("Béo cấp độ 2");
}else if(bmi<40){
    alert("Béo cấp độ 3");
}else{
    alert("Béo phì cấp độ 3");
}