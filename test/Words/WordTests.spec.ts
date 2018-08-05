import { v4 as uuidv4 } from 'uuid';
import { assert } from 'chai';

import { WordService } from '../../LingAnyTranslator/Words/WordService';

describe('Word', async () => {
    // TestGetTranslationByText
    it('Get translation by text', async () => {
        const text: string = 'mother';
        const refId: uuidv4 = '01838288-daec-45fb-831c-89a25502ec6a';
        const word = await new WordService().GetTranslationByText(text, refId);
        assert.equal(word.Text, text);
        assert.equal(word.Translation, 'мать');
    });
    // TestGetTextByTranslatioin
    it('Get translation by text', async () => {
      const translation: string = 'мать';
      const refId: uuidv4 = '01838288-daec-45fb-831c-89a25502ec6a';
      const word = await new WordService().GetTranslationByText(translation, refId);
      console.log(word);
      assert.equal(word.Translation, translation);
      assert.equal(word.Text, 'mother');
  });
});