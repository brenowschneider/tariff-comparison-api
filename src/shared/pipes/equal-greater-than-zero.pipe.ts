import { PipeTransform, Injectable, BadRequestException, HttpStatus } from '@nestjs/common';

@Injectable()
export class EqualGreaterThanZeroPipe implements PipeTransform {
    public transform(value: string): number {
        const valueAsNumber = parseInt(value);

        if (isNaN(valueAsNumber) || valueAsNumber < 0) {
            throw new BadRequestException({
                error: 'Please provide a number equal or greater than zero',
                status: HttpStatus.BAD_REQUEST
            });
        }

        return valueAsNumber;
    }
}
