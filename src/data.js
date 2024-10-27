export const topics = [
  "flexBox",
  "grid",
  "animation",
  "selectors",
  "box model",
  "colors and effects",
  "Transforms and 3D",
  "media queries",
  "Pseudo-classes & elements",
];
export const questions = {
  "Pseudo-classes & elements": [
    {
      question:
        "Which pseudo-class is used to style an element only if it has no children?",
      answers: [":empty", ":only-child", ":not(:child)", ":last-child"],
      correctAnswer: ":empty",
    },
    {
      question: "What does the CSS pseudo-element `::before` do?",
      answers: [
        "Adds content before an element’s first child",
        "Adds content at the beginning of the element itself",
        "Inserts content before the parent element",
        "Inserts content inside the parent but after the last child",
      ],
      correctAnswer: "Adds content at the beginning of the element itself",
    },
    {
      question: "How can you select every other list item in a list?",
      answers: [
        ":nth-child(odd)",
        ":nth-of-type(even)",
        ":nth-item(2n)",
        ":even-child",
      ],
      correctAnswer: ":nth-child(odd)",
    },
    {
      question: "Which pseudo-class targets an element if it has focus?",
      answers: [":focus", ":target", ":hover", ":active"],
      correctAnswer: ":focus",
    },
    {
      question: "What does the `:not()` pseudo-class do?",
      answers: [
        "Selects elements that do not match a certain selector",
        "Selects elements that are hidden",
        "Selects the last element in a list",
        "Excludes elements of a certain type",
      ],
      correctAnswer: "Selects elements that do not match a certain selector",
    },
    {
      question:
        "Which pseudo-element would you use to style the first line of a paragraph?",
      answers: [
        "::first-letter",
        "::first-line",
        "::line-start",
        "::text-line",
      ],
      correctAnswer: "::first-line",
    },
    {
      question: "What does `:hover` allow you to do in CSS?",
      answers: [
        "Style an element when a user clicks on it",
        "Style an element when a user hovers over it",
        "Style an element only when it’s focused",
        "Style an element only when it’s the first child",
      ],
      correctAnswer: "Style an element when a user hovers over it",
    },
    {
      question:
        "What pseudo-class is used to target elements that are currently being targeted by a fragment identifier?",
      answers: [":target", ":current", ":active", ":focus"],
      correctAnswer: ":target",
    },
    {
      question:
        "Which pseudo-class targets an element that is the first child of its parent?",
      answers: [
        ":first-child",
        ":only-child",
        ":nth-child(1)",
        ":first-of-type",
      ],
      correctAnswer: ":first-child",
    },
    {
      question: "What does the `:checked` pseudo-class select?",
      answers: [
        "Radio buttons or checkboxes that are checked",
        "All form elements with default values",
        "Only radio buttons",
        "Only checkboxes",
      ],
      correctAnswer: "Radio buttons or checkboxes that are checked",
    },
  ],
  "media queries": [
    {
      question: "Which media query checks device orientation?",
      answers: [
        "@media rotate",
        "@media direction",
        "@media orientation",
        "@media position",
      ],
      correctAnswer: "@media orientation",
    },
    {
      question: "What's the best practice for mobile-first design?",
      answers: [
        "max-width queries",
        "min-width queries",
        "fixed-width queries",
        "no queries",
      ],
      correctAnswer: "min-width queries",
    },
    {
      question: "How to target print media type?",
      answers: ["@media print", "@print", "@printer", "print-media"],
      correctAnswer: "@media print",
    },
    {
      question: "Which unit is most reliable for responsive design?",
      answers: ["px", "em", "rem", "vh"],
      correctAnswer: "rem",
    },
    {
      question: "What's the viewport meta tag's main purpose?",
      answers: [
        "Set page width",
        "Control scaling",
        "Define height",
        "Add margins",
      ],
      correctAnswer: "Control scaling",
    },
    {
      question: "How to check if device supports hover?",
      answers: [
        "@media hover",
        "@media (hover: hover)",
        "@hover",
        "@media has-hover",
      ],
      correctAnswer: "@media (hover: hover)",
    },
    {
      question: "Which checks screen resolution?",
      answers: [
        "@media dpi",
        "@media resolution",
        "@media density",
        "@media pixels",
      ],
      correctAnswer: "@media resolution",
    },
    {
      question: "What's the correct syntax for combining media queries?",
      answers: [
        "@media (min-width: 768px) && (max-width: 1024px)",
        "@media (min-width: 768px) and (max-width: 1024px)",
        "@media (min-width: 768px), (max-width: 1024px)",
        "@media (768px to 1024px)",
      ],
      correctAnswer: "@media (min-width: 768px) and (max-width: 1024px)",
    },
    {
      question: "Which targets dark mode preference?",
      answers: [
        "@media dark",
        "@media (prefers-color-scheme: dark)",
        "@dark-mode",
        "@media darkness",
      ],
      correctAnswer: "@media (prefers-color-scheme: dark)",
    },
    {
      question: "What's a container query?",
      answers: [
        "Queries parent size",
        "Queries viewport",
        "Queries element count",
        "Queries window size",
      ],
      correctAnswer: "Queries parent size",
    },
  ],
  "Transforms and 3D": [
    {
      question: "Which property enables 3D transforms on children?",
      answers: ["transform-3d", "perspective", "transform-style", "3d-space"],
      correctAnswer: "transform-style",
    },
    {
      question: "What's the default transform origin?",
      answers: ["top left", "center center", "0 0", "50% 50%"],
      correctAnswer: "center center",
    },
    {
      question: "How do you rotate an element 45° in 3D space?",
      answers: [
        "rotate3d(1, 1, 1, 45deg)",
        "rotate(45deg)",
        "rotate-3d(45deg)",
        "rotate-xyz(45deg)",
      ],
      correctAnswer: "rotate3d(1, 1, 1, 45deg)",
    },
    {
      question: "Which creates a mirror image effect?",
      answers: ["rotate(180deg)", "flip()", "scale(-1, 1)", "mirror()"],
      correctAnswer: "scale(-1, 1)",
    },
    {
      question: "What does 'perspective' property control?",
      answers: [
        "Element's width",
        "Viewing distance",
        "Rotation angle",
        "Scale factor",
      ],
      correctAnswer: "Viewing distance",
    },
    {
      question: "How to skew an element 20° horizontally?",
      answers: ["skew(20deg)", "skewX(20deg)", "slant(20deg)", "tilt(20deg)"],
      correctAnswer: "skewX(20deg)",
    },
    {
      question: "Which maintains 3D position while scaling?",
      answers: ["scale3d()", "transform3d()", "preserve-3d", "scale()"],
      correctAnswer: "scale3d()",
    },
    {
      question: "What does 'backface-visibility: hidden' do?",
      answers: [
        "Hides back of rotated element",
        "Removes shadows",
        "Hides front face",
        "Removes perspective",
      ],
      correctAnswer: "Hides back of rotated element",
    },
    {
      question: "How to move an element 50px up?",
      answers: [
        "move(0, -50px)",
        "translate(0, -50px)",
        "position(0, -50px)",
        "shift(0, -50px)",
      ],
      correctAnswer: "translate(0, -50px)",
    },
    {
      question: "Which combines multiple transforms?",
      answers: [
        "transform-group",
        "transform: matrix()",
        "multi-transform",
        "transform-combine",
      ],
      correctAnswer: "transform: matrix()",
    },
  ],
  "colors and effects": [
    {
      question: "What's the alpha value range in rgba()?",
      answers: ["0-255", "0-100", "0-1", "1-100"],
      correctAnswer: "0-1",
    },
    {
      question: "How many color stops can a gradient have?",
      answers: ["Maximum 3", "Maximum 5", "No limit", "Maximum 8"],
      correctAnswer: "No limit",
    },
    {
      question: "Which creates a soft shadow without offset?",
      answers: [
        "box-shadow: 0 0 10px black",
        "shadow: blur 10px",
        "box-shadow: 10px black",
        "shadow: 0 0 10px",
      ],
      correctAnswer: "box-shadow: 0 0 10px black",
    },
    {
      question: "What's the difference between rgb and hsl?",
      answers: [
        "Nothing",
        "RGB uses numbers, HSL uses names",
        "RGB uses color values, HSL uses angles and percentages",
        "HSL isn't supported",
      ],
      correctAnswer: "RGB uses color values, HSL uses angles and percentages",
    },
    {
      question: "How do you create a diagonal gradient?",
      answers: [
        "gradient(diagonal)",
        "linear-gradient(45deg)",
        "diagonal-gradient()",
        "gradient(45)",
      ],
      correctAnswer: "linear-gradient(45deg)",
    },
    {
      question: "What property blends element backgrounds?",
      answers: [
        "mix-blend-mode",
        "background-blend",
        "blend-mode",
        "background-mix",
      ],
      correctAnswer: "background-blend-mode",
    },
    {
      question: "Which creates a circular gradient?",
      answers: [
        "circle-gradient()",
        "radial-gradient(circle)",
        "round-gradient()",
        "gradient(circle)",
      ],
      correctAnswer: "radial-gradient(circle)",
    },
    {
      question: "What's the latest color notation in CSS?",
      answers: ["rgb()", "hex", "hsl()", "oklch()"],
      correctAnswer: "oklch()",
    },
    {
      question: "How to make an element semi-transparent?",
      answers: [
        "transparent: 0.5",
        "opacity: 0.5",
        "alpha: 0.5",
        "visibility: 0.5",
      ],
      correctAnswer: "opacity: 0.5",
    },
    {
      question: "Which creates a repeating gradient pattern?",
      answers: [
        "gradient-repeat()",
        "repeating-linear-gradient()",
        "repeat-gradient()",
        "pattern-gradient()",
      ],
      correctAnswer: "repeating-linear-gradient()",
    },
  ],
  "box model": [
    {
      question: "What does 'box-sizing: border-box' do?",
      answers: [
        "Excludes padding from width",
        "Includes padding and border in width",
        "Only includes margin in width",
        "Only includes border in width",
      ],
      correctAnswer: "Includes padding and border in width",
    },
    {
      question: "Which property creates space between elements?",
      answers: ["spacing", "gap", "margin", "padding"],
      correctAnswer: "margin",
    },
    {
      question: "What's the default 'position' value?",
      answers: ["relative", "absolute", "static", "fixed"],
      correctAnswer: "static",
    },
    {
      question: "How do you make an element take up 100% of viewport height?",
      answers: ["height: 100%", "height: max", "height: 100vh", "height: full"],
      correctAnswer: "height: 100vh",
    },
    {
      question: "What does 'margin: 0 auto' do?",
      answers: [
        "Centers horizontally",
        "Centers vertically",
        "Centers both ways",
        "No centering",
      ],
      correctAnswer: "Centers horizontally",
    },
    {
      question: "Which value makes an element disappear but keep its space?",
      answers: [
        "display: none",
        "visibility: hidden",
        "opacity: 0",
        "hidden: true",
      ],
      correctAnswer: "visibility: hidden",
    },
    {
      question: "What creates a scrollbar when content overflows?",
      answers: [
        "overflow: scroll",
        "scroll: auto",
        "overflow: show",
        "display: scroll",
      ],
      correctAnswer: "overflow: scroll",
    },
    {
      question: "How do negative margins affect an element?",
      answers: [
        "Pull element away",
        "Push element inward",
        "Pull element closer",
        "No effect",
      ],
      correctAnswer: "Pull element closer",
    },
    {
      question: "What does 'z-index' only work on?",
      answers: [
        "All elements",
        "Block elements",
        "Positioned elements",
        "Flex items",
      ],
      correctAnswer: "Positioned elements",
    },
    {
      question: "Which property clips overflowing content?",
      answers: ["clip", "trim", "crop", "clip-path"],
      correctAnswer: "clip-path",
    },
  ],
  selectors: [
    {
      question: "What does the selector 'p:first-of-type' target?",
      answers: [
        "First p tag on the page",
        "First p tag within its parent",
        "First child that's a p tag",
        "All p tags",
      ],
      correctAnswer: "First p tag within its parent",
    },
    {
      question:
        "Which selector targets elements with both classes .box and .red?",
      answers: [".box .red", ".box, .red", ".box.red", ".box+.red"],
      correctAnswer: ".box.red",
    },
    {
      question: "What does the '~' combinator select?",
      answers: [
        "Direct siblings",
        "All following siblings",
        "Parent elements",
        "Child elements",
      ],
      correctAnswer: "All following siblings",
    },
    {
      question: "Which pseudo-class selects elements based on URL?",
      answers: [":link", ":visited", ":href", ":url"],
      correctAnswer: ":link",
    },
    {
      question: "What does ':not(p)' select?",
      answers: [
        "Only p elements",
        "Elements except p",
        "Parent of p",
        "Siblings of p",
      ],
      correctAnswer: "Elements except p",
    },
    {
      question: "Which selector targets every third item?",
      answers: [":third-child", ":nth-child(3)", ":nth-of-type(3)", "::third"],
      correctAnswer: ":nth-child(3)",
    },
    {
      question: "What does '[attr^=\"val\"]' match?",
      answers: [
        "Attribute contains val",
        "Attribute starts with val",
        "Attribute ends with val",
        "Exact match val",
      ],
      correctAnswer: "Attribute starts with val",
    },
    {
      question: "Which selector targets empty elements?",
      answers: [":blank", ":empty", ":void", ":null"],
      correctAnswer: ":empty",
    },
    {
      question: "What does '>' combinator select?",
      answers: [
        "Direct children",
        "All descendants",
        "Next sibling",
        "Previous sibling",
      ],
      correctAnswer: "Direct children",
    },
    {
      question: "Which pseudo-element creates first line styling?",
      answers: [":first-line", "::first-line", ":line-first", "::line"],
      correctAnswer: "::first-line",
    },
  ],
  animation: [
    {
      question: "Which property defines when an animation starts?",
      answers: [
        "animation-delay",
        "animation-start",
        "animation-begin",
        "animation-timing",
      ],
      correctAnswer: "animation-delay",
    },
    {
      question: "What's the shorthand property for transitions?",
      answers: ["transition-all", "transition", "transform", "translate"],
      correctAnswer: "transition",
    },
    {
      question:
        "How many times does 'animation-iteration-count: 2.5' play the animation?",
      answers: ["2 times", "2.5 times", "3 times", "Infinite times"],
      correctAnswer: "2.5 times",
    },
    {
      question: "Which timing function creates a bounce effect?",
      answers: [
        "ease",
        "linear",
        "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "ease-in",
      ],
      correctAnswer: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    {
      question: "What does 'animation-fill-mode: forwards' do?",
      answers: [
        "Keeps final state",
        "Returns to initial state",
        "Plays animation forward",
        "Loops animation",
      ],
      correctAnswer: "Keeps final state",
    },
    {
      question: "Which property pauses an animation?",
      answers: [
        "animation-stop",
        "animation-pause",
        "animation-play-state",
        "animation-state",
      ],
      correctAnswer: "animation-play-state",
    },
    {
      question: "What defines the steps in a keyframe animation?",
      answers: ["@keyframes", "@steps", "@animate", "@transition"],
      correctAnswer: "@keyframes",
    },
    {
      question: "How do you make an animation play in reverse?",
      answers: [
        "reverse",
        "alternate",
        "animation-direction: reverse",
        "backwards",
      ],
      correctAnswer: "animation-direction: reverse",
    },
    {
      question: "Which transition-timing-function is the default?",
      answers: ["linear", "ease", "ease-in", "ease-out"],
      correctAnswer: "ease",
    },
    {
      question: "What's the shortest valid animation declaration?",
      answers: [
        "animation: name 1s",
        "animation: 1s",
        "animation: none",
        "animation: running",
      ],
      correctAnswer: "animation: name 1s",
    },
  ],
  grid: [
    {
      question:
        "Which value of 'grid-auto-flow' property handles both row-filling behavior and attempts to fill holes in the grid?",
      answers: ["row dense", "dense", "row", "auto-dense"],
      correctAnswer: "row dense",
    },
    {
      question: "In CSS Grid, what does the 'fr' unit represent?",
      answers: [
        "Fixed ratio",
        "Fractional unit of remaining space",
        "Frame rate",
        "Fixed rows",
      ],
      correctAnswer: "Fractional unit of remaining space",
    },
    {
      question:
        "What is the correct syntax for creating a 3x3 grid with equal-sized cells using the grid-template property?",
      answers: [
        "grid-template: 3 / 3",
        "grid-template: repeat(3, 1fr) / repeat(3, 1fr)",
        "grid-template: 3x3",
        "grid-template: auto auto auto",
      ],
      correctAnswer: "grid-template: repeat(3, 1fr) / repeat(3, 1fr)",
    },
    {
      question: "Which property can be used to create a named grid area?",
      answers: [
        "grid-name",
        "grid-template-areas",
        "grid-area-template",
        "grid-template-name",
      ],
      correctAnswer: "grid-template-areas",
    },
    {
      question:
        "What does the 'span' keyword do in grid-column or grid-row properties?",
      answers: [
        "Creates a new column/row",
        "Specifies how many cells the item should span",
        "Adds spacing between cells",
        "Defines the grid gap",
      ],
      correctAnswer: "Specifies how many cells the item should span",
    },
    {
      question:
        "What is the default value of 'grid-auto-columns' and 'grid-auto-rows'?",
      answers: ["auto", "1fr", "100%", "fit-content"],
      correctAnswer: "auto",
    },
    {
      question:
        "How can you create a grid track that is sized according to its content using minmax()?",
      answers: [
        "minmax(auto, content)",
        "minmax(min-content, max-content)",
        "minmax(content, auto)",
        "minmax(auto, auto)",
      ],
      correctAnswer: "minmax(min-content, max-content)",
    },
    {
      question: "What happens when you use 'grid-auto-flow: dense'?",
      answers: [
        "Items are automatically sized",
        "Grid attempts to fill holes earlier in the grid",
        "Grid becomes more compact",
        "Items flow in dense columns",
      ],
      correctAnswer: "Grid attempts to fill holes earlier in the grid",
    },
    {
      question:
        "Which property allows you to align all items within their grid areas along the block (column) axis?",
      answers: ["justify-items", "align-items", "place-items", "align-content"],
      correctAnswer: "align-items",
    },
    {
      question:
        "What is the difference between 'auto-fit' and 'auto-fill' in repeat()?",
      answers: [
        "No difference, they are aliases",
        "auto-fill creates empty tracks, auto-fit collapses them",
        "auto-fit creates empty tracks, auto-fill collapses them",
        "auto-fill is not a valid value",
      ],
      correctAnswer: "auto-fill creates empty tracks, auto-fit collapses them",
    },
  ],
  flexBox: [
    {
      question:
        "Which CSS property must be applied to a container to create a flex context for all its direct children?",
      answers: ["flex-wrap", "display: flex", "flex-direction", "flex-flow"],
      correctAnswer: "display: flex",
    },
    {
      question:
        "What is the default value of 'flex-direction' property in a flex container?",
      answers: ["row-reverse", "column", "row", "column-reverse"],
      correctAnswer: "row",
    },
    {
      question:
        "When using 'justify-content: space-between', what happens to the space distribution?",
      answers: [
        "Equal space between items with no space at edges",
        "Equal space between and at edges",
        "All space at the start",
        "All space at the end",
      ],
      correctAnswer: "Equal space between items with no space at edges",
    },
    {
      question:
        "Which property determines whether flex items are forced onto one line or can wrap onto multiple lines?",
      answers: ["flex-line", "flex-wrap", "flex-flow", "flex-basis"],
      correctAnswer: "flex-wrap",
    },
    {
      question:
        "What is the shorthand property that combines 'flex-grow', 'flex-shrink', and 'flex-basis'?",
      answers: ["flex-shorthand", "flex", "flex-combo", "flex-all"],
      correctAnswer: "flex",
    },
    {
      question:
        "If a flex item has 'flex: 0 1 auto', what does each number/keyword represent in order?",
      answers: [
        "shrink, grow, basis",
        "grow, shrink, basis",
        "basis, grow, shrink",
        "grow, basis, shrink",
      ],
      correctAnswer: "grow, shrink, basis",
    },
    {
      question:
        "Which alignment property is used to align flex items when they don't use all available space on the cross-axis?",
      answers: [
        "justify-content",
        "align-items",
        "align-content",
        "align-self",
      ],
      correctAnswer: "align-content",
    },
    {
      question:
        "What happens to flex items when 'flex-wrap: wrap-reverse' is applied?",
      answers: [
        "Items wrap in reverse order on multiple lines",
        "Items reverse order but stay on one line",
        "Items wrap normally but cross-axis is reversed",
        "Items don't wrap at all",
      ],
      correctAnswer: "Items wrap normally but cross-axis is reversed",
    },
    {
      question: "What is the default value of the 'flex-grow' property?",
      answers: ["1", "0", "auto", "initial"],
      correctAnswer: "0",
    },
    {
      question:
        "In a flex container with 'flex-direction: column', which property controls alignment along the horizontal axis?",
      answers: [
        "justify-content",
        "align-items",
        "align-content",
        "flex-align",
      ],
      correctAnswer: "align-items",
    },
  ],
};
//   {
//     question: "What is the capital of Japan?",
//     answers: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
//     correctAnswer: "Tokyo",
//   },
//   {
//     question: "Which language is primarily used for styling web pages?",
//     answers: ["HTML", "CSS", "JavaScript", "Python"],
//     correctAnswer: "CSS",
//   },
//   {
//     question: "What is the largest planet in our solar system?",
//     answers: ["Earth", "Jupiter", "Saturn", "Mars"],
//     correctAnswer: "Jupiter",
//   },
//   {
//     question: "Who wrote 'Hamlet'?",
//     answers: [
//       "Leo Tolstoy",
//       "Charles Dickens",
//       "William Shakespeare",
//       "Mark Twain",
//     ],
//     correctAnswer: "William Shakespeare",
//   },
//   {
//     question: "What is the chemical symbol for water?",
//     answers: ["O2", "H2O", "CO2", "HO"],
//     correctAnswer: "H2O",
//   },
//   {
//     question: "Which country is known for inventing pizza?",
//     answers: ["France", "Italy", "Greece", "Spain"],
//     correctAnswer: "Italy",
//   },
//   {
//     question: "Which ocean is the largest?",
//     answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
//     correctAnswer: "Pacific",
//   },
//   {
//     question: "What is the square root of 64?",
//     answers: ["6", "7", "8", "9"],
//     correctAnswer: "8",
//   },
//   {
//     question: "Who was the first person to walk on the moon?",
//     answers: [
//       "Buzz Aldrin",
//       "Yuri Gagarin",
//       "Neil Armstrong",
//       "Michael Collins",
//     ],
//     correctAnswer: "Neil Armstrong",
//   },
//   {
//     question: "Which continent is the Sahara Desert located on?",
//     answers: ["Asia", "Australia", "Africa", "South America"],
//     correctAnswer: "Africa",
//   },
// ];
