import { get, setProperties } from '@ember/object';
import Component from '@ember/component';
import countup from 'countup';

export default Component.extend({

  tagName: 'span',

  didInsertElement() {
    this._super(...arguments);

    const {
      onStart,
      onError,
      end = 0,
      begin = 0,
      decimals = 0,
      duration = 2,
      options = {}
    } = this;
    const {
      error,
      start,
      reset,
      update,
      pauseResume
    } = new countup(
      this.elementId,
      begin,
      end,
      decimals,
      duration,
      options
    );

    setProperties(this, {
      error,
      start,
      reset,
      update,
      pauseResume
    });

    if (error) {
      if (onError) {
        onError(error);
      }
    }

    if (!error && !onStart) {
      start();
    }

    if(onStart) {
      onStart(start);
    }
  }
});
