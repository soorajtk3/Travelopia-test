import { test, expect } from '@playwright/experimental-ct-react';
import Form from '../components/Form';
const formLocator = '[label="name"]'
const name = 'john'
test('Name input Field accepts text input', async ({ mount }) => {
    const formComponent = await mount(<Form /> );
    const nameField = formComponent.locator(formLocator)
    await nameField.fill(name)

    await expect(cityField).toHaveValue(cityName)
    await expect(page.getByText('Fill the form', { exact: true })).toBeVisible();
    await page.getByLabel('name').fill('john');

});