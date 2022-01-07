let inputFruit = prompt("Nhập tên quả cần kiểm tra");

switch (inputFruit.toLowerCase()) {    
    case "ổi":
        alert(`Giá của ${inputFruit.toLowerCase()} là 20k/1kg `);
        break
    case "măng cụt":
        alert(`Giá của ${inputFruit.toLowerCase()} là 50k/1kg `)
        break;
    default:
        alert(`Ở đây chúng t ko bán ${inputFruit.toLowerCase()}`);
        break;
}