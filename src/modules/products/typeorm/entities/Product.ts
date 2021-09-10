import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('decimal')
  base_value: number;

  @Column('int')
  quantity: number;

  @Column('int')
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
