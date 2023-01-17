
const fs = require("fs")
let bdd = require("./bdd.js")

let app = require("./expressApp")


// JOUEUR

app.post("/addJoueur",(req,res)=>{
    let bd = req.body
    let num = bd.num
    let nom = bd.nom
    let prenom = bd.prenom
    let dateNaiss = bd.dateNaiss
    let idEquipe = bd.idEquipe

    bdd.query("INSERT INTO joueur(numeroJoueur,nomJoueur,prenomJoueur,dateNaissance,idEquipe) VALUES(?,?,?,?,?)",[num,nom,prenom,dateNaiss,idEquipe],(err,result)=>{
       if(err) throw err
        console.log(result)
        res.send("ok")
    })


})

app.post("/updateJoueur",(req,res)=>{
    let bd = req.body
    let num = bd.num
    let id = bd.id
    let nom = bd.nom
    let prenom = bd.prenom
    let dateNaiss = bd.dateNaiss
    let idEquipe = bd.idEquipe

    bdd.query("UPDATE joueur SET numeroJoueur = ?, nomJoueur = ?, prenomJoueur = ?, dateNaissance= ?, idEquipe = ? WHERE idJoueur = ?",[num,nom,prenom,dateNaiss,idEquipe, id],(err,result)=>{
       if(err) throw err
        console.log(result)
        res.send("ok")
    })


})

app.post("/deleteJoueur",(req,res)=>{
    let bd = req.body

    bdd.query("DELETE FROM joueur WHERE idJoueur=?",[bd.id],(err,result)=>{
        if(err) throw err

        res.send("okay eeee")


    })
})

app.get("/test",(req,res)=>{

    bdd.query("SELECT * FROM championnat",(err,data)=>{

        res.send(data)


    })



})





// function readFilePerso(file){
//     var pr = new Promise((resolve,reject)=>{
//         fs.readFile(file,{encoding:"utf8"},(err,data)=>{
//            if(err) reject()
//            else resolve(data)
                     
//          })

//     })

//     return pr
// }



// app.get("/",(req,res)=>{
//     fs.readFile("./data.json",{encoding:"utf8"},(err,data)=>{
//         res.send(JSON.parse(data))
//     })
// })

// app.post("/save",(req,res)=>{
   
    



// readFilePerso("./data.json").then(response =>{

//     var data = [req.body,...JSON.parse(response)]
//     console.log(req.body)

//     fs.writeFile("./data.json",JSON.stringify(data),(err)=>{
//         res.sendStatus(200)
        
//     })
// })

// })



// app.post("/delete",(req,res)=>{
//     console.log(req.body)

//     readFilePerso("./data.json").then(response =>{

//         var data = JSON.parse(response).filter(e=>e.id !=req.body.id)
//         data.forEach(e => {
//             if(e.id > req.body.id) e.id--
//         })

        
        
    
//         fs.writeFile("./data.json",JSON.stringify(data),(err)=>{
//             // res.sendStatus(200)
//             res.send(`task number ${req.body.id} deleted!!`)
            
//         })
//     })
    
// })

// app.post("/update",(req,res)=>{
//     readFilePerso("./data.json").then(response=>{
//         var data = JSON.parse(response)

//     data.forEach(e => {
//         if(e.id == req.body.idUpdate){
//             e.task = req.body.task
//             console.log(e)
//         }
//     })

//     fs.writeFile("./data.json",JSON.stringify(data),(err)=>{
    
//         if(err) throw err
//         res.send(`task number ${req.body.idUpdate} updated!!`)
        
//     })

//     })

// })


// app.post("/isDoneOrNot",(req,res)=>{
//     readFilePerso("./data.json").then(response=>{
//         var data = JSON.parse(response)

//     data.forEach(e => {
//         if(e.id == req.body.id){
//             e.done = !e.done
//             console.log(e)
//         }
//     })

//     fs.writeFile("./data.json",JSON.stringify(data),(err)=>{
//         // res.sendStatus(200)
//         if(err) throw err
//         res.send(`task number ${req.body.id} done!!`)
        
//     })

//     })

// })

// app.get("/deleteAll",(req,res)=>{

//     fs.writeFile("./data.json",JSON.stringify([]),(err)=>{
//         // res.sendStatus(200)
//         if(err) throw err
//         res.send(`all task deleted!!`)
        
//     })

// })


app.listen(5000)