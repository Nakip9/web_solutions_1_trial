/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// 1. SURFACES
				background: "hsl(var(--color-bg-page) / <alpha-value>)", // Main Page
				surface: "hsl(var(--color-bg-card) / <alpha-value>)",    // Cards
                dark: "hsl(var(--color-bg-dark) / <alpha-value>)",       // Footer/CTA
				
                // 2. TEXT
				foreground: "hsl(var(--color-text-main) / <alpha-value>)",
				muted: "hsl(var(--color-text-muted) / <alpha-value>)",
                inverse: "hsl(var(--color-text-inverse) / <alpha-value>)",
				
				// 3. BRANDING
				primary: {
					DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
					dark: "hsl(var(--color-primary) / 0.9)", 
				},
				secondary: "hsl(var(--color-secondary) / <alpha-value>)",
				
				// 4. SERVICE ACCENTS (Semantic)
				design: "hsl(var(--color-accent-design) / <alpha-value>)",
				marketing: "hsl(var(--color-accent-marketing) / <alpha-value>)",
				tech: "hsl(var(--color-accent-tech) / <alpha-value>)",
                dev: "hsl(var(--color-accent-dev) / <alpha-value>)",
			},
			fontFamily: {
				sans: ['IBM Plex Sans Arabic', 'sans-serif'],
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
			},
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
		},
	},
	plugins: [
        require('@tailwindcss/typography'),
    ],
}