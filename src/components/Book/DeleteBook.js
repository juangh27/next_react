import React from "react";
import { Button } from "@mui/material";
import axios from "axios";

function DeleteBook({ bookId }) {
  const handleDeleteBook = async () => {
    try {
      await axios.delete(`https://juangh.ing/api/api/book/${bookId}/`);
      alert("Book deleted successfully");
    } catch (err) {
      console.error("Failed to delete book:", err);
    }
  };

  return (
    <Button variant="outlined" color="secondary" onClick={handleDeleteBook}>
      Delete
    </Button>
  );
}

export default DeleteBook;
