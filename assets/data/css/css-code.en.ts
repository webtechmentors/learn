export const css_1_3_1 =
`p {
  color: blue;
  font-size: 16px;
}`;

export const css_1_3_2 =
`p {
  color: red;
  font-size: 12px;
  margin: 10px 20px;
}`;

export const css_1_3_3 =
`/* This is a CSS comment */`;

export const css_1_3_4 =
`h1 {
  color: green;
  font-size: 24px;
}`;

export const css_1_4_1 =
`<link rel="stylesheet" href="styles.css">`;

export const css_1_4_2 =
`<style>
  h1 {
    color: blue;
    font-size: 24px;
  }
</style>`;

export const css_1_4_3 =
`<h1 style="color: red; font-size: 20px;">Hello, world!</h1>`;

export const css_2_1_1 =
`p {
  /* CSS styles */
}`;

export const css_2_1_2 =
`/* Selects only <p> elements with the class "highlight" */
p.highlight {
  /* CSS styles */
}`;

export const css_2_2_1 =
`.my-class {
  /* CSS styles */
}`;

export const css_2_2_2 =
`<p class="my-class">This paragraph has the class "my-class".</p>
<div class="my-class">This div also has the class "my-class".</div>`;

export const css_2_2_3 =
`/* Selects only <p> elements with the class "my-class" inside a <div> with the class "container" */
.container p.my-class {
  /* CSS styles */
}`;

export const css_2_2_4 =
`<div class="class1 class2">This div has both "class1" and "class2" classes.</div>`;

export const css_2_3_1 =
`#my-id {
  /* CSS styles */
}`;

export const css_2_3_2 =
`<h1 id="my-id">This heading has the ID "my-id".</h1>
<div id="another-id">This div has the ID "another-id".</div>`;

export const css_2_3_3 =
`/* Selects only the <p> element with the ID "my-paragraph" inside a <div> with the class "container" */
.container #my-paragraph {
  /* CSS styles */
}`;

export const css_2_4_1 =
`[data-custom] {
  /* CSS styles */
}`;

export const css_2_4_2 =
`input[type="text"] {
  /* CSS styles */
}`;

export const css_2_4_3 =
`a[href*="example.com"] {
  /* CSS styles */
}`;

export const css_2_4_4 =
`img[src^="images/"] {
  /* CSS styles */
}`;

export const css_2_4_5 =
`a[href$=".pdf"] {
  /* CSS styles */
}`;

export const css_2_5_1 =
`a:hover {
  /* CSS styles for links when hovered */
}

li:first-child {
  /* CSS styles for the first child of <li> elements */
}`;

export const css_2_5_2 =
`p::before {
  /* CSS styles for content inserted before <p> elements */
  content: "Before";
}

h1::first-letter {
  /* CSS styles for the first letter of <h1> elements */
  font-size: 24px;
}`;

export const css_3_2_1 =
`margin: 10px; /* Sets a margin of 10 pixels for all sides */
margin-top: 20px; /* Sets a margin of 20 pixels for the top side */
margin: 10px 20px; /* Sets a margin of 10 pixels for top and bottom, 20 pixels for left and right */`;

export const css_3_2_2 =
`padding: 10px; /* Sets a padding of 10 pixels for all sides */
padding-top: 20px; /* Sets a padding of 20 pixels for the top side */
padding: 10px 20px; /* Sets a padding of 10 pixels for top and bottom, 20 pixels for left and right */
`;

export const css_3_2_3 =
`border: 1px solid black; /* Sets a border with a 1-pixel width, solid style, and black color */
border-width: 2px; /* Sets the border width to 2 pixels */
border-style: dashed; /* Sets the border style to dashed */
border-color: red; /* Sets the border color to red */
`;

export const css_3_3_1 =
`.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid black;
}`;

export const css_3_3_2 =
`.box {
  width: 200px;
  height: 200px;
  overflow: scroll;
}`;

export const css_3_4_1 =
`.box {
  width: 200px;
  height: 150px;
  padding: 10px;
  border: 2px solid black;
  box-sizing: border-box;
}`;

export const css_3_4_2 =
`.box {
  margin: 10px;
  padding: 20px;
}`;

export const css_3_4_3 =
`.column {
  width: 33.33%;
  padding: 10px;
  box-sizing: border-box;
}`;

export const css_3_4_4 =
`.container {
  width: 200px;
  height: 200px;
  overflow: scroll;
}`;

export const css_3_4_5 =
`.block-element {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.inline-element {
  margin: auto;
}`;

export const css_4_1_1 =
`.box {
  position: relative;
  top: 20px;
  left: 10px;
}`;

export const css_4_1_2 =
`.box {
  position: absolute;
  top: 50px;
  left: 100px;
}`;

export const css_4_1_3 =
`.box {
  position: fixed;
  top: 20px;
  right: 30px;
}`;

export const css_4_1_4 =
`.box {
  position: sticky;
  top: 10px;
}`;

export const css_4_3_1 =
`.image {
  float: right;
  width: 200px;
  height: 200px;
}`;

export const css_4_3_2 =
`.content {
  clear: both;
}`;

export const css_4_4_1 =
`.container {
  display: grid;
}`;

export const css_4_4_2 =
`.container {
  display: grid;
  grid-template-rows: 100px 200px; /* Two rows with heights of 100px and 200px */
  grid-template-columns: 1fr 2fr; /* Two columns with widths in a 1:2 ratio */
}`;

export const css_4_4_3 =
`.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr;
}

.item {
  grid-row: 1 / 2; /* Position the item in the first row */
  grid-column: 1 / 3; /* Position the item in the first and second columns */
}`;

export const css_4_4_4 =
`.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: [col1-start] 1fr [col2-start] 2fr [col2-end];
}

.item {
  grid-row: 1 / 3; /* Position the item from the first row to the third row */
  grid-column: col1-start / col2-end; /* Position the item from the start of the first column to the end of the second column */
}`;

export const css_4_4_5 =
`.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px; /* Sets the gap size to 10px */
}`;

export const css_4_5_1 =
`.container {
  display: flex;
}`;

export const css_4_5_2 =
`.container {
  display: flex;
}

.item {
  flex-grow: 1; /* Allow the item to grow to fill the available space */
  flex-shrink: 0; /* Prevent the item from shrinking */
  flex-basis: 25%; /* Set the initial size of the item */
}`;

export const css_4_5_3 =
`.container {
  display: flex;
  flex-direction: column; /* Arrange items vertically */
}`;

export const css_4_5_4 =
`.container {
  display: flex;
  justify-content: center; /* Center align items along the main axis */
}`;

export const css_4_5_5 =
`.container {
  display: flex;
  align-items: center; /* Vertically center align items */
}`;

export const css_4_5_6 =
`.container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
}`;

export const css_5_1_1 =
`body {
  font-family: Arial, sans-serif;
}`;

export const css_5_1_2 =
`h1 {
  font-size: 24px;
}`;

export const css_5_1_3 =
`p {
  font-weight: bold;
}`;

export const css_5_1_4 =
`em {
  font-style: italic;
}
`;

export const css_5_1_5 =
`a {
  text-decoration: underline;
}`;

export const css_5_1_6 =
`h2 {
  text-transform: uppercase;
}`;

export const css_5_1_7 =
`p {
  text-align: center;
}`;

export const css_5_2_1 =
`.container {
  text-align: center;
}`;

export const css_5_2_2 =
`body {
  font-family: 'MyCustomFont', sans-serif;
}`;

export const css_5_2_3 =
`@font-face {
  font-family: 'MyCustomFont';
  src: url('path/to/font.woff2') format('woff2'),
       url('path/to/font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`;

export const css_5_3_1 =
`h1 {
  font-size: 3em; /* Relative to the parent element */
}

p {
  font-size: 1.2rem; /* Relative to the root font size */
}`;

export const css_5_3_2 =
`h1 {
  font-size: 3em;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2em;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5em;
  }
}`;

export const css_5_3_3 =
`h1 {
  font-size: calc(2rem + 2vw);
}`;

export const css_5_3_4 =
`p {
  font-size: 1.2rem;
  line-height: 1.5;
  letter-spacing: 0.02em;
}`;

export const css_5_3_5 =
`body {
  font-family: 'Roboto', Arial, sans-serif;
}

@media (max-width: 768px) {
  body {
    font-family: 'Open Sans', Arial, sans-serif;
  }
}`;

export const css_6_1_1 =
`color: red;
background-color: skyblue;`;

export const css_6_1_2 =
`color: #FF0000;
background-color: #00FF00;`;

export const css_6_1_3 =
`color: rgb(255, 0, 0);`;

export const css_6_1_4 =
`color: rgba(255, 0, 0, 0.5);`;

export const css_6_1_5 =
`color: hsl(0, 100%, 50%);
background-color: hsla(120, 100%, 50%, 0.7);`;

export const css_6_1_6 =
`color: rgb(255, 0, 0);`;

export const css_6_1_7 =
`background-color: #00FF00;`;

export const css_6_1_8 =
`border-color: red;`;

export const css_6_1_9 =
`outline-color: hsl(240, 100%, 50%);`;

export const css_6_1_10 =
`box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`;

export const css_6_2_1 =
`div {
  background-image: url("path/to/image.jpg");
}`;

export const css_6_2_2 =
`div {
  background-repeat: no-repeat;
}`;

export const css_6_2_3 =
`div {
  background-size: cover;
}`;

export const css_6_2_4 =
`div {
  background-position: center;
}`;

export const css_6_2_5 =
`div {
  background-image: linear-gradient(to right, red, blue);
}`;

export const css_6_2_6 =
`div {
  background-image: radial-gradient(circle, red, blue);
}`;

export const css_6_2_7 =
`div {
  background-image: repeating-linear-gradient(to right, red, blue 50%);
}`;

export const css_6_3_1 =
`div {
  background-color: rgba(255, 0, 0, 0.5); /* Red color with 50% transparency */
}`;

export const css_6_3_2 =
`div {
  background-color: hsla(0, 100%, 50%, 0.5); /* Red color with 50% transparency */
}`;

export const css_6_3_3 =
`div {
  opacity: 0.5; /* 50% transparency */
}`;

export const css_6_3_4 =
`div {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

div:hover {
  opacity: 1;
}`;

export const css_7_1_1 =
`div {
  transition-property: background-color, opacity;
}`;

export const css_7_1_2 =
`div {
  transition-duration: 0.5s;
}`;

export const css_7_1_3 =
`div {
  transition-timing-function: ease-in-out;
}`;

export const css_7_1_4 =
`div {
  transition-delay: 0.2s;
}`;

export const css_7_1_5 =
`div {
  transition-property: background-color, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.2s;
}`;

export const css_7_2_1 =
`@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}`;

export const css_7_2_2 =
`@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}`;

export const css_7_2_3 =
`div {
  animation-name: slide-in;
}`;

export const css_7_2_4 =
`div {
  animation-duration: 1s;
}`;

export const css_7_2_5 =
`div {
  animation-timing-function: ease-in-out;
}`;

export const css_7_2_6 =
`div {
  animation-delay: 0.5s;
}`;

export const css_7_2_7 =
`div {
  animation-iteration-count: 3;
}`;

export const css_7_2_8 =
`div {
  animation-fill-mode: forwards;
}`;

export const css_7_2_9 =
`div {
  animation-name: slide-in;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: 3;
  animation-fill-mode: forwards;
}`;

export const css_7_3_1 =
`div {
  transition: transform 0.3s ease-in-out;
}

div:hover {
  transform: scale(1.2);
}`;

export const css_7_3_2 =
`@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

div {
  animation: bounce 1s infinite;
}`;

export const css_7_3_3 =
`div {
  transition: transform 0.3s ease-in-out;
}

div:hover {
  transform: rotate(45deg) scale(1.2);
}`;

export const css_7_3_4 =
`button {
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #ff0000;
  color: #ffffff;
}`;

export const css_7_3_5 =
`const element = document.querySelector('.my-element');
element.addEventListener('click', () => {
  element.classList.toggle('animate');
});`;

export const css_8_2_1 =
`@media mediaType and (mediaFeature: value) {
  /* CSS rules to apply for the specified media type and feature */
}`;

export const css_8_2_2 =
`@media screen and (max-width: 768px) {
  /* Styles applied for screens with a maximum width of 768px */
}`;

export const css_8_2_3 =
`@media screen and (orientation: landscape) {
  /* Styles applied for screens in landscape orientation */
}`;

export const css_8_2_4 =
`@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* Styles applied for screens with a width between 768px and 1024px */
}`;

export const css_8_2_5 =
`@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* Styles applied for high-resolution displays */
}`;

export const css_8_3_1 =
`.container {
  width: 100%;
}

.column {
  width: 50%;
  float: left;
}`;

export const css_8_3_2 =
`.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 80%;
  }
}`;

export const css_8_3_3 =
`.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1 0 50%;
}`;

export const css_8_3_4 =
`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}`;

export const css_8_3_5 =
`<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)">
  <source srcset="image-medium.jpg" media="(min-width: 480px)">
  <img src="image-small.jpg" alt="Responsive Image">
</picture>`;

export const css_8_3_6 =
`p {
  font-size: 16px;
}

@media (min-width: 768px) {
  p {
    font-size: 18px;
  }
}`;
