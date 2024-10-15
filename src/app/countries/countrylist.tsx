export interface Country {
    name: string;
    population: number;
    size: number;
    capital: string;
  }
  
  export const countriesList: Country[] = [
    { name: "Pakistan", population: 235800000, size: 770880, capital: "Islamabad" },
    { name: "India", population: 1417000000, size: 3287000, capital: "Delhi" },
    { name: "Afghanistan", population: 41130000, size: 652864, capital: "Kabul" }
  ];
  