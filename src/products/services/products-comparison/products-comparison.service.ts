import { Injectable } from '@nestjs/common';
import { ProductDto } from '../../dtos';
import { ComparableProduct } from '../../types';

@Injectable()
export class ProductsComparisonService {
    public compareProductsBasedOnAnnualConsumption(productsToCompare: ComparableProduct[], annualConsumption: number): ProductDto[] {
        return productsToCompare.map((product) => ({
            tariffName: product.name,
            annualCostsInEuros: product.calculateAnnualCostsInEuros(annualConsumption)
        }));
    }
}
