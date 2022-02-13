import { Module } from '@nestjs/common';
import { ApiLoggerService } from './api-logger';

@Module({
    providers: [ApiLoggerService],
    exports: [ApiLoggerService]
})
export class SharedModule {}
