/**
 * Advanced Scoped Contrast Analysis for Design Systems
 *
 * Professional-grade accessibility analysis with defensive programming patterns.
 * Provides component-level, page-level, and application-wide contrast validation.
 */
export interface ContrastIssue {
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
}
export interface AnalysisResult {
    total: number;
    passing: number;
    issues: ContrastIssue[];
}
export interface ColorCombination {
    name: string;
    fg: string;
    bg: string;
    component: string;
}
/**
 * Analyze color combinations with comprehensive error handling
 */
export declare const analyzeColorCombinations: (combinations: ColorCombination[], contextName: string) => AnalysisResult;
/**
 * Analyze color combinations filtered by component type
 */
export declare const analyzeByComponent: (combinations: ColorCombination[], componentName: string) => AnalysisResult;
/**
 * Create browser console analysis functions for any design system
 */
export declare const createConsoleAnalysisFunctions: (colorCombinations: ColorCombination[]) => {
    analyzeFullSystem: () => AnalysisResult;
    analyzeComponent: (componentName: string) => AnalysisResult;
    analyzeCustom: (customCombinations: ColorCombination[]) => AnalysisResult;
};
/**
 * Quick accessibility audit of any color pair
 */
export declare const quickAudit: (foreground: string, background: string, context?: string) => void;
export { analyzeContrast, getContrastEmoji } from './contrastAnalysis/contrastChecker';
