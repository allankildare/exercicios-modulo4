// Parte B - Hora do Jogo!
const company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
}

// Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
/*
var getShirtsColorsAmount = function (company) {
    colors = company.products.shirts.colors
    return colors.length
} */

var getShirtsColorsAmount = company => {
    let {products:{shirts:{colors}}} = company
    return colors.length
}
  
// A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​socks
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
}

const {shirts, socks} = clothes
  
// Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3]
const cloneArr = [...arr.splice(0, 1)]

const arr2 = [4, 5, 6]
const cloneArr2 = [...arr2.splice(0, 1)]

// A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
]

var name = persons.map(item => `${item.firstname} ${item.lastname}`)