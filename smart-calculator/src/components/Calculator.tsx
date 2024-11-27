import { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { Operation, calculate } from '../utils/calculations';
import { formatNumber, unformatNumber } from '../utils/formatters';

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [operation, setOperation] = useState<Operation | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const operations: Operation[] = ["+", "-", "×", "÷"];

  const handleNumberChange = (value: string, setter: (value: string) => void) => {
    // Remove any existing commas first
    const unformatted = unformatNumber(value);
    
    // Validate if it's a valid number
    if (unformatted === '' || /^-?\d*\.?\d*$/.test(unformatted)) {
      setter(unformatted);
    }
  };

  const handleCalculate = () => {
    setError('');
    setResult(null);
    
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      return;
    }

    if (!operation) {
      setError('Please select an operation');
      return;
    }

    try {
      const calculatedResult = calculate(num1, num2, operation);
      setResult(calculatedResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleClear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation(null);
    setResult(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <CalculatorIcon className="text-green-400 w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold text-green-400">Smart Calculator</h1>
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-500 text-red-400 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="text"
            inputMode="decimal"
            value={formatNumber(firstNumber)}
            onChange={(e) => handleNumberChange(e.target.value, setFirstNumber)}
            placeholder="Enter first number"
            className="w-full bg-zinc-800 text-yellow-400 p-3 rounded-lg border border-zinc-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition"
          />

          <div className="grid grid-cols-4 gap-2">
            {operations.map((op) => (
              <button
                key={op}
                onClick={() => setOperation(op)}
                className={`p-3 rounded-lg font-bold transition-all ${
                  operation === op
                    ? 'bg-green-500 text-black'
                    : 'bg-zinc-800 text-green-400 hover:bg-zinc-700'
                }`}
              >
                {op}
              </button>
            ))}
          </div>

          <input
            type="text"
            inputMode="decimal"
            value={formatNumber(secondNumber)}
            onChange={(e) => handleNumberChange(e.target.value, setSecondNumber)}
            placeholder="Enter second number"
            className="w-full bg-zinc-800 text-yellow-400 p-3 rounded-lg border border-zinc-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition"
          />

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleClear}
              className="p-3 rounded-lg bg-zinc-800 text-yellow-400 hover:bg-zinc-700 transition-all"
            >
              Clear
            </button>
            <button
              onClick={handleCalculate}
              className="p-3 rounded-lg bg-green-500 text-black font-bold hover:bg-green-600 transition-all"
            >
              Calculate
            </button>
          </div>

          {result !== null && (
            <div className="mt-6 p-4 bg-zinc-800 rounded-lg border border-green-500/30">
              <p className="text-center text-lg">
                <span className="text-zinc-400">Result: </span>
                <span className="text-yellow-400 font-bold">{formatNumber(result)}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}