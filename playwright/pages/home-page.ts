import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
	readonly page: Page;
	readonly homeLogo: Locator;
	readonly iAmText: Locator;

	constructor(page: Page) {
		this.page = page;
		this.homeLogo = page.getByTestId("home-logo");
		this.iAmText = page.locator("strong", { hasText: "Willow Hughes" });
	}

	async goto() {
		const baseURL = process.env.ENVIRONMENT_URL! || process.env.PRODUCTION_URL!;
		const response = await this.page.goto(baseURL);
		expect(response?.status()).toBeLessThan(400);
	}

	async clickHomeLogo() {
		await this.homeLogo.first().click();
		await expect(this.iAmText).toBeVisible();
		await expect(this.page).toHaveTitle(/Digital Portfolio/);
		await this.page.screenshot({ path: "homepage.jpg" });
	}
}
