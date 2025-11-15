# Security Findings Report

## TL;DR
This report outlines several vulnerabilities identified in the project dependencies, including critical, high, and moderate severity issues. Immediate attention is required for critical vulnerabilities in `form-data` and high vulnerabilities in `css-select` and `nth-check`. Recommended actions include upgrading affected packages and reviewing configurations.

## Risk Overview
The following vulnerabilities were identified in the project dependencies:

- **Critical Vulnerabilities**:
  - `form-data`: Uses an unsafe random function for choosing boundaries (Affected versions: 3.0.0 - 3.0.3) [More Info](https://github.com/advisories/GHSA-fjxv-7rqg-78g4)

- **High Vulnerabilities**:
  - `css-select`: Vulnerability affecting versions <=3.1.0
  - `nth-check`: Inefficient Regular Expression Complexity (Affected versions: <2.0.1) [More Info](https://github.com/advisories/GHSA-rp65-9cf3-cjxr)
  - `svgo`: Vulnerability affecting versions 0.4.2 - 1.3.2

- **Moderate Vulnerabilities**: Multiple packages including `@babel/helpers`, `@jest/core`, `@svgr/plugin-svgo`, and others have been flagged with moderate severity issues.

- **Low Vulnerabilities**: Some packages like `brace-expansion` and `on-headers` have been identified with low severity vulnerabilities.

## Recommended Remediations
1. **Upgrade Critical Packages**:
   - Upgrade `form-data` to a version greater than 3.0.3.
   
2. **Upgrade High-Risk Packages**:
   - Upgrade `css-select` to a version greater than 3.1.0.
   - Upgrade `nth-check` to a version greater than 2.0.1.
   - Upgrade `svgo` to a version greater than 1.3.2.

3. **Address Moderate Vulnerabilities**:
   - Upgrade all affected packages to their latest stable versions, particularly those listed below:
     - `@babel/helpers`, `@babel/runtime`, `@istanbuljs/load-nyc-config`, `@jest/*`, `@svgr/*`, `babel-jest`, `babel-plugin-istanbul`, `js-yaml`, `postcss`, `react-scripts`, `webpack-dev-server`, etc.

4. **Review and Refactor**:
   - Refactor `package-lock.json` due to unsupported file type warnings.

## Finding Details
### Critical Vulnerabilities
- **form-data**: 
  - Affected versions: 3.0.0 - 3.0.3
  - [Advisory Link](https://github.com/advisories/GHSA-fjxv-7rqg-78g4)

### High Vulnerabilities
- **css-select**: 
  - Affected versions: <=3.1.0
- **nth-check**: 
  - Affected versions: <2.0.1
  - [Advisory Link](https://github.com/advisories/GHSA-rp65-9cf3-cjxr)
- **svgo**: 
  - Affected versions: 0.4.2 - 1.3.2

### Moderate Vulnerabilities
- **@babel/helpers**: 
  - Affected versions: <7.26.10
- **@babel/runtime**: 
  - Affected versions: <7.26.10
- **@istanbuljs/load-nyc-config**: 
  - Affected versions: *
- **@jest/core**: 
  - Affected versions: >=25.1.0
- **@jest/reporters**: 
  - Affected versions: >=25.1.0
- **@jest/test-sequencer**: 
  - Affected versions: 25.1.0 - 28.0.0-alpha.11
- **@jest/transform**: 
  - Affected versions: >=25.1.0
- **@svgr/plugin-svgo**: 
  - Affected versions: <=5.5.0
- **@svgr/webpack**: 
  - Affected versions: 4.0.0 - 5.5.0
- **babel-jest**: 
  - Affected versions: >=25.1.0
- **babel-plugin-istanbul**: 
  - Affected versions: >=6.0.0-beta.0
- **js-yaml**: 
  - Affected versions: <4.1.1
  - [Advisory Link](https://github.com/advisories/GHSA-mh29-5h37-fv8m)
- **postcss**: 
  - Affected versions: <8.4.31
  - [Advisory Link](https://github.com/advisories/GHSA-7fh5-64p2-3v2j)
- **react-scripts**: 
  - Affected versions: >=0.1.0
- **webpack-dev-server**: 
  - Affected versions: <=5.2.0
  - [Advisory Link](https://github.com/advisories/GHSA-9jgg-88mc-972h)

### Low Vulnerabilities
- **brace-expansion**: 
  - Affected versions: 1.0.0 - 1.1.11 || 2.0.0 - 2.0.1
  - [Advisory Link](https://github.com/advisories/GHSA-v6h2-p8h4-qcjw)
- **on-headers**: 
  - Affected versions: <1.1.0
  - [Advisory Link](https://github.com/advisories/GHSA-76c9-3jph-rj3q)

### Additional Notes
- **INFO**: Semgrep completed with no findings for the selected preset.
- **INFO**: Upgraded css-select, form-data, nth-check, and svgo to their latest versions via npm install.
- **WARNING**: Refactor package-lock.json due to unsupported file type.