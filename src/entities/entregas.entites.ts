import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";

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

  @Column({ length: 20, nullable: true })
  telefone: string;

  @Column({ length: 15, nullable: true })
  formadepagamento: string;

  @Column({ length: 15, nullable: true })
  data: string;

  @BeforeInsert()
  dataDeCriacao() {
    const dataDeHoje = new Date();
    const dia = dataDeHoje.getDate();
    const mes = dataDeHoje.getMonth();
    const diaString = dia.toString();
    const mesString = mes.toString();
    if (diaString.length == 1 && mesString.length == 1) {
      this.data = `0${dia}/0${mes + 1}`;
    } else if (diaString.length == 2 && mesString.length == 1) {
      this.data = `${dia}/0${mes + 1}`;
    } else if (diaString.length == 1 && mesString.length == 2) {
      this.data = `0${dia}/${mes + 1}`;
    } else if (diaString.length == 2 && mesString.length == 2) {
      this.data = `${dia}/${mes + 1}`;
    }
  }
}

export { Entregas };
