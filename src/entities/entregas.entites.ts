import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("entregas")
class Entregas {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ length: 255, nullable: true })
  tokencoleta: string;

  @Column({ length: 255, nullable: true })
  entrega: string;

  @Column({ length: 500, nullable: true })
  obs: string;

  @Column({ length: 50, nullable: true })
  formadepagamento: string;

  @Column({ length: 20, nullable: true })
  telefone: string;
}

export { Entregas };
