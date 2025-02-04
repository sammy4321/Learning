## Step 1 : Install Chroma

First, you need to install the Chroma DB library.

```bash
pip install chromadb
```

## Step 2 : Import and Initialize Chroma DB

```bash
import chromadb
from chromadb.config import Settings

# Initialize Chroma with default settings (in-memory database)
client = chromadb.PersistentClient(path="/chroma_data")

```

## Step 3 : Create a Collection

A collection is like a table in a relational database. Each collection holds vectors and associated metadata.

```bash
# Create a new collection
collection = client.create_collection("my_collection")

# List all existing collections (optional)
print(client.list_collections())

```
## Step 4 : Add Data to the Collection

You can add embeddings (vectors) along with unique IDs and metadata.


```bash
# Example data
embeddings = [
    [0.1, 0.2, 0.3],  # Vector 1
    [0.4, 0.5, 0.6],  # Vector 2
    [0.7, 0.8, 0.9],  # Vector 3
]

# Metadata and IDs
ids = ["id1", "id2", "id3"]
metadata = [{"name": "Alice"}, {"name": "Bob"}, {"name": "Charlie"}]

# Add to collection
collection.add(
    embeddings=embeddings,
    metadatas=metadata,
    ids=ids,
)
```
## Step 5 : Query the Collection

Search for similar vectors using a query vector.

```bash
# Query the collection
query_vector = [0.1, 0.2, 0.25]
results = collection.query(
    query_embeddings=[query_vector],
    n_results=2,  # Number of results to retrieve
)

print("Query Results:")
print(results)
```

## Step 6 : Update or Delete Data

You can update or delete vectors by their IDs.

```bash
# Update an entry by ID
collection.update(
    ids=["id1"],
    embeddings=[[0.15, 0.25, 0.35]],
    metadatas=[{"name": "Updated Alice"}],
)
```

## Step 7 : Persist Data

If you’re using a persistent backend (e.g., duckdb+parquet), data will be stored on disk.

```bash
client = chromadb.Client(Settings(
    persist_directory="./chroma_data",
    chroma_db_impl="duckdb+parquet",
))

# Access the existing collection
collection = client.get_collection("my_collection")
```

## Step 8 : List and Retrieve Data

You can list all entries in a collection or retrieve specific ones.

```bash
print(collection.get())
data = collection.get(ids=["id1", "id2"])
print(data)
```

## Step 9 : Advanced Features

```bash
results = collection.query(
    query_embeddings=[query_vector],
    n_results=2,
    where={"name": "Alice"}  # Filter by metadata
)
```