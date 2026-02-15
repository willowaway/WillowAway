import { expect, type Locator, type Page } from "@playwright/test";
import { Util } from "../util/util";

export class Navbar {
	readonly page: Page;
	readonly navItem = (text: string): Locator =>
		this.page.locator(
			`xpath=//nav//div[@class='nav-item']//a[text()='${text}']`,
		);
	readonly header = (id: string): Locator =>
		this.page.locator(`xpath=//section[@id='${id}']//h1`);

	constructor(page: Page) {
		this.page = page;
	}

	async clickNavbar(text: string) {
		const navLocator: Locator = this.navItem(text);
		navLocator.first().click();
	}

	async verifyHeader(id: string, expectedText: string) {
		const headerLocator: Locator = this.header(id);
		expect(headerLocator.first()).toBeVisible();
		expect(headerLocator.first()).toContainText(expectedText);
		await this.page.screenshot({ path: "header.jpg" });
	}

	async scrollToHeader(id: string) {
		const headerLocator: Locator = this.header(id);
		headerLocator.first().scrollIntoViewIfNeeded();
	}
}
