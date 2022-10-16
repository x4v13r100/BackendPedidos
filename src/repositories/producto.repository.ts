import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MondodbDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {
  constructor(
    @inject('datasources.mondodb') dataSource: MondodbDataSource,
  ) {
    super(Producto, dataSource);
  }
}
