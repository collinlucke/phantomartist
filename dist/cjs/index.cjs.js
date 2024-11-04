'use strict';

var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var react$1 = require('react');
var iconoirReact = require('iconoir-react');

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

var css_248z = "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul,\nol {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n  margin: 0;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1,\nh2,\nh3,\nh4,\nbutton,\ninput,\nlabel {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1,\nh2,\nh3,\nh4 {\n  text-wrap: balance;\n  margin-top: 0px;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 5em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n";
styleInject(css_248z);

const baseColors = {
    primary: '#02000d',
    secondary: '#07203f',
    tertiary: '#f1d2b6',
    accentLight: '#D9AA90',
    accentDark: '#A65e46'
};
const shadesAndTints = {
    primaryLight: `color-mix(in srgb, ${baseColors.primary}, white)`,
    primaryDark: `color-mix(in srgb, ${baseColors.primary}, color)`,
    secondaryLight: `color-mix(in srgb, ${baseColors.secondary}, white)`,
    secondaryDark: `color-mix(in srgb, ${baseColors.secondary}, black)`,
    tertiaryLight: `color-mix(in srgb, ${baseColors.tertiary}, white)`,
    tertiaryDark: `color-mix(in srgb, ${baseColors.tertiary}, black)`
};
react.keyframes `
  
`;
const baseTheme = {
    button: ({ kind, size, iconOnly }) => {
        return {
            fontWeight: '500',
            borderRadius: '5px',
            cursor: 'pointer',
            padding: !iconOnly
                ? (size === 'large' && kind === 'primary' && '10px 40px') ||
                    (size === 'large' && kind === 'secondary' && '8px 34px') ||
                    (size === 'large' && kind === 'tertiary' && '8px 34px') ||
                    (size === 'medium' && kind === 'primary' && '8px 15px') ||
                    (size === 'small' && kind === 'primary' && '5px 10px') ||
                    undefined
                : (size === 'large' && kind === 'primary' && '5px 5px') ||
                    (size === 'large' && kind === 'ghost' && '0') ||
                    undefined,
            border: (kind === 'primary' && 'none') ||
                // (kind === 'secondary' &&
                //   `3px solid color-mix(in srgb, ${baseColors.primary} 50%, white)`) ||
                (kind === 'secondary' && `2px solid ${shadesAndTints.primaryDark}`) ||
                (kind === 'tertiary' && `3px solid ${shadesAndTints.primaryDark}`) ||
                (kind === 'ghost' && 'none') ||
                // (kind === 'tertiary' && `1px solid ${baseColors.tertiary}`) ||
                undefined,
            color: (kind === 'primary' && 'white') ||
                (kind === 'tertiary' && 'black') ||
                (kind === 'secondary' && baseColors.primary) ||
                'inherit',
            backgroundColor: (kind === 'primary' && baseColors.secondary) ||
                (kind === 'secondary' && baseColors.tertiary) ||
                (kind === 'ghost' && 'transparent') ||
                // (kind === 'secondary' &&
                //   `color-mix(in srgb, ${baseColors.primary} 75%, black)`) ||
                undefined,
            '&:hover': {
                boxShadow: kind === 'ghost' ? '' : `0 0 7px black`
            }
        };
    },
    buttonGroup: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'end',
        marginTop: '20px'
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

const Button = ({ children, className, type, kind = 'primary', size = 'large', icon, iconOnly, onClick }) => {
    const consumerTheme = react.useTheme();
    const onClickHandler = e => {
        onClick?.(e);
    };
    return (jsxRuntime.jsxs("button", { type: type, onClick: onClickHandler, css: [
            baseTheme.button({ kind, size, iconOnly }),
            consumerTheme?.button && consumerTheme.button({ kind, size, iconOnly }),
            className?.button
        ], className: `pa-button ${kind} ${size}`, children: [icon, children] }));
};

const ButtonGroup = ({ children }) => {
    return jsxRuntime.jsx("div", { css: [baseTheme.buttonGroup], children: children });
};

const Form = ({ children, role, className, onSubmit }) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(e);
    };
    return (jsxRuntime.jsx("form", { css: [baseStyles$c.form, className?.form], onSubmit: handleOnSubmit, role: role, children: children }));
};
const baseStyles$c = {
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
                    baseStyles$b.label,
                    baseStyles$b.left,
                    className?.label,
                    className?.left
                ], htmlFor: name, children: label }));
        case 'right':
            return (jsxRuntime.jsx("label", { htmlFor: name, css: [
                    baseStyles$b.label,
                    baseStyles$b.right,
                    className && className.label,
                    className && className.right
                ], children: label }));
        case 'above':
            return (jsxRuntime.jsx("label", { css: [
                    baseStyles$b.label,
                    baseStyles$b.above,
                    className && className.label,
                    className && className.above
                ], htmlFor: name, children: label }));
        case 'below':
            return (jsxRuntime.jsx("label", { htmlFor: name, css: [
                    baseStyles$b.label,
                    baseStyles$b.below,
                    className && className.label,
                    className && className.below
                ], children: label }));
    }
};
const baseStyles$b = {
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

const FormTextInput = ({ label = '', name = '', type = 'text', labelPos = 'left', value = '', placeholder, size = 'large', onChange, className, readonly }) => {
    const onChangeHandler = (e) => {
        onChange?.(e);
    };
    return (jsxRuntime.jsxs("div", { css: [baseStyles$a.inputWrapper(labelPos), className?.inputWrapper], children: [(label && labelPos === 'left') || labelPos === 'above' ? (jsxRuntime.jsx(FormInputLabel, { position: labelPos, name: name, label: label, className: className })) : (''), jsxRuntime.jsx("input", { css: [
                    baseStyles$a.input(size),
                    readonly && baseStyles$a.readonly,
                    className && className.input
                ], value: value || '', type: type, name: name, id: name, onChange: onChangeHandler, readOnly: readonly, placeholder: placeholder }), (label && labelPos === 'right') || labelPos === 'below' ? (jsxRuntime.jsx(FormInputLabel, { position: labelPos, name: name, label: label, className: className })) : ('')] }));
};
const baseStyles$a = {
    inputWrapper: (labelPos) => ({
        marginBottom: '20px',
        display: 'flex',
        flexDirection: labelPos === 'above' || labelPos === 'below'
            ? 'column'
            : 'row'
    }),
    input: (size) => {
        return {
            border: `1px solid ${baseColors.tertiary}`,
            padding: (size === 'large' && '10px') ||
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

const FormTextArea = ({ label = '', name = '', labelPos, value = '', onChange, className, readonly, autoResize }) => {
    const textAreaRef = react$1.useRef(null);
    const onChangeHandler = (e) => {
        onChange?.(e);
        resize(e.target);
    };
    const resize = (textArea) => {
        textArea.style.height = 'auto';
        textArea.style.height = `${textArea.scrollHeight}px`;
    };
    react$1.useLayoutEffect(() => {
        if (textAreaRef.current && autoResize) {
            resize(textAreaRef.current);
        }
    }, [value]);
    return (jsxRuntime.jsxs("div", { css: [baseStyles$9.textAreaWrapper, className?.textAreaWrapper], children: [labelPos === 'left' || labelPos === 'above' ? (jsxRuntime.jsx(FormInputLabel, { position: labelPos, name: name, label: label, className: {
                    [labelPos]: className?.[labelPos],
                    label: className?.label
                } })) : (''), jsxRuntime.jsx("textarea", { css: [
                    baseStyles$9.textArea,
                    readonly && baseStyles$9.readonly,
                    className && className.textArea
                ], value: value, name: name, id: name, onChange: onChangeHandler, readOnly: readonly, ref: textAreaRef }), labelPos === 'right' || labelPos === 'below' ? (jsxRuntime.jsx(FormInputLabel, { position: labelPos, name: name, label: label, className: {
                    [labelPos]: className?.[labelPos],
                    label: className?.label
                } })) : ('')] }));
};
const baseStyles$9 = {
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
    return jsxRuntime.jsx("main", { css: [baseStyles$8.main, className?.main], children: children });
};
const baseStyles$8 = {
    main: {
        display: 'flex',
        justifyContent: 'center'
    }
};

const InnerWidth = ({ children, className }) => {
    return (jsxRuntime.jsx("div", { css: [baseStyles$7.innerWidth, className?.innerWidth], className: "pa-inner-width", children: children }));
};
const baseStyles$7 = {
    innerWidth: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
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
    }
};

const Header = ({ children, className }) => {
    return (jsxRuntime.jsx("header", { css: [baseStyles$6.header, className?.header], className: "pa-header", children: children }));
};
const baseStyles$6 = {
    header: {
        display: 'flex',
        marginBottom: '25px',
        padding: '20px 0',
        color: baseColors.secondary,
        justifyContent: 'center',
        height: '135px',
        borderBottom: `2px solid ${baseColors.primary}`,
        backgroundColor: shadesAndTints.tertiaryLight,
        '@media (max-width: 580px)': {
            height: '75px'
        }
    }
};

const Block = ({ children, className }) => {
    return (jsxRuntime.jsx("div", { css: [baseStyles$5.block, className?.block], className: "pa-block", children: children }));
};
const baseStyles$5 = {
    block: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'end'
    }
};

const TwoColumn = ({ left, right }) => {
    return (jsxRuntime.jsxs("div", { css: [baseStyles$4.columnWrapper], children: [jsxRuntime.jsx("div", { css: [baseStyles$4.column], children: left }), jsxRuntime.jsx("div", { css: [baseStyles$4.column], children: right })] }));
};
const baseStyles$4 = {
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
    return (jsxRuntime.jsx("img", { src: src, css: [baseTheme.img, className?.img], className: "pa-image" }));
};

const List = ({ className, children }) => {
    return (jsxRuntime.jsx("ul", { css: [baseStyles$3.ul, className?.ul], className: "pa-list", children: children }));
};
const baseStyles$3 = {
    ul: {
        borderRadius: '6px',
        backgroundColor: baseColors.tertiaryLight,
        minHeight: '5px',
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
            baseStyles$2.li,
            className && className.li,
            useHover && baseStyles$2.liHover,
            className && useHover && className.liHover
        ], className: "pa-list-item", children: children }));
};
const baseStyles$2 = {
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

const Search = ({ searchTerm, searchLabel, resultsCount, className, buttonSize, inputSize, useSearchButton, onSearch, setSearchTerm }) => {
    const onSearchHandler = e => {
        onSearch?.(e);
    };
    const setSearchTermHandler = (e) => {
        setSearchTerm(e);
    };
    return (jsxRuntime.jsxs("div", { css: [baseStyles$1.searchWrapper, className?.searchWrapper], className: "pa-search-wrapper", children: [jsxRuntime.jsxs("div", { css: baseStyles$1.results, children: ["Results: ", resultsCount] }), jsxRuntime.jsxs(Form, { className: baseStyles$1, onSubmit: onSearchHandler, role: "search", children: [jsxRuntime.jsx(FormTextInput, { type: "search", value: searchTerm, name: "searchTerm", labelPos: "above", placeholder: searchLabel || 'Search', className: baseStyles$1, onChange: setSearchTermHandler, size: inputSize }), useSearchButton && (jsxRuntime.jsx(Button, { size: buttonSize, className: { button: baseStyles$1.button }, type: "submit", children: "Search" }))] })] }));
};
const baseStyles$1 = {
    searchWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        marginBottom: '20px',
        '@media (max-width: 580px)': {
            flexDirection: 'column'
        }
    },
    results: {
        alignSelf: 'end',
        '@media (max-width: 580px)': {
            alignSelf: 'start'
        }
    },
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
    },
    button: {
        marginLeft: '10px'
    },
    inputWrapper: {
        margin: 0,
        flex: 1
    }
};

const Modal = ({ className = {}, children, closeModal }) => {
    const [isVisible, setIsVisible] = react$1.useState(false);
    react$1.useEffect(() => {
        setIsVisible(true);
    }, []);
    const closeModalHandler = () => {
        closeModal?.();
    };
    return (jsxRuntime.jsx("div", { css: [baseTheme.modal, className?.modal], className: "pa-modal", style: isVisible ? baseStyles.visible : baseStyles.hidden, children: jsxRuntime.jsxs("div", { css: baseTheme.modalContentWrapper, children: [jsxRuntime.jsx("div", { css: baseTheme.modalHeading, className: "pa-modal-heading", children: closeModal && (jsxRuntime.jsx(iconoirReact.XmarkCircle, { style: baseTheme.modalCloseButton, onClick: closeModalHandler })) }), jsxRuntime.jsx("div", { css: baseTheme.modalContent, className: "pa-modal-content", children: children })] }) }));
};
const baseStyles = {
    visible: {
        opacity: '1',
        transition: 'opacity .333s'
    },
    hidden: {
        opacity: '0'
    }
};

const useResizedWidth = () => {
    const [windowWidth, setWindowWidth] = react$1.useState(window.innerWidth);
    react$1.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth;
};

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
exports.List = List;
exports.ListItem = ListItem;
exports.Main = Main;
exports.Modal = Modal;
exports.Search = Search;
exports.TwoColumn = TwoColumn;
exports.useResizedWidth = useResizedWidth;
//# sourceMappingURL=index.cjs.js.map
