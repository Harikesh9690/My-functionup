function printDate( ) {
    var today = new Date();
var date =today.getDate();
console.log("today Date is  " ,date )
}
function printmonth( ) {
    var today = new Date();
var month =(today.getMonth()+1)
console.log(month )
}
function getbatchinfo( ) {
console.log("plutonium, W3D5, the topic for today is Nodejs module system")
}
module.exports.printDate = printDate
module.exports.printmonth = printmonth
module.exports.getbatchinfo = getbatchinfo