<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router project. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to improve reliability and reduce tracking blocker interference. Three client-side events are now tracked across the app's key interaction points. Error tracking via `capture_exceptions` is enabled globally.

## Changes made

| File | Change |
|---|---|
| `instrumentation-client.ts` | Created — initializes PostHog with reverse proxy host, error tracking, and debug mode |
| `next.config.ts` | Added `/ingest` rewrites for PostHog reverse proxy and `skipTrailingSlashRedirect` |
| `.env.local` | Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` |
| `components/ExploreBtn.tsx` | Added `explore_events_clicked` capture on button click |
| `components/EventCard.tsx` | Converted to client component; added `event_card_clicked` capture with event title, slug, and location |
| `components/Navbar.tsx` | Converted to client component; added `nav_link_clicked` capture with link label |

## Tracked events

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" button to scroll to the events section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks an event card to view its detail page (properties: `event_title`, `event_slug`, `event_location`) | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicks a navigation link in the navbar (property: `label`) | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/397119/dashboard/1509880
- **Explore Events Button Clicks** (trend): https://us.posthog.com/project/397119/insights/siMK9IP4
- **Event Card Clicks Over Time** (trend): https://us.posthog.com/project/397119/insights/ERaaLI4M
- **Most Clicked Events Breakdown** (by event title): https://us.posthog.com/project/397119/insights/9izM8nmD
- **Navigation Link Clicks by Label** (by nav label): https://us.posthog.com/project/397119/insights/D7SEyguK
- **Explore to Event Click Funnel** (conversion funnel): https://us.posthog.com/project/397119/insights/tDfj3wE9

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
