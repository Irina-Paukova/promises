import GameSavingLoader from '../app';
import GameSaving from '../gameSaving';
import { saveData } from '../reader';

const hitman = new GameSaving(JSON.parse(saveData));

test('should work correct', (done) => {
  const result = GameSavingLoader.load().then((saving) => saving);

  result.then(() => {
    expect(result).toEqual(hitman);
    done();
  });
});
