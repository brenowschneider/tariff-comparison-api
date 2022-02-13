import { Injectable } from '@nestjs/common';
import { ProductDto } from '../../dtos';
import { ComparableProduct } from '../../types';

@Injectable()
export class ProductsComparisonService {
    public compareProductsBasedOnAnnualConsumption(productsToCompare: ComparableProduct[], annualConsumption: number): ProductDto[] {
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
