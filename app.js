const express = require("express")
const app = express()
const { engine } = require("express-handlebars");
const PORT = 3000
const pedidos = [];
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// engine 

app.engine("handlebars", engine())
app.set("view engine", "handlebars")

// css

app.use(express.static("public"))

// pizzas 

const pizzas = [
    {
        id: 2,
        nome: "Calabresa",
        ingredientes: ["Mussarela", "Calabresa", "Cebola", "Azeitona"],
        tamanhos: {
            pequena: 28.00,
            media: 38.00,
            grande: 48.00
        },
        categoria: "Tradicional",
        vegetariana: false,
        disponivel: true
    },
    {
        id: 3,
        nome: "Quatro Queijos",
        ingredientes: ["Mussarela", "Parmesão", "Provolone", "Gorgonzola"],
        tamanhos: {
            pequena: 32.00,
            media: 45.00,
            grande: 55.00
        },
        categoria: "Especial",
        vegetariana: true,
        disponivel: true
    },
    {
        id: 1,
        nome: "Margherita",
        ingredientes: ["Mussarela", "Tomate", "Manjericão"],
        tamanhos: {
            pequena: 25.00,
            media: 35.00,
            grande: 45.00
        },
        categoria: "Tradicional",
        vegetariana: true,
        disponivel: true
    },
    {
        id: 4,
        nome: "Frango com Catupiry",
        ingredientes: ["Frango Desfiado", "Catupiry", "Milho", "Mussarela"],
        tamanhos: {
            pequena: 30.00,
            media: 42.00,
            grande: 52.00
        },
        categoria: "Tradicional",
        vegetariana: false,
        disponivel: true
    },
    {
        id: 5,
        nome: "Portuguesa",
        ingredientes: ["Mussarela", "Presunto", "Ovos", "Cebola", "Ervilha"],
        tamanhos: {
            pequena: 30.00,
            media: 40.00,
            grande: 50.00
        },
        categoria: "Tradicional",
        vegetariana: false,
        disponivel: false
    }
];

// home

app.get("/", (req,res) => {
    res.render("home", {pizzas})
})

// cardapio

app.get("/cardapio", (req,res) => {
    res.render("cardapio", { pizzas })
})

// pizza detalhes (ID)

// pedidos

app.get("/pedidos", (req,res) => {
    res.render("pedidos", { pedidos })
})

// fazer pedido (get/post)

app.get("/fazer-pedido", (req,res) => {
    res.render("fazer-pedido", { pizzas })
})

app.post("/save", (req,res) => {
    const pedido = {
        nome: req.body.nome,
        telefone: req.body.tel,
        pizza: req.body.pizza,
        tamanho: req.body.tamanho
    }
    
    pedidos.push(pedido);
    console.log(pedido)
    res.redirect("/pedidos")
})



app.listen(PORT, () => {
    console.log("Online!");
})