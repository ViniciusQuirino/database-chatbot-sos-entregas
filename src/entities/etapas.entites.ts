import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("etapas")
class Etapas {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ length: 20, unique: true })
  telefone: string;

  @Column({ length: 5 })
  etapa: string;

  @Column({ length: 5, nullable: true })
  etapadois: string;

  @Column({ length: 10, nullable: true })
  codigo: string;
}

export { Etapas };
