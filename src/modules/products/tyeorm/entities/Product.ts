import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column('decimal')
  price: number;
  @Column('decimal')
  quantity: number;
  @CreateDateColumn()
  create_at: Date;
  @CreateDateColumn()
  update: Date;
}
export default Product;
