/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'sm':'420px',
      'md':'768px',
      'lg':'992px',
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },

    extend: {
      colors: {
        'sepia': "#D87D4A",
        "chaos-black": "#101010",
        'belgua': "#F1F1F1",
        "dr-white": "#FAFAFA",
        "spice-pink": "#FBAF85",
        'bleached-silk':'#f2f2f2',
        'hot-lips':'#CD2C2C',
        'thamar-black':'#191919',
      },
      fontSize:{
        'xs':['13px',{
          "lineHeight":'25px',
          'fontWeight':'700',
          'letterSpacing':'0.93px',
        }],
        'sm':['14px',{
          "lineHeight":'19px',
          'fontWeight':'400',
          'letterSpacing':'10px',
        }],
        'base':['15px',{
          "lineHeight":'25px',
          'fontWeight':'400',
        }],
        'lg':['18px',{
          "lineHeight":'25px',
          'fontWeight':'700',
          'letterSpacing':'1.29px',
        }],
        'xl':['24px',{
          "lineHeight":'33px',
          'fontWeight':'700',
          'letterSpacing':'1.71px',
        }],
        '2xl':['28px',{
          "lineHeight":'38px',
          'fontWeight':'700',
          'letterSpacing':'2px',
        }],
        '3xl':['32px',{
          "lineHeight":'36px',
          'fontWeight':'700',
          'letterSpacing':'1.14px',
        }],
        '4xl':['40px',{
          "lineHeight":'44px',
          'fontWeight':'700',
          'letterSpacing':'1.43px',
        }],
        '5xl':['56px',{
          "lineHeight":'58px',
          'fontWeight':'700',
          'letterSpacing':'2px',
        }],
      },
    },
  },
  plugins: [],
};
