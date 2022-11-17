const DashSkins = require('./api/DashSkins')

const hasSeen = []

const express = require('express')
const app = express()

// API MIDDELWARES
app.set('view engine', 'ejs')
app.use(express.static('views'))

// Routes 

app.get('/form', async(req, res)=>{
    for(let i in hasSeen){
        if(req.query.skinName == hasSeen[i].skinName && req.query.weaponName == hasSeen[i].weaponName){
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

app.listen(5000, ()=>console.log('sever started at http://localhost:5000/form'))

/* 
      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src=<%= img %>>
          </div>
          <div class="contentBx">
            <h2><%= weaponName %> <%= skinName %></h2>
            <div class="size">
              <h3>Float: <%= float %></h3>
              <h3>Price: R$<%= price %></h3>
            </div>
            <div class="stickers">
              <h3>Stickers: </h3>
              <% for(let i in stickers){ %>
                <div class="sticker">
                  <img src=<%= stickers[i].src %> />
                  <p><%= stickers[i].name %></p>
                </div>
              <% } %>
            </div>
            <a href=<%= url %>>Buy Now</a>
          </div>
        </div>
      </div>
*/