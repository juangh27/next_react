"use client";

import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";

function CreateBook() {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    published_date: null, // Initialize as null for the DatePicker
  });
  const [constructedJson, setConstructedJson] = useState(null); // State to display JSON

  const handleAddBook = async () => {
    // Construct JSON object
    const bookJson = {
      ...newBook,
      published_date: newBook.published_date ? newBook.published_date.format("YYYY-MM-DD") : null, // Format date
    };

    // Commented out API call
    try {
      const response = await axios.post("https://juangh.ing/api/api/book/", bookJson);
      console.log("Book added:", response.data);
    } catch (err) {
      console.error("Failed to create book:", err);
    }

    // Log JSON and set it to display
    console.log("Constructed JSON:", bookJson);
    setConstructedJson(bookJson);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} marginBottom={2}>
      <TextField
        label="Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        fullWidth
      />
      <TextField
        label="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        fullWidth
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Published Date"
          value={newBook.published_date}
          onChange={(date) => setNewBook({ ...newBook, published_date: date })}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
      <TextField
        label="ISBN"
        value={newBook.isbn}
        onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddBook}>
        Construct JSON
      </Button>

      {constructedJson && (
        <Box mt={2}>
          <Typography variant="h6">Constructed JSON:</Typography>
          <Typography variant="body1" component="pre">
            {JSON.stringify(constructedJson, null, 2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default CreateBook;
