/**
 * LinkedIn mark drawn as a single shape so the "in" reads as negative space,
 * filled with the site's purple-to-teal brand gradient instead of LinkedIn
 * blue. Decorative: callers supply their own visible link text.
 */
export default function LinkedInIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="li-brand-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-brand-purple)" />
          <stop offset="0.5" stopColor="var(--color-brand-blue)" />
          <stop offset="1" stopColor="var(--color-brand-teal)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#li-brand-gradient)"
        d="M22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"
      />
    </svg>
  )
}
