import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    html {
      font-size: 62.5%;
      box-sizing: border-box;
      line-height: 1.6;

      @media ${props => props.theme.bp.large} {
        font-size: 56.25%; 
       }

       @media ${props => props.theme.bp.smaller} {
        font-size: 50%;
      }
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    ::selection {
        background: var(--primary-3);
        color: #fff;
      }

    body {
      font-family: 'Montserrat', 'sans-serif';
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      background-color: var(--bg-1);
      transition: all 0.4s;
      --primary-1: ${props => props.theme.colors.primary_1};
      --primary-2: ${props => props.theme.colors.primary_2};
      --primary-3: ${props => props.theme.colors.primary_3};
      --secondary-1: ${props => props.theme.colors.secondary_1};
      --secondary-2: ${props => props.theme.colors.secondary_2};
      --secondary-3: ${props => props.theme.colors.secondary_3};
      --text-shadow: ${props => props.theme.colors.text_shadow};

      &.light-mode {
        --text-1: ${props => props.theme.colors.lightTheme.text_1};
        --text-2: ${props => props.theme.colors.lightTheme.text_2};
        --bg-1: ${props => props.theme.colors.lightTheme.bg_1};
        --bg-2: ${props => props.theme.colors.lightTheme.bg_2};
        --shadow-light: ${props => props.theme.colors.lightTheme.shadow_light};
        --shadow-dark: ${props => props.theme.colors.lightTheme.shadow_dark};
      }

      &.dark-mode {
        --text-1: ${props => props.theme.colors.darkTheme.text_1};
        --text-2: ${props => props.theme.colors.darkTheme.text_2};
        --bg-1: ${props => props.theme.colors.darkTheme.bg_1};
        --bg-2: ${props => props.theme.colors.darkTheme.bg_2};
        --shadow-light: ${props => props.theme.colors.darkTheme.shadow_light};
        --shadow-dark: ${props => props.theme.colors.darkTheme.shadow_dark};
      }
    }

    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`
