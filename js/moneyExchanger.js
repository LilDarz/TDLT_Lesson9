function convert() {
    let amount = document.getElementById("amount").value;
    let formCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    switch (formCurrency&&toCurrency) {
        case ("vnd"&& "usd"):
            amount /= 23000;
            break;
        case ("usd"&&"vnd"):
            amount *= 23000;
            break;
    }
    document.getElementById("result").innerHTML = (`Result: ${amount} ${toCurrency}`);
}

