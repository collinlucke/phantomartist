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

const Button = ({ children, className, type, kind = 'primary', size = 'large', icon, iconOnly, dataTestId, onClick }) => {
    const consumerTheme = react.useTheme();
    const onClickHandler = e => {
        onClick?.(e);
    };
    return (jsxRuntime.jsx("button", { type: type, onClick: onClickHandler, css: [
            baseTheme.button({ kind, size, iconOnly }),
            consumerTheme?.button && consumerTheme.button({ kind, size, iconOnly }),
            className?.button
        ], className: `pa-button ${kind} ${size}`, "data-testid": dataTestId, children: icon ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [icon, children] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: children })) }));
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

const InputField = ({ label, type = 'text', value, onChange, placeholder, required = false, error, disabled = false, id }) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
    return (jsxRuntime.jsxs("div", { css: styles$1.container, children: [jsxRuntime.jsxs("label", { css: styles$1.label, htmlFor: inputId, children: [label, required && jsxRuntime.jsx("span", { css: styles$1.required, children: "*" })] }), jsxRuntime.jsx("input", { id: inputId, type: type, value: value, onChange: (e) => onChange(e.target.value), placeholder: placeholder, required: required, disabled: disabled, css: [styles$1.input, error && styles$1.inputError, disabled && styles$1.inputDisabled], "aria-describedby": error ? `${inputId}-error` : undefined }), error && (jsxRuntime.jsx("div", { css: styles$1.error, id: `${inputId}-error`, role: "alert", children: error }))] }));
};
const styles$1 = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    label: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: '#374151',
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem'
    },
    required: {
        color: '#ef4444',
        fontSize: '0.875rem'
    },
    input: {
        padding: '0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        fontSize: '1rem',
        transition: 'all 0.2s ease',
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
    error: {
        fontSize: '0.875rem',
        color: '#ef4444',
        marginTop: '0.25rem'
    }
};

const Form = ({ children, role, className, onSubmit }) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(e);
    };
    return (jsxRuntime.jsx("form", { css: [baseStyles$b.form, className?.form], onSubmit: handleOnSubmit, role: role, children: children }));
};
const baseStyles$b = {
    form: {
        backgroundColor: shadesAndTints.tertiaryLight,
        borderRadius: '6px',
        padding: '20px',
        width: '100%'
    }
};

const FormInputLabel = ({ position, name, label, className }) => {
    switch (position) {
        case 'left':
            return (jsxRuntime.jsx("label", { css: [
                    baseStyles$a.label,
                    baseStyles$a.left,
                    className?.label,
                    className?.left
                ], htmlFor: name, children: label }));
        case 'right':
            return (jsxRuntime.jsx("label", { htmlFor: name, css: [
                    baseStyles$a.label,
                    baseStyles$a.right,
                    className && className.label,
                    className && className.right
                ], children: label }));
        case 'above':
            return (jsxRuntime.jsx("label", { css: [
                    baseStyles$a.label,
                    baseStyles$a.above,
                    className && className.label,
                    className && className.above
                ], htmlFor: name, children: label }));
        case 'below':
            return (jsxRuntime.jsx("label", { htmlFor: name, css: [
                    baseStyles$a.label,
                    baseStyles$a.below,
                    className && className.label,
                    className && className.below
                ], children: label }));
    }
};
const baseStyles$a = {
    label: {
        fontWeight: '500'
    },
    above: {
        marginBottom: '5px'
    },
    left: {
        alignSelf: 'end',
        marginRight: '10px'
    },
    right: {
        alignSelf: 'end',
        marginLeft: '10px'
    },
    below: { marginTop: '7px' }
};

const FormTextInput = ({ label = '', name = '', type = 'text', labelPos = 'left', value = '', placeholder, size = 'large', className, readonly, onChange }) => {
    const onChangeHandler = (e) => {
        onChange?.(e);
    };
    return (jsxRuntime.jsxs("div", { css: [baseStyles$9.inputWrapper(labelPos), className?.inputWrapper], className: "pa-form-text-input", children: [(label && labelPos === 'left') || labelPos === 'above' ? (jsxRuntime.jsx(FormInputLabel, { position: labelPos, name: name, label: label, className: className })) : (''), jsxRuntime.jsx("input", { css: [
                    baseStyles$9.input(size),
                    readonly && baseStyles$9.readonly,
                    className && className.input
                ], value: value || '', type: type, name: name, id: name, onChange: onChangeHandler, readOnly: readonly, placeholder: placeholder }), (label && labelPos === 'right') || labelPos === 'below' ? (jsxRuntime.jsx(FormInputLabel, { position: labelPos, name: name, label: label, className: className })) : ('')] }));
};
const baseStyles$9 = {
    inputWrapper: (labelPos) => ({
        marginBottom: '20px',
        display: 'flex',
        flexDirection: labelPos === 'above' || labelPos === 'below' ? 'column' : 'row'
    }),
    input: (size) => {
        return {
            border: `1px solid ${baseColors.tertiary}`,
            padding: (size === 'large' && '9px') ||
                (size === 'medium' && '8px') ||
                (size === 'small' && '5px') ||
                undefined,
            borderRadius: '5px',
            width: '100%'
        };
    },
    readonly: {
        backgroundColor: 'transparent',
        outline: 'none',
        padding: 0,
        border: 'none'
    }
};

const FormTextArea = ({ label = '', name = '', labelPos, value = '', className, readonly, autoResize, onChange }) => {
    const textAreaRef = React.useRef(null);
    const onChangeHandler = (e) => {
        onChange?.(e);
        resize(e.target);
    };
    const resize = (textArea) => {
        textArea.style.height = 'auto';
        textArea.style.height = `${textArea.scrollHeight}px`;
    };
    React.useLayoutEffect(() => {
        if (textAreaRef.current && autoResize) {
            resize(textAreaRef.current);
        }
    });
    return (jsxRuntime.jsxs("div", { css: [baseStyles$8.textAreaWrapper, className?.textAreaWrapper], children: [labelPos === 'left' || labelPos === 'above' ? (jsxRuntime.jsx(FormInputLabel, { position: labelPos, name: name, label: label, className: {
                    [labelPos]: className?.[labelPos],
                    label: className?.label
                } })) : (''), jsxRuntime.jsx("textarea", { css: [
                    baseStyles$8.textArea,
                    readonly && baseStyles$8.readonly,
                    className && className.textArea
                ], value: value, name: name, id: name, onChange: onChangeHandler, readOnly: readonly, ref: textAreaRef }), labelPos === 'right' || labelPos === 'below' ? (jsxRuntime.jsx(FormInputLabel, { position: labelPos, name: name, label: label, className: {
                    [labelPos]: className?.[labelPos],
                    label: className?.label
                } })) : ('')] }));
};
const baseStyles$8 = {
    textAreaWrapper: {
        marginBottom: '20px'
    },
    textArea: {
        border: `1px solid ${baseColors.tertiary}`,
        padding: '10px',
        borderRadius: '5px',
        width: '100%',
        minHeight: '50px',
        resize: 'none',
        overflow: 'hidden'
    },
    readonly: {
        backgroundColor: 'transparent',
        outline: 'none',
        padding: 0,
        border: 'none'
    }
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

const Modal = ({ isOpen, onClose, children, title, maxWidth = '500px', showCloseButton = true }) => {
    if (!isOpen)
        return null;
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
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);
    return (jsxRuntime.jsx("div", { css: styles.backdrop, onClick: handleBackdropClick, onKeyDown: handleKeyDown, children: jsxRuntime.jsxs("div", { css: [styles.modal, { maxWidth }], role: "dialog", "aria-modal": "true", children: [(title || showCloseButton) && (jsxRuntime.jsxs("div", { css: styles.header, children: [title && jsxRuntime.jsx("h1", { css: styles.title, children: title }), showCloseButton && (jsxRuntime.jsx("button", { css: styles.closeButton, onClick: onClose, "aria-label": "Close modal", children: jsxRuntime.jsx(r, { size: 44 }) }))] })), jsxRuntime.jsx("div", { css: styles.content, children: children })] }) }));
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
    const onSearchHandler = e => {
        onSearch?.(e);
    };
    const setSearchTermHandler = (e) => {
        setSearchTerm(e);
    };
    return (jsxRuntime.jsxs("div", { css: [
            baseStyles.searchWrapper,
            className?.searchWrapper,
            searchWrapperMediaQuery
        ], className: "pa-search-wrapper", children: [jsxRuntime.jsxs("div", { css: baseStyles.results, children: ["Total Results: ", totalResultsCount] }), jsxRuntime.jsxs(Form, { className: formStyles, onSubmit: onSearchHandler, role: "search", children: [jsxRuntime.jsx(FormTextInput, { type: "search", value: searchTerm, name: "searchTerm", labelPos: "above", placeholder: searchLabel || 'Search', className: formTextInputStyles, onChange: setSearchTermHandler, size: inputSize }), useSearchButton && (jsxRuntime.jsx(Button, { size: buttonSize, className: buttonStyles, type: "submit", children: "Search" }))] })] }));
};
const searchWrapperMediaQuery = {
    '@media (max-width: 580px)': {
        flexDirection: 'column'
    }
};
const formTextInputStyles = {
    inputWrapper: {
        margin: 0,
        flex: 1
    }
};
const formStyles = {
    form: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        width: 'inherit',
        border: 'none',
        '@media (max-width: 580px)': {
            width: '100%'
        },
        // Kill Form defaults
        backgroundColor: 'transparent',
        padding: '0'
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

exports.Block = Block;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Form = Form;
exports.FormInputLabel = FormInputLabel;
exports.FormTextArea = FormTextArea;
exports.FormTextInput = FormTextInput;
exports.Header = Header;
exports.Image = Image;
exports.InnerWidth = InnerWidth;
exports.InputField = InputField;
exports.List = List;
exports.ListItem = ListItem;
exports.Main = Main;
exports.Modal = Modal;
exports.PAHooks = index;
exports.Search = Search;
exports.TwoColumn = TwoColumn;
//# sourceMappingURL=index.cjs.js.map
