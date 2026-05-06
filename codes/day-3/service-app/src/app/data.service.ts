export interface IService {
    getData(): string[];
}
export class DataService implements IService {
    private names = ['anil', 'sunil', 'joydip']
    getData() {
        return [...this.names]
    }
}