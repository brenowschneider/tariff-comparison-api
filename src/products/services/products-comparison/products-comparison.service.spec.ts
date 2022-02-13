import { Test, TestingModule } from '@nestjs/testing';
import { ProductsComparisonService } from './products-comparison.service';
import { BasicElectricityTariff, PackagedTariff } from '../../comparable-products';

const comparableProducts = [new BasicElectricityTariff(), new PackagedTariff()];

describe('ProductsComparisonService', () => {
    let service: ProductsComparisonService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductsComparisonService]
        }).compile();

        service = module.get<ProductsComparisonService>(ProductsComparisonService);
    });

    it('should return Packaged Tariff as first item when consumption is 3500KWh', () => {
        const result = service.compareProductsBasedOnAnnualConsumption(comparableProducts, 3500);
        expect(result).toEqual([
            {
                tariffName: 'Packaged Tariff',
                annualCostsInEuros: 800
            },
            {
                tariffName: 'Basic Electricity Tariff',
                annualCostsInEuros: 830
            }
        ]);
    });

    it('should return Packaged Tariff as first item when consumption is 4500KWh', () => {
        const result = service.compareProductsBasedOnAnnualConsumption(comparableProducts, 4500);
        expect(result).toEqual([
            {
                tariffName: 'Packaged Tariff',
                annualCostsInEuros: 950
            },
            {
                tariffName: 'Basic Electricity Tariff',
                annualCostsInEuros: 1050
            }
        ]);
    });

    it('should return Basic Electricity Tariff as first item when consumption is 6000KWh', () => {
        const result = service.compareProductsBasedOnAnnualConsumption(comparableProducts, 6000);
        expect(result).toEqual([
            {
                tariffName: 'Basic Electricity Tariff',
                annualCostsInEuros: 1380
            },
            {
                tariffName: 'Packaged Tariff',
                annualCostsInEuros: 1400
            }
        ]);
    });
});
