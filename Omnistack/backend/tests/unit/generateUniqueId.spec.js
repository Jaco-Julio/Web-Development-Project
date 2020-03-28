const generateUniqueID = require('../../src/utils/generateUniqueid');

describe('Generate Unique ID', () => {
    it('should generate an unique id', () => {
        const id = generateUniqueID();
        expect(id).toHaveLength(8);
    })
})