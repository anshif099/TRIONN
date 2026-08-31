# TRIONN Studio WordPress theme

This is a native WordPress rebuild of the TRIONN studio website. It keeps the dark editorial visual language, responsive layouts, motion, draggable team identification experience, media, portfolio pages, and native WordPress inquiry handling.

## Install

1. Upload `trionn-studio.zip` in **Appearance → Themes → Add New → Upload Theme**. If the host rejects the large media bundle, upload the extracted `trionn-studio` directory to `wp-content/themes/` using cPanel or SFTP.
2. Activate **TRIONN Studio**. Activation creates starter pages, 21 projects, six services, and 14 team members without overwriting matching existing content.
3. Open **Settings → Permalinks**, select **Post name**, and save once.
4. Open **TRIONN** in the WordPress admin and set the business email, phone, booking link, address, and social URLs.
5. Configure SMTP or the hosting mail service so WordPress email delivery is reliable.

## Editing map

- **Pages**: hero fields and long-form page copy.
- **Work**: title, excerpt, content, featured image, order, and optional external URL.
- **Services**: title, excerpt, featured image, order, and capability list.
- **Team**: name, role, portrait, video URL, biography, and order.
- **TRIONN → Settings**: global contact and social details.
- **Inquiries**: contact submissions saved in WordPress even if mail delivery fails.

Featured images override bundled fallback media. A team video uploaded to the Media Library can be pasted into the **Video URL** field. Project editor content supports native Gutenberg galleries in addition to the bundled starter gallery.

## Routes

- `/`
- `/work/`
- `/work/{project}/`
- `/services/`
- `/about/`
- `/contact/`
- `/trionn-story/`

## Requirements

- WordPress 6.2+
- PHP 7.4+
- Pretty permalinks
- HTTPS recommended for media autoplay and secure form delivery

