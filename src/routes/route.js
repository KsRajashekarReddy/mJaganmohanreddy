 const express = require('express');
const query = require('express/lib/middleware/query');
const { status } = require('express/lib/response');

 const router = express.Router();

 router.get('/movies', function (req, res) {
    let array = [ 'bahubhali', 'avatar', 'war of worlds', 'zombieland' ];
 
   const value =array.values();
 for (let letter of value) {
    

    res.send(array)
 }
 });


 router.get('/movies/:indexnumber', function (req, res) {


    let movie = ['rand de basnasti', 'the shining', 'lord of the rings', 'batman begins']

let movies1 = movie.indexOf(movie)

    res.send(movies1)
 });

//  router.get('/movies/:validindex', function (req, res) {
    
     

//     res.send()
// });

//  router.get('/movies/films', function (req, res) {
//     const favoritemovies  = [ { 
//             "id": 1,
//             "name": "The Shining"
//            }, 
//            {
//           "id": 2,
//              "name": "Incendies"
//             }, 
//             {
//              "id": 3,
//              "name": "Rang de Basanti"
//             }, 
//             {
//              "id": 4,
//              "name": "Finding Nemo"
//            }
//         ]

    


   


//    res.send(favoritemovies);
//  });

router.get('/films/fav',function(req,res){
    let favoritemovies = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
    res.send(favoritemovies)
       
})
router.get('/films/:filmid',function(req,res){
    let listofmovies = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]

       let i
       for(i =0;i<listofmovies.length;i++){
           if (listofmovies[i].id==u){
               res.send(listofmovies[i])
               break
           } 
       }
       if (i===listofmovies.length){
           res.send('No movie exists with this id')
       }
   })

   router.get('/findmissingnumber',function(req,res){
let array = [1,2,3, 4, 6,7,8,9]

function missingnumber(a,n){
    let total = (n+1)*(n+2)/2;
    for(let i =0; i<n; i++){
        total -= a[i]
    }
}

    res.send(total)
   });
    // res.send()
module.exports = router;
//adding this comment for no reason

