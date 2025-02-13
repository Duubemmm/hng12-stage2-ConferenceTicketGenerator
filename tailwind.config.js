/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'ticket': "url('/Subtract.png')", // Ensure the path is correct

        'barcode': "url('/BarCode.png)",

         'custom-gradient': "radial-gradient( #02191D, #07373F)"
      },
      fontFamily: {
        "jeju": ['JejuMyeongjo', 'serif'],

    },
    colors: {
      ticz: "#197686", // Custom color
    },

  },
  plugins: [],
}
}
