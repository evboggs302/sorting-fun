export type ParcelType = {
    height: number;
    length: number;
    width: number;
    mass: number;
}

type SortReturn = 'STANDARD' | 'SPECIAL' | 'REJECTED';

/**
 * @param parcel units are centimeters for the dimensions and kilogram for the mass
 * @returns the name of the stack the parcel should be placed in
 */
export const sort = (parcel: ParcelType): SortReturn => {
    if(Object.values(parcel).some(value => typeof value !== 'number')) {
        throw new Error('Parcel dimensions and mass must be numbers');
    }

    if('height' in parcel === false || 'length' in parcel === false || 'width' in parcel === false || 'mass' in parcel === false) {
        throw new Error('Parcel is missing a dimension or mass');
    }

    const dimensionIsBulky = [parcel.height, parcel.length, parcel.width].filter(dimension => dimension >= 150).length > 0;
    const volumeIsBulky = parcel.height * parcel.length * parcel.width >= 1_000_000;
    
    const isBulky = dimensionIsBulky || volumeIsBulky;
    const isHeavy = parcel.mass >= 20;

    if (isBulky && isHeavy) {
        return 'REJECTED';
    }

    if (isBulky || isHeavy) {
        return 'SPECIAL';
    }

    return 'STANDARD';
}