export function filterData(search, searchIn){
    return searchIn.filter((res) => res?.info?.name?.toLowerCase().includes(search.toLowerCase()));
}