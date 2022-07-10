
async function getContent() {

    try {

        const response = await fetch('http://localhost:8081/list')
       
        const data = await response.json()

    

       

        show(data)

     

    } catch (error) {
        console.error(error)
    }
    
}

getContent() 

function show(users) {
    let output = ''

    for( let user of users) {
        
        output += `<li>${user.name} / valor: ${user.price}</li>`
      
        console.log(user)
    }
    document.querySelector('.item').innerHTML = output
}

function todoPost(url, body) {
   var request = new XMLHttpRequest();
   request.open("POST", url, true);
   request.setRequestHeader("Content-type", "application/json");
   request.send(JSON.stringify(body))

   request.onload = function() {
    console.log(this.responseText)
   }

   return request.responseText

  }

function cadastrarUsuario() {
    event.preventDefault()
    const url =  "http://localhost:8081/product"
    const nome = document.getElementById("name").value;
    const preço = document.getElementById("price").value;

  body = {
    "name": nome,
    "price": preço
  }

  todoPost(url,  body)


}