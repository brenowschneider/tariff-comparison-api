import { MONTHS_PER_YEAR } from '../../shared';
import { ComparableProduct } from '../types';

export class BasicElectricityTariff implements ComparableProduct {
    public name = 'Basic Electricity Tariff';

    private readonly extraOperationCostsPerMonthInEuros = 5;
    public readonly pricePerKWhInEuros = 0.22;

    public calculateAnnualCostsInEuros(consumeInKWh: number) {
        return this.extraOperationCostsPerMonthInEuros * MONTHS_PER_YEAR + this.pricePerKWhInEuros * consumeInKWh;
    }
}
