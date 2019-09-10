import { Volume } from './Volume';
export interface Storage {
    title: string;
    size: string;
    memoryType: string;
    volume: Volume[];
}
