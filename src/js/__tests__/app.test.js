import GameSavingLoader from '../app';
import GameSaving from '../gameSaving';
import { saveData } from '../reader';

const hitman = new GameSaving(JSON.parse(saveData));

test('should work correct', (done) => {
  const result2 = GameSavingLoader.load().then((saving) => saving);

  result2.then((result) => {
    expect(result).toEqual(hitman);
    done();
  });
});
