let wt= new Date();
const a= (req,res,next) => {
    let day = wt.getDay();
    let hour = wt.getHours();
    if (day=>0 && day<5 && hour>=9 && hour<=17)
    {
        next()
    }
    else 
    {
        res.send( "End services Come tomorrow")
    }
}
module.exports = a