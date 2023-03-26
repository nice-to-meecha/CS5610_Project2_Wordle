# CS5610 Project2 Wordle
A recreation of Wordle -- no daily limits!

### Write-up
- What were some challenges you faced while making this app?
    - I faced a multitude of challenges with styling the app the way
      I'd intended. Whether trying to create animations, use simple transforms,
      or place elements in the places I wanted, using CSS was a battle every time.
      I also faced a few challenges with coordinating the logic, when incorporating
      the use of React's global context. I often tried updating a value
      within a child component, in order to trigger a re-render of the parent
      component, which is not a valid option for React apps. Actually,
      I just faced a lot of challenges with performing specific activities
      in React. Updating child elements within an array proved difficult; I don't
      remember all of the issues I faced, but I often thought that it was a lot
      less intuitive, when compared with Vue.

- Given more time, what additional features, functional or design changes would you make
    - If I'd had more time, I would've added quite a few more animations.
      I'd originally intended to have the letter tiles flip to show the
      color hints, as is done in the official Wordle game. However, I was
      unable to implement that in the given time period. I would have also
      tried creating a plan for style and the overall design of the assignment
      before starting, as I needed to make a multitude of changes to my
      plans throughout, due to incompatible features and my ineptitude.

- What assumptions did you make while working on this assignment?
    - I originally made the assumption that I would have to use <input>s
      in order to process guesses. Trying to accomplish the look I wanted,
      in conjunction with using inputs (I started with a singular input and
      later moved to one input per letter) made the logic much more complex
      than necessary. It also made for a disjointed experience, for the user.
      I eventually switched to making use of window keyboard events.

- How long did this assignment take to complete?
    - I didn't record how long it took me to do this, but likely 30-40 hours.
      I spent a lot of time trying to get certain styling components and
      looking into animations -- virtually all of which didn't even make it
      into the final product. I wasted a decent amount of time trying to create
      a custom animation in Adobe After Effects. I first created some svgs (currently
      in the public folder) and later imported them into AE, only to find out that
      the properties I needed most weren't available. Perhaps the right answer
      to this question is "too long", considering what became of the assignment.

### Resources
- Adding routes for multiple pages
    - https://isotropic.co/react-multiple-pages/
- Using fetch to read files
    - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Reasoning for infinite refresh loop of component
    - https://stackoverflow.com/questions/29069676/react-page-is-refreshing-constantly
- Explanation for rendering twice, even without useState
    - https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
    - https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
- useEffect()
    - https://beta.reactjs.org/reference/react/useEffect#examples-dependencies
    - https://css-tricks.com/run-useeffect-only-once/
- How to refocus an input form
    - https://stackoverflow.com/questions/26790990/html-input-always-in-focus#:~:text=Basically%2C%20you%20add%20a%20blur,start%20off%20focused%20as%20well.
- Getting rid of input focus border/background
    - https://stackoverflow.com/questions/3397113/how-to-remove-focus-border-outline-around-text-input-boxes-chrome
- Letter spacing
    - https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
- Merriweather font style
    - https://fonts.google.com/specimen/Merriweather#styles
- Autocapitalize input
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
- Modifying existing React elements with cloneElement()
    - https://www.educative.io/answers/what-is-the-react-cloneelement-function
- Resetting the state of a component
    - https://react.dev/learn/preserving-and-resetting-state
- Removing native link CSS properties
    - https://stackoverflow.com/questions/8919682/remove-all-styling-formatting-from-hyperlinks
- Word list origin
    - https://github.com/dwyl/english-words
- Reading from file
    - https://www.tutorialspoint.com/how-to-read-and-write-a-file-using-javascript
- Flexbox
    - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Window event handling with state
    - https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener
- Creating a synthetic keyboard event
    - https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent
- Hide elements after short period of time
    - https://coderfiles.dev/blog/react-show-hide-after-few-seconds/
- Using CSS transform property for <span> elements
    - https://stackoverflow.com/questions/24961795/how-can-i-use-css3-transform-on-a-span
- Line-spacing
    - https://www.uvm.edu/~bnelson/computer/css/changethespacingbetweenlines.html#:~:text=Use%20the%20line%2Dheight%20property,of%20vertical%20space%20between%20lines.
- Using react-icons
    - https://www.freecodecamp.org/news/how-to-use-react-icons/
- How to transform svg path
    - https://stackoverflow.com/questions/33186431/rotate-svg-path-using-css
- Using first-of-type CSS selector (applied to last-of-type)
    - https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type
- Flipping animation
    - https://www.tutorialspoint.com/online_html_editor.php