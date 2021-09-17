import Puppeteer from 'puppeteer';

const init = async () => {

    // Inicia o chromium com em fullscreen e maximo de viewport
    // Habilita a automação para não aparecer a annoying message
    const browser = await Puppeteer.launch({
        headless: false,
        args: ['--start-fullscreen'],
        ignoreDefaultArgs: '--enable-automation',
        defaultViewport: null
    });

    // Seleciona a primeira pagina do browser
    const pages = await browser.pages();
    const page = pages[0];
    await page.goto('https://youtube.com');

    // Espera a pagina possui o input de search
    // Escreve Puppeter no elemento
    // Clica em enter
    await page.waitForSelector('#search');
    await page.type('#search', 'Puppeteer');
    await page.keyboard.down('Enter');

    // await browser.close();
};

init();