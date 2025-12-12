# alx-project-0x14

## API Overview
The MoviesDatabase API provides access to a wide range of movie data including titles, genres, release years, ratings, and more. It allows developers to search, filter, and retrieve detailed information about movies, making it ideal for building movie discovery applications.

## Version
v1.0 (or use the actual version from the API documentation)

## Available Endpoints
- `/titles` - Fetch a list of movies. Supports filtering by **year**, **genre**, and **pagination**.  
- `/titles/{id}` - Retrieve detailed information about a specific movie using its unique ID.  
- `/genres` - Get a list of available movie genres.  
- `/years` - Retrieve a list of available release years.  

*(Add any other endpoints you find in the documentation.)*

## Request and Response Format

### Typical Request
```http
GET https://api.moviesdatabase.com/titles?year=2023&genre=action&page=1
Headers:
  Authorization: Bearer YOUR_API_KEY

## Request and Response Format

### Typical Request
```http
GET https://api.moviesdatabase.com/titles?year=2023&genre=action&page=1
Headers:
  Authorization: Bearer YOUR_API_KEY

{
  "page": 1,
  "total_pages": 50,
  "total_results": 1000,
  "results": [
    {
      "id": "tt1234567",
      "title": "Example Movie",
      "genre": ["Action", "Adventure"],
      "release_year": 2023,
      "rating": 7.5,
      "poster_url": "https://example.com/poster.jpg"
    }
  ]
}

## Authentication
All requests to the MoviesDatabase API require an API key.

### How to Authenticate
- Pass your API key in the request headers:


- **Do not expose your API key in client-side code.**  
  Use a **server-side API route** in Next.js to make the request and return the data to the client safely.

### Storing the API Key
- Create a `.env.local` file in your project root:

MOVIES_API_KEY=your_actual_api_key_here

- Access it in your server-side code using `process.env.MOVIES_API_KEY`.

### Example Usage in Next.js API Route
```ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://api.moviesdatabase.com/titles', {
    headers: {
      Authorization: `Bearer ${process.env.MOVIES_API_KEY}`,
    },
  });

  const data = await response.json();
  res.status(200).json(data);
}


**Key points:**  
- Make it clear **API keys must be kept secret**.  
- Show a **safe example** using environment variables and server-side code.  
- Helps anyone reading the README understand **how to authenticate without exposing secrets**.  

If you want, I can **combine the Typical Request, Response, and Authentication sections into a single polished README snippet** that’s ready to copy into your project. Do you want me to do that?
