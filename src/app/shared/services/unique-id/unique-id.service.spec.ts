import {UniqueIdService} from "./unique-id.service";

describe(UniqueIdService.name, () => {

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} Deveria gerar um ID unicio quando forma chamado`, () => {

        const service = new UniqueIdService();
        const idWithPrefix = service.generateUniqueIdWithPrefix('APP');

        expect(idWithPrefix).toContain('APP-');

    });

});
