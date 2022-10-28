import { useDrag } from "react-dnd";

export default function Item({ name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { name },
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult();
    //   if (item && dropResult) {
    //     // alert(`You dropped ${item.name} into ${dropResult.name}!`);
    //     console.log("item", item);
    //     console.log("dropResult", dropResult);
    //   }
    // },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }));

  return (
    <div className="item" ref={drag}>
      {name}
    </div>
  );
}
