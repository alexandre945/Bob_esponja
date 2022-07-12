
class Produto {
    constructor() {
        this.id =  1;
        this.arrayProdutos = [];
      
    }

    adicionar() {
      const produto = this.lerdados();
                    this.salvar(produto); 
                    this.listaTabela();
                    this.totais();
                    this.mudar();
                 
    }
    listaTabela(){
        const tbody = document.getElementById("tbody");
              tbody.innerText = '';

        for(let i = 0;  i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_total = tr.insertCell();
            let td_acoes = tr.insertCell();

         

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].nomeValor;
       

            let img = document.createElement('img');
            img.src = 'image/lixeira-de-reciclagem.png';
            img.setAttribute("onclick", "produto.delete("+this.arrayProdutos[i].id+")");
            td_acoes.appendChild(img);
        }
    }
    salvar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;

    }
    lerdados() {
        const produto = {}

        produto.id = this.id;  
        produto.nomeProduto = document.getElementById("produto").value;
        produto.nomeValor = document.getElementById("valor").value;
   

        return produto;
    }

    delete(id) {
        produto.id = this.id; 
        let tbody = document.getElementById("tbody");

       for(let i = 0; i < this.arrayProdutos.length; i++) {
        if(this.arrayProdutos[i].id == id) {
            this.arrayProdutos.splice(i, 1);
            tbody.deleteRow(i);
          
        }
      
       }
     
    }
    totais() {

 
        const total = this.arrayProdutos.reduce((soma, item ) => item.nomeValor + soma, 0);
        console.log(total);

    }
    mudar() {
        const button = document.getElementById("produto");
        button.style.color = "blue";
        button.style.border = "solid 2px green";
        button.style.background = "white";
        button.innerHTML = "Adicionado";
    }
  

}

const produto = new Produto();