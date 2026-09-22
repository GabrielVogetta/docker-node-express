console.log("Teste 5: ")
fetch('http://localhost:3000')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.message);
    })