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

        return productsToCompare.map((product) => this.mapComparableProductToProductDto(product, annualConsumption)).sort(this.sortProductsByAnnualCostsAscending);
    }

    private sortProductsByAnnualCostsAscending(productA: ProductDto, productB: ProductDto) {
        return productA.annualCostsInEuros - productB.annualCostsInEuros;
    }

    private mapComparableProductToProductDto(comparableProduct: ComparableProduct, annualConsumption: number): ProductDto {
        return {
            tariffName: comparableProduct.name,
            annualCostsInEuros: comparableProduct.calculateAnnualCostsInEuros(annualConsumption)
        };
    }
}
