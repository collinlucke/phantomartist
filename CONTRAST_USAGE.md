# 🎨 Comprehensive Contrast Analysis Guide

## Package.json Scripts (Scoped Analysis)

### Quick Start:

```bash
npm run dev # Start development server
# Then open browser console for analysis
```

### Available Commands:

#### 1. **Full Application Analysis** 🏢

```bash
npm run contrast:app
# Browser console: analyzeFullApp()
```

**What it analyzes:**

- All header combinations (logo, navigation)
- All button styles (primary, secondary)
- All page-specific color usage
- Global text combinations

#### 2. **Single Component Analysis** 🔍

```bash
npm run contrast:component
# Browser console: analyzeComponent("Heading")
# Available: "Heading", "Button", "HomePage", "Global"
```

**Example output:**

```
🔍 Heading Component Analysis
═══════════════════════════════════════════════════════════
Header Logo:
  Colors: #FFFFFF on #146B68
  Ratio: 6.3:1 🟢 (AAA)

Header Navigation:
  Colors: #FFFFFF on #146B68
  Ratio: 6.3:1 🟢 (AAA)

📊 Heading Summary: 2/2 combinations pass WCAG AA
```

#### 3. **Single Page Analysis** 📄

```bash
npm run contrast:page
# Browser console: analyzePage("home")
# Available: "home", "login"
```

#### 4. **Quick Color Checks** ⚡

```bash
npm run contrast:check
# Browser console: contrastCheck("#FFFFFF", "#146B68")
```

#### 5. **Current Theme Analysis** 🎨

```bash
npm run contrast:theme
# Browser console: themeAnalysis()
```

## Browser Console Functions

### During Development (`npm run dev`):

#### **Quick Contrast Check:**

```javascript
contrastCheck('#FFFFFF', '#146B68');
// Output: 🟢 Contrast Check
//         Colors: #FFFFFF on #146B68
//         Ratio: 6.3:1
//         AA: ✅ | AAA: ✅
```

#### **Scope-Based Analysis:**

**Full Application:**

```javascript
analyzeFullApp();
// Analyzes all 8 predefined color combinations
// Shows: Header, buttons, pages, global text
```

**Component-Specific:**

```javascript
analyzeComponent('Heading'); // Header component only
analyzeComponent('Button'); // All button styles
analyzeComponent('HomePage'); // Home page colors
analyzeComponent('Global'); // Universal text colors
```

**Page-Specific:**

```javascript
analyzePage('home'); // Home page color combinations
analyzePage('login'); // Login page color combinations
```

## Use Cases by Scope:

### 🏢 **Full App Analysis** - Use When:

- Pre-release accessibility audit
- Design system compliance check
- Onboarding new team members
- Setting up CI/CD accessibility gates

### 🔍 **Component Analysis** - Use When:

- Developing/modifying a specific component
- Component library maintenance
- Focused accessibility testing
- Debug component-specific issues

### 📄 **Page Analysis** - Use When:

- Page-specific design reviews
- Landing page optimization
- Feature-specific accessibility
- A/B testing color variations

### ⚡ **Quick Checks** - Use When:

- Testing new color ideas
- Rapid prototyping
- Design review meetings
- Real-time validation

## Example Workflows:

### **Daily Development:**

```bash
npm run dev
# Browser console:
contrastCheck("#FF5733", "#FFFFFF")  # Test new accent color
```

### **Component Development:**

```bash
npm run dev
# Browser console:
analyzeComponent("Button")  # Focus on button accessibility
```

### **Pre-Release Check:**

```bash
npm run dev
# Browser console:
analyzeFullApp()  # Complete accessibility audit
```

### **Design Review:**

```bash
npm run contrast:help  # Show team all available commands
```

## Advanced Integration:

### **CI/CD Pipeline:**

```yaml
- name: Accessibility Check
  run: |
    npm run dev &
    sleep 5
    # Use headless browser to run analyzeFullApp()
    npm run test:accessibility
```

### **Pre-commit Hook:**

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "echo 'Run analyzeFullApp() to verify accessibility'"
    }
  }
}
```

### **Team Standards:**

```bash
# Add to README.md:
npm run contrast:help     # See all analysis options
npm run contrast:app      # Required before releases
npm run contrast:component # Required for component changes
```

## Output Examples:

### Success (Full App):

```
� Full Application Contrast Analysis
═══════════════════════════════════════════════════════════

Button - Primary Button:
  Colors: #FFFFFF on #146B68
  Ratio: 6.3:1 🟢
  Level: AAA

📊 Application Summary
═══════════════════════════════════════════════════════════
Total combinations: 8
Passing WCAG AA: 8/8 (100%)

✅ All color combinations pass WCAG AA standards!
```

### Issues Found:

```
🔍 Button Component Analysis
═══════════════════════════════════════════════════════════

Secondary Button:
  Colors: #CCCCCC on #FFFFFF
  Ratio: 1.6:1 🔴 (Fail)
  ⚠️  Consider darker/lighter colors for better accessibility

📊 Button Summary: 1/2 combinations pass WCAG AA
```

This gives you **complete control** over accessibility analysis at any scope! 🚀
