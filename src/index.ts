import * as Promise from 'bluebird';

export default class Pollable {
  constructor(callback?: (
    resolve?: (thenableOrResult?: any) => void,
    reject?: (error?: any) => void,
    cont?: (error?: any) => void
  ) => void) {

  }

  public then(callback: (thenableOrResult?: any) => any) {

  }

  public catch(callback: (result?: any) => any) {

  }
}