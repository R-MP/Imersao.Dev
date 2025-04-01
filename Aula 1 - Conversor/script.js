function conversor() {
    const apiKey = 'O59J2I0JV5YGVBWR';
    const wonValue = prompt("Digite o valor em Wons");

    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=KRW&to_currency=BRL&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const taxa = data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
            alert("R$" + (wonValue * taxa).toFixed(2));
        })
        .catch(error => console.error('Erro:', error));
}