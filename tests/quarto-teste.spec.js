const {test, expect} = require('@playwright/test');


test('deve esperar', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.getByRole('button', {name: 'Start'}).click();

    await expect(page.getByText('Hello World!')).toBeVisible();
})

test('deve esperar usando o waitfor com estado', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    
    await page.getByRole('button', {name: 'Start'}).click();

    await page.waitForEvent('load');
    await page.waitForSelector('#finish', {state: 'visible'});
    
    await expect(page.getByText('Hello World!')).toBeVisible();

});

test('[login] [negative] [wait2] deve exibir erro com credenciais inválidas', async ({page}) => {
    await page.goto('https://automationexercise.com/');

    await page.getByRole('link', {name: 'Signup / Login'}).click();
    //espera a pagina mudar
    await page.waitForURL(/login/);
    await expect(page).toHaveURL(/login/)

    //espera para a pagina carregar completamente
    await page.waitForLoadState('load');

    await expect(page.getByText('Login to your account')).toBeVisible();
    await expect(page.getByText('New User Signup!')).toBeVisible();

    await page.getByPlaceholder('Email Address').nth(0).fill('test@example.com');
    await page.getByPlaceholder('Password').nth(0).fill('password');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.waitForSelector('.alert-danger', {state: 'visible'});
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();

   
});

test('esperar elementou sumir', async ({page}) => {
    await page.goto('https://automationexercise.com/products');

    await page.getByText('Add to cart').first().click();
    
    const modal = page.locator('#cartModal');

    await expect(modal).toBeVisible();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await expect(modal).toBeHidden();

   


});