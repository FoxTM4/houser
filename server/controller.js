module.exports={

    create: (req,res, next)=>{
        const dbInstance = req.app.get('db');
        const {name, address,city,state,zipCode}= req.body
        dbInstance.create_house([name, address, city, state, zipCode]).then(()=>{
            res.sendStatus(200)
        })
        .catch((err)=>{
            res.status(500).send({errorMessage: 'something went wrong'})
            console.log(err)
        })
    },

delete: (req,res,next)=>{
    const {params}= req;
    dbInstance = req.app.get('db')
    dbInstance.delete_house(params.id).then((house)=>{
        res.sendStatus(200)
    })
    .catch((err)=>{
        res.status(500).send({errorMessage: 'something went wrong'})
        console.log(err)
    })
}
}