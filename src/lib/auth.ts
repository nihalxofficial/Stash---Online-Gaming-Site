import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db("stash_db");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "user",
                input: false
            },
            plan: {
                type: "string",
                defaultValue: "free",
                input: false
            },
            status: {
                type: "string",
                defaultValue: "active",
                input: false
            }
        }
    }
});