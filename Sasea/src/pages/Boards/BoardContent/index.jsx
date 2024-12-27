import { Box } from "@mui/material";
import { useEffect, useState } from 'react';
import ListColumns from "./ListColumns/ListColumns";
import PropTypes from 'prop-types';
import mapOrder from "~/utils/sort";
import { DndContext, PointerSensor, useSensor, MouseSensor, TouchSensor, useSensors } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";



function BoardContent({ board }) {

  // yêu cầu người dùng di chuyển ít nhất 10px trước khi bắt đầu kéo xem consolelog
  const pointerSensor = useSensor(PointerSensor, {activationConstraint: {distance: 10}});

  //dùng cho mobile , delay 250ms và độ rộng tương tác trên màn hình mobile trước khi bắt đầu kéo
  const mouseSensor = useSensor(MouseSensor, {activationConstraint: {distance: 10}});
  const touchSensor = useSensor(TouchSensor, {activationConstraint: {delay: 250, tolerance: 500}});

  const mySensors = useSensors(mouseSensor, touchSensor);

  const [orderedColumns, setOrderedColumns] = useState([]);

  useEffect(() => {
    const orderedColumns = mapOrder(board.columns, board?.columnOrderIds, "_id")
    setOrderedColumns(orderedColumns);
  }, [board]);

  const handleDragEnd = (event) => {
    console.log('handledragend:', event);

    const { active, over } = event;

    // Kiểm tra nếu over là null
    if (!over) return;

    if (active.id !== over.id) {
        // Lấy ra column đang drag
        const oldIndex = orderedColumns.findIndex((c) => c._id === active.id); // Tìm vị trí cũ
        const newIndex = orderedColumns.findIndex((c) => c._id === over.id); // Tìm vị trí mới  

        // Clone ra mảng mới
        const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);

        // Gọi API update lại columnOrderIds nếu cần
        // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
        
        setOrderedColumns(dndOrderedColumns);
    }
};

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: "flex",
        p:'5px 0',
      }}
    >
      <ListColumns columns ={orderedColumns} />
      
    </Box>
    </DndContext>
  );
}

BoardContent.propTypes = {
   board: PropTypes.shape({
        columns: PropTypes.arrayOf(PropTypes.object).isRequired,
        columnOrderIds: PropTypes.arrayOf(PropTypes.string).isRequired
   }).isRequired
};
export default BoardContent;
