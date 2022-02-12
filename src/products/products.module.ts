import { Module } from '@nestjs/common';
import { ProductsController } from './controllers';

@Module({
    controllers: [ProductsController],
})
export class ProductsModule {}
