const {test, expect} = require('@playwright/test');

test('deve acessar a tela de login', async ({page}) => {
    await page.goto('https://automationexercise.com/');

    await page.getByRole('link', {name: 'Signup / Login'}).click();
    await expect(page.getByText('Login to your account')).toBeVisible();
    await expect(page.getByText('New User Signup!')).toBeVisible();

    await page.getByPlaceholder('Email Address').nth(0).fill('abc@gmail.com');
    await page.getByPlaceholder('Password').nth(0).fill('123');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();


});