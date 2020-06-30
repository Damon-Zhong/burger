const burger = require("../models/burger")

function router( app ){ 
    
    app.get("/", async function( req, res ){
            const available = await burger.getAvailable()
            const devoured = await burger.getDevoured()
            res.render( 'index',  { available, devoured } )
    })

    app.get("/devour/:id",async function( req,res ){
        const result = await burger.devourBurger( req.params.id )

        res.redirect("/")
    })

    app.post("/", async function( req, res ){
        console.log( `[POST] we received this data:`, req.body )
        await burger.addBurger( req.body.burger )

        res.redirect("/")
    })
}

module.exports = router
