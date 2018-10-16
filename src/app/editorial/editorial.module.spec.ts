import {EditorialModule} from './editorial.module';

describe('EditorialModule', () => {
    let editorialModule: EditorialModule;

    beforeEach(() => {
        editorialModule = new EditorialModule();
    });

    it('should create an instance', () => {
        expect(editorialModule).toBeTruthy();
    });
});
