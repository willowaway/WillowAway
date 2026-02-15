import { type Locator, type Page } from "@playwright/test";

export class Util {
	public static getLocator(
		page: Page,
		xpath: string,
		...args: [string, string][]
	): Locator {
		if (args.length > 0) {
			args.forEach((arg) => {
				xpath.replaceAll(`{${arg[0]}}`, arg[1]);
			});
		}

		return page.locator(`xpath=${xpath}`);
	}
}
