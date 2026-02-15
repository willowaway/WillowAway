import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { Navbar } from "../pages/navbar-comp";

// This test is being used as a Browser check
// See browserCheck.testMatch in your checkly.config.ts to configure

test("Home Page, Status Code < 400, Verify Title", async ({ page }) => {
	const homePage = new HomePage(page);
	await homePage.goto();
	await homePage.clickHomeLogo();
});

test("Navigate to Home, Verify Header", async ({ page }) => {
	const homePage = new HomePage(page);
	await homePage.goto();

	const navbar = new Navbar(page);
	await navbar.clickNavbar("Home");
	await navbar.scrollToHeader("intro");
	await navbar.verifyHeader("intro", "LET ME");
});

test("Navigate to Projects, Verify Header", async ({ page }) => {
	const homePage = new HomePage(page);
	await homePage.goto();

	const navbar = new Navbar(page);
	await navbar.clickNavbar("Projects");
	await navbar.verifyHeader("project", "My Recent");
});

test("Navigate to About, Verify Header", async ({ page }) => {
	const homePage = new HomePage(page);
	await homePage.goto();

	const navbar = new Navbar(page);
	await navbar.clickNavbar("About");
	await navbar.verifyHeader("about", "am I?");
});
