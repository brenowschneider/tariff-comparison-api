import { Test, TestingModule } from '@nestjs/testing';
import { ProductsRepositoryService } from './products-repository.service';

describe('ComparableProductsRepositoryService', () => {
    let service: ProductsRepositoryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductsRepositoryService]
        }).compile();

        service = module.get<ProductsRepositoryService>(ProductsRepositoryService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
