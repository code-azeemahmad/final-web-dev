// createRoot method bts creates a DOM like structure for you like browser's DOM.
// it compares its DOM with browser's DOM and updates the browser's DOM accordingly. This process is called reconciliation.
// on other hand, browser removes whole DOM and re renders it again(page reload)

/*
React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
*/

// Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

// Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

/*
heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense.
*/