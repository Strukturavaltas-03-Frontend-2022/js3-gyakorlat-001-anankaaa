'use trict';

const objectConverter = {
    arrayToMap(array) {
        const arrayMap = new Map([]);
        array.forEach((value, index) => arrayMap.set(index, value));
        return arrayMap;
    },
    arrayToSet(array) {
        return new Set(array);
    },
    setToMap(set) {
        const setMap = new Map([]);
        Array.from(set).forEach((value, index) => setMap.set(index, value));
        return setMap;
    },
    setToArray(set) {
        return Array.from(set);
    },
    mapToArray(map) {
        const array = [];
        map.forEach((value, index) => {array.push(value)});
        return array; 
    }
    mapToSet(map) {
        const mapSet = new Set();
        map.forEach((value) => mapSet.add(value));
        return mapSet;
    }
}
export default objectConverter;
