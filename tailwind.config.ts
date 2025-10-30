import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class', 'class'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#EFF6FF',
  				'100': '#DBEAFE',
  				'200': '#BFDBFE',
  				'300': '#93C5FD',
  				'400': '#60A5FA',
  				'500': '#2563EB',
  				'600': '#1D4ED8',
  				'700': '#1E40AF',
  				'800': '#1E3A8A',
  				'900': '#172554',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			success: {
  				'50': '#F0FDF4',
  				'500': '#22C55E',
  				'600': '#16A34A',
  				'700': '#15803D'
  			},
  			error: {
  				'50': '#FEF2F2',
  				'500': '#EF4444',
  				'600': '#DC2626',
  				'700': '#B91C1C'
  			},
  			warning: {
  				'50': '#FFFBEB',
  				'500': '#F59E0B',
  				'600': '#D97706',
  				'700': '#B45309'
  			},
  			neutral: {
  				'50': '#F9FAFB',
  				'100': '#F3F4F6',
  				'200': '#E5E7EB',
  				'300': '#D1D5DB',
  				'400': '#9CA3AF',
  				'500': '#6B7280',
  				'600': '#4B5563',
  				'700': '#374151',
  				'800': '#1F2937',
  				'900': '#111827'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			xs: '12px',
  			sm: '14px',
  			base: '16px',
  			lg: '18px',
  			xl: '20px',
  			'2xl': '24px',
  			'3xl': '30px',
  			'4xl': '36px',
  			'5xl': '48px',
  			'6xl': '60px',
  			'7xl': '72px'
  		},
  		animation: {
			'fade-in': 'fadeIn 0.5s ease-in-out',
			'slide-up': 'slideUp 0.5s ease-out',
			'slide-down': 'slideDown 0.5s ease-out',
			'slide-left': 'slideLeft 0.5s ease-out',
			'slide-right': 'slideRight 0.5s ease-out',
			'bounce-slow': 'bounce 3s infinite',
			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			'spin-slow': 'spin 3s linear infinite',
			'float': 'float 3s ease-in-out infinite',
			'glow': 'glow 2s ease-in-out infinite',
			'first': 'moveVertical 30s ease infinite',
			'second': 'moveInCircle 20s reverse infinite',
			'third': 'moveInCircle 40s linear infinite',
			'fourth': 'moveHorizontal 40s ease infinite',
			'fifth': 'moveInCircle 20s ease infinite'
		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			slideDown: {
  				'0%': {
  					transform: 'translateY(-20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			slideLeft: {
  				'0%': {
  					transform: 'translateX(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideRight: {
  				'0%': {
  					transform: 'translateX(-20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			glow: {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)'
  				},
  				'50%': {
  					boxShadow: '0 0 40px rgba(37, 99, 235, 0.8)'
  				}
  			},
  			moveHorizontal: {
				'0%': {
					transform: 'translateX(-50%) translateY(-10%)'
				},
				'50%': {
					transform: 'translateX(50%) translateY(10%)'
				},
				'100%': {
					transform: 'translateX(-50%) translateY(-10%)'
				}
			},
			moveInCircle: {
				'0%': {
					transform: 'rotate(0deg)'
				},
				'50%': {
					transform: 'rotate(180deg)'
				},
				'100%': {
					transform: 'rotate(360deg)'
				}
			},
			moveVertical: {
				'0%': {
					transform: 'translateY(-50%)'
				},
				'50%': {
					transform: 'translateY(50%)'
				},
				'100%': {
					transform: 'translateY(-50%)'
				}
			}
		},
  		boxShadow: {
  			glow: '0 0 20px rgba(37, 99, 235, 0.5)',
  			'glow-lg': '0 0 40px rgba(37, 99, 235, 0.8)'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
