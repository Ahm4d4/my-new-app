import { AnyMxRecord } from "dns";

export type listCard = {
    cardInfo: string;
    // cardKey: number;
};
export type list = {
    listCards: listCard[];
    listHeader: string;
    // listKey: number;
}

export interface listIF {
    listCards: listCard[];
    listHeader: string;
    listKey: number;
    // lists: list[];
    // setLists: any;
    updateLists: any;
}
export interface listCardIF {
    cardInfo: string;
    cardKey: number;
    deleteCard: any;
    edifCardFunction: any;
}