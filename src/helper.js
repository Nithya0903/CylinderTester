const formatDate = (date)=> {
    return date.toLocaleDateString("en-US", { day: 'numeric' }) + '/'
        + date.toLocaleDateString("en-US", { month: 'numeric' }) + '/'
        + date.toLocaleDateString("en-US", { year: 'numeric' });
}

const capitalize = (str)=> {
    return str.toUpperCase() ;
}



export { formatDate, capitalize}