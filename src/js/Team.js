export default class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...members) {
    members.forEach((member) => this.members.add(member));
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    const members = [...this.members];
    const lastIndex = members.length - 1;
    return {
      next() {
        if (currentIndex <= lastIndex) {
          return {
            done: false,
            // eslint-disable-next-line no-plusplus
            value: members[currentIndex++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
