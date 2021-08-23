import React from 'react'


interface listHeader{
    listHeader: string;
}
export default function ListHeader({listHeader}: listHeader) {
    return (
        <div className="list-header">
            {listHeader}
        </div>
    )
}
