/**
 * WCAG Color Contrast Utilities
 *
 * Professional-grade color contrast analysis following WCAG 2.1 guidelines.
 * Essential utilities for accessible design systems.
 */

/**
 * Convert hex color to RGB values
 */
export const hexToRgb = (
  hex: string
): { r: number; g: number; b: number } | null => {
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
export const getLuminance = (hex: string): number => {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;

  const { r, g, b } = rgb;

  // Convert to sRGB
  const rsRGB = r / 255;
  const gsRGB = g / 255;
  const bsRGB = b / 255;

  // Apply gamma correction
  const rLinear =
    rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const gLinear =
    gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const bLinear =
    bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

  // Calculate relative luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
};

/**
 * Calculate contrast ratio between two colors
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * WCAG compliance thresholds
 */
export const WCAGThresholds = {
  AA_NORMAL: 4.5,
  AA_LARGE: 3,
  AAA_NORMAL: 7,
  AAA_LARGE: 4.5
} as const;

/**
 * Check WCAG compliance for a color combination
 */
export const checkWCAGCompliance = (
  foreground: string,
  background: string,
  isLargeText: boolean = false
) => {
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
    recommendation:
      ratio < aaThreshold
        ? 'Consider darker/lighter colors for better accessibility'
        : 'Good contrast ratio'
  };
};

/**
 * Analyze contrast and provide detailed feedback
 */
export const analyzeContrast = (
  foreground: string,
  background: string,
  isLargeText: boolean = false
) => {
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
export const getContrastEmoji = (
  ratio: number,
  isLargeText: boolean = false
): string => {
  const aaThreshold = isLargeText
    ? WCAGThresholds.AA_LARGE
    : WCAGThresholds.AA_NORMAL;
  const aaaThreshold = isLargeText
    ? WCAGThresholds.AAA_LARGE
    : WCAGThresholds.AAA_NORMAL;

  if (ratio >= aaaThreshold) return '🟢'; // AAA
  if (ratio >= aaThreshold) return '🟡'; // AA
  return '🔴'; // Fail
};
