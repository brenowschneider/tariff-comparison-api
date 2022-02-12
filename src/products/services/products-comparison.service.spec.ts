import { Test, TestingModule } from '@nestjs/testing';
import { ProductsComparisonService } from './products-comparison.service';

describe('ProductsComparisonService', () => {
    let service: ProductsComparisonService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductsComparisonService]
        }).compile();

        service = module.get<ProductsComparisonService>(
            ProductsComparisonService
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
