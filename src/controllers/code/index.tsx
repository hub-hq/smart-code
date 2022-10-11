import { Bff, Delete, Get, Item, List, Post } from '@base/controllers/bff';
import { Block } from '@base/models/dtos';

export const ENDPOINTS = {
  BLOCKS: '/blocks',
  ACTUATORS: '/blocks/actuators',
  SENSORS: '/blocks/sensors',
  FIXED: '/blocks/fixed',
};

export default class Controller {
  private GET: Get;
  private POST: Post;
  private DELETE: Delete;

  constructor(service: Bff) {
    this.GET = service.get;
    this.POST = service.post;
    this.DELETE = service.get;
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
