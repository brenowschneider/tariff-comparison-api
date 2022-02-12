import { Controller, Get } from '@nestjs/common';
import { ProductDto } from '../dtos';
import { ProductsComparisonService } from '../services';

@Controller('products')
export class ProductsController {
    constructor(private productsComparisonService: ProductsComparisonService) {}

    @Get()
    public getProducts(): ProductDto[] {
        return this.productsComparisonService.compareProductsBasedOnAnnualConsumption();
    }
}
