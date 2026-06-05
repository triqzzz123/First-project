import test from '@playwright/test';

test('Dropdown', async ({ page }) => {

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.locator('[class="tab px-4 py-2 text-blue-500 hover:bg-blue-200 focus:outline-none active"]').click();
    await page.selectOption('[class="form-select block w-full mt-1"]', { value: "option2" });
    await page.waitForTimeout(3000);


}
)