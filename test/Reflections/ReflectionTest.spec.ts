import { v4 as uuidv4 } from 'uuid';
import { assert } from 'chai';
import fetch from 'node-fetch';

import { ReflectionService } from '../../LingAnyTranslator/Reflections/ReflectionService';

describe('Reflection', async () => {
    // TestGetById
    it('Get reflection by Id', async () => {
        const id: uuidv4 = '6aeacf06-97f4-4a10-88ef-7c75f95ca696';
        const reflection = await new ReflectionService().GetById(id);
        assert.equal(reflection.Id, id);
    });
    // TestGetAll
    it('Get all reflections', async () => {
        const reflections = await new ReflectionService().GetAll();
        assert.isNotNull(reflections);
        assert.isAtLeast(reflections.length, 3);
    });
    // TestGetByLanguages
    it('Get reflection by languages', async () => {
        const nId: uuidv4 = '4a79f4f0-9cd4-402d-b10f-d8d3335fa5a8';
        const fId: uuidv4 = '87f347f2-f626-453c-9877-82d74eeb43ce';
        const reflection = await new ReflectionService().GetReflectionByLanguages(nId, fId);
        assert.isNotNull(reflection);
        assert.equal(reflection.Title, 'reflection Spanish to Russian');
    });
});
