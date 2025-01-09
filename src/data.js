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

/**
 * The Question contain duplicate of the correct answer in the answers array,
 * Its recommended to change the starcture each question to contain id & description, and the correctAnswer will be id of the correct answer. In this way you can avoid bug due typo:
 *
 *  {
 *       question:
 *         "Which pseudo-class is used to style an element only if it has no children?",
 *       answers: [
 *       {
 *          description: ":empty",
 *          id:0
 *       },
 *       {
 *          description:":only-child",
 *          id:1
 *        },
 *        {
 *          description: ":not(:child)",
 *          id:2
 *        },
 *        {
 *          description":last-child",
 *          id:3
 *        }
 *       ],
 *       correctAnswerID: 0,
 *     },
 */


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
                "Before first child",
                "Start of element",
                "Before parent",
                "After last child",
            ],
            correctAnswer: "Start of element",
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
                "Non-matching only",
                "Hides elements",
                "Selects last",
                "Excludes types",
            ],
            correctAnswer: "Non-matching only",
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
            question: "When using :hover, what behavior occurs on touch devices?",
            answers: [
                "Triggers on tap",
                "No effect",
                "Double tap needed",
                "Works like desktop",
            ],
            correctAnswer: "Triggers on tap",
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
            question: "What states can :checked select?",
            answers: [
                "Radio selected",
                "Both radio & check",
                "Only checkbox",
                "Any input select",
            ],
            correctAnswer: "Both radio & check",
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
            answers: ["with &&", "with 'and'", "with comma", "with 'to'"],
            correctAnswer: "with 'and'",
        },
        {
            question: "Which targets dark mode preference?",
            answers: ["@media dark", "prefers-dark", "@dark-mode", "@media darkness"],
            correctAnswer: "prefers-dark",
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
                "Hides back side",
                "Removes shadows",
                "Hides front",
                "No perspective",
            ],
            correctAnswer: "Hides back side",
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
                "box-shadow: 0 0 10px",
                "shadow: blur 10px",
                "box-shadow: 10px",
                "shadow: 0 0 10px",
            ],
            correctAnswer: "box-shadow: 0 0 10px black",
        },
        {
            question: "What's the difference between rgb and hsl?",
            answers: [
                "No difference",
                "Numbers vs names",
                "Values vs angles",
                "HSL not supported",
            ],
            correctAnswer: "Values vs angles",
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
                "gradient-repeat",
                "repeat-linear",
                "repeat-gradient",
                "pattern-gradient",
            ],
            correctAnswer: "repeat-linear",
        },
    ],
    "box model": [
        {
            question: "What does 'box-sizing: border-box' do?",
            answers: [
                "Excludes padding",
                "Includes pad + border",
                "Only includes margin",
                "Only includes border",
            ],
            correctAnswer: "Includes pad + border",
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
                "First p in page",
                "First p in parent",
                "First child p",
                "All p elements",
            ],
            correctAnswer: "First p in parent",
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

            answers: ["ease", "linear", "cubic-bezier", "ease-in"],
            correctAnswer: "cubic-bezier",
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
            answers: ["reverse", "alternate", "direction:reverse", "backwards"],
            correctAnswer: "direction:reverse",
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
            question: "Which 'grid-auto-flow' value fills rows and grid holes?",
            answers: ["row dense", "dense", "row", "auto-dense"],
            correctAnswer: "row dense",
        },
        {
            question: "In Grid, what does 'fr' stand for?",
            answers: [
                "Fixed ratio",
                "Fractional unit of space",
                "Frame rate",
                "Fixed rows",
            ],
            correctAnswer: "Fractional unit of space",
        },
        {
            question: "How to create a 3x3 grid with equal cells?",
            answers: ["grid: 3/3", "repeat(3,1fr)", "grid: 3x3", "3 auto rows/cols"],
            correctAnswer: "repeat(3,1fr)",
        },

        {
            question: "Which property names grid areas?",
            answers: [
                "grid-name",
                "grid-template-areas",
                "grid-area-template",
                "grid-template-name",
            ],
            correctAnswer: "grid-template-areas",
        },
        {
            question: "What does 'span' do in grid?",
            answers: ["New track", "Extends cells", "Adds spacing", "Sets gap size"],
            correctAnswer: "Extends cells",
        },
        {
            question: "Default value of 'grid-auto-columns' and 'grid-auto-rows'?",
            answers: ["auto", "1fr", "100%", "fit-content"],
            correctAnswer: "auto",
        },
        {
            question: "Best use of minmax()?",
            answers: ["auto,content", "min/max-content", "content,auto", "auto,auto"],
            correctAnswer: "min/max-content",
        },
        {
            question: "What does 'grid-auto-flow: dense' do?",
            answers: [
                "Items auto-size",
                "Fills earlier grid holes",
                "Makes grid compact",
                "Items flow densely",
            ],
            correctAnswer: "Fills earlier grid holes",
        },
        {
            question: "Which aligns items along the column axis?",
            answers: ["justify-items", "align-items", "place-items", "align-content"],
            correctAnswer: "align-items",
        },
        {
            question: "auto-fit vs auto-fill?",
            answers: [
                "Same thing",
                "fill:empty fit:no",
                "fit:empty fill:no",
                "fill is wrong",
            ],
            correctAnswer: "fill:empty fit:no",
        },
    ],
    flexBox: [
        {
            question: "Which property creates a flex container?",
            answers: ["flex-wrap", "display: flex", "flex-direction", "flex-flow"],
            correctAnswer: "display: flex",
        },
        {
            question: "What is the default flex-direction?",
            answers: ["row-reverse", "column", "row", "column-reverse"],
            correctAnswer: "row",
        },
        {
            question: "What does 'space-around' do?",
            answers: ["Even space all", "Between only", "From edges", "Center align"],
            correctAnswer: "Even space all",
        },
        {
            question: "What does 'flex-wrap: wrap-reverse' do?",
            answers: [
                "Reverse wrap",
                "One line reverse",
                "Cross-axis flip",
                "No wrapping",
            ],
            correctAnswer: "Cross-axis flip",
        },
        {
            question: "Which property lets items wrap to multiple lines?",
            answers: ["flex-line", "flex-wrap", "flex-flow", "flex-basis"],
            correctAnswer: "flex-wrap",
        },
        {
            question: "What combines flex-grow, flex-shrink, flex-basis?",
            answers: ["flex-shorthand", "flex", "flex-combo", "flex-all"],
            correctAnswer: "flex",
        },
        {
            question: "In 'flex: 0 1 auto', what is each part?",
            answers: [
                "shrink, grow, basis",
                "grow, shrink, basis",
                "basis, grow, shrink",
                "grow, basis, shrink",
            ],
            correctAnswer: "grow, shrink, basis",
        },
        {
            question: "Which aligns items along the cross-axis?",
            answers: [
                "justify-content",
                "align-items",
                "align-content",
                "align-self",
            ],
            correctAnswer: "align-content",
        },

        {
            question: "What’s the default for 'flex-grow'?",
            answers: ["1", "0", "auto", "initial"],
            correctAnswer: "0",
        },
        {
            question:
                "With 'flex-direction: column', which aligns items horizontally?",
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
