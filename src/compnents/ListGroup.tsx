import { useState } from "react";


interface Props {
    items: string[];
    heading: string;

}

function ListGroup({ items, heading }: Props) {
    // let items = [
    //     "New York",
    //     "Sanfrancisco",
    //     "Tokyo",
    //     "London",
    //     "Paris"
    // ];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    if (items.length === 0)


        return items.length == 0 ? <><h2>No Item Found!</h2></> : null;

    return (<>
        <h2 className="text-center">{heading}</h2>
        <ul className="list-group">
            {items.map((item, index) => (<li className={selectedIndex === index ? 'list-group-item active text-center' : 'list-group-item'} key={item} onClick={() => { setSelectedIndex(index) }}>{item} </li>))}
        </ul >
    </>);
}


export default ListGroup;