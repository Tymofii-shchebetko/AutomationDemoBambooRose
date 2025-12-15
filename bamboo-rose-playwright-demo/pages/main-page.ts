import { expect, type Page } from "@playwright/test";

const h1 = "h1";
const video = 'div.wistia_responsive_padding, iframe[src*="wistia"]';
const request_form = "#pardot-form";
const request_iframe = 'iframe[src*="pardot"], iframe[src*="www2.bamboorose.com"]';

export class MainPages {
  constructor(private readonly page: Page) {}

  async open(path: string, baseURL?: string) {
    const url = baseURL ? new URL(path, baseURL).toString() : path;

    const resp = await this.page.goto(url, { waitUntil: "domcontentloaded" });
    expect(resp, "Navigation response should exist").not.toBeNull();
    expect(resp!.status(), `Expected < 400 for ${url}`).toBeLessThan(400);
  }

  async assertHasHeading() {
    await expect(this.page.locator(h1).first(), "Expected H1 to be present").toBeVisible();
  }

  async assertHasVideo() {
    await expect(
      this.page.locator(video).first(),
      "Wistia embed should be present"
    ).toBeVisible();
  }

  async assertHasLeadCapture() {
    const form = this.page.locator(request_form).first();
    const iframe = this.page.locator(request_iframe).first();

    if (await form.isVisible().catch(() => false)) return;
    if (await iframe.isVisible().catch(() => false)) return;

    await expect(
      this.page.locator(`${request_form}, ${request_iframe}`),
      "Lead capture should exist (Pardot form OR iframe)"
    ).toBeVisible();
  }
}
