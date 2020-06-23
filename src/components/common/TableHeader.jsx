import React from 'react';

const TableHeader = ({columns,onSort,sortColumn}) => {
    const handleSort = path => {
        console.log()
        const column = {...sortColumn};
        if(column.path === path){
            column.order = column.order === 'asc' ? 'desc' : 'asc';
        }
        else {
            column.path = path;
            column.order = 'asc';
        }

        onSort(column);
    }

    const getSortIcon = path => {
        if(sortColumn.path !== path) return null;
        return <i className={`fa fa-sort-${sortColumn.order}`}></i>
    }
    return ( 
        <thead>
            <tr>
                {columns.map(column => (
                    <th key={column.path || column.key} onClick = {() => handleSort(column.path)}>
                    {column.label}{getSortIcon(column.path)}
                    </th>
                ))}
            </tr>
        </thead>
     );
}
 
export default TableHeader;