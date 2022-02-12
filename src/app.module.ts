import { Module } from '@nestjs/common';
import { ProductsModule } from './products';

@Module({
    imports: [ProductsModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
