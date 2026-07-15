// src/lib/api/games.ts
import { serverFetch } from "../core/server";

export const getGames = async (searchParams?: Record<string, string | string[] | undefined>) => {
  const query = new URLSearchParams();

  if (searchParams) {
    if (searchParams.q) query.append("q", String(searchParams.q));
    if (searchParams.genre && searchParams.genre !== "All") query.append("genre", String(searchParams.genre));
    if (searchParams.sortBy && searchParams.sortBy !== "default") query.append("sortBy", String(searchParams.sortBy));
  }

  const queryString = query.toString();
  return serverFetch(`/games${queryString ? `?${queryString}` : ""}`);
};

export const getGamesByOwner = async (id: string) => {
  return serverFetch(`/games/:${id}`);
};