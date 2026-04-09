# Project Context & AI Agent Directives

## 🏗️ Architecture Overview
This project is a Headless CMS architecture. 
- **Frontend:** Next.js (App Router) located in the `/web` directory.
- **Backend:** Headless WordPress located inside a Docker container.
- **Infrastructure:** Docker Compose manages both environments. 

The frontend communicates with WordPress strictly via the **WordPress Native REST API** (`/wp-json/wp/v2/`).

## 📁 Directory Structure
- `/web` -> Next.js application. All frontend code lives here.
- `/wp-custom/theme` -> Custom headless WordPress theme (acts as a blank shell and holds `functions.php`).
- `/wp-custom/plugin` -> (Optional) Custom WordPress plugins for business logic.
- `docker-compose.yml` -> Defines the `web` (Next.js), `wordpress`, and `db` (MySQL) services.

*Note for AI:* Do not attempt to modify WordPress core files. Only interact with PHP files inside `/wp-custom/`.

## 🛠️ Tech Stack & Rules

### Frontend (Next.js - `/web`)
- **Framework:** Next.js 14+ (App Router).
- **Language:**  Javascript ES6   . Use strict typing for all API responses.
- **Styling:** CSS Modules (`.module.css`). Do NOT use Tailwind CSS or styled-components unless explicitly requested. Use native CSS variables for theming (Dark mode by default).
- **Icons:** Use `lucide-react`.
- **Data Fetching:** Use the native `fetch` API directly in React Server Components (RSC). Always handle Next.js caching (`revalidate` or `cache: 'no-store'`) appropriately.
- **Images:** Always use `next/image`. Ensure the WordPress domain is added to `next.config.js` `remotePatterns`.

### Backend (WordPress REST API - `/wp-custom`)
- **Language:** PHP 8+.
- **Custom Data:** We use Advanced Custom Fields (ACF) with "Local JSON". All ACF field group configurations are saved as `.json` files in `/wp-custom/theme/acf-json`. 
- **Post Types:** Custom Post Types (CPTs) are registered via code in `functions.php`. Always set `'show_in_rest' => true` when creating new CPTs or Taxonomies.
- **Endpoints:** We use the default WP REST API. ACF data is exposed via the API (usually under the `.acf` object in the JSON response). If custom endpoints are needed, use `register_rest_route()`.

## 🤖 AI Agent Behavior Guidelines
1. **Context Awareness:** When asked to create a feature (e.g., "Add a Team Member section"), provide both the PHP code for `functions.php` (to register the CPT/API exposure) and the Next.js Javascipt code (to fetch and render the data).
2. **CSS Modules:** When generating UI components, always generate the accompanying `[Component].module.css` file and use `className={styles.className}` syntax.
3. **Immutability:** Never suggest modifying the WordPress database directly for structural changes. Always provide PHP code to register post types or configuration instructions for ACF Local JSON.
4. **Error Handling:** When writing Next.js data fetching logic, include basic error handling if the WP REST API is unreachable.
5. **No Visual Builders:** Do not suggest WordPress page builders (Elementor, Gutenberg blocks). The WP backend is strictly for structured data entry.