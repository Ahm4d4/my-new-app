import React, {useState} from 'react'
import List from './list'
import '../../../styles/list/list.css';
import {list} from "../../../interfaces/interfaces"

export default function ListsPage() {
    let ToDo:list = {listHeader: "To Do", listCards: []};
    // let Doing:list = {listHeader: "Doing", listCards: []};
    // let Done:list = {listHeader: "Done", listCards: []};

    const [lists, setLists] = useState<list[]>([ToDo]);

    const updateLists = (updatedList: list, listKey: number) =>{
        lists[listKey] = updatedList;
        console.log(lists);
    }
    return (
        <div className="lists-div">
            {lists.map((list: list, index: number)=> (
                <List
                key={index}
                listHeader={list.listHeader}
                listCards={list.listCards}
                listKey={index}
                updateLists={updateLists}
                />               
            ))}         
        </div>
    )
}
