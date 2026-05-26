const {test, expect} = require('@playwright/test');

// Full-Fledged practice website for Automation Engineers

test('deve abrir a pagina inicial do Automation Exercise', async ({page})=>{
    await page.goto('https://automationexercise.com/');

  

    await expect(page).toHaveTitle(/Automation Exercise/);

 
    await expect(page.getByText('Full-Fledged practice website for Automation Engineers').nth(0)).toBeVisible();

})

