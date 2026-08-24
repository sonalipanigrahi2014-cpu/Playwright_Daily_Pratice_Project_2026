# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginEnvirnment.spec.ts >> Envirmenrt Test File
- Location: tests\LoginEnvirnment.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CERT_AUTHORITY_INVALID at https://orangehrm.qedgetech.com/
Call log:
  - navigating to "https://orangehrm.qedgetech.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e5]:
    - heading "Your connection is not private" [level=1] [ref=e6]
    - paragraph [ref=e7]:
      - text: Attackers might be trying to steal your information from
      - strong [ref=e8]: orangehrm.qedgetech.com
      - text: (for example, passwords, messages, or credit cards).
      - link "Learn more about this warning" [ref=e9] [cursor=pointer]:
        - /url: "#"
    - button "net::ERR_CERT_AUTHORITY_INVALID" [ref=e11]
  - generic [ref=e12]:
    - button "Back to safety" [ref=e13] [cursor=pointer]
    - button "Advanced" [ref=e14] [cursor=pointer]
```

# Test source

```ts
  1 | import test, { expect } from "@playwright/test";
  2 | 
  3 | test('Envirmenrt Test File', async({page})=>{
> 4 |     await page.goto(process.env.BASE_URL!)
    |                ^ Error: page.goto: net::ERR_CERT_AUTHORITY_INVALID at https://orangehrm.qedgetech.com/
  5 |     await page.locator('#txtUsername').fill(process.env.BASE_USER!)
  6 |     await page.locator('#txtPassword').fill(process.env.BASE_PASS!)
  7 |     await page.locator('#btnLogin').click()
  8 |     await expect.soft(page).toHaveURL(/dashboard/)
  9 | })
```