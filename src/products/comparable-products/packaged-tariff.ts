import { ComparableProduct } from '../types';

export class PackagedTariff implements ComparableProduct {
    public name = 'Packaged Tariff';

    private readonly packagedConsumptionLimitInKWh = 4000;
    private readonly packagedBaseCostInEuros = 800;
    public readonly pricePerKWhInEuros = 0.3;

    public calculateAnnualCostsInEuros(consumptionInKWh: number) {
        if (consumptionInKWh <= this.packagedConsumptionLimitInKWh) {
            return this.packagedBaseCostInEuros;
        }

        const exceededConsumptionInKWh = consumptionInKWh - this.packagedConsumptionLimitInKWh;
        return this.packagedBaseCostInEuros + exceededConsumptionInKWh * this.pricePerKWhInEuros;
    }
}
