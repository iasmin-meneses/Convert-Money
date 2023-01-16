

const button = document.getElementById('convert-button')

const select = document.getElementById("currency-select")


const convertValues = async () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(inputReal)


    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(inputReal / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'Eur' }).format(inputReal / euro)
    }

    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = (inputReal / (bitcoin*1000)).toFixed(2)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/eua.png"
    }
    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"

    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency) 