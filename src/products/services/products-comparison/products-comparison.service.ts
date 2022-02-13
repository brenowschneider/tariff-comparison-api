import { Injectable } from '@nestjs/common';
import { ProductDto } from '../../dtos';
import { ComparableProduct } from '../../types';
import { ApiLoggerService } from '../../../shared';

@Injectable()
export class ProductsComparisonService {
    public constructor(private apiLoggerService: ApiLoggerService) {}

    public compareProductsBasedOnAnnualConsumption(productsToCompare: ComparableProduct[], annualConsumption: number): ProductDto[] {
        if (productsToCompare == null || productsToCompare.length === 0) {
            this.apiLoggerService.error(`Please provide a valid list of comparable products for comparison: Value received: '${productsToCompare}'`);
            return [];
        }

        if (annualConsumption < 0) {
            this.apiLoggerService.error(`Please provide an annual consumption greater or equal than 0 for comparison. Value received: '${annualConsumption}'`);
            return [];
        }

        return productsToCompare
            .map((product) => ({
                tariffName: product.name,
                annualCostsInEuros: product.calculateAnnualCostsInEuros(annualConsumption)
            }))
            .sort(this.sortProductsByCostsAscending);
    }

    // private sortProductsByCostsAscending(products: ProductDto[]) {
    //     return products.sort((product1, product2) => product1.annualCostsInEuros - product2.annualCostsInEuros);
    // }
    private sortProductsByCostsAscending(productA: ProductDto, productB: ProductDto) {
        return productA.annualCostsInEuros - productB.annualCostsInEuros;
    }
}
