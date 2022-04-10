let log = function printDate() {

   
    const birthday = new Date()
   const date1 = birthday.getDate();

    console.log(date1);   
}  
    module.exports.date = log
    
    
    
    let month = function printMonth() {
   
   
    const moonLanding = new Date('march 10,  2022 00:10:45');

console.log(moonLanding.getMonth()); 
          
    }
    
    module.exports.month = month
    
    let batch = function getbatchinfo()
    {
        console.log("Uranium batch and todays topic is  Nodejs module system")
    }
    
    module.exports.batch = batch