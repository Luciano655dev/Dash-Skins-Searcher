const DashSkins = require('./api/DashSkins')

const hasSeen = []

const express = require('express')
const app = express()

// API MIDDELWARES
app.set('view engine', 'ejs')
app.use(express.static('views'))

// Routes 

app.get('/', async(req, res)=>{
    for(let i in hasSeen){
        if(req.query.skinName == hasSeen[i].skinName && req.query.weaponName == hasSeen[i].weaponName && req.query.lowestPrice <= hasSeen[i].lowestPrice){
            res.render(__dirname + '/views/form', {...hasSeen[i], nothingFounded: false })
            return
        }
    }
    
    let result = await DashSkins({
        skinName: String(req.query.skinName),
        weaponName: String(req.query.weaponName),
        lowestPrice: Number(req.query.lowestPrice)
    })
    
    if(!result){
        res.render(__dirname + '/views/form', {
            weaponName: '',
            skinName: '',
            price: '',
            stickers: [],
            float: '',
            img: '#',
            url: '#',
            nothingFounded: true 
        })
        return
    }

    res.render(__dirname + '/views/form', {...result, nothingFounded: false})
    hasSeen.push(result)
})

app.listen(3000, ()=>console.log(`sever started at http://localhost:3000/`))
