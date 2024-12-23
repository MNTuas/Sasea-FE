import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function CreateBox() {
  return (
    <Button startIcon={<AddIcon />} variant="outlined">Create</Button>
  );
}

export default CreateBox