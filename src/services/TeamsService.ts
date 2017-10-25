import Base from './base/Base';
import { Teams } from '../entities/Teams';
import TeamsSchema from '../db/schemas/TeamsSchema';

export class TeamsService extends Base<Teams> {
  constructor() {
    super(TeamsSchema);
  }
}
