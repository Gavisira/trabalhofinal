var dbReg = {
    "data" : [
       
        {
            "imagem" : "https://d31j74p4lpxrfp.cloudfront.net/sites/default/files/styles/mobile_large_image/public/br_files/xanda_the_lion_lying.jpg?itok=14IdWu6P",
            "numero": 1,
            "especie" : "Panthera leo",
            "reino" : "Mamifero",
            "situacao" : "Fora de Risco",
            "info" : "Vive no continente africano, é carnivoro"
        },{
            "imagem" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Schimpanse_Zoo_Leipzig.jpg/250px-Schimpanse_Zoo_Leipzig.jpg",
            "numero": 2,
            "especie" : "Pan",
            "reino" : "Mamifero",
            "situacao" : "Ameaçado",
            "info" : "Vive no continente africano, é herbivoro"
        },{
            "imagem" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/200px-African_Bush_Elephant.jpg",
            "numero": 3,
            "especie" : "Elephantidae",
            "reino" : "Mamifero",
            "situacao" : "Fora de Risco",
            "info" : "Vive no continente africano, é herbivoro"
        }
]
}
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    db = dbReg
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertEspecie(animal) {
    reordenaId();
    // Calcula novo Id a partir do último código existente no array
    let novoId = db.data[db.data.length - 1].numero + 1;
    let novoEspecie = {
        "numero": novoId,
        "especie": animal.especie,
        "imagem": animal.imagem,
        "reino": animal.reino,
        "situacao": animal.situacao
    };

    // Insere o novo objeto no array
    db.data.push(novoEspecie);
    displayMessage("Espécie Inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function updateEspecie(id, animal) {
    deleteEspecie(id);
    insertEspecie(animal);
    reordenaId();
    displayMessage("Espécie alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function deleteEspecie(id) {    
    db.data.splice(id-1, 1);
    displayMessage("Especie removida");
    
    reordenaId();

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function reordenaId() {
    obj = db.data;
    for (i=0; i<obj.length; i++) {
        if (i != (obj[i].numero+1)) {
            obj[i].numero = i+1;
        }
    }
}
