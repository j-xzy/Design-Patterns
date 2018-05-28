namespace Observer {
  abstract class Subject {
    private observers: Observer[];

    attach(observer: Observer) {
      this.observers.push(observer);
    };
    detach(observer: Observer) {
      let idx = this.observers.indexOf(observer);
      this.observers.splice(idx, 1);
    }
    notify() {
      this.observers.forEach((ob) => {
        ob.update(this);
      });
    };
  }

  abstract class Observer {
    abstract update(theChangedSubject: Subject);
  }

  class ClockTimer extends Subject {

  }

  class DigitalClock extends Observer {
    constructor(private timer: ClockTimer) {
      super();
      timer.attach(this);
    }

    update(theChangedSubject: Subject) {
      if(this.timer === theChangedSubject) {
        // ...
      }
    }
  }

  let time = new ClockTimer();
  let clock = new DigitalClock(time);
}