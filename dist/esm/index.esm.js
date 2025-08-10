import { jsx, jsxs, Fragment } from '@emotion/react/jsx-runtime';
import { useTheme, Global, css } from '@emotion/react';
import React, { useRef, useLayoutEffect, useState, forwardRef, createElement, useCallback, useEffect } from 'react';

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
    xs: '360px', // Adjusted for a more common mobile breakpoint
    sm: '480px',
    md: '640px',
    lg: '768px',
    xl: '1024px',
    '2xl': '1280px',
    '3xl': '1536px'
};
// Media query utilities
const mediaQueries = {
    // Min-width media queries (mobile-first approach)
    minWidth: {
        xs: `@media (min-width: ${screenSizes.xs})`,
        sm: `@media (min-width: ${screenSizes.sm})`,
        md: `@media (min-width: ${screenSizes.md})`,
        lg: `@media (min-width: ${screenSizes.lg})`,
        xl: `@media (min-width: ${screenSizes.xl})`,
        '2xl': `@media (min-width: ${screenSizes['2xl']})`
    },
    // Max-width media queries (desktop-first approach)
    maxWidth: {
        xs: `@media (max-width: ${parseInt(screenSizes.xs) - 1}px)`,
        sm: `@media (max-width: ${parseInt(screenSizes.sm) - 1}px)`,
        md: `@media (max-width: ${parseInt(screenSizes.md) - 1}px)`,
        lg: `@media (max-width: ${parseInt(screenSizes.lg) - 1}px)`,
        xl: `@media (max-width: ${parseInt(screenSizes.xl) - 1}px)`,
        '2xl': `@media (max-width: ${parseInt(screenSizes['2xl']) - 1}px)`
    },
    // Range media queries (between two breakpoints)
    between: {
        xsToSm: `@media (min-width: ${screenSizes.xs}) and (max-width: ${parseInt(screenSizes.sm) - 1}px)`,
        smToMd: `@media (min-width: ${screenSizes.sm}) and (max-width: ${parseInt(screenSizes.md) - 1}px)`,
        mdToLg: `@media (min-width: ${screenSizes.md}) and (max-width: ${parseInt(screenSizes.lg) - 1}px)`,
        lgToXl: `@media (min-width: ${screenSizes.lg}) and (max-width: ${parseInt(screenSizes.xl) - 1}px)`,
        xlTo2xl: `@media (min-width: ${screenSizes.xl}) and (max-width: ${parseInt(screenSizes['2xl']) - 1}px)`
    },
    // Common device queries
    mobile: `@media (max-width: ${parseInt(screenSizes.md) - 1}px)`,
    tablet: `@media (min-width: ${screenSizes.md}) and (max-width: ${parseInt(screenSizes.lg) - 1}px)`,
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
        color: baseColors.primary
    },
    // Body text
    bodyLarge: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 1.625,
        letterSpacing: 'normal'
    },
    body: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: 'normal'
    },
    bodySmall: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: 'normal'
    }
};
const baseTheme = {
    button: ({ kind, size, iconOnly }) => {
        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: size === 'small' ? 1.1 : 1.2, // Match input field line height for small size
            fontSize: (size === 'small' && '0.875rem') ||
                (kind === 'ghost' || kind === 'ghostOnDark' ? '18px' : '1rem'),
            borderRadius: '5px',
            cursor: 'pointer',
            gap: '10px',
            padding: !iconOnly
                ? (size === 'large' && kind === 'primary' && '10px 40px') ||
                    (size === 'large' && kind === 'secondary' && '8px 34px') ||
                    (size === 'large' && kind === 'tertiary' && '8px 34px') ||
                    (size === 'large' && kind === 'ghost' && '10px 40px') ||
                    (size === 'large' && kind === 'ghostOnDark' && '10px 40px') ||
                    (size === 'large' && kind === 'outline' && '10px 40px') ||
                    (size === 'medium' && kind === 'primary' && '8px 15px') ||
                    (size === 'medium' && kind === 'secondary' && '8px 15px') ||
                    (size === 'medium' && kind === 'ghost' && '8px 15px') ||
                    (size === 'medium' && kind === 'ghostOnDark' && '8px 15px') ||
                    (size === 'medium' && kind === 'outline' && '8px 15px') ||
                    (size === 'small' && kind === 'primary' && '6px 15px') ||
                    (size === 'small' && kind === 'secondary' && '6px 15px') ||
                    (size === 'small' && kind === 'ghost' && '6px 15px') ||
                    (size === 'small' && kind === 'ghostOnDark' && '6px 15px') ||
                    (size === 'small' && kind === 'outline' && '6px 15px') ||
                    undefined
                : (kind === 'primary' && '8px') ||
                    (kind === 'secondary' && '8px') ||
                    (kind === 'ghost' && '8px') ||
                    (kind === 'ghostOnDark' && '8px') ||
                    (kind === 'outline' && '8px') ||
                    undefined,
            border: (kind === 'primary' && 'none') ||
                (kind === 'secondary' && 'none') ||
                (kind === 'tertiary' && `3px solid ${baseColors.primary[600]}`) ||
                (kind === 'ghost' && 'none') ||
                (kind === 'ghostOnDark' && 'none') ||
                (kind === 'outline' && `1px solid ${baseColors.tertiary[500]}`) ||
                undefined,
            color: (kind === 'primary' && 'white') ||
                (kind === 'tertiary' && 'black') ||
                (kind === 'secondary' && baseColors.primary[500]) ||
                (kind === 'ghost' && 'inherit') ||
                (kind === 'ghostOnDark' && baseColors.tertiary[50]) ||
                (kind === 'outline' && baseColors.tertiary[50]) ||
                'inherit',
            backgroundColor: (kind === 'primary' && baseColors.primary[500]) ||
                (kind === 'secondary' && baseColors.tertiary[500]) ||
                (kind === 'ghost' && 'transparent') ||
                (kind === 'ghostOnDark' && 'transparent') ||
                (kind === 'outline' && 'transparent') ||
                (kind === 'secondary' &&
                    `color-mix(in srgb, ${baseColors.primary[500]} 75%, black)`) ||
                undefined,
            '&:hover': {
                ...(iconOnly
                    ? {
                        filter: `drop-shadow(0 0 1px ${baseColors.primary[400]})`
                    }
                    : { boxShadow: `0 0 3px black` }),
                ...(kind === 'outline' && {
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

const Button = ({ children, className, type, kind = 'primary', size = 'large', icon, iconOnly, dataTestId, ariaLabel, ariaDescribedBy, disabled = false, onClick }) => {
    const consumerTheme = useTheme();
    const onClickHandler = e => {
        onClick?.(e);
    };
    return (jsx("button", { type: type, onClick: onClickHandler, disabled: disabled, css: [
            baseTheme.button({ kind, size, iconOnly }),
            consumerTheme?.button && consumerTheme.button({ kind, size, iconOnly }),
            className?.button
        ], className: `pa-button ${kind} ${size}`, "data-testid": dataTestId, "aria-label": ariaLabel, "aria-describedby": ariaDescribedBy, children: icon ? (jsxs(Fragment, { children: [icon, children] })) : (jsx(Fragment, { children: children })) }));
};

const ButtonGroup = ({ children, className, direction = 'horizontal', gap = 'medium', dataTestId, ariaLabel = 'Button group' }) => {
    const consumerTheme = useTheme();
    return (jsx("div", { "aria-label": ariaLabel, role: "group", css: [
            baseTheme.buttonGroup({ direction, gap }),
            consumerTheme?.buttonGroup &&
                consumerTheme.buttonGroup({ direction, gap }),
            className?.buttonGroup
        ], className: `pa-button-group ${direction} ${gap}`, "data-testid": dataTestId, children: children }));
};

const InputField = ({ label, name, type = 'text', value, onChange, placeholder, required = false, error, disabled = false, readonly = false, id, 'data-testid': testId, labelPosition = 'above', size = 'medium', autoResize = false, className, onKeyDown, onDark = false }) => {
    const textAreaRef = useRef(null);
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
    useLayoutEffect(() => {
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
    const labelElement = label ? (jsxs("label", { css: [
            localStyles$8({ labelPosition, size, autoResize, onDark }).label,
            className?.label
        ], 
        // css={[getStyles(labelPosition, size, autoResize).label, className?.label]}
        htmlFor: inputId, children: [label, required && (jsx("span", { css: localStyles$8({ labelPosition, size, autoResize, onDark }).required, children: "*" }))] })) : null;
    const inputElement = type === 'textarea' ? (jsx("textarea", { ref: textAreaRef, id: inputId, name: name, value: value, onChange: handleTextAreaChange, placeholder: placeholder, required: required, disabled: disabled, readOnly: readonly, onKeyDown: onKeyDown, "data-testid": testId, css: [
            localStyles$8({ labelPosition, size, autoResize }).textarea,
            error && localStyles$8({ labelPosition, size, autoResize }).inputError,
            disabled &&
                localStyles$8({ labelPosition, size, autoResize }).inputDisabled,
            readonly &&
                localStyles$8({ labelPosition, size, autoResize }).inputReadonly,
            className?.input
        ], "aria-describedby": error ? `${inputId}-error` : undefined })) : (jsx("input", { id: inputId, name: name, type: type, value: value, onChange: handleInputChange, placeholder: placeholder, required: required, disabled: disabled, readOnly: readonly, "data-testid": testId, onKeyDown: onKeyDown, css: [
            localStyles$8({ labelPosition, size, autoResize }).input,
            error && localStyles$8({ labelPosition, size, autoResize }).inputError,
            disabled &&
                localStyles$8({ labelPosition, size, autoResize }).inputDisabled,
            readonly &&
                localStyles$8({ labelPosition, size, autoResize }).inputReadonly,
            className?.input
        ], "aria-describedby": error ? `${inputId}-error` : undefined }));
    const errorElement = error ? (jsx("div", { css: [
            localStyles$8({ labelPosition, size, autoResize }).error,
            className?.error
        ], id: `${inputId}-error`, role: "alert", children: error })) : null;
    // Layout based on label position
    return (jsxs("div", { css: [
            // getStyles(labelPosition, size, autoResize).container,
            localStyles$8({ labelPosition, size, autoResize }).container,
            className?.container
        ], children: [(labelPosition === 'above' || labelPosition === 'left') && labelElement, inputElement, (labelPosition === 'below' || labelPosition === 'right') && labelElement, errorElement] }));
};
const getSizeStyles$1 = (size) => {
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
const localStyles$8 = ({ labelPosition, size, autoResize, onDark }) => ({
    container: {
        display: 'flex',
        flexDirection: labelPosition === 'above' || labelPosition === 'below'
            ? 'column'
            : 'row',
        gap: labelPosition === 'left' || labelPosition === 'right'
            ? '0.75rem'
            : '0.5rem',
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
        ...getSizeStyles$1(size),
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
        ...getSizeStyles$1(size),
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
        fontSize: '0.875rem',
        color: '#ef4444',
        marginTop: '0.25rem'
    }
});

const Main = ({ children, className, isDark = false }) => {
    // console.log(className);
    return (jsx("main", { className: "pa-main", css: [localStyles$7(isDark).main, className?.main], children: children }));
};
const localStyles$7 = (isDark) => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: isDark ? baseColors.primary[500] : baseColors.tertiary[50],
        color: isDark ? baseColors.tertiary[50] : baseColors.primary[500]
    }
});

const InnerWidth = ({ children, size = 'medium', className }) => {
    const sizeStyles = getSizeStyles(size);
    return (jsx("div", { css: [localStyles$6.innerWidth, sizeStyles, className?.innerWidth], className: "pa-inner-width", children: children }));
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
const localStyles$6 = {
    innerWidth: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignSelf: 'center'
    }
};

const Header = ({ children, className, dataTestId }) => {
    // If children is provided, use legacy mode
    return (jsx("header", { css: [localStyles$5.header, className?.header], className: "pa-header", "data-testid": dataTestId, children: jsx(Fragment, { children: children }) }));
};
const localStyles$5 = {
    header: {
        display: 'flex',
        padding: '20px 0',
        justifyContent: 'center',
        maxHeight: '75px',
        backgroundColor: baseColors.secondary[600]
    }};

const Block = ({ children, className, dataTestId }) => {
    return (jsx("div", { css: [localStyles$4.block, className?.block], className: "pa-block", "data-testid": dataTestId, children: children }));
};
const localStyles$4 = {
    block: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
};

const Image = ({ src, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleImageLoad = () => {
        setIsLoaded(true);
    };
    return (jsx("img", { src: src, css: [baseTheme.img, className?.img], className: "pa-image", onLoad: handleImageLoad, style: { display: isLoaded ? 'block' : 'none' } }));
};

const List = ({ className, children }) => {
    return (jsx("ul", { css: [localStyles$3.ul, className?.ui], className: "pa-list", children: children }));
};
const localStyles$3 = {
    ul: {
        fontWeight: '500',
        margin: 0,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        listStyleType: 'none',
        paddingInlineStart: '0' // Remove default padding
    }
};

const ListItem = ({ children, className, useHover }) => {
    return (jsx("li", { css: [
            localStyles$2.li,
            className && className.li,
            useHover && localStyles$2.liHover,
            className && useHover && className.liHover
        ], className: "pa-list-item", children: children }));
};
const localStyles$2 = {
    li: {
        borderRadius: '6px',
        border: `1px solid ${baseColors.secondary}`,
        marginBottom: '10px',
        padding: '10px',
        color: baseColors.secondary,
        display: 'flex'
    },
    liHover: {
        ':hover': {}
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
  const t = forwardRef(({
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
    return createElement("svg", f, c?.map(([h, o]) => createElement(h, {
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

const Modal = ({ isOpen, onClose, children, title, maxWidth = '400px', showCloseButton = true, dataTestId }) => {
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
    return (jsx("div", { css: localStyles$1.backdrop, onClick: handleBackdropClick, onKeyDown: handleKeyDown, children: jsxs("div", { css: [localStyles$1.modal, { maxWidth }], role: "dialog", "aria-modal": "true", "data-testid": dataTestId, children: [(title || showCloseButton) && (jsxs("div", { css: localStyles$1.header, children: [title && jsx("h1", { css: localStyles$1.title, children: title }), showCloseButton && (jsx(Button, { className: { button: localStyles$1.closeButton }, onClick: onClose, ariaLabel: "Close modal", kind: "ghost", size: "medium", iconOnly: true, icon: jsx(r, { size: 24 }) }))] })), jsx("div", { css: localStyles$1.content, children: children })] }) }));
};
const localStyles$1 = {
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

const Search = ({ searchTerm, searchLabel, totalResultsCount = '0', resultsLabel, className, buttonSize, inputSize, buttonKind = 'primary', showResultsCount = true, labelPosition = 'above', label, buttonText, onDark = false, useSearchButton = true, onSearch, setSearchTerm }) => {
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
    return (jsx("div", { css: [localStyles.searchForm, className?.searchForm], className: "pa-search-form", children: jsxs("div", { css: [localStyles.searchWrapper, className?.searchWrapper], className: "pa-search-wrapper", children: [showResultsCount && (jsxs("div", { css: [localStyles.results, className?.resultsText], children: [resultsLabel ?? 'Total Results:', " ", totalResultsCount] })), jsx("div", { css: localStyles.inputWrapper, children: jsx(InputField, { type: "search", value: searchTerm || '', name: "searchTerm", labelPosition: labelPosition, label: label, placeholder: searchLabel || 'Search', className: { container: { ...localStyles.searchFieldContainer } }, onChange: setSearchTermHandler, size: inputSize, onKeyDown: hitEnter, onDark: onDark }) }), useSearchButton && (jsx(Button, { "data-testid": "search-submit-button", size: buttonSize, type: "button", onClick: handleOnSearch, kind: buttonKind, className: {
                        button: {
                            ...localStyles.searchButton,
                            ...className?.searchButton
                        }
                    }, children: buttonText || 'Search' }))] }) }));
};
const localStyles = {
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

function useDebounce(func, wait) {
    const timeoutRef = useRef();
    const debounceFunc = useCallback((...args) => {
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
    const [screenSize, setScreenSize] = useState('large');
    useEffect(() => {
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

const Globals = () => (jsx(Global, { styles: css `
      @import url('./styling/normalizer.css');
      h1 {
        ${css(baseTypography.h1)}
      }
      h2 {
        ${css(baseTypography.h2)}
      }
      h3 {
        ${css(baseTypography.h3)}
      }
      h4 {
        ${css(baseTypography.h4)}
      }
      h5 {
        ${css(baseTypography.h5)}
      }
      h6 {
        ${css(baseTypography.h6)}
      }
      a {
        ${css(baseTypography.a)}
      p {
        ${css(baseTypography.body)}
      }
    ` }));

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

export { Block, Button, ButtonGroup, Globals, Header, Image, InnerWidth, InputField, List, ListItem, Main, Modal, index as PAHooks, scopedContrastAnalysis as ScopedContrastAnalysis, Search, WCAGThresholds, analyzeContrast, baseColors, baseTheme, baseTypography, baseVibrantColors, checkWCAGCompliance, createResponsiveStyle, getContrastEmoji, getContrastRatio, getLuminance, hexToRgb, hexToRgba, mediaQueries, screenSizes };
//# sourceMappingURL=index.esm.js.map
