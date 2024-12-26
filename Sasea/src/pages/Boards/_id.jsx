import Container from '@mui/material/Container';
import AppBar from '~/components/Appbar';
import BoardBar from './BoardBar';
import BoardContent from './BoardContent';
import { mockData } from '~/apis/mock-data';

function Board() {
    const board = mockData?.board;

    if (!board) {
        return <div>Loading...</div>; // Trạng thái chờ nếu board chưa sẵn sàng
    }

    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoardBar board={board} />
            <BoardContent board={board} />
        </Container>
    );
}

export default Board;
