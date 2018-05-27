namespace Iterator {

  class List {
    count(): any { }
    get(idx: number) { }
  }

  // external iterator
  class ListIterator {
    constructor(private list: List) { }

    private current = 0;

    first() {
      this.current = 0;
    }

    next() {
      this.current++;
    }

    isDone() {
      return this.current >= this.list.count();
    }

    currentItem() {
      if (this.isDone()) {
        throw new Error();
      }
      return this.list.get(this.current);
    }
  }

  let list = new List();
  let iterator = new ListIterator(list);

  for (iterator.first(); !iterator.isDone(); iterator.next()) {
    iterator.currentItem();
  }

  // internal iterator

  function each(list: List, callback: (item: any, idx: number) => void) {
    for (let i = 0; i < list.count(); i++) {
      callback(list.get(i), i);
    }
  }

  each(list, (item, idx) => {
    console.log(idx);
  });
}