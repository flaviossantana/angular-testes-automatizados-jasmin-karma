import {Injectable} from "@angular/core";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UniqueIdService {

    private numberOfGeneratedIds = 0;
    private validID = /^[A-Za-z]+[\w\-:.]*$/;

    public generateUniqueIdWithPrefix(prefix: string): string {

        if(!prefix || !this.validID.test(prefix)) {
          throw Error('Prefix can not be empty');
        }

        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedIds ++;
        return `${prefix}-${uniqueId}`;
    }

    private generateUniqueId(): string {
        return uuidv4();
    }

    public getNumberOfGeneratedUniqueIds(): number {
        return this.numberOfGeneratedIds;
    }

}
