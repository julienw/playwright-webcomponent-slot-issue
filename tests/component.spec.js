const { test, expect } = require('@playwright/test');

test('web component has article with link in shadow DOM', async ({ page }) => {
  await page.goto('/index.html');

  const wrapper = page.locator('wrapper-component');
  await expect(wrapper).toBeVisible();

  const component = wrapper.locator('article-component');
  await expect(component).toBeVisible();

  const article = component.getByRole('article');
  await expect(article).toBeVisible();

  const link = article.getByRole('link');
  await expect(link).toBeVisible();
  await expect(link).toHaveText('Click here');
  await expect(link).toHaveAttribute('href', 'https://example.com');
});
