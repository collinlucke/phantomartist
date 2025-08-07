export const hexToRgba = (hex: string, alpha: number): string => {
  // Ensure the hex is in the correct format
  const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  if (!hexPattern.test(hex)) {
    throw new Error('Invalid hex color format');
  }

  // Convert shorthand hex to full hex if necessary
  const fullHex =
    hex.length === 4
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;

  // Extract RGB components
  const r = parseInt(fullHex.slice(1, 3), 16);
  const g = parseInt(fullHex.slice(3, 5), 16);
  const b = parseInt(fullHex.slice(5, 7), 16);

  // Return the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
