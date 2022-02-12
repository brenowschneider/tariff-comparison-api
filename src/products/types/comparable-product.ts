export type ComparableProduct = {
    readonly name: string;
    readonly pricePerKWhInEuros: number;
    calculateAnnualCostsInEuros: (consumptionInKWh: number) => number;
};
