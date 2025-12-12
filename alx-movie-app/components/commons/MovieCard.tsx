import React from 'react';

interface MovieCardProps {
  title: string;
  posterUrl: string;
  releaseYear: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl, releaseYear }) => {
  return (
    <div className="border rounded shadow p-2">
      <img src={posterUrl} alt={title} className="w-full h-64 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-gray-500">{releaseYear}</p>
    </div>
  );
};

export default MovieCard;
