import { expect, test } from "@playwright/test";
import { mccContact } from "../lib/mock-data";

const publicNavLabels = ["Главная", "Котята", "О породе", "Заводчикам", "Контакты"];
const forbiddenPublicNavLabels = [/Админка/i, /Кабинет/i, /Dashboard/i, /Login/i];

test.describe("MaineCoonCity visual audit", () => {
  test("homepage: open, screenshot, scroll, catalog navigation", async ({ page }, testInfo) => {
    const consoleErrors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto("/", { waitUntil: "networkidle" });

    await expect(page).toHaveTitle(/MaineCoonCity|Maine Coon|Мейн/i);

    const isMobile = testInfo.project.name.includes("mobile");
    if (isMobile) {
      await page.getByRole("button", { name: /открыть меню/i }).click();
    }

    for (const label of publicNavLabels) {
      await expect(page.getByRole("link", { name: label }).first()).toBeVisible();
    }

    for (const label of forbiddenPublicNavLabels) {
      await expect(page.getByRole("link", { name: label })).toHaveCount(0);
    }

    if (isMobile) {
      const navBox = await page.locator("header").boundingBox();
      expect(navBox?.height ?? 0).toBeLessThan(360);
      await page.getByRole("button", { name: /закрыть меню/i }).click();
    }

    await expect(page.getByTestId("hero-card")).toBeVisible();
    await expect(page.getByTestId("hero-filter")).toBeVisible();
    await expect(page.getByTestId("hero-bg")).toBeVisible();
    await expect(page.getByTestId("hero-mid")).toBeVisible();
    await expect(page.getByTestId("hero-fog")).toBeVisible();

    await page.screenshot({
      path: `test-results/home-hero-${testInfo.project.name}.png`,
      fullPage: false,
    });

    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(800);

    await page.screenshot({
      path: `test-results/home-parallax-400-${testInfo.project.name}.png`,
      fullPage: false,
    });

    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(800);

    await page.screenshot({
      path: `test-results/home-parallax-900-${testInfo.project.name}.png`,
      fullPage: false,
    });

    await page.getByRole("link", { name: "Котята" }).first().click();
    await page.waitForURL("**/kittens", { timeout: 15_000 });
    await page.waitForLoadState("networkidle");

    await page.screenshot({
      path: `test-results/kittens-catalog-${testInfo.project.name}.png`,
      fullPage: false,
    });

    expect(consoleErrors, `Console errors:\n${consoleErrors.join("\n")}`).toEqual([]);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test("homepage: expected primary actions are visible", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    await expect(
      page
        .getByRole("link", { name: /искать котят|смотреть котят/i })
        .or(page.getByRole("button", { name: /искать котят|смотреть котят/i }))
        .first(),
    ).toBeVisible();

    await expect(
      page
        .getByRole("link", { name: /для заводчиков|заводчикам|подключиться/i })
        .or(page.getByRole("button", { name: /для заводчиков|заводчикам|подключиться/i }))
        .first(),
    ).toBeVisible();
  });

  test("kittens: geo controls are visible and breeder phone is not public", async ({ page }, testInfo) => {
    await page.goto("/kittens", { waitUntil: "networkidle" });

    await expect(page.getByText(/радиус|км|город|рядом|поблизости/i).first()).toBeVisible();

    const publicCardPhoneLinks = page.locator('main article a[href^="tel:"]');
    const phoneLinksCount = await publicCardPhoneLinks.count();

    for (let index = 0; index < phoneLinksCount; index += 1) {
      await expect(publicCardPhoneLinks.nth(index)).toHaveAttribute("href", mccContact.phoneHref);
    }

    await page.screenshot({
      path: `test-results/kittens-geo-${testInfo.project.name}.png`,
      fullPage: false,
    });
  });
});
