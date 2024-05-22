import {UniqueIdService} from "./unique-id.service";

describe(UniqueIdService.name, () => {

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} Deveria gerar um ID unicio quando forma chamado`, () => {

        const service = new UniqueIdService();
        const idWithPrefix = service.generateUniqueIdWithPrefix('APP');

        expect(idWithPrefix.startsWith('APP-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} Deveria gerar um ID unicio quando chamado varias vezes`, () => {

        const service = new UniqueIdService();
        const firstID = service.generateUniqueIdWithPrefix('APP');
        const secondID = service.generateUniqueIdWithPrefix('APP');

        expect(firstID).not.toBe(secondID);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} Deveria gerar um ID unicos quando chamado N vezes`, () => {

        const service = new UniqueIdService();

        const ids = new Set();
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('APP'));
        }

        expect(ids.size).toBe(50)
    });

});
