const theme = {
    colors: {
        primary_1: "#0099e5",
        primary_2: "#00b7eb",
        primary_3: "#00d0d7",
        secondary_1: "#008496",
        secondary_2: "#00a4aa",
        secondary_3: "#00c4b2",
        text_shadow: "-0.01em 0.02em #1f1e23",
        lightTheme: {
            text_1: "#202b36",
            text_2: "#5b6f82",
            bg_1: "#fff",
            bg_2: "#FbFbFb",
            shadow_light: "0 1.5rem 4rem rgba(166, 173, 201, 0.2)",
            shadow_dark: "0 0.5rem 1rem rgba(154, 160, 185, 0.05)"
        },
        darkTheme: {
            text_1: "#f6f8fa",
            text_2: "#F0F0F0",
            bg_1: "#2D363F",
            bg_2: "#2A343F",
            shadow_light: "1px 1px 3px 0 rgba(0, 0, 0, 0.2)",
            shadow_dark: "3px 0.5rem 0.7rem rgba(0, 0, 0, 0.08)"
        }
    },
    bp: {
        smallest: `only screen and (max-width: 37.5em)`, //600px
        smaller: `only screen and (max-width: 46.87em)`, //750px
        small: `only screen and (max-width: 59em)`, //950px
        medium: `only screen and (max-width: 81.25em)`, //1300px
        large: `only screen and (max-width: 87.5em)`, //1400px
        larger: `only screen and (min-width: 87.6em)` //1401px
        // largest: `only screen and (min-width: 112.5em)` //1800px
    }
}

export default theme
