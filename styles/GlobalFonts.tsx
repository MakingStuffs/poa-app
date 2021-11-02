import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'Merriweather Sans';
        src: local('OpenSans'), local('Open Sans'), url('/assets/fonts/MerriweatherSans-ExtraBold.ttf');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Merriweather Sans';
        src: local('OpenSans'), local('Open Sans'), url('/assets/fonts/MerriweatherSans-ExtraBoldItalic.ttf');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Merriweather Sans';
        src: local('OpenSans'), local('Open Sans'), url('/assets/fonts/MerriweatherSans-Italic.ttf');
        font-weight: 400;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Merriweather Sans';
        src: local('OpenSans'), local('Open Sans'), url('/assets/fonts/MerriweatherSans-Regular.ttf');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
`;
