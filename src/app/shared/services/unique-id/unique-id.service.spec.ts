import {UniqueIdService} from "./unique-id.service";

describe('UniqueIdService', () => {

    it('Deveria gerar um ID unicio quando forma chamado', () => {

        const service = new UniqueIdService();
        const idWithPrefix = service.generateUniqueIdWithPrefix('APP');

        expect(idWithPrefix).toContain('APP-');

    });

});
