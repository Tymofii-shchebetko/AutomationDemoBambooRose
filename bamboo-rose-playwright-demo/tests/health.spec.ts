import { test } from "@playwright/test";
import { MainPages } from "../pages/main-page";

type PageCheck = {
  name: string;
  path: string;
  expectVideo?: boolean;
  expectPardotForm?: boolean;
};

const PAGES: PageCheck[] = [
  { name: "Home", path: "/", expectVideo: true, expectPardotForm: false },
  { name: "Order", path: "po-management-wholesale-sales-managment/", expectVideo: true, expectPardotForm: true },
  { name: "Contact", path: "/contact-us/", expectVideo: false, expectPardotForm: true },
];

test.describe("Bamboo Rose marketing health checks", () => {
  for (const p of PAGES) {
    test(`${p.name} — ${p.path}`, async ({ page, baseURL }) => {
      const marketing = new MainPages(page);

      await marketing.open(p.path, baseURL);
      await marketing.assertHasHeading();

      if (p.expectVideo) await marketing.assertHasVideo();
      if (p.expectPardotForm) await marketing.assertHasLeadCapture();
    });
  }
});
