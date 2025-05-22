import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './order.controller';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

 
  async createOrder(dto: CreateOrderDto) {
    const { name, phone, address, paymentType, items } = dto;

    if (!name || !phone || !address || !paymentType || !items?.length) {
      throw new BadRequestException('Missing fields');
    }

    // Fetch products from DB to calculate total and check availability
    const productIds = items.map((item: any) => item.productId);
    const products = await this.prisma.product.findMany({
      where: { id: { in: productIds }, status: 'available' },
    });

    if (products.length !== items.length) {
      throw new BadRequestException('Some products are not available');
    }

    const total = products.reduce((acc, p) => acc + p.price, 0);

    // Create Order
    const order = await this.prisma.order.create({
      data: {
        name,
        phone,
        address,
        paymentType,
        total,
        items: {
          create: products.map((p) => ({
            productId: p.id,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    // Update product status to 'sold'
    await this.prisma.product.updateMany({
      where: { id: { in: productIds } },
      data: { status: 'sold' },
    });

    return order;
  }
}

