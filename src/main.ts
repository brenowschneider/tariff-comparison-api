import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const defaultPortNumber = 3000;
    const app = await NestFactory.create(AppModule);
    const logger = new Logger('Bootstrap');
    await app.listen(defaultPortNumber, () => {
        logger.log(`API listening on port ${defaultPortNumber}`);
    });
}

void bootstrap();
