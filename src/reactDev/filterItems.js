function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter(item => {
        let name;
        query.includes(" ") ? name = item.name.split() : name = item.name.split(" ");
        return name.some(word => word.toLowerCase().startsWith(query))
    }
    );
}

export default filterItems;

