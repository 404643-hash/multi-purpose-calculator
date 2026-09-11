# Multi-Purpose Calculator

A versatile, modern calculator built with HTML, CSS, and JavaScript that includes basic arithmetic, scientific functions, and unit conversion capabilities.

## Features

### 🧮 Basic Calculator Mode
- Standard arithmetic operations (+, −, ×, ÷)
- Decimal number support
- Clear and delete functions
- Toggle positive/negative numbers
- Calculation history display

### 🔬 Scientific Calculator Mode
- Trigonometric functions: sin, cos, tan
- Logarithmic functions: log (base 10), ln (natural log)
- Square root (√) and power (x²) functions
- Factorial (n!) calculation
- Pi (π) constant
- All basic calculator operations

### 🔄 Unit Converter Mode
**Temperature Conversion**
- Celsius ↔ Fahrenheit ↔ Kelvin

**Length Conversion**
- Meter, Kilometer, Centimeter, Mile, Yard, Foot, Inch

**Weight Conversion**
- Kilogram, Gram, Milligram, Pound, Ounce

Real-time conversion as you type with formatted output.

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/404643-hash/multi-purpose-calculator.git
cd multi-purpose-calculator
```

2. Open the `index.html` file in your web browser:
- You can open it directly: double-click `index.html`
- Or serve it locally using Python:
  ```bash
  python -m http.server 8000
  # Then visit http://localhost:8000
  ```

## Usage

### Switching Modes
Click the mode buttons at the top of the calculator:
- **Basic** - Standard calculator operations
- **Scientific** - Advanced mathematical functions
- **Converter** - Unit conversions

### Basic Calculator
1. Enter numbers by clicking buttons or using your keyboard
2. Select an operation (+, −, ×, ÷)
3. Enter the second number
4. Press = to see the result
5. Press C to clear everything
6. Press DEL to delete the last digit
7. Press ± to toggle between positive and negative

### Scientific Calculator
1. Use number buttons like the basic calculator
2. Click function buttons for trigonometric and logarithmic operations
3. Angles are in degrees for trigonometric functions
4. Press = to calculate

### Unit Converter
1. Select the converter type (Temperature, Length, or Weight)
2. Enter the value you want to convert
3. Select the "from" unit
4. Select the "to" unit
5. Result displays automatically

## Project Structure

```
multi-purpose-calculator/
├── index.html          # HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## Technical Details

### Classes Used

- **BasicCalculator**: Handles basic arithmetic operations
- **ScientificCalculator**: Extends calculator with scientific functions
- **UnitConverter**: Manages temperature, length, and weight conversions

### Key Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Real-time Calculation**: Instant results in converter mode
- **Keyboard Support**: Compatible with keyboard input
- **Error Handling**: Prevents invalid operations (division by zero, etc.)
- **Modern UI**: Gradient backgrounds and smooth animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Keyboard shortcuts documentation
- [ ] Calculation history log
- [ ] Dark mode toggle
- [ ] More unit conversions (Volume, Area, Speed)
- [ ] Currency conversion
- [ ] Loan and investment calculators
- [ ] LocalStorage for persistent settings

## License

This project is open source and available under the MIT License.

## Author

Created as a demonstration of vanilla JavaScript calculator development.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the calculator.

## Keyboard Shortcuts

- **Numbers**: 0-9 (on compatible browsers)
- **Operators**: +, -, *, /
- **Enter**: Equals (=)
- **Backspace**: Delete (DEL)
- **Escape**: Clear (C)

## Troubleshooting

**Calculator not working?**
- Ensure JavaScript is enabled in your browser
- Try refreshing the page
- Clear browser cache and cookies

**Converter showing incorrect values?**
- Verify you've selected the correct "from" and "to" units
- Check that your input value is a valid number

**Styling issues?**
- Update your browser to the latest version
- Try a different browser to isolate the issue

---

**Enjoy using the Multi-Purpose Calculator! 🎉**
