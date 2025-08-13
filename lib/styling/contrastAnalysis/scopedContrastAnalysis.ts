/**
 * Advanced Scoped Contrast Analysis for Design Systems
 *
 * Professional-grade accessibility analysis with defensive programming patterns.
 * Provides component-level, page-level, and application-wide contrast validation.
 */

import { analyzeContrast, getContrastEmoji } from './contrastChecker';

// Define analysis result types
export type ContrastIssue = {
  name: string;
  fg: string;
  bg: string;
  component: string;
  analysis: {
    ratio: number;
    level: string;
    passesAA: boolean;
    recommendation: string;
  };
};

export type AnalysisResult = {
  total: number;
  passing: number;
  issues: ContrastIssue[];
};

export type ColorCombination = {
  name: string;
  fg: string;
  bg: string;
  component: string;
};

/**
 * Analyze color combinations with comprehensive error handling
 */
export const analyzeColorCombinations = (
  combinations: ColorCombination[],
  contextName: string
): AnalysisResult => {
  if (!Array.isArray(combinations) || combinations.length === 0) {
    console.error(
      `❌ No color combinations available for ${contextName} analysis`
    );
    return { total: 0, passing: 0, issues: [] };
  }

  try {
    console.log(`🔍 ${contextName} Analysis`);
    console.log('═'.repeat(60));

    let totalCombinations = 0;
    let passingCombinations = 0;
    const issues: ContrastIssue[] = [];

    combinations.forEach(combo => {
      try {
        // Validate combo structure
        if (
          !combo ||
          !combo.fg ||
          !combo.bg ||
          !combo.name ||
          !combo.component
        ) {
          console.warn(
            `⚠️ Skipping incomplete color combination: ${
              combo?.name || 'unnamed'
            }`
          );
          return;
        }

        totalCombinations++;
        const analysis = analyzeContrast(combo.fg, combo.bg);
        const emoji = getContrastEmoji(analysis.ratio);

        console.log(`\n${combo.component} - ${combo.name}:`);
        console.log(`  Colors: ${combo.fg} on ${combo.bg}`);
        console.log(
          `  Ratio: ${analysis.ratio}:1 ${emoji} (${analysis.level})`
        );

        if (analysis.passesAA) {
          passingCombinations++;
        } else {
          issues.push({ ...combo, analysis });
          console.log(`  ⚠️  ${analysis.recommendation}`);
        }
      } catch (error) {
        console.error(`❌ Error analyzing ${combo?.name || 'unknown'}:`, error);
      }
    });

    // Summary
    console.log(`\n📊 ${contextName} Summary`);
    console.log('═'.repeat(60));
    console.log(`Total combinations: ${totalCombinations}`);

    if (totalCombinations > 0) {
      console.log(
        `Passing WCAG AA: ${passingCombinations}/${totalCombinations} (${Math.round(
          (passingCombinations / totalCombinations) * 100
        )}%)`
      );
    } else {
      console.log('No valid combinations to analyze');
    }

    if (issues.length > 0) {
      console.log(`\n❌ ${issues.length} issues found:`);
      issues.forEach(issue => {
        console.log(
          `  • ${issue.component}: ${issue.name} (${issue.analysis.ratio}:1)`
        );
      });
    } else {
      console.log('\n✅ All color combinations pass WCAG AA standards!');
    }

    return {
      total: totalCombinations,
      passing: passingCombinations,
      issues
    };
  } catch (error) {
    console.error(`❌ ${contextName} analysis failed:`, error);
    return { total: 0, passing: 0, issues: [] };
  }
};

/**
 * Analyze color combinations filtered by component type
 */
export const analyzeByComponent = (
  combinations: ColorCombination[],
  componentName: string
): AnalysisResult => {
  // Input validation
  if (!componentName || typeof componentName !== 'string') {
    console.error(
      '❌ Invalid component name provided. Expected non-empty string.'
    );
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
      ...new Set(
        combinations.filter(c => c && c.component).map(c => c.component)
      )
    ];
    console.log(`No predefined color combinations found for ${componentName}`);
    console.log('Available components:', availableComponents.join(', '));
    return { total: 0, passing: 0, issues: [] };
  }

  return analyzeColorCombinations(
    componentCombos,
    `${componentName} Component`
  );
};

/**
 * Create browser console analysis functions for any design system
 */
export const createConsoleAnalysisFunctions = (
  colorCombinations: ColorCombination[]
) => {
  const analyzeFullSystem = (): AnalysisResult => {
    return analyzeColorCombinations(colorCombinations, 'Full Design System');
  };

  const analyzeComponent = (componentName: string): AnalysisResult => {
    return analyzeByComponent(colorCombinations, componentName);
  };

  const analyzeCustom = (
    customCombinations: ColorCombination[]
  ): AnalysisResult => {
    return analyzeColorCombinations(customCombinations, 'Custom Analysis');
  };

  // Make functions available globally in browser
  if (typeof window !== 'undefined') {
    try {
      // Type-safe window extensions
      (
        window as typeof window & {
          analyzeFullSystem: typeof analyzeFullSystem;
          analyzeComponent: typeof analyzeComponent;
          analyzeCustom: typeof analyzeCustom;
        }
      ).analyzeFullSystem = analyzeFullSystem;
      (
        window as typeof window & {
          analyzeFullSystem: typeof analyzeFullSystem;
          analyzeComponent: typeof analyzeComponent;
          analyzeCustom: typeof analyzeCustom;
        }
      ).analyzeComponent = analyzeComponent;
      (
        window as typeof window & {
          analyzeFullSystem: typeof analyzeFullSystem;
          analyzeComponent: typeof analyzeComponent;
          analyzeCustom: typeof analyzeCustom;
        }
      ).analyzeCustom = analyzeCustom;
      console.log(
        '✅ Design System contrast analysis functions available globally'
      );
      console.log('📖 Available functions:');
      console.log('  • analyzeFullSystem() - Analyze all color combinations');
      console.log(
        '  • analyzeComponent("ComponentName") - Analyze specific component'
      );
      console.log(
        '  • analyzeCustom([{...combinations}]) - Analyze custom combinations'
      );
    } catch (error) {
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
export const quickAudit = (
  foreground: string,
  background: string,
  context?: string
): void => {
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
  } catch (error) {
    console.error('❌ Quick audit failed:', error);
  }
};

// Export all utilities
export { analyzeContrast, getContrastEmoji } from './contrastChecker';
