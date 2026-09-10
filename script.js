// ==================== BASIC CALCULATOR ====================
class BasicCalculator {
    constructor() {
        this.display = document.getElementById('display');
        this.history = document.getElementById('history');
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = null;
        this.shouldResetDisplay = false;
        this.init();
    }

    init() {
        document.querySelectorAll('.basic-mode .number-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleNumber(btn.dataset.number));
        });

        document.querySelectorAll('.basic-mode .operator-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleOperator(btn.dataset.operator));
        });

        document.querySelector('[data-action="clear"]').addEventListener('click', () => this.clear());
        document.querySelector('[data-action="delete"]').addEventListener('click', () => this.delete());
        document.querySelector('[data-action="equals"]').addEventListener('click', () => this.equals());
        document.querySelector('[data-action="toggle"]').addEventListener('click', () => this.toggle());
    }

    handleNumber(num) {
        if (num === '.' && this.currentInput.includes('.')) return;
        if (this.shouldResetDisplay) {
            this.currentInput = num;
            this.shouldResetDisplay = false;
        } else {
            this.currentInput = this.currentInput === '0' ? num : this.currentInput + num;
        }
        this.updateDisplay();
    }

    handleOperator(op) {
        if (this.operator !== null && !this.shouldResetDisplay) {
            this.equals();
        }
        this.previousInput = this.currentInput;
        this.operator = op;
        this.shouldResetDisplay = true;
        this.updateHistory();
    }

    equals() {
        if (this.operator === null || this.shouldResetDisplay) return;
        let result = this.calculate(
            parseFloat(this.previousInput),
            parseFloat(this.currentInput),
            this.operator
        );
        this.currentInput = result.toString();
        this.operator = null;
        this.shouldResetDisplay = true;
        this.updateDisplay();
        this.updateHistory();
    }

    calculate(prev, current, op) {
        switch (op) {
            case '+': return prev + current;
            case '-': return prev - current;
            case '*': return prev * current;
            case '/': return current !== 0 ? prev / current : 0;
            default: return current;
        }
    }

    clear() {
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
        this.updateHistory();
    }

    delete() {
        if (this.currentInput.length > 1) {
            this.currentInput = this.currentInput.slice(0, -1);
        } else {
            this.currentInput = '0';
        }
        this.updateDisplay();
    }

    toggle() {
        this.currentInput = (parseFloat(this.currentInput) * -1).toString();
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.currentInput;
    }

    updateHistory() {
        if (this.operator) {
            this.history.textContent = `${this.previousInput} ${this.operator}`;
        } else {
            this.history.textContent = '';
        }
    }
}

// ==================== SCIENTIFIC CALCULATOR ====================
class ScientificCalculator {
    constructor() {
        this.display = document.getElementById('sci-display');
        this.history = document.getElementById('sci-history');
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = null;
        this.shouldResetDisplay = false;
        this.init();
    }

    init() {
        document.querySelectorAll('.scientific-mode .number-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleNumber(btn.dataset.number));
        });

        document.querySelectorAll('.scientific-mode .operator-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleOperator(btn.dataset.operator));
        });

        document.querySelectorAll('.scientific-mode .btn[data-function]').forEach(btn => {
            btn.addEventListener('click', () => this.handleFunction(btn.dataset.function));
        });

        document.querySelector('[data-action="clear-sci"]').addEventListener('click', () => this.clear());
        document.querySelector('[data-action="delete-sci"]').addEventListener('click', () => this.delete());
        document.querySelector('[data-action="equals-sci"]').addEventListener('click', () => this.equals());
    }

    handleNumber(num) {
        if (num === '.' && this.currentInput.includes('.')) return;
        if (this.shouldResetDisplay) {
            this.currentInput = num;
            this.shouldResetDisplay = false;
        } else {
            this.currentInput = this.currentInput === '0' ? num : this.currentInput + num;
        }
        this.updateDisplay();
    }

    handleOperator(op) {
        if (this.operator !== null && !this.shouldResetDisplay) {
            this.equals();
        }
        this.previousInput = this.currentInput;
        this.operator = op;
        this.shouldResetDisplay = true;
        this.updateHistory();
    }

    handleFunction(func) {
        let result;
        const value = parseFloat(this.currentInput);

        switch (func) {
            case 'sin':
                result = Math.sin(value * Math.PI / 180);
                break;
            case 'cos':
                result = Math.cos(value * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(value * Math.PI / 180);
                break;
            case 'log':
                result = Math.log10(value);
                break;
            case 'ln':
                result = Math.log(value);
                break;
            case 'sqrt':
                result = Math.sqrt(value);
                break;
            case 'power':
                result = value * value;
                break;
            case 'factorial':
                result = this.factorial(value);
                break;
            case 'pi':
                this.currentInput = Math.PI.toString();
                this.updateDisplay();
                return;
            default:
                return;
        }

        this.currentInput = result.toFixed(8).replace(/\.?0+$/, '');
        this.shouldResetDisplay = true;
        this.updateDisplay();
    }

    factorial(n) {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    equals() {
        if (this.operator === null || this.shouldResetDisplay) return;
        let result = this.calculate(
            parseFloat(this.previousInput),
            parseFloat(this.currentInput),
            this.operator
        );
        this.currentInput = result.toString();
        this.operator = null;
        this.shouldResetDisplay = true;
        this.updateDisplay();
        this.updateHistory();
    }

    calculate(prev, current, op) {
        switch (op) {
            case '+': return prev + current;
            case '-': return prev - current;
            case '*': return prev * current;
            case '/': return current !== 0 ? prev / current : 0;
            default: return current;
        }
    }

    clear() {
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
        this.updateHistory();
    }

    delete() {
        if (this.currentInput.length > 1) {
            this.currentInput = this.currentInput.slice(0, -1);
        } else {
            this.currentInput = '0';
        }
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.currentInput;
    }

    updateHistory() {
        if (this.operator) {
            this.history.textContent = `${this.previousInput} ${this.operator}`;
        } else {
            this.history.textContent = '';
        }
    }
}

// ==================== UNIT CONVERTER ====================
class UnitConverter {
    constructor() {
        this.initTemperatureConverter();
        this.initLengthConverter();
        this.initWeightConverter();
    }

    initTemperatureConverter() {
        const tempInput = document.getElementById('temp-input');
        const tempFrom = document.getElementById('temp-from');
        const tempTo = document.getElementById('temp-to');
        const tempResult = document.getElementById('temp-result');

        const updateTemp = () => {
            const value = parseFloat(tempInput.value);
            if (isNaN(value)) {
                tempResult.textContent = '';
                return;
            }
            const result = this.convertTemperature(value, tempFrom.value, tempTo.value);
            tempResult.textContent = `${value} ${tempFrom.value} = ${result.toFixed(2)} ${tempTo.value}`;
        };

        tempInput.addEventListener('input', updateTemp);
        tempFrom.addEventListener('change', updateTemp);
        tempTo.addEventListener('change', updateTemp);
    }

    initLengthConverter() {
        const lengthInput = document.getElementById('length-input');
        const lengthFrom = document.getElementById('length-from');
        const lengthTo = document.getElementById('length-to');
        const lengthResult = document.getElementById('length-result');

        const updateLength = () => {
            const value = parseFloat(lengthInput.value);
            if (isNaN(value)) {
                lengthResult.textContent = '';
                return;
            }
            const result = this.convertLength(value, lengthFrom.value, lengthTo.value);
            lengthResult.textContent = `${value} ${lengthFrom.value} = ${result.toFixed(4)} ${lengthTo.value}`;
        };

        lengthInput.addEventListener('input', updateLength);
        lengthFrom.addEventListener('change', updateLength);
        lengthTo.addEventListener('change', updateLength);
    }

    initWeightConverter() {
        const weightInput = document.getElementById('weight-input');
        const weightFrom = document.getElementById('weight-from');
        const weightTo = document.getElementById('weight-to');
        const weightResult = document.getElementById('weight-result');

        const updateWeight = () => {
            const value = parseFloat(weightInput.value);
            if (isNaN(value)) {
                weightResult.textContent = '';
                return;
            }
            const result = this.convertWeight(value, weightFrom.value, weightTo.value);
            weightResult.textContent = `${value} ${weightFrom.value} = ${result.toFixed(4)} ${weightTo.value}`;
        };

        weightInput.addEventListener('input', updateWeight);
        weightFrom.addEventListener('change', updateWeight);
        weightTo.addEventListener('change', updateWeight);
    }

    convertTemperature(value, from, to) {
        let celsius;

        // Convert to Celsius
        if (from === 'celsius') celsius = value;
        else if (from === 'fahrenheit') celsius = (value - 32) * 5 / 9;
        else if (from === 'kelvin') celsius = value - 273.15;

        // Convert from Celsius
        if (to === 'celsius') return celsius;
        else if (to === 'fahrenheit') return (celsius * 9 / 5) + 32;
        else if (to === 'kelvin') return celsius + 273.15;
    }

    convertLength(value, from, to) {
        // Convert to meters
        const meters = {
            meter: value,
            kilometer: value * 1000,
            centimeter: value / 100,
            mile: value * 1609.34,
            yard: value * 0.9144,
            foot: value * 0.3048,
            inch: value * 0.0254
        };

        // Convert from meters to target unit
        const conversions = {
            meter: m => m,
            kilometer: m => m / 1000,
            centimeter: m => m * 100,
            mile: m => m / 1609.34,
            yard: m => m / 0.9144,
            foot: m => m / 0.3048,
            inch: m => m / 0.0254
        };

        return conversions[to](meters[from]);
    }

    convertWeight(value, from, to) {
        // Convert to grams
        const grams = {
            kilogram: value * 1000,
            gram: value,
            milligram: value / 1000,
            pound: value * 453.592,
            ounce: value * 28.3495
        };

        // Convert from grams to target unit
        const conversions = {
            kilogram: g => g / 1000,
            gram: g => g,
            milligram: g => g * 1000,
            pound: g => g / 453.592,
            ounce: g => g / 28.3495
        };

        return conversions[to](grams[from]);
    }
}

// ==================== MODE SWITCHING ====================
function initModeSwitch() {
    const modeBtns = document.querySelectorAll('.mode-btn');
    const modes = document.querySelectorAll('.mode');

    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            modes.forEach(m => m.classList.remove('active'));

            btn.classList.add('active');
            const mode = btn.dataset.mode;
            document.querySelector(`.${mode}-mode`).classList.add('active');
        });
    });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    new BasicCalculator();
    new ScientificCalculator();
    new UnitConverter();
    initModeSwitch();
});
