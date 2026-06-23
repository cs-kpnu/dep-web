# dep-web Project Review

## Major issues

- `app/api/contact/route.js`
  - `Response.json(...)` is wrong in Next route handlers. In app router you need `NextResponse.json(...)` or `new Response(...)`. This is a runtime crash risk on every contact submit.
  - There is no validation or early failure for missing SMTP env vars. If `SMTP_HOST`, `SMTP_USER`, etc. are absent, the route will either fail unpredictably or expose server-side errors.

- `app/team/[slug]/page.js`
  - You use `params.slug`, but then search `mockTeam.find((m) => m.id === slug)`.
  - Since `mockTeam` items also have `slug` values, this will break almost all team profile routes if they use slugs like `/team/ivanyuk-vitalii`.

- `app/page.js`
  - `getPage()` catches errors and returns nothing, then later you call `.split(" ")` on `page?.data?.title?.rendered`. That is not safe if the API response is missing or malformed.
  - `dangerouslySetInnerHTML` is used on `page?.data?.excerpt?.rendered` without explicit sanitization. If that content comes from external CMS/WordPress, it is a real XSS risk.

## Code quality and unclear logic

- `app/contacts/page.js`
  - imports `Image` and `api` but never uses them.
  - there is a lot of commented-out dead code.

- `components/header/index.js`
  - imports `api` but never uses it.
  - `memo(Header)` is unnecessary because the component has no props and does not benefit from memoization.

- `components/footer/index.js`
  - imports `clsx` but does not use it.

- `components/paginator/index.js`
  - reads `window.innerWidth` during render. This is fragile for SSR/hydration and will produce inconsistent markup between server and client.
  - responsive logic belongs in CSS or a resize-aware hook, not a render-time `window` check.

- `components/CustomSelect.js`
  - custom select is not keyboard accessible and lacks ARIA semantics.
  - closing on outside click is fine, but focus and keyboard navigation are missing.

- `components/jobsAccordion/index.js`
  - uses `key={item?.name}` for list items. If two publications share the same name, React keys will collide.
  - the accordion opens and closes without any accessible markup.

## Data and architecture problems

- `src/data/mockProjects.js`
  - module-level `const PERSONAL_PAGE_BASE_URL = `${process.env.NEXT_PUBLIC_SITE_URL}/team`` depends on env vars at import time. If `NEXT_PUBLIC_SITE_URL` is undefined, the generated profile links will be invalid.
  - there are TODOs and commented-out mock projects, which makes the data file noisy and harder to maintain.

- `src/data/mockTeam.js`
  - inconsistent use of `id` vs `slug`. The profile route should match by `slug` if the path is named `[slug]`.
  - Some team members have `projects` items with `url` while others do not; your rendering logic assumes uniform data.

- `src/lib/api.js`
  - `api` and `apiv2` are created without any fallback or validation for `process.env.NEXT_PUBLIC_API_URL` / `NEXT_PUBLIC_API_URL_V2`.
  - `baseURL` could be undefined in development/production if env vars are not set.

- `src/utils/getMetaData.js`
  - `metadataBase: new URL(siteUrl)` is fine, but you default to `https://bogemia.ua`, which is clearly not this project. That looks like copy/paste and may confuse SEO metadata.

## Project and tooling weaknesses

- `jsconfig.json`
  - defines `paths` but does not include `baseUrl`. That is likely incorrect and may break path mapping in editors/TypeScript tooling.

- `package.json`
  - no tests, no formatting/lint enforcement beyond `eslint`.
  - `eslint` is configured only with `eslint-config-next` and no project-specific rules. That means a lot of stylistic and potential bugs can slip through.

- `docker-compose.yml`
  - contains an unrelated WordPress + MariaDB stack and insecure default credentials. If this repo is meant for a Next app, this adds confusion and signals poor repo hygiene.

## Suggestions

- Fix the route handler to use `NextResponse.json` and validate SMTP config before transport creation.
- Normalize route matching: use `slug` in `app/team/[slug]/page.js` or rename route param to `id`.
- Remove dead imports and commented-out legacy code from pages like `app/contacts/page.js`, `app/projects/page.js`, `app/activity/page.js`.
- Replace client-only `window.innerWidth` logic in `Pagination` with CSS media queries or a hook that updates on resize.
- Add a small reusable hook or component for filtering/pagination, because `app/projects`, `app/team`, and `app/activity` all repeat the same pattern.
- Improve `jsconfig.json` to include `baseUrl: "."`.
- Add `.env.example` documenting required env vars for the contact form and API base URLs.
- Audit the whole app for production-readiness: remove `console.log` statements, remove unused assets/imports, and add tests or at least type checks.

---

> If you want, I can also produce a prioritized patch list or fix the top 5 actual runtime bugs now.
