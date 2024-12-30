import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import axios from "axios";

function UpdateBook({ book }) {
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleUpdateBook = async () => {
    try {
      await axios.put(`https://juangh.ing/api/api/book/${book.id}/`, updatedBook);
      alert("Book updated successfully");
    } catch (err) {
      console.error("Failed to update book:", err);
    }
  };

  return (
    <Box display="flex" gap={1} alignItems="center">
      <TextField
        size="small"
        label="Title"
        value={updatedBook.title}
        onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })}
      />
      <TextField
        size="small"
        label="Author"
        value={updatedBook.author}
        onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })}
      />
      <Button variant="contained" onClick={handleUpdateBook}>
        Update
      </Button>
    </Box>
  );
}

export default UpdateBook;
