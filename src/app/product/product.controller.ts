import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dtos/create-product.dto'
import { AuthGuard } from '@nestjs/passport'

@Controller('api/v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createProductDto: CreateProductDto, @Req() request) {
    return this.productService.create(createProductDto, request.user)
  }
}
