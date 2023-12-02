import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'MYYeongnamnu';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/MYYeongnamnu.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

*{margin: 0; padding: 0; font-family: 'MYYeongnamnu';}
ul{list-style: none}
a{text-decoration: none; color: #000;}
`
export default GlobalStyle