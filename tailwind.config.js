const { fontFamily } = require("tailwindcss/defaultTheme");
const extend = require("./dist/design-system/tokens/js/theme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");
const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    ...createGlobPatternsForDependencies(join(__dirname, "apps/web/shell")),
    join(__dirname, "apps/web/shell/app/**/*!(*.stories|*.spec).{ts,tsx,html}"),
    join(__dirname, "libs/**/ui/**/*!(*.stories|*.spec).{ts,tsx,html}"),
    join(
      __dirname,
      "design-system/components/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
  ],
  "future": {
    "hoverOnlyWhenSupported": true,
  },
  "theme": {
    "extend": {
      ...extend,
      "fontFamily": {
        ...extend.fontFamily,
        "app-title-1": ["var(--font-melody)", ...fontFamily.sans],
        "nyc-title-1": ["var(--font-frank-ruhl-libre)", ...fontFamily.sans],
        "header-1": ["var(--font-melody)", ...fontFamily.sans],
        "header-2": ["var(--font-melody)", ...fontFamily.sans],
        "header-3": ["var(--font-melody)", ...fontFamily.sans],
        "header-4": ["var(--font-permanent-marker)", ...fontFamily.sans],
        "header-5": ["var(--font-permanent-marker)", ...fontFamily.sans],
        "header-6": ["var(--font-poppins)", ...fontFamily.sans],
        "body-1": ["var(--font-anybody)", ...fontFamily.sans],
        "body-2": ["var(--font-inter)", ...fontFamily.sans],
        "label-1": ["var(--font-anybody)", ...fontFamily.sans],
        "label-2": ["var(--font-permanent-marker)", ...fontFamily.sans],
        "btn-label-1": ["var(--font-poppins)", ...fontFamily.sans],
        "like-label": ["var(--font-permanent-marker)", ...fontFamily.sans],
        "footer-name": ["var(--font-permanent-marker)", ...fontFamily.sans],
        "footer-copyright": ["var(--font-anybody)", ...fontFamily.sans],
      },
      "textShadow": {
        ...extend.textShadow,
        "sm": "0 1px 2px var(--tw-shadow-color)",
        "DEFAULT": "0 2px 4px var(--tw-shadow-color)",
        "lg": "0 0 80px rgba(var(--tw-shadow-color), 0.8), 0 0 32px rgba(var(--tw-shadow-color), 0.3)",
      },
      "backgroundImage": {
        ...extend.backgroundImage,
        "bg-title": "url(../../../../assets/backgrounds/bg-title.jpg)",
        "bg-footer": "url(../../../../assets/backgrounds/bg-footer.jpg)",
        "bg-windows": "url(../../../../assets/backgrounds/bg-windows.webp)",
      },
      "zIndex": {
        ...extend.zIndex,
        "scroll": 105,
        "footer": 120,
        "like": 140,
        "nav": 145,
        "nav-buttons": 150,
        "modal": 170,
        "notification": 180,
        "progress": 200,
        "loading": 250,
      },
      "animation": {
        ...extend.animation,
        "marquee": "marquee 25s linear infinite",
        "marquee2": "marquee2 25s linear infinite",
        "wave1": "wave 18s -3s linear infinite",
        "wave2": "wave 22s linear reverse infinite",
        "wave3": "wave 20s -1s linear infinite",
        "bubble": "bubble 10s ease-in-out infinite",
        "blink": "blink 1.5s steps(2) infinite",
      },
      "keyframes": {
        ...extend.keyframes,
        "marquee": {
          "0%": { "transform": "translateX(0%)" },
          "100%": { "transform": "translateX(-100%)" },
        },
        "marquee2": {
          "0%": { "transform": "translateX(100%)" },
          "100%": { "transform": "translateX(0%)" },
        },
        "wave": {
          "0%": { "transform": "translateX(0)" },
          "100%": { "transform": "translateX(-25%)" },
          "100%": { "transform": "translateX(-50%)" },
        },
        "bubble": {
          "0%": {
            "transform": "translateY(0%)",
            "opacity": 0.1,
            "marginLeft": 0,
          },
          "70%": {
            "marginLeft": "20px",
          },
          "80%": {
            "opacity": 0,
          },
          "100%": {
            "transform": "translateY(-120vh)",
            "opacity": 0,
          },
        },
        "blink": {
          "0%": { "opacity": 0 },
        },
      },
    },
  },
  "variants": {},
  "plugins": [
    require("@tailwindcss/forms"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": value => ({
            "textShadow": value,
          }),
        },
        { "values": theme("textShadow") }
      );
    }),
  ],
};
