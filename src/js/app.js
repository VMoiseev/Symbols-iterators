import Persons from './Person';
import Team from './Team';

const team = new Team(...Persons);

for (const person of team) {
  // eslint-disable-next-line no-console
  console.log(person);
}
