export const store = {
  state: {
    numbers: [1, 2, 3]
  },
  addNumber(newNumber) {
    this.state.numbers.push(newNumber);
  }
};
