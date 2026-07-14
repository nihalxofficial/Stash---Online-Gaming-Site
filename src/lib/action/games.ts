import { serverMutation } from "../core/server"

export const addGame = async(data : unknown)=>{
    return serverMutation(`/games`, data);
}