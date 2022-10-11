import { Bff, Get, Item, List } from '@controllers/bff';
import { Block } from '@models/dtos';

export const ENDPOINTS = {
  BLOCKS: '/blocks',
  ACTUATORS: '/blocks/actuators',
  SENSORS: '/blocks/sensors',
  FIXED: '/blocks/fixed',
};

export default class CodeController {
  private GET: Get;

  constructor(service: Bff) {
    this.GET = service.get;
  }

  getBlocks(): List<Block> {
    return this.GET(ENDPOINTS.BLOCKS);
  }

  getFixed(): Item<Block> {
    return this.GET(ENDPOINTS.FIXED);
  }

  getActuators(): List<Block> {
    return this.GET(ENDPOINTS.ACTUATORS);
  }

  getSensors(): List<Block> {
    return this.GET(ENDPOINTS.SENSORS);
  }
}
