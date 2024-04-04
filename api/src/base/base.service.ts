import {
  FindOptionsWhere,
  FindOptionsWhereProperty,
  ObjectLiteral,
  Repository,
} from "typeorm";

import { UUIDv4 } from "src/types/UUID";

export class BaseService<T extends ObjectLiteral> {
  protected repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async create(props: T): Promise<T> {
    return this.repository.save(props);
  }

  async update(props: T): Promise<T> {
    const entity = this.repository.create(props);
    return this.repository.save(entity);
  }

  async delete(id: UUIDv4): Promise<void> {
    await this.repository.delete(id);
  }

  async findOneById(id: UUIDv4): Promise<T | undefined> {
    return this.repository.findOneBy({
      id: id as FindOptionsWhereProperty<NonNullable<T[string]>>,
    } as FindOptionsWhere<T>);
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }
}
