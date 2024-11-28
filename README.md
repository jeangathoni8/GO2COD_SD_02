# Smart Calculator

A modern, intuitive calculator application built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and intuitive user interface
- 🎨 Beautiful dark theme with green and yellow accents
- 🧮 Support for basic arithmetic operations
- ⚡️ Real-time calculation updates
- 🛡️ Robust error handling
- 📱 Fully responsive design

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- React Router DOM

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/jeangathoni8/GO2COD_SD_02
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Calculator.tsx    # Main calculator component
│   └── LandingPage.tsx  # Landing page component
├── utils/
│   ├── calculations.ts  # Calculator logic and operations
│   └── formatters.ts    # Number formatting utilities
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Features in Detail

### Calculator Operations

- Addition (+)
- Subtraction (-)
- Multiplication (×)
- Division (÷)

### Number Formatting
- Automatic comma separation for large numbers (e.g., 1,234,567.89)
- Proper decimal point handling
- Real-time formatting while typing

### Error Handling

The calculator includes robust error handling for:
- Division by zero
- Invalid number inputs
- Missing operation selection
- Non-numeric character validation

### User Interface

- Clean and modern design
- Responsive layout
- Visual feedback for operations
- Clear error messages
- Smooth transitions and animations
- Dark theme with green accents
- Yellow highlights for results

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Organization

The project follows a modular structure:

- **Components**: React components with specific UI responsibilities
- **Utils**: Shared utilities for calculations and formatting
- **Styles**: Tailwind CSS for styling
- **Types**: TypeScript type definitions

### Best Practices

- Modular code organization
- TypeScript for type safety
- ESLint for code quality
- Responsive design principles
- Accessibility considerations
- Error boundary implementation
- Performance optimizations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use functional components
- Implement proper error handling
- Write meaningful comments
- Follow the existing code style

## License

This project is licensed under the MIT License - see the LICENSE file for details.
