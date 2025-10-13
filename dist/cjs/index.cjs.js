'use strict';

var jsxRuntime = require('@emotion/react/jsx-runtime');
var React = require('react');
var react = require('@emotion/react');

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

var css_248z = "/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Prevent font size inflation */\r\nhtml {\r\n  -moz-text-size-adjust: none;\r\n  -webkit-text-size-adjust: none;\r\n  text-size-adjust: none;\r\n}\r\n\r\n/* Remove default margin in favour of better control in authored CSS */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin-block-end: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  line-height: 1.5;\r\n  margin: 0;\r\n}\r\n\r\n/* Set shorter line heights on headings and interactive elements */\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nbutton,\r\ninput,\r\nlabel {\r\n  line-height: 1.1;\r\n}\r\n\r\n/* Balance text wrapping on headings */\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  text-wrap: balance;\r\n  margin-top: 0px;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n  color: currentColor;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n}\r\n\r\n/* Make sure textareas without a rows attribute are not tiny */\r\ntextarea:not([rows]) {\r\n  min-height: 5em;\r\n}\r\n\r\n/* Anything that has been anchored to should have extra scroll margin */\r\n:target {\r\n  scroll-margin-block: 5ex;\r\n}\r\n";
styleInject(css_248z);

const hexToRgba = (hex, alpha) => {
    // Ensure the hex is in the correct format
    const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (!hexPattern.test(hex)) {
        throw new Error('Invalid hex color format');
    }
    // Convert shorthand hex to full hex if necessary
    const fullHex = hex.length === 4
        ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
        : hex;
    // Extract RGB components
    const r = parseInt(fullHex.slice(1, 3), 16);
    const g = parseInt(fullHex.slice(3, 5), 16);
    const b = parseInt(fullHex.slice(5, 7), 16);
    // Return the RGBA string
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const screenSizes = {
    xs: 360,
    sm: 480,
    md: 640,
    lg: 768,
    xl: 1024,
    '2xl': 1280,
    '3xl': 1536
};
const mediaQueries = {
    minWidth: {
        xs: `@media (min-width: ${screenSizes.xs}px)`,
        sm: `@media (min-width: ${screenSizes.sm}px)`,
        md: `@media (min-width: ${screenSizes.md}px)`,
        lg: `@media (min-width: ${screenSizes.lg}px)`,
        xl: `@media (min-width: ${screenSizes.xl}px)`,
        '2xl': `@media (min-width: ${screenSizes['2xl']}px)`
    },
    maxWidth: {
        xs: `@media (max-width: ${parseInt(`screenSizes.xs`) - 1}px)`,
        sm: `@media (max-width: ${parseInt(`screenSizes.sm`) - 1}px)`,
        md: `@media (max-width: ${parseInt(`screenSizes.md`) - 1}px)`,
        lg: `@media (max-width: ${parseInt(`screenSizes.lg`) - 1}px)`,
        xl: `@media (max-width: ${parseInt(`screenSizes.xl`) - 1}px)`,
        '2xl': `@media (max-width: ${parseInt(`screenSizes['2xl']`) - 1}px)`
    },
    between: {
        xsToSm: `@media (min-width: ${screenSizes.xs}) and (max-width: ${parseInt(`screenSizes.sm`) - 1}px)`,
        smToMd: `@media (min-width: ${screenSizes.sm}) and (max-width: ${parseInt(`screenSizes.md`) - 1}px)`,
        mdToLg: `@media (min-width: ${screenSizes.md}) and (max-width: ${parseInt(`screenSizes.lg`) - 1}px)`,
        lgToXl: `@media (min-width: ${screenSizes.lg}) and (max-width: ${parseInt(`screenSizes.xl`) - 1}px)`,
        xlTo2xl: `@media (min-width: ${screenSizes.xl}) and (max-width: ${parseInt(`screenSizes['2xl']`) - 1}px)`
    },
    // Common device queries
    mobile: `@media (max-width: ${screenSizes.md - 1}px)`,
    tablet: `@media (min-width: ${screenSizes.md}) and (max-width: ${screenSizes.lg - 1}px)`,
    desktop: `@media (min-width: ${screenSizes.lg})`,
    // Orientation queries
    portrait: '@media (orientation: portrait)',
    landscape: '@media (orientation: landscape)',
    // High DPI queries
    retina: '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
    // Hover capability
    hover: '@media (hover: hover)',
    noHover: '@media (hover: none)'
};
// Helper function for creating responsive styles
const createResponsiveStyle = (styles) => {
    const responsiveStyle = {};
    // Base styles (mobile-first)
    if (styles.base) {
        Object.assign(responsiveStyle, styles.base);
    }
    // Apply breakpoint-specific styles
    if (styles.xs) {
        responsiveStyle[mediaQueries.minWidth.xs] = styles.xs;
    }
    if (styles.sm) {
        responsiveStyle[mediaQueries.minWidth.sm] = styles.sm;
    }
    if (styles.md) {
        responsiveStyle[mediaQueries.minWidth.md] = styles.md;
    }
    if (styles.lg) {
        responsiveStyle[mediaQueries.minWidth.lg] = styles.lg;
    }
    if (styles.xl) {
        responsiveStyle[mediaQueries.minWidth.xl] = styles.xl;
    }
    if (styles['2xl']) {
        responsiveStyle[mediaQueries.minWidth['2xl']] = styles['2xl'];
    }
    return responsiveStyle;
};
const baseColors = {
    primary: {
        50: '#F0F2F5', // Very light blue-gray
        100: '#D9DEE6', // Light blue-gray
        200: '#B8C3D1', // Medium-light blue-gray
        300: '#8A9BAE', // Medium blue-gray
        400: '#4A5F7A', // Dark blue-gray
        500: '#0B1828', // Base primary
        600: '#081320', // Darker primary
        700: '#060E18', // Very dark primary
        800: '#04090F', // Almost black
        900: '#020407' // Nearly black
    },
    secondary: {
        50: '#E6F7F6', // Very light teal
        100: '#B3E8E5', // Light teal
        200: '#80D9D4', // Medium-light teal
        300: '#4DCAC3', // Medium teal
        400: '#2AA39B', // Dark teal
        500: '#146B68', // Base secondary (darker for better contrast)
        600: '#125A57', // Darker secondary
        700: '#0F4A47', // Very dark teal
        800: '#0C3835', // Almost black teal
        900: '#081F1C' // Nearly black teal
    },
    tertiary: {
        50: '#F7F4F0', // Very light beige
        100: '#EEDECC', // Light beige
        200: '#E5C8A8', // Medium-light beige
        300: '#DCB184', // Medium beige
        400: '#D19B60', // Dark beige
        500: '#BFA081', // Base tertiary
        600: '#A68965', // Darker tertiary
        700: '#7D6748', // Very dark beige
        800: '#54442C', // Almost brown
        900: '#2B2216' // Nearly black brown
    },
    accent: {
        50: '#FEE6E6', // Very light red
        100: '#FBB3B3', // Light red
        200: '#F88080', // Medium-light red
        300: '#F54D4D', // Medium red
        400: '#F21A1A', // Bright red
        500: '#9F0001', // Base accent
        600: '#800001', // Darker accent
        700: '#600001', // Very dark red
        800: '#400000', // Almost black red
        900: '#200000' // Nearly black red
    }
};
// Additional bright and vibrant colors
const baseVibrantColors = {
    primary: {
        300: '#8AB6FF', // Light vibrant blue
        500: '#4F86F7', // Base vibrant blue
        700: '#255AFF' // Dark vibrant blue
    },
    secondary: {
        300: '#75DAC7', // Light vibrant teal
        500: '#1ABC9C', // Base vibrant teal
        700: '#138F6E' // Dark vibrant teal
    },
    tertiary: {
        300: '#F7C873', // Light vibrant orange
        500: '#F39C12', // Base vibrant orange
        700: '#C9780E' // Dark vibrant orange
    },
    accent: {
        300: '#F48A6F', // Light vibrant red
        500: '#E74C3C', // Base vibrant red
        700: '#C0392B' // Dark vibrant red
    }
};
const baseTypography = {
    // Predefined text styles
    // Headings
    h1: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '36px',
        fontWeight: 300, // normal
        lineHeight: 1.25,
        letterSpacing: '-0.025em',
        color: baseColors.tertiary[50]
    },
    h2: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '30px',
        fontWeight: 600, // semibold
        lineHeight: 1.25,
        letterSpacing: '-0.025em'
    },
    h3: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '24px',
        fontWeight: 600, // semibold
        lineHeight: 1.25,
        letterSpacing: 'normal'
    },
    h4: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '20px',
        fontWeight: 600, // semibold
        lineHeight: 1.25,
        letterSpacing: 'normal'
    },
    h5: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '18px',
        fontWeight: 600, // semibold
        lineHeight: 1.25,
        letterSpacing: 'normal'
    },
    h6: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '16px',
        fontWeight: 600, // semibold
        lineHeight: 1.25,
        letterSpacing: 'normal'
    },
    a: {
        textDecoration: 'none',
        color: baseColors.primary[500]
    },
    p: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: 'normal',
        [mediaQueries.minWidth.md]: {
            fontSize: '16px'
        }
    }
};
const baseTheme = {
    button: ({ variant, size, iconOnly }) => {
        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: size === 'small' ? 1.1 : 1.2, // Match input field line height for small size
            fontSize: (size === 'small' && '0.875rem') ||
                (variant === 'ghost' || variant === 'ghostOnDark' ? '18px' : '1rem'),
            borderRadius: '5px',
            cursor: 'pointer',
            gap: '10px',
            padding: !iconOnly
                ? (size === 'large' && variant === 'primary' && '10px 40px') ||
                    (size === 'large' && variant === 'secondary' && '8px 34px') ||
                    (size === 'large' && variant === 'tertiary' && '8px 34px') ||
                    (size === 'large' && variant === 'ghost' && '10px 40px') ||
                    (size === 'large' && variant === 'ghostOnDark' && '10px 40px') ||
                    (size === 'large' && variant === 'outline' && '10px 40px') ||
                    (size === 'medium' && variant === 'primary' && '8px 15px') ||
                    (size === 'medium' && variant === 'secondary' && '8px 15px') ||
                    (size === 'medium' && variant === 'ghost' && '8px 15px') ||
                    (size === 'medium' && variant === 'ghostOnDark' && '8px 15px') ||
                    (size === 'medium' && variant === 'outline' && '8px 15px') ||
                    (size === 'small' && variant === 'primary' && '6px 15px') ||
                    (size === 'small' && variant === 'secondary' && '6px 15px') ||
                    (size === 'small' && variant === 'ghost' && '6px 15px') ||
                    (size === 'small' && variant === 'ghostOnDark' && '6px 15px') ||
                    (size === 'small' && variant === 'outline' && '6px 15px') ||
                    undefined
                : (variant === 'primary' && '8px') ||
                    (variant === 'secondary' && '8px') ||
                    (variant === 'ghost' && '8px') ||
                    (variant === 'ghostOnDark' && '8px') ||
                    (variant === 'outline' && '8px') ||
                    undefined,
            border: (variant === 'primary' && 'none') ||
                (variant === 'secondary' && 'none') ||
                (variant === 'tertiary' && `3px solid ${baseColors.primary[600]}`) ||
                (variant === 'ghost' && 'none') ||
                (variant === 'ghostOnDark' && 'none') ||
                (variant === 'outline' && `1px solid ${baseColors.tertiary[500]}`) ||
                undefined,
            color: (variant === 'primary' && 'white') ||
                (variant === 'tertiary' && 'black') ||
                (variant === 'secondary' && baseColors.primary[500]) ||
                (variant === 'ghost' && 'inherit') ||
                (variant === 'ghostOnDark' && baseColors.tertiary[50]) ||
                (variant === 'outline' && baseColors.tertiary[50]) ||
                'inherit',
            backgroundColor: (variant === 'primary' && baseColors.primary[500]) ||
                (variant === 'secondary' && baseColors.tertiary[500]) ||
                (variant === 'ghost' && 'transparent') ||
                (variant === 'ghostOnDark' && 'transparent') ||
                (variant === 'outline' && 'transparent') ||
                (variant === 'secondary' &&
                    `color-mix(in srgb, ${baseColors.primary[500]} 75%, black)`) ||
                undefined,
            '&:hover': {
                ...(iconOnly
                    ? {
                        filter: `drop-shadow(0 0 1px ${baseColors.primary[400]})`
                    }
                    : { boxShadow: `0 0 3px black` }),
                ...(variant === 'outline' && {
                    backgroundColor: hexToRgba(baseColors.tertiary[50], 0.1)
                })
            },
            '&:disabled': {
                opacity: 0.6,
                cursor: 'not-allowed',
                pointerEvents: 'none'
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
        border: `1px solid ${baseColors.primary[500]}`,
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
        backgroundColor: `${baseColors.primary[100]}`,
        flexDirection: 'column'
    },
    modalContentWrapper: {
        backgroundColor: baseColors.tertiary[100],
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

const Button = React.forwardRef(({ children, className, type, variant = 'primary', size = 'large', icon, iconOnly, ariaLabel, ariaDescribedBy, ariaExpanded, ariaHaspopup, ariaPressed, role, disabled = false, autoFocus = false, tabIndex, testId, onClick, onKeyDown, onFocus, onBlur }, ref) => {
    const consumerTheme = react.useTheme();
    const onClickHandler = e => {
        onClick?.(e);
    };
    // Generate aria-label for icon-only buttons if not provided
    const effectiveAriaLabel = ariaLabel || (iconOnly && !children ? `${icon} Button` : undefined);
    return (jsxRuntime.jsx("button", { ref: ref, type: type, onClick: onClickHandler, onKeyDown: onKeyDown, onFocus: onFocus, onBlur: onBlur, disabled: disabled, autoFocus: autoFocus, tabIndex: disabled ? -1 : tabIndex, role: role, "data-testid": testId, css: [
            baseTheme.button({ variant, size, iconOnly }),
            consumerTheme?.button &&
                consumerTheme.button({ variant, size, iconOnly }),
            className?.button
        ], className: `pa-button ${variant} ${size}`, "aria-label": effectiveAriaLabel, "aria-describedby": ariaDescribedBy, "aria-expanded": ariaExpanded, "aria-haspopup": ariaHaspopup, "aria-pressed": ariaPressed, children: icon ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [typeof icon === 'string' ? (jsxRuntime.jsx("span", { "aria-hidden": "true", children: icon })) : (icon), children] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: children })) }));
});
Button.displayName = 'Button';

const ButtonGroup = ({ children, className, direction = 'horizontal', gap = 'medium', dataTestId, ariaLabel, ariaLabelledBy, ariaDescribedBy, role = 'group', onKeyDown }) => {
    const consumerTheme = react.useTheme();
    // Handle keyboard navigation for button groups
    const handleKeyDown = e => {
        if (role === 'toolbar' || role === 'radiogroup') {
            const buttons = e.currentTarget.querySelectorAll('button:not([disabled])');
            const currentIndex = Array.from(buttons).findIndex(button => button === document.activeElement);
            let nextIndex = currentIndex;
            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    nextIndex =
                        direction === 'horizontal'
                            ? e.key === 'ArrowRight'
                                ? currentIndex + 1
                                : currentIndex
                            : e.key === 'ArrowDown'
                                ? currentIndex + 1
                                : currentIndex;
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    nextIndex =
                        direction === 'horizontal'
                            ? e.key === 'ArrowLeft'
                                ? currentIndex - 1
                                : currentIndex
                            : e.key === 'ArrowUp'
                                ? currentIndex - 1
                                : currentIndex;
                    break;
                case 'Home':
                    e.preventDefault();
                    nextIndex = 0;
                    break;
                case 'End':
                    e.preventDefault();
                    nextIndex = buttons.length - 1;
                    break;
            }
            // Wrap around navigation
            if (nextIndex < 0)
                nextIndex = buttons.length - 1;
            if (nextIndex >= buttons.length)
                nextIndex = 0;
            if (nextIndex !== currentIndex && buttons[nextIndex]) {
                buttons[nextIndex].focus();
            }
        }
        onKeyDown?.(e);
    };
    return (jsxRuntime.jsx("div", { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, role: role, onKeyDown: handleKeyDown, css: [
            baseTheme.buttonGroup({ direction, gap }),
            consumerTheme?.buttonGroup &&
                consumerTheme.buttonGroup({ direction, gap }),
            className?.buttonGroup
        ], className: `pa-button-group ${direction} ${gap}`, "data-testid": dataTestId, children: children }));
};

const Label = ({ label, required, htmlFor, className, labelPosition = 'above', onDark }) => {
    return (jsxRuntime.jsxs("label", { css: [localStyles$d({ labelPosition, onDark }).label, className], htmlFor: htmlFor, children: [label, required && (jsxRuntime.jsx("span", { css: localStyles$d({ labelPosition, onDark }).required, "aria-label": "required", children: "*" }))] }));
};
const localStyles$d = ({ labelPosition, onDark }) => ({
    label: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: onDark ? baseColors.tertiary[50] : baseColors.primary[900],
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
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
    }
});

const InputField = ({ label, name, type = 'text', value, onChange, placeholder, required = false, error, disabled = false, readonly = false, id, labelPosition = 'above', size = 'medium', autoResize = false, className, onKeyDown, onDark = false, testId, helperText, autoFocus = false, autoComplete, ariaLabel, ariaDescribedBy, ariaInvalid, ariaRequired, role, tabIndex, maxLength, minLength, pattern, min, max, step }) => {
    const textAreaRef = React.useRef(null);
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
                resizeTextArea(textAreaRef.current);
            }
            else {
                textAreaRef.current.style.height = '';
            }
        }
    }, [value, autoResize, type]);
    const generateAriaDescribedBy = () => {
        const descriptions = [];
        if (error)
            descriptions.push(`${inputId}-error`);
        if (helperText)
            descriptions.push(`${inputId}-helper`);
        if (ariaDescribedBy)
            descriptions.push(ariaDescribedBy);
        return descriptions.length > 0 ? descriptions.join(' ') : undefined;
    };
    const effectiveAriaDescribedBy = generateAriaDescribedBy();
    const effectiveAriaInvalid = ariaInvalid !== undefined ? ariaInvalid : !!error;
    const effectiveAriaRequired = ariaRequired !== undefined ? ariaRequired : required;
    const labelElement = label ? (jsxRuntime.jsx(Label, { label: label, required: required, htmlFor: inputId, className: className?.label, labelPosition: labelPosition, onDark: onDark })) : null;
    const inputElement = type === 'textarea' ? (jsxRuntime.jsx("textarea", { "data-testid": testId, ref: textAreaRef, id: inputId, name: name, value: value, onChange: handleTextAreaChange, placeholder: placeholder, required: effectiveAriaRequired, disabled: disabled, readOnly: readonly, onKeyDown: onKeyDown, autoFocus: autoFocus, tabIndex: disabled ? -1 : tabIndex, role: role, maxLength: maxLength, minLength: minLength, autoComplete: autoComplete, css: [
            localStyles$c({ labelPosition, size, autoResize }).textarea,
            error && localStyles$c({ labelPosition, size, autoResize }).inputError,
            disabled &&
                localStyles$c({ labelPosition, size, autoResize }).inputDisabled,
            readonly &&
                localStyles$c({ labelPosition, size, autoResize }).inputReadonly,
            className?.input
        ], "aria-label": ariaLabel, "aria-describedby": effectiveAriaDescribedBy, "aria-invalid": effectiveAriaInvalid, "aria-required": effectiveAriaRequired })) : (jsxRuntime.jsx("input", { id: inputId, name: name, type: type, value: value, onChange: handleInputChange, placeholder: placeholder, required: effectiveAriaRequired, disabled: disabled, readOnly: readonly, "data-testid": testId, onKeyDown: onKeyDown, autoFocus: autoFocus, tabIndex: disabled ? -1 : tabIndex, role: role, maxLength: maxLength, minLength: minLength, pattern: pattern, min: min, max: max, step: step, css: [
            localStyles$c({ labelPosition, size, autoResize }).input,
            error && localStyles$c({ labelPosition, size, autoResize }).inputError,
            disabled &&
                localStyles$c({ labelPosition, size, autoResize }).inputDisabled,
            readonly &&
                localStyles$c({ labelPosition, size, autoResize }).inputReadonly,
            className?.input
        ], "aria-label": ariaLabel, "aria-describedby": effectiveAriaDescribedBy, "aria-invalid": effectiveAriaInvalid, "aria-required": effectiveAriaRequired }));
    const errorElement = error ? (jsxRuntime.jsx("div", { css: [
            localStyles$c({ labelPosition, size, autoResize }).error,
            className?.error
        ], id: `${inputId}-error`, role: "alert", "aria-live": "polite", children: error })) : null;
    const helperTextElement = helperText ? (jsxRuntime.jsx("div", { css: localStyles$c({ labelPosition, size, autoResize }).helperText, id: `${inputId}-helper`, children: helperText })) : null;
    // Layout based on label position
    return (jsxRuntime.jsxs("div", { css: [
            // getStyles(labelPosition, size, autoResize).container,
            localStyles$c({ labelPosition, size, autoResize }).container,
            className?.container
        ], children: [(labelPosition === 'above' || labelPosition === 'left') && labelElement, inputElement, (labelPosition === 'below' || labelPosition === 'right') && labelElement, errorElement, helperTextElement] }));
};
const getSizeStyles = (size) => {
    switch (size) {
        case 'large':
            return {
                padding: '0.75rem',
                fontSize: '1rem'
            };
        case 'small':
            return {
                padding: '0.3rem',
                fontSize: '0.625rem'
            };
        default: // medium
            return {
                padding: '0.5rem',
                fontSize: '0.875rem'
            };
    }
};
const localStyles$c = ({ labelPosition, size, autoResize, onDark }) => ({
    container: {
        display: 'flex',
        flexDirection: labelPosition === 'above' || labelPosition === 'below'
            ? 'column'
            : 'row',
        gap: labelPosition === 'left' || labelPosition === 'right' ? '0.75rem' : '',
        flex: '1 1 0%', // Allow flex grow/shrink for side-by-side layouts
        width: '-webkit-fill-available', // Use available width in flex containers
        minWidth: 0, // Prevent flex items from overflowing
        alignItems: labelPosition === 'left' || labelPosition === 'right'
            ? 'center'
            : 'stretch' // marginBottom: '1.25rem'
    },
    label: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: onDark ? baseColors.tertiary[50] : baseColors.primary[900],
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
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
        ...getSizeStyles(size),
        marginTop: '3px',
        border: `1px solid ${baseColors?.tertiary[500] || '#d1d5db'}`,
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
        ...getSizeStyles(size),
        border: `1px solid ${baseColors?.tertiary[500] || '#d1d5db'}`,
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
        fontSize: '0.75rem',
        color: baseVibrantColors.accent[500]
    },
    helperText: {
        fontSize: '0.75rem',
        color: '#6b7280'
    }
});

const Main = ({ children, className, isDark = false }) => {
    return (jsxRuntime.jsx("main", { className: "pa-main", css: [localStyles$b(isDark).main, className?.main], children: children }));
};
const localStyles$b = (isDark) => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: isDark ? baseColors.primary[500] : baseColors.tertiary[50],
        color: isDark ? baseColors.tertiary[50] : baseColors.primary[500]
    }
});

const InnerWidth = ({ children, 
// size = 'medium',
className, dataTestid = 'inner-width' }) => {
    return (jsxRuntime.jsx("div", { css: [
            localStyles$a.innerWidth,
            // sizeStyles,
            className?.innerWidth
        ], className: "pa-inner-width", "data-testid": dataTestid, children: children }));
};
// const getSizeStyles = (size: InnerWidthSize): CSSObject => {
// switch (size) {
//   case 'small':
//     return {
//       width: 'calc(100% - 2 * 20px)',
//       '@media (min-width: 634px)': {
//         width: '594px'
//       },
//       '@media (min-width: 720px)': {
//         width: 'calc(100% - 160px)'
//       },
//       '@media (min-width: 1000px)': {
//         width: '640px'
//       },
//       '@media (min-width: 1100px)': {
//         width: 'calc(100% - 360px)'
//       },
//       '@media (min-width: 1250px)': {
//         width: '720px'
//       }
//     };
//   case 'medium':
//     return {
//       width: 'calc(100% - 2 * 20px)',
//       '@media (min-width: 634px)': {
//         width: '594px'
//       },
//       '@media (min-width: 720px)': {
//         width: 'calc(100% - 126px)'
//       },
//       '@media (min-width: 1000px)': {
//         width: '874px'
//       },
//       '@media (min-width: 1100px)': {
//         width: 'calc(100% - 226px)'
//       },
//       '@media (min-width: 1250px)': {
//         width: '1024px'
//       }
//     };
//   case 'large':
//     return {
//       width: 'calc(100% - 2 * 40px)',
//       '@media (min-width: 634px)': {
//         width: 'calc(100% - 2 * 40px)'
//       },
//       '@media (min-width: 720px)': {
//         width: 'calc(100% - 2 * 50px)'
//       },
//       '@media (min-width: 1000px)': {
//         width: 'calc(100% - 2 * 50px)'
//       },
//       '@media (min-width: 1100px)': {
//         width: 'calc(100% - 2 * 55px)'
//       },
//       '@media (min-width: 1250px)': {
//         width: 'calc(100% - 2 * 60px)'
//       }
//     };
//   case 'full':
//     return {
//       width: 'calc(100% - 2 * 60px)',
//       padding: '0 60px',
//       boxSizing: 'border-box'
//     };
//   default:
//     return {};
// }
// };
const localStyles$a = {
    innerWidth: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignSelf: 'center'
    }
};

const Header = React.forwardRef(({ children, className, dataTestId, ariaLabel = 'Site header', ariaLabelledBy, role = 'banner' }, ref) => {
    return (jsxRuntime.jsx("header", { css: [localStyles$9.header, className?.header], ref: ref, className: "pa-header", "data-testid": dataTestId, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, children: jsxRuntime.jsx(jsxRuntime.Fragment, { children: children }) }));
});
Header.displayName = 'Header';
const localStyles$9 = {
    header: {
        display: 'flex',
        padding: '5px 0',
        justifyContent: 'center',
        maxHeight: '75px',
        backgroundColor: baseColors.secondary[600]
    }};

const Block = ({ children, className, dataTestId }) => {
    return (jsxRuntime.jsx("div", { css: [localStyles$8.block, className?.block], className: "pa-block", "data-testid": dataTestId, children: children }));
};
const localStyles$8 = {
    block: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
};

const Image = ({ src, className }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const handleImageLoad = () => {
        setIsLoaded(true);
    };
    return (jsxRuntime.jsx("img", { src: src, css: [baseTheme.img, className?.img], className: "pa-image", onLoad: handleImageLoad, style: { display: isLoaded ? 'block' : 'none' } }));
};

const List = ({ className, children, ariaLabel, ariaLabelledBy, ariaDescribedBy, role = 'list', dataTestId, ordered = false }) => {
    const ListElement = ordered ? 'ol' : 'ul';
    return (jsxRuntime.jsx(ListElement, { css: [localStyles$7.list, className], className: "pa-list", role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "data-testid": dataTestId, children: children }));
};
const localStyles$7 = {
    list: {
        fontWeight: '500',
        margin: 0,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        listStyleType: 'none',
        paddingInlineStart: '0' // Remove default padding
    }
};

const ListItem = ({ children, className, useHover, role = 'listitem', ariaLabel, ariaDescribedBy, ariaSelected, ariaExpanded, ariaLevel, tabIndex, dataTestId, onClick, onKeyDown }) => {
    return (jsxRuntime.jsx("li", { css: [
            localStyles$6.li,
            className && className.li,
            useHover && localStyles$6.liHover,
            className && useHover && className.liHover
        ], className: "pa-list-item", role: role, "aria-label": ariaLabel, "aria-describedby": ariaDescribedBy, "aria-selected": ariaSelected, "aria-expanded": ariaExpanded, "aria-level": ariaLevel, tabIndex: tabIndex, "data-testid": dataTestId, onClick: onClick, onKeyDown: onKeyDown, children: children }));
};
const localStyles$6 = {
    li: {
        borderRadius: '6px',
        border: `1px solid ${baseColors.secondary[500]}`,
        marginBottom: '10px',
        padding: '10px',
        color: baseColors.secondary[500],
        display: 'flex'
    },
    liHover: {
        ':hover': {
            backgroundColor: baseColors.secondary[50]
        }
    }
};

const AccordionListItem = ({ title, children, isOpen = false, onToggle, disabled = false, className, ariaLabel, dataTestId, useAnimation = true }) => {
    const [internalOpen, setInternalOpen] = React.useState(isOpen);
    const [contentHeight, setContentHeight] = React.useState(0);
    const contentRef = React.useRef(null);
    const isControlled = onToggle !== undefined;
    const isExpanded = isControlled ? isOpen : internalOpen;
    React.useEffect(() => {
        if (useAnimation && contentRef.current) {
            setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
        }
    }, [isExpanded, useAnimation, children]);
    React.useEffect(() => {
        if (!useAnimation || !isExpanded)
            return;
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [useAnimation, isExpanded]);
    const handleToggle = () => {
        if (disabled)
            return;
        if (isControlled) {
            onToggle?.(isOpen);
        }
        else {
            setInternalOpen(!internalOpen);
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleToggle();
        }
    };
    return (jsxRuntime.jsxs("li", { css: [localStyles$5.accordionItem, className?.item], className: "pa-accordion-item", "data-testid": dataTestId, children: [jsxRuntime.jsx(Button, { className: {
                    button: {
                        ...localStyles$5.accordionHeader,
                        ...(disabled && localStyles$5.disabled),
                        ...className?.header
                    }
                }, onClick: handleToggle, onKeyDown: handleKeyDown, "aria-expanded": isExpanded, "aria-controls": `accordion-content-${dataTestId || 'default'}`, "aria-label": ariaLabel || `Toggle ${title}`, disabled: disabled, type: "button", testId: `pa-accordion-header-${dataTestId || 'default'}`, children: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { css: localStyles$5.title, children: title }), jsxRuntime.jsx("span", { css: [
                                localStyles$5.icon,
                                isExpanded && localStyles$5.iconExpanded,
                                className?.icon
                            ], className: "pa-accordion-icon", "aria-hidden": "true", children: "\u25BC" })] }) }), jsxRuntime.jsx("div", { css: [
                    localStyles$5.contentWrapper,
                    useAnimation && {
                        height: contentHeight,
                        overflow: 'hidden',
                        transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    },
                    !useAnimation && !isExpanded && { display: 'none' }
                ], className: "pa-accordion-content-wrapper", children: jsxRuntime.jsx("div", { ref: contentRef, css: [localStyles$5.content, className?.content], className: "pa-accordion-content", id: `accordion-content-${dataTestId || 'default'}`, role: "region", "aria-labelledby": `accordion-header-${dataTestId || 'default'}`, children: children }) })] }));
};
const localStyles$5 = {
    accordionItem: {
        width: '100%',
        borderBottom: `1px solid ${baseColors.primary[200]}`,
        listStyleType: 'none'
    },
    accordionHeader: {
        width: '100%',
        padding: '12px 20px',
        backgroundColor: 'transparent',
        border: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 600,
        color: baseColors.tertiary[50],
        textAlign: 'left',
        transition: 'background-color 0.2s ease, color 0.2s ease',
        '&:hover': {
            backgroundColor: baseColors.primary[50],
            color: baseColors.primary[600]
        },
        '&:focus': {
            color: baseColors.primary[600],
            outline: `2px solid ${baseColors.primary[400]}`,
            outlineOffset: '-2px',
            backgroundColor: baseColors.primary[50]
        }
    },
    disabled: {
        opacity: 0.6,
        cursor: 'not-allowed',
        '&:hover': {
            backgroundColor: 'transparent',
            color: baseColors.primary[500]
        }
    },
    title: {
        flex: 1,
        marginRight: '12px'
    },
    icon: {
        fontSize: '12px',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        color: baseColors.primary[300],
        userSelect: 'none',
        lineHeight: 1
    },
    iconExpanded: {
        transform: 'rotate(180deg)'
    },
    contentWrapper: {
        overflow: 'hidden'
    },
    content: {
        padding: '14px 20px 14px 40px',
        backgroundColor: hexToRgba(baseColors.primary[50], 0.2)
    }
};

/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */

var e$1 = {
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
    size: e = 24,
    strokeWidth: l = 1.5,
    className: m = "",
    children: r,
    ...n
  }, d) => {
    const f = {
      ref: d,
      ...e$1,
      width: e,
      height: e,
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

const e = y("Cancel01Icon", [["path", {
  d: "M19 5L5 19M5 5L19 19",
  stroke: "currentColor",
  key: "k0"
}]]);

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

const Modal = ({ isOpen, onClose, children, title, maxWidth = '400px', showCloseButton = true, dataTestId, className, closeOnBackdropClick = true, closeOnEscape = true, trapFocus = true, initialFocusRef, finalFocusRef, ariaLabel, ariaLabelledBy, ariaDescribedBy }) => {
    const [previouslyFocusedElement, setPreviouslyFocusedElement] = React.useState(null);
    const modalRef = React.useRef(null);
    const handleBackdropClick = (e) => {
        if (closeOnBackdropClick && e.target === e.currentTarget) {
            onClose();
        }
    };
    // Focus trap implementation
    const handleKeyDown = (e) => {
        if (!trapFocus || e.key !== 'Tab')
            return;
        const modalElement = modalRef.current;
        if (!modalElement)
            return;
        const focusableElements = modalElement.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
            }
        }
        else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
            }
        }
    };
    React.useEffect(() => {
        if (isOpen) {
            setPreviouslyFocusedElement(document.activeElement);
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                if (initialFocusRef?.current) {
                    initialFocusRef.current.focus();
                }
                else {
                    const modalElement = modalRef.current;
                    if (modalElement) {
                        const firstFocusable = modalElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                        if (firstFocusable) {
                            firstFocusable.focus();
                        }
                    }
                }
            }, 0);
        }
        else {
            document.body.style.overflow = '';
            if (finalFocusRef?.current) {
                finalFocusRef.current.focus();
            }
            else if (previouslyFocusedElement) {
                previouslyFocusedElement.focus();
            }
        }
        const handleEscape = (e) => {
            if (closeOnEscape && e.key === 'Escape') {
                e.preventDefault();
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [
        isOpen,
        onClose,
        closeOnEscape,
        initialFocusRef,
        finalFocusRef,
        previouslyFocusedElement
    ]);
    if (!isOpen)
        return null;
    const titleId = title ? `${dataTestId || 'modal'}-title` : undefined;
    const effectiveAriaLabelledBy = ariaLabelledBy || titleId;
    return (jsxRuntime.jsx("div", { css: [localStyles$4.backdrop, className?.backdrop], onClick: handleBackdropClick, onKeyDown: handleKeyDown, children: jsxRuntime.jsxs("div", { ref: modalRef, css: [localStyles$4.modal, { maxWidth }, className?.modal], role: "dialog", "aria-modal": "true", "aria-label": ariaLabel, "aria-labelledby": effectiveAriaLabelledBy, "aria-describedby": ariaDescribedBy, "data-testid": dataTestId, children: [(title || showCloseButton) && (jsxRuntime.jsxs("div", { css: [localStyles$4.header, className?.header], children: [title && (jsxRuntime.jsx("h1", { css: [localStyles$4.title, className?.title], id: titleId, children: title })), showCloseButton && (jsxRuntime.jsx(Button, { className: { button: localStyles$4.closeButton }, onClick: onClose, ariaLabel: "Close modal", variant: "ghost", size: "medium", iconOnly: true, icon: jsxRuntime.jsx(r, { size: 24 }) }))] })), jsxRuntime.jsx("div", { css: [localStyles$4.content, className?.content], children: children })] }) }));
};
const localStyles$4 = {
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
        position: 'relative',
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
        justifyContent: 'space-between',
        padding: '0.75rem 1.5rem 0 1.5rem'
    },
    title: {
        color: baseColors.primary[500],
        marginTop: '5px',
        fontSize: '33px'
    },
    closeButton: {
        color: baseColors.primary[500],
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '12px'
    },
    content: {
        padding: '1.5rem',
        overflow: 'auto',
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    }
};

const Search = ({ searchTerm, searchLabel, totalResultsCount = '0', resultsLabel, className, buttonSize, inputSize, buttonVariant = 'primary', showResultsCount = true, labelPosition = 'above', label, buttonText, onDark = false, showSearchButton = true, ariaLabel, ariaLabelledBy, ariaDescribedBy, resultsAriaLive = 'polite', searchRole, testId, autoFocus = false, onSearch, setSearchTerm }) => {
    const setSearchTermHandler = (e) => {
        if (e.target instanceof HTMLInputElement) {
            setSearchTerm(e);
        }
    };
    const handleOnSearch = () => {
        onSearch?.(searchTerm || '');
    };
    const hitEnter = (e) => {
        if (e.key === 'Enter') {
            handleOnSearch();
        }
    };
    return (jsxRuntime.jsx("div", { css: [localStyles$3.searchForm, className?.searchForm], className: "pa-search-form", role: searchRole || 'search', "aria-label": ariaLabel || 'Search', "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "data-testid": testId, children: jsxRuntime.jsxs("div", { css: [localStyles$3.searchWrapper, className?.searchWrapper], className: "pa-search-wrapper", children: [showResultsCount && (jsxRuntime.jsxs("div", { css: [localStyles$3.results, className?.resultsText], "data-testid": "total-results", "aria-live": resultsAriaLive, "aria-atomic": "true", role: "status", children: [resultsLabel ?? 'Total Results:', " ", totalResultsCount] })), jsxRuntime.jsx("div", { css: localStyles$3.inputWrapper, children: jsxRuntime.jsx(InputField, { type: "search", value: searchTerm || '', name: "searchTerm", labelPosition: labelPosition, label: label, placeholder: searchLabel || 'Search', autoFocus: autoFocus, className: { container: { ...localStyles$3.searchFieldContainer } }, onChange: setSearchTermHandler, size: inputSize, onKeyDown: hitEnter, onDark: onDark, testId: "search-input", ariaLabel: !label ? searchLabel || 'Search' : undefined, ariaDescribedBy: showResultsCount ? 'search-results-count' : undefined }) }), showSearchButton && (jsxRuntime.jsx(Button, { testId: "search-submit-button", size: buttonSize, type: "button", onClick: handleOnSearch, variant: buttonVariant, ariaLabel: `${buttonText || 'Search'} - ${totalResultsCount} results available`, className: {
                        button: {
                            ...localStyles$3.searchButton,
                            ...className?.searchButton
                        }
                    }, children: buttonText || 'Search' }))] }) }));
};
const localStyles$3 = {
    searchForm: {
        display: 'flex',
        width: '100%'
    },
    searchWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '15px',
        width: '100%',
        flexDirection: 'column',
        [mediaQueries.minWidth.md]: {
            alignItems: 'end',
            flexDirection: 'row'
        }
    },
    results: {
        alignSelf: 'end'
    },
    inputWrapper: {
        position: 'relative',
        flex: 1
    },
    searchFieldContainer: {
        margin: 0,
        flex: 'initial',
        justifyContent: 'end'
    },
    searchButton: {
        whiteSpace: 'nowrap'
    }
};

// TODO: Add images later
const Avatar = ({ displayName = 'Display Name', className, size = 40 }) => {
    const initials = displayName.split(' ').map(n => n[0].toUpperCase());
    return (jsxRuntime.jsx("div", { css: [getAvatarStyles(size), className?.avatar], children: jsxRuntime.jsxs("div", { css: [getInitialsStyles(size), className?.initials], children: [initials[0], initials[1]] }) }));
};
const getAvatarStyles = (size) => ({
    ...localStyles$2.avatar,
    width: `${size}px`,
    height: `${size}px`,
    lineHeight: `${size}px`
});
const getInitialsStyles = (size) => ({
    ...localStyles$2.initials,
    fontSize: `${size / 2}px`
});
const localStyles$2 = {
    avatar: {
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: baseColors.secondary[700]
    },
    initials: {
        color: baseColors.tertiary[100],
        fontWeight: '500'
    }};

const SlideOutMenu = ({ children, from = 'right', showSlideOut = false, setShowSlideOut }) => {
    const onCloseHandler = () => {
        setShowSlideOut(false);
    };
    return (jsxRuntime.jsxs("div", { css: localStyles$1.slideOutMenu, children: [jsxRuntime.jsx("div", { css: getOverlayStyles(showSlideOut), onClick: onCloseHandler }), jsxRuntime.jsxs("div", { css: getMenuStyles(from, showSlideOut), children: [jsxRuntime.jsx(Button, { variant: "ghostOnDark", className: { button: localStyles$1.closeButton }, icon: jsxRuntime.jsx(e, { size: 24 }), onClick: onCloseHandler }), children] })] }));
};
const getOverlayStyles = (showSlideOut) => {
    return {
        ...localStyles$1.slideOutOverlay,
        opacity: showSlideOut ? 1 : 0,
        visibility: showSlideOut ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease'
    };
};
const getMenuStyles = (from, showSlideOut) => {
    return {
        ...localStyles$1.menuContainer,
        ...(from === 'left' ? { left: 0 } : { right: 0 }),
        transform: showSlideOut
            ? 'translateX(0)'
            : `translateX(${from === 'left' ? '-100%' : '100%'})`,
        transition: 'transform 0.1s ease-in-out',
        boxShadow: showSlideOut ? '-2px 0 8px rgba(0, 0, 0, 0.3)' : 'none'
    };
};
const localStyles$1 = {
    slideOutMenu: {
        display: 'flex',
        overflow: 'hidden'
    },
    slideOutOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'flex-end',
        pointerEvents: 'auto'
    },
    menuContainer: {
        position: 'fixed',
        top: 0,
        zIndex: 100,
        backgroundColor: baseColors.primary[500],
        width: '280px',
        height: '100%',
        padding: '20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    closeButton: {
        padding: 0,
        alignSelf: 'flex-end',
        marginBottom: '10px',
        '&:hover': { boxShadow: 'none' }
    }
};

const Dropdown = ({ children, showDropdown, closeDropdown, className, dropdownRef }) => {
    const hideDropdown = () => {
        closeDropdown(false);
    };
    React.useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                hideDropdown();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    });
    return (jsxRuntime.jsx("div", { css: { ...getDropdownStyles(showDropdown, className) }, ref: dropdownRef, "data-testid": "dropdown-wrapper", children: children }));
};
const getDropdownStyles = (showDropdown, className) => ({
    ...localStyles.dropdownWrapper,
    ...className?.dropdownWrapper,
    display: showDropdown ? 'block' : 'none'
});
const localStyles = {
    dropdownWrapper: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: baseColors.tertiary[100],
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        padding: '8px',
        minWidth: '160px'
    }
};

function useDebounce(func, wait) {
    const timeoutRef = React.useRef(null);
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

const Globals = () => (jsxRuntime.jsx(react.Global, { styles: react.css `
      @import url('./styling/normalizer.css');
      h1 {
        ${react.css(baseTypography.h1)}
      }
      h2 {
        ${react.css(baseTypography.h2)}
      }
      h3 {
        ${react.css(baseTypography.h3)}
      }
      h4 {
        ${react.css(baseTypography.h4)}
      }
      h5 {
        ${react.css(baseTypography.h5)}
      }
      h6 {
        ${react.css(baseTypography.h6)}
      }
      a {
        ${react.css(baseTypography.a)}
      }
      p {
        ${react.css(baseTypography.p)}
      }
    ` }));

exports.AccordionListItem = AccordionListItem;
exports.Avatar = Avatar;
exports.Block = Block;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Dropdown = Dropdown;
exports.Globals = Globals;
exports.Header = Header;
exports.Image = Image;
exports.InnerWidth = InnerWidth;
exports.InputField = InputField;
exports.Label = Label;
exports.List = List;
exports.ListItem = ListItem;
exports.Main = Main;
exports.Modal = Modal;
exports.PAHooks = index;
exports.Search = Search;
exports.SlideOutMenu = SlideOutMenu;
exports.baseColors = baseColors;
exports.baseTheme = baseTheme;
exports.baseTypography = baseTypography;
exports.baseVibrantColors = baseVibrantColors;
exports.createResponsiveStyle = createResponsiveStyle;
exports.hexToRgba = hexToRgba;
exports.mediaQueries = mediaQueries;
exports.screenSizes = screenSizes;
//# sourceMappingURL=index.cjs.js.map
