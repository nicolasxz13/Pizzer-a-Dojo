var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich);

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);

//Ejemplo pizza
//No tengo idea de pizzas asi que supongo que existen estas combinaciones..
/*
var pizza = {
    tipoCorteza:"Estilo Chicago",
    tipoSalsa:"tradicional",
    quesos:["mozzarella"],
    salsas: ["pepperoni","salchicha"]
}
*/
//

function pizzaOven(corteza,salsa,quesos,salsas){
    var pizza = {};
    pizza.tipoCorteza = corteza;
    pizza.tipoSalsa = salsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
var pizza1 = pizzaOven("estilo Chicago","tradicional",["mozzarella"],["pepperoni","salchicha"]);
var pizza2 = pizzaOven("lanzada a mano","marinara",["mozarella","feta"],["champiñones","aceitunas","cebollas"]);
var pizza3 = pizzaOven("lanzada a mano", "tradicional",["mozzarella","parmesano","crema"],["champiñones"]);
var pizza4 = pizzaOven("lanzada a mano", "tradicional",["mozzarella","parmesano","crema"],["pepperoni","champiñones"]);