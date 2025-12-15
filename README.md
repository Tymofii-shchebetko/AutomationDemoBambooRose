Hi 👋

I’ve prepared a small demo of how future autotests might look for Bamboo Rose. This is a lightweight E2E smoke/health-check suite for the public marketing website.

Tech stack:
- Playwright as the test framework
- TypeScript as the programming language
- Page Object Model (POM) as the design pattern

What it checks:
- Key pages open successfully
- Page has a visible heading (H1)
- Wistia video embed is present on selected pages
- Lead-capture request form is present (embedded Pardot form or Pardot iframe)

Applying:
These tests can run locally or on CI (e.g. on each commit or on a schedule) to quickly validate the most important public pages without manual checks.

Demo video: [LINK](https://drive.google.com/file/d/1fAFLIVJ2mQTs3NToxh0MjZeqoZ2NnEXe/view?usp=sharing)
