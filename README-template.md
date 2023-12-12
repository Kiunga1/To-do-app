# Todo app solution

This is a solution to the [Todo app challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- Tailwind CSS: A utility-first CSS framework used for rapid and efficient styling. It streamlines the styling process with pre-defined utility classes, allowing for quick and consistent design implementation.

- Development Workflow:
The project follows a mobile-first workflow, ensuring that the design is initially optimized for mobile devices and progressively enhanced for larger screens. This approach contributes to a more responsive and user-friendly application.

Feel free to explore the codebase to gain insights into the implementation details and the integration of these technologies. If you have any questions or suggestions, please don't hesitate to reach out.

### What I learned

-Installing Tailwind CSS with Vite. A useful resource is:
- [Tailwind Installation with Vite](https://tailwindcss.com/docs/guides/vite) - I really liked how easy and simple it is to follow along will use it going forward.

-Installing React icons. A useful resource is:
- [How to use react-icons to install Font Awesome in a React app](https://www.freecodecamp.org/news/how-to-use-react-icons/) -FreecodeCamp gives a very detailed explanation with examples on how to do this.

- How to customise Tailwind styles that are not available on Tailwind. For example adding a background image using tailwind.

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.bg-mobile_img {
  background-image: url('./assets/images/bg-mobile-light.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
```
```jsx
import'./cssFile.css'
```
Apply in tailwind classes
```jsx
<div className = 'bg-mobile-image min-h-screen'></div>
```

-Adding focus to an element on interaction with it using Tailwind e.g clicking
```jsx
<button className = 'bg-gray-500 focus:bg-blue-300'>All</button>

```

### Continued development

I will keep practising styling with Tailwind as it is very flexible and fluid.


## Author

- Website - [Ann Mukami](https://www.your-site.com)
- Frontend Mentor - [@Kiunga1](https://www.frontendmentor.io/profile/Kiunga1)
- Twitter - [@AnnKiungaa](https://twitter.com/AnnKiungaa)

## Acknowledgments
-Wilson Siaw - [wilsonsiaw](https://github.com/wilsonsiaw)

