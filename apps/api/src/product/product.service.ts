import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAvailableProducts() {
    return this.prisma.product.findMany({
      where: {
        status: 'available',
      },
    });
  }
}
