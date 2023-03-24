# Landing Page

In this project, you will be building a landing page, however you would like visually, as long as you follow the requirements.

## Main Requirements

- [ ] Must include a `header` with a logo and a `nav`.
- [ ] Must include a `hero` with a call-to-action button. When the button is clicked, it should `console.log()` <button_is_being_clicked>
- [ ] Must include an `about` section with at least one paragraph and one image displayed
- [ ] Must include a `showcase` section that will map an array of images, and return each image
- [ ] Finally, must include a `contact_us` section with a `form` with at least two `inputs`: one type text that will accept a name, and one type email that will accept an email address
- [ ] The form will also contain a button with a onClick function
- [ ] When the form button is clicked, the form disappears and a message appears displaying `Thank you <username>. We sent an email to <email_address>

## Knowledge explored with each section

- JSX
- Importing IMGS and using them
- onClick event listener
- Map an array
- onChange event listener for inputs
- Conditionals
- Props

### RUNNING INSTRUCTIONS

- Navigate to this folder `01_JSX`
- Run `npm install`
- Run `npm run dev`
- Open Local Host 5173 on your browser

### Step ONE

- Structure:

Its common practice in react to add inside the `src` folder a new folder called `components` that will hold each individual component of an application, for example: header, hero, about, showcase, contact. Each component will live inside their own folder, which will contain the jsx file and the module.css file for each components.

src -> components ->

Header-> Header.jsx - Header.module.css
Hero -> Hero.jsx - Hero.module.css
About -> About.jsx - About.module.css
ShowCase -> ShowCase.jsx - ShowCase.module.css
ContactUs -> ContactUs.jsx - ContactUs.module.css

- React Functional Components:

A React Functional Component is nothing but a regular javascript function that returns JSX

```
const MyComponent = ()=>{
  return(
    <p>JSX</p>
  )
}

export default MyComponent

```

- Importing CSS modules

In order to import css modules, you must give it a name of you choice, commonly `styles` or `classes`, and import the whole file by passing its path. This should be happening before the functional component

`import classes from './MyComponent.module.css'`

_TO_ _DO_:

- Create the `components` folder inside of `src`
- For EACH component, create their own folder
- Inside each of the folders, create a `jsx` file and a `module.css` file:

> ex: Inside components, create a folder called `Header`. Inside the Header folder, create two files. `Header.jsx` and `Header.module.css`

- For Each component, in their `jsx` file, import the `module.css` and create the function that returns JSX and `export default` the component

> ex: `Header`:

```
import classes from ./Header.module.css

const Header = ()=>{
  return(
    <p>This is the Header</p>
  )
}

export default Header

```

### Step TWO

- In Order to USE the component you created, you will `import` it is App.jsx and pass it to the return statement.

> Ex: In `App.jsx`, import the component before the function begins

```
import Header from "./components/Header/Header.jsx
```

and to use it:

```
import Header from "./components/Header/Header.jsx

function App() {
  return (
    <div>
      <h1>This is the whole application: App</h1>
      <Header/> //THIS IS YOUR COMPONENT
    </div>
  );
}

export default App;

```

Do that for each component required in this project and the browser should already be showing you your application with all your components in it

- Its time for JSX. Create the JSX for each component. Remember that IMGS should go inside the `assets` folder, and must be imported from there, by you giving it a name

> Ex: `import Logo from "../assets/logo.png"`

To use it, pass `Logo` as the SRC to the <img src={Logo}/> tag

Also keep in mind that `className` will now take on an object, the imported css module. It will access the each class as an object property

> Ex:

`Header.module.css` ->

```
.header{
  color: 'black';
}
.p{
  font-size: 2em;
}
```

`Header.jsx` ->

```
import classes from ./Header.module.css

const Header = ()=>{
  return(
    <header className={classes.header}>
      <p className = {classes.p}>
       This is the Header
      </p>
    <header/>
  )
}

export default Header

```

_TO_ _DO_:

- Create the JSX (structure) for ALL components
- Create the styles for all components
