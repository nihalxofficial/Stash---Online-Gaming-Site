// src/lib/api/games.ts
import { serverFetch } from "../core/server";

export const getGames = async (searchParams?: Record<string, string | string[] | undefined>) => {
  const query = new URLSearchParams();

  if (searchParams) {
    if (searchParams.q) query.append("q", String(searchParams.q));
    if (searchParams.genre && searchParams.genre !== "All") query.append("genre", String(searchParams.genre));
    if (searchParams.sortBy && searchParams.sortBy !== "default") query.append("sortBy", String(searchParams.sortBy));
    
    // Append routing vector coordinates
    if (searchParams.page) query.append("page", String(searchParams.page));
    if (searchParams.limit) query.append("limit", String(searchParams.limit));
  }

  return serverFetch(`/games?${query.toString()}`);
};

export const getGameById = async (id: string) => {
  return serverFetch(`/games/${id}`);
};
export const getGamesByOwner = async (id: string) => {
  return serverFetch(`/games?owner=${id}`);
};