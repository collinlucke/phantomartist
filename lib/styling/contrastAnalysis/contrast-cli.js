#!/usr/bin/env node

/**
 * CLI Contrast Checker
 * Usage: node contrast-cli.js <foreground> <background> [--large]
 * Example: node contrast-cli.js "#FFFFFF" "#146B68" --large
 */

import { analyzeContrast, getContrastEmoji } from './contrastChecker.js';
import process from 'process';

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('🎨 WCAG Contrast Checker');
  console.log(
    'Usage: node contrast-cli.js <foreground> <background> [--large]'
  );
  console.log('Example: node contrast-cli.js "#FFFFFF" "#146B68" --large');
  process.exit(1);
}

const foreground = args[0];
const background = args[1];
const isLargeText = args.includes('--large');

try {
  const analysis = analyzeContrast(foreground, background, isLargeText);
  const emoji = getContrastEmoji(analysis.ratio, isLargeText);

  console.log(`\n🎨 Contrast Analysis ${emoji}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Foreground: ${analysis.colors.foreground}`);
  console.log(`Background: ${analysis.colors.background}`);
  console.log(`Text Size: ${isLargeText ? 'Large (18pt+)' : 'Normal'}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Contrast Ratio: ${analysis.ratio}:1`);
  console.log(`WCAG AA: ${analysis.passesAA ? '✅ Pass' : '❌ Fail'}`);
  console.log(`WCAG AAA: ${analysis.passesAAA ? '✅ Pass' : '❌ Fail'}`);
  console.log(`Overall: ${analysis.level}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`💡 ${analysis.recommendation}`);

  if (!analysis.passesAA) {
    process.exit(1); // Exit with error code for CI/CD
  }
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
