import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1000px",
      xl: "1111px",
    },
    colors: {
      body: "hsl(217, 18%, 14%)",
      white: "hsl(0, 0%, 100%)",
      text: "hsl(0, 0%, 83%)",
      text_Light: "hsla(0, 0%, 83%, 0.6)",
      buttonBg: "hsl(217, 10%, 25%)",
      cyan: "hsl(160, 100%, 45%)",
      cyan_dark: "hsla(166, 100%, 34%, 0.4)",
      veryDark: "hsl(0, 0%, 0%)",
      gray: "hsl(217, 13%, 27%)",
      orange: "hsl(11, 80%, 60%)",
      jade: "hsl(160, 100%, 32%)",
      amber:"hsl(45, 100%, 50%)",
      blue: "#25CCF7",
      blue_drak:"#0ABDE3"
    },
    fontFamily: {
      pop: ["var(--font-poppins)"],
    },

    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
