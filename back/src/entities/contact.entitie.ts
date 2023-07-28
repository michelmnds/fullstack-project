import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  full_name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  phone_number: string;
  @CreateDateColumn()
  register_date: Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User[];
}

export { Contact };
