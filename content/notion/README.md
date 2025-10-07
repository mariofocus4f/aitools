Notion import guide

1) Create a Notion database named: Newsletter Backlog
2) Add columns exactly as below (Types in parentheses):
   - Title (Title)
   - Status (Select: idea, ready, scheduled, sent)
   - Type (Select: weekly, welcome, campaign)
   - Issue date (Date)
   - Persona/Tags (Multi-select: #ForMarketers, #ForDevelopers, #ForHR, #ForManagers, #ForExecutives, #ForGovernment, #ForTeachers, #All)
   - Priority (Select: low, medium, high)
   - Owner (People or Text)
   - Copy status (Select: outline, draft, review, approved)
   - Links (label|url|utm_campaign; ...)
   - Tools (Text, slugs comma-separated)
   - Prompts (Text, slugs comma-separated)
   - Notes (Rich text)

3) Import file: newsletter_backlog.csv into this database (Notion: ••• → Merge with CSV)

4) Recommended views:
   - Backlog (Status: idea/ready)
   - Next issue (Type=weekly, Status=ready)
   - Welcome sequence (Type=welcome, sorted by created time)
   - Scheduled (Status=scheduled)
   - Sent (Status=sent)

5) UTM conventions:
   - utm_source=newsletter
   - utm_medium=email
   - utm_campaign=<weekly_YYYYMMDD | welcome_stepN | campaign_slug>

6) Workflow tips:
   - Draft copy in Notion, then export to MDX or paste to MailerLite
   - Keep PII only in MailerLite; Notion stores content topics only
   - Link tools/prompts by slugs for quick embedding in site later

