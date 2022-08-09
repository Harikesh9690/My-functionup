const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;


//=================================ASSIGNMENT 1 ======================================================//

router.get("/movies", (req, res) => {

    const movieName = ["Rang de basanti", "The shining", "Lord of the ring", "Batman begins", "Bahubali", "Spiderman", "Nambi Effect"]

    res.send(movieName)

})

//==============================ASSIGNMENT 2 AND 3 ==========================================================//

router.get("/movies/:indexNumber", (req, res) => {

    const movieName = ["Rang de basanti", "The shining", "Lord of the ring", "Batman begins", "Bahubali", "Spiderman", "Nambi Effect"]
    let ind = req.params // ind = { indexNumber : 3}
    let indexOfMovie = + (ind.indexNumber)
    
    console.log(ind)

    console.log(typeof indexOfMovie)
    
    if(!indexOfMovie){
           res.send("Please provide indexNumber")
     }
    else if(indexOfMovie < 0 || indexOfMovie > movieName.length) {
        res.send("please insert valid index")
    }
    else{
        res.send(movieName[indexOfMovie])
    }

})

//====================================Assignment 4 ============================================================//


router.get("/films", (req, res) => {

    const movieData =[
        {
            id : 1,
            name:"The Shining"
        },
        {
            id : 2,
            name:"Incendies"
        },
        {
            id : 3,
            name:"Rang de Basanti"
        },
        {
            id : 4,
            name:"Finding Nemo"
        }
    ]

    res.send(movieData)

})

//========================================Assignment 5==========================================================//

router.get("/films/:filmId", (req, res) => {

    const movieData =[
        {
            id : 1,
            name:"The Shining"
        },
        {
            id : 2,
            name:"Incendies"
        },
        {
            id : 3,
            name:"Rang de Basanti"
        },
        {
            id : 4,
            name:"Finding Nemo"
        }
    ]

    const filmNameWithId =  +(req.params.filmId)

    if(!filmNameWithId){
        res.send("please provide filmId")
    }
    for(let i=0;i<movieData.length;i++){
        if(movieData[i].id === filmNameWithId){
            res.send(movieData[i])
        }
    }

    res.send("No movie present with this id")

})