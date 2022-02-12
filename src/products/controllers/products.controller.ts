import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    public getProducts() {
        return 'Hello from products route';
    }
}
