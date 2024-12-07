const express = require('express');
const app = express();

// Sample data: A mock database of items
const items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

// Endpoint with cursor-based pagination
app.get('/api/items', (req, res) => {
  const limit = 10; // Default number of items per page
  const cursor = parseInt(req.query.cursor, 10) || 0; // Default cursor is 0 (start from the beginning)

  // Validate the cursor
  if (cursor < 0 || cursor >= items.length) {
    return res.status(400).json({ message: 'Invalid cursor' });
  }

  // Get the current page of items
  const paginatedItems = items.slice(cursor, cursor + limit);

  // Determine the next cursor
  const nextCursor = cursor + limit < items.length ? cursor + limit : null;

  // Response with paginated data and next link
  res.json({
    data: paginatedItems,
    next: nextCursor ? `/api/items?cursor=${nextCursor}` : null, // Link for the next page
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
