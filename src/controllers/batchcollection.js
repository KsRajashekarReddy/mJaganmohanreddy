
const batches = require('../batch/batch')
const developers = require('../batch/developer')


const batchcollection = async function (req,res) {
   let data = req.body

    let batchdata = await batches.create(data)


    res.send({data:batchdata})
}

const developercollection = async function (req,res) {
    let body = req.body
    let developerdata = await developers.create(body)
    res.send({data:developerdata})
}

const scholarshipdevelopers = async function (req,res) {
let developer = await developers.find({percentage:{$gte:70}}).select({"gender":"female"})

    res.send({msg:developer})
}


// 3. Write an api GET /scholarship-developers that fetches the list of eligible
//  developers for scholarship. An eligible
//   developer is female with percentage greater than or equal to 70


const developer = async function (req,res) {

let data = req.query.name
let dev = await developers.find({data}).select({name:1, percentage:1})

    
    res.send({data:dev})
}



module.exports.batchcollection = batchcollection
module.exports.developercollection =developercollection
module.exports.scholarshipdevelopers = scholarshipdevelopers
module.exports.developer = developer