import { Module } from '@nestjs/common';
import { ProductsController } from './controllers';
import { ProductsComparisonService, ProductsRepositoryService } from './services';
import { SharedModule } from '../shared';

@Module({
    imports: [SharedModule],
    providers: [ProductsComparisonService, ProductsRepositoryService],
    controllers: [ProductsController]
})
export class ProductsModule {}
