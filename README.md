# Pomodoro Timer with music using React

A pomodoro timer using 25 minute intervals for work blocks, and 10 minute intervals for break time. It has the options for a longer break taking up 15 minutes instead but it isn't fully implemented outside of being able to select it and have it run for that time. The timer continuously will loop through work and short break blocks until it is stopped. It does play music, a song from a visual novel called The Fruit of Grisaia, as the timer runs regardless of a work or break block. It is at full volume for now so beware of that.

I have refactored this from using React+Tailwind and it just uses React with some basic styling from Vite. I plan on adding more features onward and creating this to be a very useable timer. At the moment, it has the absolute core funtionality of a pomodoro timer with bare bones aesthetics. I plan on continually changing the styling on it and implementing extra features to it.

## Why did I choose to make a Pomodoro Timer?
I have been found of using the Pomodoro technique for workflow in these projects and study time, as well as assisting in helping my overall focus improve. Ever since a few things happened in my personal life, COVID and graduating university, I struggled greatly to keep deeper focus and being in flow state for things that I do not have strong passions for or struggle to complete while learning and making mistakes. This one follows the general formula that others do, but I do wish to expand this to cater toward being a bit more customizable and styled well. Especially with playing music and certain frequency sounds, it is a bit difficult to find a good timer that has both without paying money or going through Youtube videos to find the right one that fits, so I am making one that caters a bit more toward myself.

## To-Do and Future Improvements
1. Improve the timer and complete the components. Split the different components for readability and to make it easier to improve in the future.
2. Make the timer different with features. It completes the core function of what is expected now, so brainstorming extra features and beginning to implement them in the future.
    a. Customize how long each blocks are
    b. Add a little animation
    c. Select different songs available, maybe even allow for custom songs
    d. Implement other frameworks and libraries while also not completely destroying it
3. Add a volume slider for the music and sounds. The full volume is loud and may appear even louder for other devices and settings.
4. Add and improve styling, fix the UI/UX and show off my personal style and theme I wish for it to have.
    a. Implementing Tailwind again and properly this time without making it a complete mess and using better knowledge.
    b. Add a different color scheme and maybe make it customizeable with differet ones. (e.g. light mode, dark mode, midnight blue, summer sky, etc.)
    c. More images, animations and other visual aspects that make the timer pop a bit more without adding too much clutter or taking resources and being distracting
    d. Links and descriptions about the Pomodoro technique and myself

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
