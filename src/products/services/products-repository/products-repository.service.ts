import { Injectable } from '@nestjs/common';
import { ComparableProduct } from '../../types';
import { BasicElectricityTariff, PackagedTariff } from '../../comparable-products';

@Injectable()
export class ProductsRepositoryService {
    public getComparableProducts(): ComparableProduct[] {
        return [new BasicElectricityTariff(), new PackagedTariff()];
    }
}
