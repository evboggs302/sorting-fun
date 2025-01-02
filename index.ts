import { ParcelType, sort } from './src/sort';
 
const parcel1: ParcelType = {
    height: 10,
    length: 10,
    width: 10,
    mass: 19
};
// STANDARD
console.log('Parcel 1:', sort(parcel1));

const parcel2: ParcelType = {
    height: 10_000,
    length: 10_000,
    width: 10_000,
    mass: 20
};
// REJECTED
console.log('Parcel 2:', sort(parcel2));

const parcel3: ParcelType = {
    height: 10,
    length: 10,
    width: 10,
    mass: 21
};
// SPECIAL
console.log('Parcel 3:', sort(parcel3));