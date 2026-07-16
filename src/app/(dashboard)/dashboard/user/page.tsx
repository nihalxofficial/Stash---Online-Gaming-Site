// src/app/dashboard/user/analytics/page.tsx
import React from "react";
import { getUserSession } from "@/lib/core/session";
import AnalyticsDashboardClient from "./AnalyticsDashboardClient";

// 1. Define telemetry types matching your vault framework
interface TelemetryStats {
  totalPlayTime: string;
  bandwidthUsed: string;
  computeRank: string;
  activeSystems: string;
}

export default async function AnalyticsPage() {
  const user = await getUserSession();

  // 2. Fetch or compute server analytics aggregates securely here 
  // (Using production-ready fallbacks/dummy data matching your active profile context)
  const statsOverview: TelemetryStats = {
    totalPlayTime: "25.1 Hrs",
    bandwidthUsed: "124.9 GB",
    computeRank: "Top 4.8%",
    activeSystems: "04 Active",
  };

  return (
    <AnalyticsDashboardClient 
      user={user} 
      stats={statsOverview} 
    />
  );
}