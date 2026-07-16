// src/lib/core/server.ts
"use server";

import { redirect } from "next/navigation";
import { getToken } from "./session";

const Api = process.env.NEXT_PUBLIC_API_URL;

const handleResponse = async (res: Response): Promise<unknown> => {
    const data = await res.json();
    return data;
};

export const serverMutation = async (
    path: string,
    data: unknown = "",
    method: "POST" | "PUT" | "PATCH" | "DELETE" = "POST"
): Promise<unknown> => {
    const token = await getToken();

    const isFormData = data instanceof FormData;
    const headers: Record<string, string> = {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    if (!isFormData) headers["Content-Type"] = "application/json";
    const bodyPayload = isFormData ? (data as FormData) : (data ? JSON.stringify(data) : undefined);

    const res = await fetch(`${Api}${path}`, { method, headers, body: bodyPayload });

    // IMPORTANT: redirect() throws internally — must NOT be inside a try/catch
    if (res.status === 401) redirect("/auth/login");
    if (res.status === 403) redirect("/unauthorized");

    return handleResponse(res);
};

export const serverFetch = async (path: string, requireAuth: boolean = false): Promise<unknown> => {
    const headers: Record<string, string> = {};

    if (requireAuth) {
        const token = await getToken();
        if (token) headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${Api}${path}`, { cache: "no-store", headers });

    if (res.status === 401) redirect("/auth/login");
    if (res.status === 403) redirect("/unauthorized");

    return handleResponse(res);
};