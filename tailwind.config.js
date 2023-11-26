/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['"Lora", serif'],
      'mono': ['ui-monospace', 'SFMono-Regular' ],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {},
  },
  plugins: [],
};
