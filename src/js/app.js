export default function sortArray(obj, order) {
    let sortOrder = [];
    let sortAdd = [];
    for (let key in obj) {
        if (order.includes(key)) {
            sortOrder[order.indexOf(key)] = { key, value: obj[key]} 
        } else {
        sortAdd.push({ key, value: obj[key] })
        };
    };
    sortAdd .sort((a, b) => (a.key > b.key ? 1 : -1));
    return [...sortOrder, ...sortAdd]
 
}
