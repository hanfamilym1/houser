module.exports={
    read: (req,res)=>{
        const db = req.app.get('db')
        db.get_houses().then(houses=>
        // console.log(houses)
        res.status(200).send(houses))
    }
}