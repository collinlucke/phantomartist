/**
 * WCAG Color Contrast Utilities
 *
 * Professional-grade color contrast analysis following WCAG 2.1 guidelines.
 * Essential utilities for accessible design systems.
 */
/**
 * Convert hex color to RGB values
 */
export declare const hexToRgb: (hex: string) => {
    r: number;
    g: number;
    b: number;
} | null;
/**
 * Calculate relative luminance according to WCAG formula
 */
export declare const getLuminance: (hex: string) => number;
/**
 * Calculate contrast ratio between two colors
 */
export declare const getContrastRatio: (color1: string, color2: string) => number;
/**
 * WCAG compliance thresholds
 */
export declare const WCAGThresholds: {
    readonly AA_NORMAL: 4.5;
    readonly AA_LARGE: 3;
    readonly AAA_NORMAL: 7;
    readonly AAA_LARGE: 4.5;
};
/**
 * Check WCAG compliance for a color combination
 */
export declare const checkWCAGCompliance: (foreground: string, background: string, isLargeText?: boolean) => {
    ratio: number;
    passesAA: boolean;
    passesAAA: boolean;
    level: string;
    isLargeText: boolean;
    recommendation: string;
};
/**
 * Analyze contrast and provide detailed feedback
 */
export declare const analyzeContrast: (foreground: string, background: string, isLargeText?: boolean) => {
    colors: {
        foreground: string;
        background: string;
    };
    luminance: {
        foreground: number;
        background: number;
    };
    ratio: number;
    passesAA: boolean;
    passesAAA: boolean;
    level: string;
    isLargeText: boolean;
    recommendation: string;
};
/**
 * Get contrast ratio with emoji indicator
 */
export declare const getContrastEmoji: (ratio: number, isLargeText?: boolean) => string;
