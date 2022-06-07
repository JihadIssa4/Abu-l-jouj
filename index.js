fetch('https://session762022.herokuapp.com/data')
 .then(x => x.json())
 .then(json => {
     var select = document.getElementById('1')
     json.Sheet1.forEach(element => {
     var option = document.createElement('option')
     option.innerHTML = element.A;
     select.appendChild(option);
     })
 })