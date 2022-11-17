const puppeteer = require('puppeteer')

module.exports = async function dashSkins(weapons){

    const {skinName, weaponName, lowestPrice} = weapons

        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(`https://dashskins.com.br/?search=${skinName}&weapon=${weaponName.toUpperCase()}&sort_by=price&sort_dir=asc&limit=&page=1`)

        await page.setViewport({
            width: 2000,
            height: 1000
        });
    
        let hasRes = await page.evaluate(()=>{
            if(document.querySelectorAll('.columns.is-multiline div').length <= 64) return false
            return true
        })
        if(!hasRes) return false
    
        return page.waitForSelector('.item-page .image.lazyLoad.isLoaded').then(async()=>{
            let skinInfo = await page.evaluate(()=>{
    
                let price = document.querySelector('.item-page').querySelectorAll('.title span')
                price =  price[price.length-1].innerHTML
                price = Number(price.slice(2, price.length).replace(',', '.'))
        
                let float = document.querySelector('.item-page .wear-value span').innerHTML
                float = float.replace('Float: ', '')
        
                let stickers = []
                const allStickersName = document.querySelector('.item-page').querySelectorAll('.title .stickers span .tooltip-content')
                const allStickersImg = document.querySelector('.item-page').querySelectorAll('.title .stickers span img')
                for(let i=0; i<allStickersName.length; i++){ stickers.push({ name: allStickersName[i].innerHTML, src: allStickersImg[i].src }) }
                stickers = stickers.filter( e => e )
        
                const img = document.querySelector('.item-page img').src

                const url = document.querySelector('.column.is-2-fullhd a').href
        
                return { price, stickers: stickers.filter( (e) => e ), float, img, url }
            })
            
            if(skinInfo.price < lowestPrice & skinInfo != false){
                const {price, stickers, float, img, url} = skinInfo
                return {
                    weaponName,
                    skinName,
                    price,
                    stickers,
                    float,
                    img,
                    url
                }
            }else{
                return false
            }
        })
}