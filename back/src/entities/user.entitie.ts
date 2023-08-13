import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contact.entitie";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  full_name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  phone_number: string;
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  register_date: Date;

  @OneToMany(() => Contact, (contact) => contact.user, { cascade: true })
  contacts: Contact[];
}

export { User };
