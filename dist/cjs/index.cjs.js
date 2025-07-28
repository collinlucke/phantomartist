'use strict';

var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var React = require('react');

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Prevent font size inflation */\r\nhtml {\r\n  -moz-text-size-adjust: none;\r\n  -webkit-text-size-adjust: none;\r\n  text-size-adjust: none;\r\n}\r\n\r\n/* Remove default margin in favour of better control in authored CSS */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin-block-end: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  line-height: 1.5;\r\n  margin: 0;\r\n}\r\n\r\n/* Set shorter line heights on headings and interactive elements */\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nbutton,\r\ninput,\r\nlabel {\r\n  line-height: 1.1;\r\n}\r\n\r\n/* Balance text wrapping on headings */\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  text-wrap: balance;\r\n  margin-top: 0px;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n  color: currentColor;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n}\r\n\r\n/* Make sure textareas without a rows attribute are not tiny */\r\ntextarea:not([rows]) {\r\n  min-height: 5em;\r\n}\r\n\r\n/* Anything that has been anchored to should have extra scroll margin */\r\n:target {\r\n  scroll-margin-block: 5ex;\r\n}\r\n";
styleInject(css_248z);

const baseColors = {
    primary: '#02000d',
    secondary: '#07203f',
    tertiary: '#f1d2b6'};
const shadesAndTints = {
    primaryLight: `color-mix(in srgb, ${baseColors.primary}, white)`,
    primaryDark: `color-mix(in srgb, ${baseColors.primary}, color)`,
    secondaryDark: `color-mix(in srgb, ${baseColors.secondary}, black)`,
    tertiaryLight: `color-mix(in srgb, ${baseColors.tertiary}, white)`};
const baseTheme = {
    button: ({ kind, size, iconOnly }) => {
        return {
            display: 'flex',
            alignItems: 'center',
            fontWeight: kind === 'ghost' || kind === 'ghostOnDark' ? '600' : '500', // semibold for ghost buttons
            fontSize: kind === 'ghost' || kind === 'ghostOnDark' ? '18px' : undefined, // 18px for ghost buttons
            borderRadius: '5px',
            cursor: 'pointer',
            gap: '10px',
            width: 'fit-content',
            padding: !iconOnly
                ? (size === 'large' && kind === 'primary' && '10px 40px') ||
                    (size === 'large' && kind === 'secondary' && '8px 34px') ||
                    (size === 'large' && kind === 'tertiary' && '8px 34px') ||
                    (size === 'large' && kind === 'ghost' && '10px 40px') ||
                    (size === 'large' && kind === 'ghostOnDark' && '10px 40px') ||
                    (size === 'medium' && kind === 'primary' && '8px 15px') ||
                    (size === 'medium' && kind === 'secondary' && '8px 15px') ||
                    (size === 'medium' && kind === 'ghost' && '8px 15px') ||
                    (size === 'medium' && kind === 'ghostOnDark' && '8px 15px') ||
                    (size === 'small' && kind === 'primary' && '5px 10px') ||
                    (size === 'small' && kind === 'secondary' && '5px 10px') ||
                    (size === 'small' && kind === 'ghost' && '5px 10px') ||
                    (size === 'small' && kind === 'ghostOnDark' && '5px 10px') ||
                    undefined
                : (kind === 'primary' && '8px') ||
                    (kind === 'secondary' && '8px') ||
                    (kind === 'ghost' && '8px') ||
                    (kind === 'ghostOnDark' && '8px') ||
                    undefined,
            border: (kind === 'primary' && 'none') ||
                // (kind === 'secondary' &&
                //   `3px solid color-mix(in srgb, ${baseColors.primary} 50%, white)`) ||
                (kind === 'secondary' && `2px solid ${shadesAndTints.primaryDark}`) ||
                (kind === 'tertiary' && `3px solid ${shadesAndTints.primaryDark}`) ||
                (kind === 'ghost' && 'none') ||
                (kind === 'ghostOnDark' && 'none') ||
                // (kind === 'tertiary' && `1px solid ${baseColors.tertiary}`) ||
                undefined,
            color: (kind === 'primary' && 'white') ||
                (kind === 'tertiary' && 'black') ||
                (kind === 'secondary' && baseColors.primary) ||
                (kind === 'ghost' && 'inherit') ||
                (kind === 'ghostOnDark' && 'inherit') ||
                'inherit',
            backgroundColor: (kind === 'primary' && baseColors.secondary) ||
                (kind === 'secondary' && baseColors.tertiary) ||
                (kind === 'ghost' && 'transparent') ||
                (kind === 'ghostOnDark' && 'transparent') ||
                // (kind === 'secondary' &&
                //   `color-mix(in srgb, ${baseColors.primary} 75%, black)`) ||
                undefined,
            '&:hover': {
                boxShadow: kind === 'ghost' || kind === 'ghostOnDark' ? '' : `0 0 7px black`,
                textShadow: kind === 'ghost' || kind === 'ghostOnDark'
                    ? `0 0 2px rgba(0,0,0,.75)`
                    : ''
            }
        };
    },
    buttonGroup: ({ direction = 'horizontal', gap = 'medium' } = {}) => {
        const gapSize = (gap === 'small' && '10px') ||
            (gap === 'medium' && '20px') ||
            (gap === 'large' && '30px') ||
            '20px';
        return {
            display: 'flex',
            flexDirection: direction === 'vertical' ? 'column' : 'row',
            gap: gapSize,
            alignItems: 'center',
            justifyContent: 'flex-start'
        };
    },
    img: () => ({
        border: `1px solid ${baseColors.primary}`,
        borderRadius: '5px'
    }),
    modal: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: baseColors.secondary,
        backgroundColor: `${shadesAndTints.primaryLight}`,
        flexDirection: 'column'
    },
    modalContentWrapper: {
        backgroundColor: shadesAndTints.tertiaryLight,
        padding: '20px',
        boxShadow: `0 0 4px black`,
        display: 'flex',
        flexDirection: 'column',
        width: '400px'
    },
    modalHeading: {
        alignSelf: 'end'
    },
    modalCloseButton: {
        cursor: 'pointer'
    },
    modalContent: {}
};

const Button = ({ children, className, type, kind = 'primary', size = 'large', icon, iconOnly, dataTestId, ariaLabel, ariaDescribedby, onClick }) => {
    const consumerTheme = react.useTheme();
    const onClickHandler = e => {
        onClick?.(e);
    };
    return (jsxRuntime.jsx("button", { type: type, onClick: onClickHandler, css: [
            baseTheme.button({ kind, size, iconOnly }),
            consumerTheme?.button && consumerTheme.button({ kind, size, iconOnly }),
            className?.button
        ], className: `pa-button ${kind} ${size}`, "data-testid": dataTestId, "aria-label": ariaLabel, "aria-describedby": ariaDescribedby, children: icon ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [icon, children] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: children })) }));
};

const ButtonGroup = ({ children, className, direction = 'horizontal', gap = 'medium', dataTestId }) => {
    const consumerTheme = react.useTheme();
    return (jsxRuntime.jsx("div", { css: [
            baseTheme.buttonGroup({ direction, gap }),
            consumerTheme?.buttonGroup &&
                consumerTheme.buttonGroup({ direction, gap }),
            className?.buttonGroup
        ], className: `pa-button-group ${direction} ${gap}`, "data-testid": dataTestId, children: children }));
};

const InputField = ({ label, name, type = 'text', value, onChange, placeholder, required = false, error, disabled = false, readonly = false, id, 'data-testid': testId, labelPosition = 'above', size = 'medium', autoResize = false, className }) => {
    const textAreaRef = React.useRef(null);
    // Generate ID from label if it's a string, otherwise use name or fallback
    const inputId = id ||
        (typeof label === 'string'
            ? `input-${label.toLowerCase().replace(/\s+/g, '-')}`
            : name
                ? `input-${name}`
                : `input-${Math.random().toString(36).substring(2, 9)}`);
    const handleInputChange = (e) => {
        onChange(e);
    };
    const handleTextAreaChange = (e) => {
        onChange(e);
        if (autoResize && textAreaRef.current) {
            resizeTextArea(textAreaRef.current);
        }
    };
    const resizeTextArea = (textArea) => {
        textArea.style.height = 'auto';
        textArea.style.height = `${textArea.scrollHeight}px`;
    };
    React.useLayoutEffect(() => {
        if (textAreaRef.current && type === 'textarea') {
            if (autoResize) {
                // Enable auto-resize: set height based on content
                resizeTextArea(textAreaRef.current);
            }
            else {
                // Disable auto-resize: reset to CSS-controlled height
                textAreaRef.current.style.height = '';
            }
        }
    }, [value, autoResize, type]);
    const labelElement = label ? (jsxRuntime.jsxs("label", { css: [getStyles(labelPosition, size, autoResize).label, className?.label], htmlFor: inputId, children: [label, required && (jsxRuntime.jsx("span", { css: getStyles(labelPosition, size, autoResize).required, children: "*" }))] })) : null;
    const inputElement = type === 'textarea' ? (jsxRuntime.jsx("textarea", { ref: textAreaRef, id: inputId, name: name, value: value, onChange: handleTextAreaChange, placeholder: placeholder, required: required, disabled: disabled, readOnly: readonly, "data-testid": testId, css: [
            getStyles(labelPosition, size, autoResize).textarea,
            error && getStyles(labelPosition, size, autoResize).inputError,
            disabled && getStyles(labelPosition, size, autoResize).inputDisabled,
            readonly && getStyles(labelPosition, size, autoResize).inputReadonly,
            className?.input
        ], "aria-describedby": error ? `${inputId}-error` : undefined })) : (jsxRuntime.jsx("input", { id: inputId, name: name, type: type, value: value, onChange: handleInputChange, placeholder: placeholder, required: required, disabled: disabled, readOnly: readonly, "data-testid": testId, css: [
            getStyles(labelPosition, size, autoResize).input,
            error && getStyles(labelPosition, size, autoResize).inputError,
            disabled && getStyles(labelPosition, size, autoResize).inputDisabled,
            readonly && getStyles(labelPosition, size, autoResize).inputReadonly,
            className?.input
        ], "aria-describedby": error ? `${inputId}-error` : undefined }));
    const errorElement = error ? (jsxRuntime.jsx("div", { css: [getStyles(labelPosition, size, autoResize).error, className?.error], id: `${inputId}-error`, role: "alert", children: error })) : null;
    // Layout based on label position
    return (jsxRuntime.jsxs("div", { css: [
            getStyles(labelPosition, size, autoResize).container,
            className?.container
        ], children: [(labelPosition === 'above' || labelPosition === 'left') && labelElement, inputElement, (labelPosition === 'below' || labelPosition === 'right') && labelElement, errorElement] }));
};
const getStyles = (labelPosition, size, autoResize = false) => {
    const getSizeStyles = () => {
        switch (size) {
            case 'large':
                return {
                    padding: '0.9rem',
                    fontSize: '1.1rem'
                };
            case 'small':
                return {
                    padding: '0.5rem',
                    fontSize: '0.875rem'
                };
            default: // medium
                return {
                    padding: '0.75rem',
                    fontSize: '1rem'
                };
        }
    };
    const getContainerLayout = () => {
        return {
            display: 'flex',
            flexDirection: labelPosition === 'above' || labelPosition === 'below'
                ? 'column'
                : 'row',
            gap: labelPosition === 'left' || labelPosition === 'right'
                ? '0.75rem'
                : '0.5rem',
            flex: '1 1 0%', // Allow flex grow/shrink for side-by-side layouts
            minWidth: 0, // Prevent flex items from overflowing
            alignItems: labelPosition === 'left' || labelPosition === 'right'
                ? 'center'
                : 'stretch',
            marginBottom: '1.25rem'
        };
    };
    const sizeStyles = getSizeStyles();
    return {
        container: getContainerLayout(),
        label: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#374151',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            marginBottom: labelPosition === 'above' ? '0.25rem' : '0',
            marginTop: labelPosition === 'below' ? '0.25rem' : '0',
            marginRight: labelPosition === 'left' ? '0.5rem' : '0',
            marginLeft: labelPosition === 'right' ? '0.5rem' : '0',
            alignSelf: labelPosition === 'left' || labelPosition === 'right'
                ? 'center'
                : 'flex-start'
        },
        required: {
            color: '#ef4444',
            fontSize: '0.875rem'
        },
        input: {
            ...sizeStyles,
            border: `1px solid ${baseColors?.tertiary}`,
            borderRadius: '6px',
            transition: 'all 0.2s ease',
            minWidth: 0, // Prevent overflow in flex containers
            '&:focus': {
                outline: '2px solid #3b82f6',
                outlineOffset: '2px',
                borderColor: '#3b82f6'
            },
            '&::placeholder': {
                color: '#9ca3af'
            }
        },
        textarea: {
            ...sizeStyles,
            border: `1px solid ${baseColors?.tertiary}`,
            borderRadius: '6px',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease', // Removed height transition for auto-resize
            minWidth: 0, // Prevent overflow in flex containers
            minHeight: '3rem',
            resize: autoResize ? 'none' : 'vertical', // Conditional resize based on autoResize prop
            overflow: autoResize ? 'hidden' : 'auto', // Conditional overflow for auto-resize
            '&:focus': {
                outline: '2px solid #3b82f6',
                outlineOffset: '2px',
                borderColor: '#3b82f6'
            },
            '&::placeholder': {
                color: '#9ca3af'
            }
        },
        inputError: {
            borderColor: '#ef4444',
            '&:focus': {
                outline: '2px solid #ef4444',
                borderColor: '#ef4444'
            }
        },
        inputDisabled: {
            backgroundColor: '#f9fafb',
            color: '#6b7280',
            cursor: 'not-allowed'
        },
        inputReadonly: {
            backgroundColor: 'transparent',
            outline: 'none',
            border: 'none',
            cursor: 'default'
        },
        error: {
            fontSize: '0.875rem',
            color: '#ef4444',
            marginTop: '0.25rem'
        }
    };
};

const Main = ({ children, className }) => {
    return (jsxRuntime.jsx("main", { className: "pa-main", css: [baseStyles$7.main, className?.main], children: children }));
};
const baseStyles$7 = {
    main: {
        display: 'flex',
        justifyContent: 'center'
    }
};

const InnerWidth = ({ children, size = 'medium', className }) => {
    const sizeStyles = getSizeStyles(size);
    return (jsxRuntime.jsx("div", { css: [baseStyles$6.innerWidth, sizeStyles, className?.innerWidth], className: "pa-inner-width", children: children }));
};
const getSizeStyles = (size) => {
    switch (size) {
        case 'small':
            return {
                width: 'calc(100% - 2 * 20px)',
                '@media (min-width: 634px)': {
                    width: '594px'
                },
                '@media (min-width: 720px)': {
                    width: 'calc(100% - 160px)'
                },
                '@media (min-width: 1000px)': {
                    width: '640px'
                },
                '@media (min-width: 1100px)': {
                    width: 'calc(100% - 360px)'
                },
                '@media (min-width: 1250px)': {
                    width: '720px'
                }
            };
        case 'medium':
            return {
                width: 'calc(100% - 2 * 20px)',
                '@media (min-width: 634px)': {
                    width: '594px'
                },
                '@media (min-width: 720px)': {
                    width: 'calc(100% - 126px)'
                },
                '@media (min-width: 1000px)': {
                    width: '874px'
                },
                '@media (min-width: 1100px)': {
                    width: 'calc(100% - 226px)'
                },
                '@media (min-width: 1250px)': {
                    width: '1024px'
                }
            };
        case 'large':
            return {
                width: 'calc(100% - 2 * 40px)',
                '@media (min-width: 634px)': {
                    width: 'calc(100% - 2 * 40px)'
                },
                '@media (min-width: 720px)': {
                    width: 'calc(100% - 2 * 50px)'
                },
                '@media (min-width: 1000px)': {
                    width: 'calc(100% - 2 * 50px)'
                },
                '@media (min-width: 1100px)': {
                    width: 'calc(100% - 2 * 55px)'
                },
                '@media (min-width: 1250px)': {
                    width: 'calc(100% - 2 * 60px)'
                }
            };
        case 'full':
            return {
                width: 'calc(100% - 2 * 60px)',
                padding: '0 60px',
                boxSizing: 'border-box'
            };
        default:
            return {};
    }
};
const baseStyles$6 = {
    innerWidth: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignSelf: 'center'
    }
};

const Header = ({ children, logo, navigation, actions, className, dataTestId, layout = 'default' }) => {
    // If children is provided, use legacy mode
    if (children) {
        return (jsxRuntime.jsx("header", { css: [baseStyles$5.header, className?.header], className: "pa-header", "data-testid": dataTestId, children: children }));
    }
    // New slot-based layout
    const layoutStyles = getLayoutStyles(layout);
    return (jsxRuntime.jsxs("header", { css: [baseStyles$5.header, layoutStyles, className?.header], className: "pa-header", "data-testid": dataTestId, children: [logo && (jsxRuntime.jsx("div", { css: [baseStyles$5.logoArea, className?.logoArea], children: logo })), navigation && (jsxRuntime.jsx("div", { css: [baseStyles$5.navigationArea, className?.navigationArea], children: navigation })), actions && (jsxRuntime.jsx("div", { css: [baseStyles$5.actionsArea, className?.actionsArea], children: actions }))] }));
};
const getLayoutStyles = (layout) => {
    switch (layout) {
        case 'centered':
            return { justifyContent: 'center' };
        case 'spread':
            return { justifyContent: 'space-between' };
        default:
            return { justifyContent: 'space-between' };
    }
};
const baseStyles$5 = {
    header: {
        display: 'flex',
        marginBottom: '25px',
        padding: '20px 0',
        color: baseColors.secondary,
        justifyContent: 'center',
        height: '115px',
        backgroundColor: shadesAndTints.tertiaryLight,
        alignItems: 'center',
        '@media (max-width: 580px)': {
            height: '75px'
        }
    },
    logoArea: {
        display: 'flex',
        alignItems: 'center',
        flex: '0 0 auto'
    },
    navigationArea: {
        display: 'flex',
        alignItems: 'center',
        flex: '1 1 auto',
        justifyContent: 'center'
    },
    actionsArea: {
        display: 'flex',
        alignItems: 'center',
        flex: '0 0 auto',
        gap: '10px'
    }
};

const Block = ({ children, className, dataTestId }) => {
    return (jsxRuntime.jsx("div", { css: [baseStyles$4.block, className?.block], className: "pa-block", "data-testid": dataTestId, children: children }));
};
const baseStyles$4 = {
    block: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
};

const TwoColumn = ({ left, right }) => {
    return (jsxRuntime.jsxs("div", { css: [baseStyles$3.columnWrapper], children: [jsxRuntime.jsx("div", { css: [baseStyles$3.column], children: left }), jsxRuntime.jsx("div", { css: [baseStyles$3.column], children: right })] }));
};
const baseStyles$3 = {
    columnWrapper: {
        gap: '50px',
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width: 740px)': {
            flexDirection: 'column',
            gap: '0'
        }
    },
    column: {
        width: '100%'
    }
};

const Image = ({ src, className }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const handleImageLoad = () => {
        setIsLoaded(true);
    };
    return (jsxRuntime.jsx("img", { src: src, css: [baseTheme.img, className?.img], className: "pa-image", onLoad: handleImageLoad, style: { display: isLoaded ? 'block' : 'none' } }));
};

const List = ({ className, children }) => {
    return (jsxRuntime.jsx("ul", { css: [baseStyles$2.ul, className?.ul], className: "pa-list", children: children }));
};
const baseStyles$2 = {
    ul: {
        borderRadius: '6px',
        backgroundColor: shadesAndTints.tertiaryLight,
        fontWeight: '500',
        padding: '20px',
        margin: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none'
    }
};

const ListItem = ({ children, className, useHover }) => {
    return (jsxRuntime.jsx("li", { css: [
            baseStyles$1.li,
            className && className.li,
            useHover && baseStyles$1.liHover,
            className && useHover && className.liHover
        ], className: "pa-list-item", children: children }));
};
const baseStyles$1 = {
    li: {
        borderRadius: '6px',
        border: `1px solid ${baseColors.secondary}`,
        marginBottom: '10px',
        padding: '10px',
        color: baseColors.secondary,
        display: 'flex'
    },
    liHover: {
        ':hover': {
            boxShadow: `0 0 7px ${shadesAndTints.secondaryDark}`
        }
    }
};

/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */

var e = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */

const y = (a, c) => {
  const t = React.forwardRef(({
    color: i = "currentColor",
    size: e$1 = 24,
    strokeWidth: l = 1.5,
    className: m = "",
    children: r,
    ...n
  }, d) => {
    const f = {
      ref: d,
      ...e,
      width: e$1,
      height: e$1,
      strokeWidth: l,
      color: i,
      className: m,
      ...n
    };
    return React.createElement("svg", f, c?.map(([h, o]) => React.createElement(h, {
      key: o.id,
      ...o
    })) ?? [], ...(Array.isArray(r) ? r : [r]));
  });
  return t.displayName = `${a}Icon`, t;
};

/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */

const r = y("CancelCircleIcon", [["path", {
  d: "M14.9994 15L9 9M9.00064 15L15 9",
  stroke: "currentColor",
  key: "k0"
}], ["path", {
  d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z",
  stroke: "currentColor",
  key: "k1"
}]]);

const Modal = ({ isOpen, onClose, children, title, maxWidth = '500px', showCloseButton = true, dataTestId }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    return (jsxRuntime.jsx("div", { css: styles.backdrop, onClick: handleBackdropClick, onKeyDown: handleKeyDown, children: jsxRuntime.jsxs("div", { css: [styles.modal, { maxWidth }], role: "dialog", "aria-modal": "true", "data-testid": dataTestId, children: [(title || showCloseButton) && (jsxRuntime.jsxs("div", { css: styles.header, children: [title && jsxRuntime.jsx("h1", { css: styles.title, children: title }), showCloseButton && (jsxRuntime.jsx("button", { css: styles.closeButton, onClick: onClose, "aria-label": "Close modal", children: jsxRuntime.jsx(r, { size: 44 }) }))] })), jsxRuntime.jsx("div", { css: styles.content, children: children })] }) }));
};
const styles = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem'
    },
    modal: {
        backgroundColor: '#EEDECC',
        borderRadius: '3px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.5rem 0 1.5rem' // half the vertical padding
        // No border bottom
    },
    title: {
        margin: 0,
        fontSize: '36px',
        fontWeight: 400, // regular
        lineHeight: 1.25,
        letterSpacing: '-0.025em'
    },
    closeButton: {
        background: 'none',
        border: 'none',
        padding: '0.5rem',
        cursor: 'pointer',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6b7280',
        transition: 'all 0.2s ease',
        '&:hover': {
            backgroundColor: '#e5e7eb',
            color: '#374151'
        },
        '&:focus': {
            outline: '2px solid #3b82f6',
            outlineOffset: '2px'
        }
    },
    content: {
        padding: '1.5rem',
        overflow: 'auto',
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    }
};

const Search = ({ searchTerm, searchLabel, totalResultsCount, className, buttonSize, inputSize, useSearchButton, onSearch, setSearchTerm }) => {
    const setSearchTermHandler = (e) => {
        if (e.target instanceof HTMLInputElement) {
            setSearchTerm(e);
        }
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSearch?.(e);
    };
    return (jsxRuntime.jsx("form", { onSubmit: handleFormSubmit, children: jsxRuntime.jsxs("div", { css: [
                baseStyles.searchWrapper,
                className?.searchWrapper,
                searchWrapperMediaQuery
            ], className: "pa-search-wrapper", children: [jsxRuntime.jsxs("div", { css: baseStyles.results, children: ["Total Results: ", totalResultsCount] }), jsxRuntime.jsx(InputField, { type: "search", value: searchTerm || '', name: "searchTerm", labelPosition: "above", placeholder: searchLabel || 'Search', className: formTextInputStyles, onChange: setSearchTermHandler, size: inputSize }), useSearchButton && (jsxRuntime.jsx(Button, { size: buttonSize, className: buttonStyles, type: "submit", children: "Search" }))] }) }));
};
const searchWrapperMediaQuery = {
    '@media (max-width: 580px)': {
        flexDirection: 'column'
    }
};
const formTextInputStyles = {
    container: {
        margin: 0,
        flex: 1
    }
};
const buttonStyles = {
    button: {
        marginLeft: '10px'
    }
};
const baseStyles = {
    searchWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        paddingBottom: '20px',
        paddingTop: '20px',
        background: 'white'
    },
    results: {
        alignSelf: 'end',
        '@media (max-width: 580px)': {
            alignSelf: 'start'
        }
    }
};

function useDebounce(func, wait) {
    const timeoutRef = React.useRef();
    const debounceFunc = React.useCallback((...args) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            func(...args);
        }, wait);
    }, [func, wait]);
    return debounceFunc;
}

const useResponsiveHeader = () => {
    const [screenSize, setScreenSize] = React.useState('large');
    React.useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 580) {
                setScreenSize('small');
            }
            else if (width < 1024) {
                setScreenSize('medium');
            }
            else {
                setScreenSize('large');
            }
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return {
        screenSize,
        isSmall: screenSize === 'small',
        isMedium: screenSize === 'medium',
        isLarge: screenSize === 'large',
        showCompactNav: screenSize === 'small',
        showFullNav: screenSize !== 'small'
    };
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  useDebounce: useDebounce,
  useResponsiveHeader: useResponsiveHeader
});

/**
 * WCAG Color Contrast Utilities
 *
 * Professional-grade color contrast analysis following WCAG 2.1 guidelines.
 * Essential utilities for accessible design systems.
 */
/**
 * Convert hex color to RGB values
 */
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : null;
};
/**
 * Calculate relative luminance according to WCAG formula
 */
const getLuminance = (hex) => {
    const rgb = hexToRgb(hex);
    if (!rgb)
        return 0;
    const { r, g, b } = rgb;
    // Convert to sRGB
    const rsRGB = r / 255;
    const gsRGB = g / 255;
    const bsRGB = b / 255;
    // Apply gamma correction
    const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
    // Calculate relative luminance
    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
};
/**
 * Calculate contrast ratio between two colors
 */
const getContrastRatio = (color1, color2) => {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    return (lighter + 0.05) / (darker + 0.05);
};
/**
 * WCAG compliance thresholds
 */
const WCAGThresholds = {
    AA_NORMAL: 4.5,
    AA_LARGE: 3,
    AAA_NORMAL: 7,
    AAA_LARGE: 4.5
};
/**
 * Check WCAG compliance for a color combination
 */
const checkWCAGCompliance = (foreground, background, isLargeText = false) => {
    const ratio = getContrastRatio(foreground, background);
    const aaThreshold = isLargeText
        ? WCAGThresholds.AA_LARGE
        : WCAGThresholds.AA_NORMAL;
    const aaaThreshold = isLargeText
        ? WCAGThresholds.AAA_LARGE
        : WCAGThresholds.AAA_NORMAL;
    return {
        ratio: Math.round(ratio * 100) / 100,
        passesAA: ratio >= aaThreshold,
        passesAAA: ratio >= aaaThreshold,
        level: ratio >= aaaThreshold ? 'AAA' : ratio >= aaThreshold ? 'AA' : 'Fail',
        isLargeText,
        recommendation: ratio < aaThreshold
            ? 'Consider darker/lighter colors for better accessibility'
            : 'Good contrast ratio'
    };
};
/**
 * Analyze contrast and provide detailed feedback
 */
const analyzeContrast = (foreground, background, isLargeText = false) => {
    const compliance = checkWCAGCompliance(foreground, background, isLargeText);
    return {
        ...compliance,
        colors: {
            foreground,
            background
        },
        luminance: {
            foreground: Math.round(getLuminance(foreground) * 1000) / 1000,
            background: Math.round(getLuminance(background) * 1000) / 1000
        }
    };
};
/**
 * Get contrast ratio with emoji indicator
 */
const getContrastEmoji = (ratio, isLargeText = false) => {
    const aaThreshold = isLargeText
        ? WCAGThresholds.AA_LARGE
        : WCAGThresholds.AA_NORMAL;
    const aaaThreshold = isLargeText
        ? WCAGThresholds.AAA_LARGE
        : WCAGThresholds.AAA_NORMAL;
    if (ratio >= aaaThreshold)
        return '🟢'; // AAA
    if (ratio >= aaThreshold)
        return '🟡'; // AA
    return '🔴'; // Fail
};

/**
 * Advanced Scoped Contrast Analysis for Design Systems
 *
 * Professional-grade accessibility analysis with defensive programming patterns.
 * Provides component-level, page-level, and application-wide contrast validation.
 */
/**
 * Analyze color combinations with comprehensive error handling
 */
const analyzeColorCombinations = (combinations, contextName) => {
    if (!Array.isArray(combinations) || combinations.length === 0) {
        console.error(`❌ No color combinations available for ${contextName} analysis`);
        return { total: 0, passing: 0, issues: [] };
    }
    try {
        console.log(`🔍 ${contextName} Analysis`);
        console.log('═'.repeat(60));
        let totalCombinations = 0;
        let passingCombinations = 0;
        const issues = [];
        combinations.forEach(combo => {
            try {
                // Validate combo structure
                if (!combo ||
                    !combo.fg ||
                    !combo.bg ||
                    !combo.name ||
                    !combo.component) {
                    console.warn(`⚠️ Skipping incomplete color combination: ${combo?.name || 'unnamed'}`);
                    return;
                }
                totalCombinations++;
                const analysis = analyzeContrast(combo.fg, combo.bg);
                const emoji = getContrastEmoji(analysis.ratio);
                console.log(`\n${combo.component} - ${combo.name}:`);
                console.log(`  Colors: ${combo.fg} on ${combo.bg}`);
                console.log(`  Ratio: ${analysis.ratio}:1 ${emoji} (${analysis.level})`);
                if (analysis.passesAA) {
                    passingCombinations++;
                }
                else {
                    issues.push({ ...combo, analysis });
                    console.log(`  ⚠️  ${analysis.recommendation}`);
                }
            }
            catch (error) {
                console.error(`❌ Error analyzing ${combo?.name || 'unknown'}:`, error);
            }
        });
        // Summary
        console.log(`\n📊 ${contextName} Summary`);
        console.log('═'.repeat(60));
        console.log(`Total combinations: ${totalCombinations}`);
        if (totalCombinations > 0) {
            console.log(`Passing WCAG AA: ${passingCombinations}/${totalCombinations} (${Math.round((passingCombinations / totalCombinations) * 100)}%)`);
        }
        else {
            console.log('No valid combinations to analyze');
        }
        if (issues.length > 0) {
            console.log(`\n❌ ${issues.length} issues found:`);
            issues.forEach(issue => {
                console.log(`  • ${issue.component}: ${issue.name} (${issue.analysis.ratio}:1)`);
            });
        }
        else {
            console.log('\n✅ All color combinations pass WCAG AA standards!');
        }
        return {
            total: totalCombinations,
            passing: passingCombinations,
            issues
        };
    }
    catch (error) {
        console.error(`❌ ${contextName} analysis failed:`, error);
        return { total: 0, passing: 0, issues: [] };
    }
};
/**
 * Analyze color combinations filtered by component type
 */
const analyzeByComponent = (combinations, componentName) => {
    // Input validation
    if (!componentName || typeof componentName !== 'string') {
        console.error('❌ Invalid component name provided. Expected non-empty string.');
        return { total: 0, passing: 0, issues: [] };
    }
    const componentCombos = combinations.filter(combo => {
        if (!combo || !combo.component || typeof combo.component !== 'string') {
            console.warn('⚠️ Skipping invalid color combination entry');
            return false;
        }
        return combo.component.toLowerCase() === componentName.toLowerCase();
    });
    if (componentCombos.length === 0) {
        const availableComponents = [
            ...new Set(combinations.filter(c => c && c.component).map(c => c.component))
        ];
        console.log(`No predefined color combinations found for ${componentName}`);
        console.log('Available components:', availableComponents.join(', '));
        return { total: 0, passing: 0, issues: [] };
    }
    return analyzeColorCombinations(componentCombos, `${componentName} Component`);
};
/**
 * Create browser console analysis functions for any design system
 */
const createConsoleAnalysisFunctions = (colorCombinations) => {
    const analyzeFullSystem = () => {
        return analyzeColorCombinations(colorCombinations, 'Full Design System');
    };
    const analyzeComponent = (componentName) => {
        return analyzeByComponent(colorCombinations, componentName);
    };
    const analyzeCustom = (customCombinations) => {
        return analyzeColorCombinations(customCombinations, 'Custom Analysis');
    };
    // Make functions available globally in browser
    if (typeof window !== 'undefined') {
        try {
            // Type-safe window extensions
            window.analyzeFullSystem = analyzeFullSystem;
            window.analyzeComponent = analyzeComponent;
            window.analyzeCustom = analyzeCustom;
            console.log('✅ Design System contrast analysis functions available globally');
            console.log('📖 Available functions:');
            console.log('  • analyzeFullSystem() - Analyze all color combinations');
            console.log('  • analyzeComponent("ComponentName") - Analyze specific component');
            console.log('  • analyzeCustom([{...combinations}]) - Analyze custom combinations');
        }
        catch (error) {
            console.warn('⚠️ Could not attach functions to window object:', error);
        }
    }
    return {
        analyzeFullSystem,
        analyzeComponent,
        analyzeCustom
    };
};
/**
 * Quick accessibility audit of any color pair
 */
const quickAudit = (foreground, background, context) => {
    try {
        const analysis = analyzeContrast(foreground, background);
        const emoji = getContrastEmoji(analysis.ratio);
        console.log(`🎨 Quick Contrast Audit${context ? ` - ${context}` : ''}`);
        console.log(`Colors: ${foreground} on ${background}`);
        console.log(`Ratio: ${analysis.ratio}:1 ${emoji} (${analysis.level})`);
        console.log(`WCAG AA: ${analysis.passesAA ? '✅ Pass' : '❌ Fail'}`);
        if (!analysis.passesAA) {
            console.log(`💡 ${analysis.recommendation}`);
        }
    }
    catch (error) {
        console.error('❌ Quick audit failed:', error);
    }
};

var scopedContrastAnalysis = /*#__PURE__*/Object.freeze({
  __proto__: null,
  analyzeByComponent: analyzeByComponent,
  analyzeColorCombinations: analyzeColorCombinations,
  analyzeContrast: analyzeContrast,
  createConsoleAnalysisFunctions: createConsoleAnalysisFunctions,
  getContrastEmoji: getContrastEmoji,
  quickAudit: quickAudit
});

exports.Block = Block;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Header = Header;
exports.Image = Image;
exports.InnerWidth = InnerWidth;
exports.InputField = InputField;
exports.List = List;
exports.ListItem = ListItem;
exports.Main = Main;
exports.Modal = Modal;
exports.PAHooks = index;
exports.ScopedContrastAnalysis = scopedContrastAnalysis;
exports.Search = Search;
exports.TwoColumn = TwoColumn;
exports.WCAGThresholds = WCAGThresholds;
exports.analyzeContrast = analyzeContrast;
exports.checkWCAGCompliance = checkWCAGCompliance;
exports.getContrastEmoji = getContrastEmoji;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.hexToRgb = hexToRgb;
//# sourceMappingURL=index.cjs.js.map
