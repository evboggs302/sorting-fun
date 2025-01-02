import { sort } from "./sort";

describe('sort', () => {
    test('STANDARD', () => {
        const parcel = {
            height: 10,
            length: 10,
            width: 10,
            mass: 19
        };
        expect(sort(parcel)).toBe('STANDARD');
    });
    test('SPECIAL by MASS', () => {
        const parcel = {
            height: 10,
            length: 10,
            width: 10,
            mass: 20
        };
        expect(sort(parcel)).toBe('SPECIAL');
    });
    test('SPECIAL by DIMENSION', () => {
        const parcel = {
            height: 150,
            length: 10,
            width: 10,
            mass: 19
        };
        expect(sort(parcel)).toBe('SPECIAL');
    });
    test('REJECTED', () => {
        const parcel = {
            height: 10_000,
            length: 10_000,
            width: 10_000,
            mass: 21
        };
        expect(sort(parcel)).toBe('REJECTED');
    });
    test('Edge case #1: missing value', () => {
        const parcel = {
            height: 10,
            length: 10,
            width: 10,
        };
        // @ts-expect-error
        expect(() => sort(parcel)).toThrow('Parcel is missing a dimension or mass');
    });
    test('Edge case #2: string value', () => {
        const parcel = {
            height: 10,
            length: 10,
            width: 10,
            mass: '19'
        };
        // @ts-expect-error
        expect(() => sort(parcel)).toThrow('Parcel dimensions and mass must be numbers');
    });
    test('Edge case #3: string value', () => {
        const parcel = {
            height: 10,
            length: '10',
            width: 10,
            mass: 19
        };
        // @ts-expect-error
        expect(() => sort(parcel)).toThrow('Parcel dimensions and mass must be numbers');
    });
});
