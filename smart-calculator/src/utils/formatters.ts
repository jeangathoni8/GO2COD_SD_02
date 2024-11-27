export const formatNumber = (value: string | number): string => {
    // Handle empty or invalid input
    if (!value && value !== 0) return '';
    
    // Convert to string and split into integer and decimal parts
    const [integerPart, decimalPart] = value.toString().split('.');
    
    // Format integer part with commas
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Return formatted number with decimal part if it exists
    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  };
  
  export const unformatNumber = (value: string): string => {
    return value.replace(/,/g, '');
  };