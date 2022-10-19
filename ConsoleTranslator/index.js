const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function LessGo(){
    console.log('\nDigite a linguagem em que a frase se encontra: ')
    let baseLang = readlineSync.question('');

    let finalLang = 'Português'

    console.log('\nDigite a linguagem para qual você quer traduzir a frase (Aperte enter para português: ')
    let NewfinalLang = readlineSync.question('');

    console.log('\nDigite a frase a ser traduzida: ')
    let phrase = readlineSync.question('');

    finalLang = NewfinalLang ? NewfinalLang : finalLang;

    let URL = `https://www.google.com/search?q=tradutor+${baseLang}+${finalLang}&oq=tradut&aqs=edge.3.69i57j69i59i131i433i512j69i59l2j0i131i433i512l4j0i512.4355j0j1&sourceid=chrome&ie=UTF-8`

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);

    await page.type('[placeholder="Digitar texto"]', phrase);
    
    await page.waitForTimeout(2000);

    const traduction = await page.evaluate(() => {
        return document.querySelector('#tw-target-text-container span').textContent
    });

    console.table({
        '\nFrase original':phrase,
        Tradução: traduction,
    });
    await browser.close();
  }

  LessGo();