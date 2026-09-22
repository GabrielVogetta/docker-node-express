console.log("Teste 2: ")
fetch('https://api.github.com/users/gabrielvogetta')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log("Fetch para link do meu github: " + data.html_url);
    })