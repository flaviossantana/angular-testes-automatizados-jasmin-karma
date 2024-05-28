import {UniqueIdService} from "./unique-id.service";

describe(UniqueIdService.name, () => {

    let service: UniqueIdService = null;

    beforeEach(() => {
        service = new UniqueIdService();
    })

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
    Deveria gerar um ID unico quando forma chamado`, () => {

        const idWithPrefix = service.generateUniqueIdWithPrefix('APP');

        expect(idWithPrefix.startsWith('APP-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
    Deveria gerar um ID unico quando chamado varias vezes`, () => {

        const firstID = service.generateUniqueIdWithPrefix('APP');
        const secondID = service.generateUniqueIdWithPrefix('APP');

        expect(firstID).not.toBe(secondID);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
    Deveria gerar um ID unicos quando chamado N vezes`, () => {

        const ids = new Set();
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('APP'));
        }

        expect(ids.size).toBe(50)
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
    Deveria retornar a quantidade de Id´s gerados`, () => {

        service.generateUniqueIdWithPrefix('APP');
        service.generateUniqueIdWithPrefix('APP');

        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
    Deveria tratar prefixo vazio`, () => {

        [null, '', undefined, '1', '0']
            .forEach(valorInvalido => {
                expect(() => service.generateUniqueIdWithPrefix(valorInvalido))
                    .withContext(`Valor vazio: ${valorInvalido}` )
                    .toThrow();
            })
    });

});
