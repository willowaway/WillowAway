import { test, expect } from "@playwright/test";

// This test is being used as a Browser check
// See browserCheck.testMatch in your checkly.config.ts to configure

test("Visit Willow Away Homepage", async ({ page }) => {
	// The baseURL for Browser checks can be set in the playwrightConfig of your checkly.config.ts
	const baseURL = process.env.ENVIRONMENT_URL! || process.env.PRODUCTION_URL!;
	const response = await page.goto(baseURL);
	expect(response?.status()).toBeLessThan(400);
	await expect(page).toHaveTitle(/Digital Portfolio/);
	await page.screenshot({ path: "homepage.jpg" });
});
