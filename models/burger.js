// let burgers = [
//     { id:0, name:"Cheese Burger", devoured: false },
//     { id:1, name:"Fish-O-Flet", devoured: true },
// ]
const orm = require("../config/orm.js")

async function getAvailable(){
    const burgerList = await orm.selectAll()
    console.log(burgerList)
    return burgerList.filter( burger=>burger.devoured == false )
}

async function getDevoured(){
    const burgerList = await orm.selectAll()
    return burgerList.filter( burger=>burger.devoured == true )
}

function addBurger( name ){
    return orm.insertOne( name )
}

function devourBurger( id ){
    return orm.updateOne( id,"devoured",true )
}

module.exports = {
    getAvailable, getDevoured, addBurger, devourBurger
}
