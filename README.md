# Lander WYSIWYG CSS

This repo holds a highly focused, purged CSS bundle used to style the Lander WYSIWYG editor in Cascade CMS so the editor matches the front-end look without shipping the full site CSS.

## Files

- `wysiwyg.css`: Source file that collects only the required styles using `@import`.
- `wysiwyg-min.css`: Compiled and minified output intended for the Cascade CMS editor configuration.

## Workflow

1. Update `wysiwyg.css` to include only the CSS files you want and keep the order intentional (base -> components -> overrides).
2. Build `wysiwyg-min.css` by resolving the `@import` statements and minifying the result (use any CSS build tool you prefer).
3. Paste or upload the contents of `wysiwyg-min.css` into the Cascade CMS WYSIWYG editor configuration:
   `https://lander-admin.cascadecms.com/entity/open.act?id=DEFAULT&type=editorconfiguration`

## Notes

- Cascade CMS does not have access to local paths, so ensure any `url()` references in the final CSS point to public assets.
- Avoid shipping unused CSS; keep this bundle lean so the editor stays fast and focused.
