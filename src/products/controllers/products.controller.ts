import { Controller, Get, Param } from '@nestjs/common';
import { ProductDto } from '../dtos';
import { ProductsComparisonService, ProductsRepositoryService } from '../services';

@Controller('products')
export class ProductsController {
    constructor(private productsComparisonService: ProductsComparisonService, private productsRepositoryService: ProductsRepositoryService) {}

    @Get('/compare/:consumption')
    public getProducts(@Param() { consumption }): ProductDto[] {
        const comparableProducts = this.productsRepositoryService.getComparableProducts();
        return this.productsComparisonService.compareProductsBasedOnAnnualConsumption(comparableProducts, consumption);
    }
}
