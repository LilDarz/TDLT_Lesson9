function check() {
    let mathPoint = Number(document.getElementById("math").value);
    let literaturePoint = Number(document.getElementById("literature").value);
    let englishPoint = Number(document.getElementById("english").value);
    let areaPoint = document.getElementById("area").value;
    let totalPoint = mathPoint+literaturePoint+englishPoint;
    switch (areaPoint) {
        case "1":
            totalPoint += 0.75;
            break;
        case "2":
            totalPoint += 0.5;
            break;
        case "2_NT":
            totalPoint += 0.25;
            break;
        case "3":
            totalPoint;
            break;
    }
    document.getElementById("result").innerHTML = `Điểm đại học khối D của bạn là ${totalPoint}`;
}

