/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        primary_100: "linear-gradient(90deg, #DA22FF 0%, #9733EE 100%)",
        secondary_100: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
        rainbow: "url(/assets/images/heroformbg.png)",
        testimonial_card:
          "linear-gradient(91.77deg, #F7F6FB 1.11%, #F7F6FB 42.04%, #F7F6FB 70.51%, rgba(247, 246, 251, 0.6) 98.49%)",
        ribbon: "url(/assets/images/ribbon.svg)",
      },

      colors: {
        primary: {
          DEFAULT: "#fff",
          foreground: "#454545",
          100: "#D9D9D9",
          200: "#7633FF",
        },
        secondary: {
          DEFAULT: "#FF6200",
          foreground: "#8A8A8A",
          100: "#7633FF",
          200: "#737373",
          300: "#787878",
        },
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      boxShadow: {
        Nav_box_Shadow: "0px 4px 16px 0px #D8D8D840",
        primary_shadow: "0px 4px 23px 0px #D225FDB8",
        btn_shadow: "0px 4px 16.4px 0px #00000082",
        card_shadow: "1px 2px 6px 0px #B1BDD699",
        form_shadow: "0px 0px 24.9px 8px #9F31F047",
        testimonial_card_1: "-8px 8px 40px 5px #000000B2",
        testimonial_card_2: "-8px 40px 40px 0px #000000CC",
        testimonial_card_3: "-8px 10px 40px 0px #000000CC",
        testimonial_card_4: "-1px 9px 29.1px 0px #0000009C",
        testimonial_card_5: "0px 16px 40px 0px #000000",
      },
      screens: {
        xs: "350px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
