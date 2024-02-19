# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![mobile](https://raw.github.com/Alokray007/Age-Calculator-App-FM/main/src/assets/screenshots/mobile-design.png)
![desktop](https://raw.github.com/Alokray007/Age-Calculator-App-FM/main/src/assets/screenshots/desktop-design.png)
![active](https://raw.github.com/Alokray007/Age-Calculator-App-FM/main/src/assets/screenshots/active-states.png)
![desktop-completed](https://raw.github.com/Alokray007/Age-Calculator-App-FM/main/src/assets/screenshots/desktop-completed.png)
![error-empty](https://raw.github.com/Alokray007/Age-Calculator-App-FM/main/src/assets/screenshots/desktop-error-empty.png)
![error-invalid](https://raw.github.com/Alokray007/Age-Calculator-App-FM/main/src/assets/screenshots/desktop-error-invalid.png)
![error-whole-form](https://raw.github.com/Alokray007/Age-Calculator-App-FM/main/src/assets/screenshots/desktop-error-whole-form.png)


### Links

- Solution URL: [Github](https://github.com/Alokray007/Age-Calculator-App-FM)
- Live Site URL: [Netlify- Live Site](https://agecalap.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles


### What I learned

This code helped me to remove Arrow on Input type Number.

```css
  @layer base {
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
```

Here I leaned to calculate the difference of time entered by user & current time.

```js
  const calculateTimeDifference = () => {
    const currentDate = new Date();
    const inputDateTime = new Date(`${year}-${month}-${day}`);

    const timeDifference = currentDate.getTime() - inputDateTime.getTime();
    const differenceInYears = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 365)
    );
    const remainingMonths = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
        (1000 * 60 * 60 * 24 * 30.5)
    );
    const remainingDays = Math.floor(
      ((timeDifference % (1000 * 60 * 60 * 24 * 365)) %
        (1000 * 60 * 60 * 24 * 30.5)) /
        (1000 * 60 * 60 * 24)
    );

    setDateDifference({
      year: differenceInYears,
      month: remainingMonths,
      day: remainingDays,
    });
  };
```


### Continued development

I learned more about Tailwind css and how to use custome properties of it as wwell.In future I'll explore more side of it for smooth design and development.


### Useful resources

- [stackoverflow](https://stackoverflow.com/questions/71296535/how-to-remove-arrow-on-input-type-number-with-tailwind-css) - This helped me to remove Arrow on Input type Number.
- [geeksforgeeks](https://www.geeksforgeeks.org/program-check-date-valid-not/) - This is an amazing post helped me to validate user entered date.


## Author

- Website - [Alok Suman](https://portfolio-alok1.netlify.app/)
- Frontend Mentor - [@Alokray007](https://www.frontendmentor.io/profile/Alokray007)


## Acknowledgments

I took help from ChatGPT and stackoverflow to get some problems solved related to date calculation.
