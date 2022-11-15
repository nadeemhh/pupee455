const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())
let cors = require('cors')
app.use(cors())
const publicDirectoryPath = path.join(__dirname, './client')
app.use(express.static(publicDirectoryPath))
const puppeteer = require('puppeteer');
const port = process.env.PORT || 3600




app.post('/formdata', async (req, res) => {
  console.log('req.body.scriptname',req.body.scriptname)
 async function data() {
    
  try{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    page.goto(`https://sec.report/Ticker/${req.body.scriptname}`); 
  
    await page.waitForSelector("p");
   const text = await page. $eval('p', e=>e.textContent)
  console.log(text)
  res.send(text)
   // await browser.close()
 }catch(err) {
  console.log(err)
}
}
data()
 
    
  
     })
  

app.listen(port)