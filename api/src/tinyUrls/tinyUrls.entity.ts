import { Column, Entity } from "typeorm";
import { BaseEntity, BaseEntityCreateArgs } from "../base/base.entity";
import { nanoid } from "nanoid";

export interface TinyUrlCreateArgs extends BaseEntityCreateArgs {
  originalUrl: string;
  expiresAt?: Date;
}

@Entity()
export class TinyUrl extends BaseEntity {
  @Column()
  slug: string;

  @Column()
  originalUrl: string;

  @Column({ default: 0 })
  counter: number;

  @Column({ type: "date", nullable: true })
  expiresAt: Date | null;

  constructor(props: TinyUrlCreateArgs) {
    super(props);
    this.slug = nanoid(7);
    this.originalUrl = props.originalUrl;
    this.counter = 0;
    this.expiresAt = props.expiresAt ?? null;
  }
}
