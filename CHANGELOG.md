# Changelog

## [1.1.1] - 07-28-2025

### Added

- ## N/A

### Changed

- **InputField Stories**: Updated all Storybook stories to use consistent event-based onChange handlers
- **Form Event Handling**: Reverted to standardized React event-based pattern across all InputField examples
- **Story Components**: Enhanced InputField stories with proper name attributes and event extraction patterns

### Removed

- ## N/A

### Fixed

- **Event Handler Consistency**: Fixed inconsistent onChange patterns in Storybook stories
- **TypeScript Compatibility**: Resolved type mismatches between InputField component and story implementations

<br/>

## [1.1.0] - 07-28-2025

### Added

- **InputField Component**: Consolidated form input component supporting all input types (text, email, password, tel, url, textarea, search)
- **Flexible Label Positioning**: Support for label positions (above, below, left, right) with proper flexbox layouts
- **Textarea Auto-Resize**: Dynamic height adjustment for textarea inputs with proper CSS/JS coordination
- **Size Variants**: Three size options (small, medium, large) for all input types
- **Comprehensive Storybook Documentation**: 9 interactive stories showcasing all InputField features and use cases
- **Accessibility Enhancements**: Added aria-label and aria-describedby props to Button component
- **Interactive Examples**: Real React state management in Storybook stories for functional demonstrations

### Changed

- **Search Component**: Updated to use new consolidated InputField API with proper type safety
- **Form API**: Modernized props interface with TypeScript support and React best practices
- **Component Exports**: Updated to reflect new consolidated component structure
- **Storybook Configuration**: Enhanced stories with interactive controls and comprehensive documentation

### Removed

- **Legacy Form Components**: FormTextInput, FormTextArea, FormInputLabel, and Form components
- **FormElements Module**: Consolidated into single Form module with InputField
- **Deprecated Styling Utilities**: contrastChecker and scopedContrastAnalysis utilities
- **Outdated Type Declarations**: Legacy form component TypeScript definitions

### Fixed

- **Textarea Auto-Resize Bug**: Fixed JavaScript inline styles overriding CSS when autoResize disabled
- **Type Safety**: Improved TypeScript interfaces for better developer experience
- **Component Consistency**: Unified styling approach across all form inputs
- **Accessibility**: Proper ARIA attributes and keyboard navigation support

<br/>

## [1.0.0] - 02-03-2024

### Added

- ## N/A

### Changed

- Move useDebounced
- Setting project 1.0.0 for all projects

### Removed

- ## N/A

### Fixed

- ## N/A

<br/>

## [0.0.38] - 01-23-2024

### Added

- ## N/A

### Changed

- Minor tweaks

### Removed

- ## N/A

### Fixed

- ## N/A

<br/>

## [0.0.36] - 12-19-2024

### Added

- ## N/A

### Changed

- ## N/A

### Removed

- ## N/A

### Fixed

- General cleanup

<br/>

## [0.0.36] - 12-19-2024

### Added

- Workflow for Storybook

### Changed

- ## N/A

### Removed

- ## N/A

### Fixed

- ## N/A

<br/>

## [0.0.35] - 12-19-2024

### Added

- Storybook added

### Changed

- ## N/A

### Removed

- ## N/A

### Fixed

- ## N/A

<br/>

## [0.0.34] - 11-13-2024

### Added

- ## N/A

### Changed

- Just some tweaks here and there

### Removed

- Got rid of that fun little fade-in

### Fixed

- ## N/A

<br/>

## [0.0.34] - 11-13-2024

### Added

- ## N/A

### Changed

- Just some tweaks here and there

### Removed

- Got rid of that fun little fade-in

### Fixed

- ## N/A

<br/>

## [0.0.34] - 11-13-2024

### Added

- ## N/A

### Changed

- Just some tweaks here and there

### Removed

- Got rid of that fun little fade-in

### Fixed

- ## N/A

<br/>

## [0.0.34] - 11-13-2024

### Added

- ## N/A

### Changed

- Just some tweaks here and there

### Removed

- Got rid of that fun little fade-in

### Fixed

- ## N/A

<br/>

## [0.0.34] - 11-13-2024

### Added

- ## N/A

### Changed

- Just some tweaks here and there

### Removed

- Got rid of that fun little fade-in

### Fixed

- ## N/A

<br/>

## [0.0.33] - 09-23-2024

### Added

- Fun little fade-in when modals show up

### Changed

- Branched off derivative colors to `shadesAndTints`
- Got rid of that thing that filters out non-button elements

### Removed

- ## N/A

### Fixed

- ## N/A

<br/>

## [0.0.32] - 09-23-2024

### Added

### Changed

### Removed

- ## N/A

### Fixed

- ## N/A

<br/>

## [0.0.30] - 09-17-2024

### Added

- Created `Modal` component

### Changed

- Styling changes, moving some into `baseTheme`
- Made `baseColors` its own thing

### Removed

- Got rid of that `propsStyles` mess

### Fixed

- ## N/A

<br/>
