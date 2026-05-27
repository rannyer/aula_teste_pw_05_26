const {test, expect} = require('@playwright/test');

test('deve exibir informacoes ao passar o mouse sobre a imagem', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');

    await page.locator('.figure').first().hover();

    await expect(page.getByText('name: user1')).toBeVisible();
   
    await page.screenshot({path: 'hover.png', fullPage: true});
});

test('deve printar a figura', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');

    await page.locator('.figure')
    .first()
    .screenshot({path: 'figure.png'});

});

test('selecionar opcao do menu', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.selectOption('#dropdown', 'Option 2');

});

test('deve pesquisar ao apertar enter', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    

    await page.locator('#search').fill('Playwright');
    await page.keyboard.press('Enter');

    await expect(page.getByText('You entered: ENTER')).toBeVisible();
    
});