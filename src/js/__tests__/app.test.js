import GameSavingLoader from '../app';
import GameSaving from '../gamesaving';
import {saveData} from '../reader';

const hitman = new GameSaving(JSON.parse(saveData));

test('should work correct', (done) => {
  const result = GameSavingLoader.load().then((saving) => saving);

  result.then((result) => {
    expect(result).toEqual(hitman);
    done();
  });
});