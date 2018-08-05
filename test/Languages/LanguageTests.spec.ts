import { v4 as uuidv4 } from 'uuid';
import { assert } from 'chai';

import { LanguageService } from '../../LingAnyTranslator/Languages/LanguageService';

describe('Language', async () => {
    // TestGetById
    it('Get language by Id', async () => {
        const id: uuidv4 = '87f347f2-f626-453c-9877-82d74eeb43ce';
        const language = await new LanguageService().GetById(id);
        assert.equal(language.Id, id);
        assert.equal(language.Code, "ru");
    });
    // TestGetAll
    it('Get all language', async () => {
        const reflections = await new LanguageService().GetAll();
        assert.isNotNull(reflections);
        assert.isAtLeast(reflections.length, 3);
    });
});