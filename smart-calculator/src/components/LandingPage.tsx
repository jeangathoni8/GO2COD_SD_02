import { Calculator as CalculatorIcon, Plus, Minus, X, Divide, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <CalculatorIcon className="w-16 h-16 text-green-400 mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">Smart Calculator</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Perform calculations with style and confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <Plus className="w-8 h-8" />, title: 'Addition' },
            { icon: <Minus className="w-8 h-8" />, title: 'Subtraction' },
            { icon: <X className="w-8 h-8" />, title: 'Multiplication' },
            { icon: <Divide className="w-8 h-8" />, title: 'Division' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-green-400 transition-all"
            >
              <div className="text-green-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400">
                Perform {feature.title.toLowerCase()} operations with precision and ease
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/calculator"
            className="inline-flex items-center gap-2 bg-green-500 text-black font-bold px-8 py-4 rounded-lg hover:bg-green-400 transition-all"
          >
            Try Calculator
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-zinc-900">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Smart Calculator?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern Design',
                description: 'Clean and intuitive interface with a beautiful dark theme',
              },
              {
                title: 'Error Handling',
                description: 'Robust error handling including division by zero protection',
              },
              {
                title: 'Responsive',
                description: 'Works perfectly on all devices and screen sizes',
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-zinc-800">
                <h3 className="text-xl font-semibold text-green-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}