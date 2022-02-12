import { Module } from '@nestjs/common';
import { ProductsController } from './controllers';
import { ProductsComparisonService } from './services';

@Module({
    providers: [ProductsComparisonService],
    controllers: [ProductsController]
})
export class ProductsModule {}
