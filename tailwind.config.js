/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'ticket': "url('/Subtract.png')", // Ensure the path is correct

         'custom-gradient': "radial-gradient( #02191D, #07373F)"
      },
      fontFamily: {
        "jeju": ['JejuMyeongjo', 'serif'],

        "RoadRage": "url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Inconsolata:wght@200..900&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&family=Road+Rage&display=swap')",
    },
    colors: {
      ticz: "#197686", // Custom color
    },

  },
  plugins: [],
}
}
