import 'mocha';
import * as Promise from 'bluebird';
import * as sinon from 'sinon';
import { expect } from 'chai';
import Pollable from '../src/index';

describe('Pollable', () => {
  it('Constructor should not throw error', () => {
    new Pollable();
    new Pollable(() => {});
  });

  it('The poller should resolve when the prediction is fullfilled', (done) => {
    this.timeout(500);

    let num = 0;

    const spy = sinon.spy();

    const generateNumbers = () => {
      spy();
      return Promise.resolve(num++);
    }

    const poll = () => new Pollable((res, rej, cont) => {
      generateNumbers()
        .then((curNum) => {
          if (curNum == 3) {
            res();
          }

          cont();
        })
    });

    poll()
      .then(() => {
        expect(spy.callCount).to.be.equal(4);
        done();
      });
  });

  it('The poller should be rejected as expected', (done) => {
    this.timeout(500);

    let num = 0;

    const spy = sinon.spy();

    const generateNumbers = () => {
      spy();
      return Promise.resolve(num++);
    }

    const poll = () => new Pollable((res, rej, cont) => {
      generateNumbers()
        .then((curNum) => {
          if (curNum == 3) {
            rej();
          }

          cont();
        })
    });

    poll()
      .catch(() => {
        expect(spy.callCount).to.be.equal(4);
        done();
      });
  });
});
