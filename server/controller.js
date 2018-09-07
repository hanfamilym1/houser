module.exports={
    read: (req,res)=>{
        const db = req.app.get('db')
        db.get_houses().then(houses=>
        // console.log(houses)
        res.status(200).send(houses))
    },
    create: (req,res)=>{
        const db = req.app.get('db')
        // console.log(req.body)
        let house = req.body
        let {id, name, address, city, state, zipcode } = house
        // console.log(name, address, city, state, zipcode)
        db.insert_house(name, address, city, state, zipcode).then(house=>res.status(200).send(house))
    }, 
    delete: (req,res)=>{
        const db = req.app.get('db')
        let {id} = req.params
        // console.log(req.params)
        db.delete_house(id).then(result=>res.status(200).send(result))
    }
}