import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())


app.post('/', async ( req,res ) => {

    async function LessGo(){
        let URL = `https://www.google.com/search?q=tradutor+${req.body.baseLang}+${req.body.finalLang}&oq=tradut&aqs=edge.3.69i57j69i59i131i433i512j69i59l2j0i131i433i512l4j0i512.4355j0j1&sourceid=chrome&ie=UTF-8`
        let phrase = req.body.phrase
    
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(URL);
    
        await page.type('[placeholder="Digitar texto"]', phrase);
        
        await page.waitForTimeout(2000);
    
        const traduction = await page.evaluate(() => {
            return document.querySelector('#tw-target-text-container span').textContent
        });
    
        await browser.close();
    
        res.send(JSON.stringify(traduction))
      }

      LessGo();

    //   res.send(LessGo(req.body.baseLang, req.body.finalLang, req.body.phrase).toJSON);
});

app.listen('4000', () => console.log('RODANDO NA PORTA 4K'));