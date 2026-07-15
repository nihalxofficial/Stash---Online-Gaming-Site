import { serverFetch } from "../core/server"

export const getGames = async()=>{
    return serverFetch(`/games`);
}

export const getGamesByOwner = async(id: string)=>{
    return serverFetch(`/games/:${id}`);
}