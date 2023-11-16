import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
  /* Grey */
  --color-bg: #f5f5f5;
  --text-color:#595456;

  

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  }
  
  &.dark-mode {
    --color-bg: #2B323A;
    --text-color:#f5f5f5;


--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);


  }

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  /* font-family: "Poppins", sans-serif; */
  /* color: var(--color-grey-700); */

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  /* background-color: var(--color-grey-200); */
  /* color: var(--color-grey-500); */
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  /* outline: 2px solid var(--color-brand-600); */
  /* outline-offset: -1px; */
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  /* filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity)); */
}
`

export default GlobalStyles