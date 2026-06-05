import test from '@playwright/test';

test('Dropdown', async ({ page }) => {

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.locator('[data-target="multi-select-dropdown"]').click();
    await page.selectOption('[class="form-multiselect block w-full mt-1"]', { index: 2 }, { index: 4 });
    await page.waitForTimeout(3000);


}
)