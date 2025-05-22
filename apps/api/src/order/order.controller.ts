import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';

export class CreateOrderDto {
  name: string;
  phone: string;
  address: string;
  paymentType: string;
  items: { productId: string }[];
}


@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('checkout')
  async checkout(@Body() createOrderDto: CreateOrderDto) {
    const result = await this.orderService.createOrder(createOrderDto);

    if (result instanceof Response) {
      return {
        statusCode: result.status,
        message: result.statusText || 'Error',
      };
    }
    return result;
  }
}
