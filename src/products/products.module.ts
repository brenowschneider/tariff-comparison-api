import { Module } from '@nestjs/common';
import { ProductsController } from './controllers';
import { ProductsComparisonService, ProductsRepositoryService } from './services';

@Module({
    providers: [ProductsComparisonService, ProductsRepositoryService],
    controllers: [ProductsController]
})
export class ProductsModule {}
