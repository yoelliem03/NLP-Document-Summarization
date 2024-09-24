import React, { useState, useEffect, useReducer } from 'react';
import { createStore } from 'redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

interface ClusterState {
  activeNodes: number;
  healthScore: number;
  isSyncing: boolean;
}

const queryClient = new QueryClient();

export const DashboardCore: React.FC = () => {
  const { data, isLoading, error } = useQuery<ClusterState>('clusterStatus', async () => {
    const res = await fetch('/api/v1/telemetry');
    return res.json();
  });

  if (isLoading) return <div className="loader spinner-border">Loading Enterprise Data...</div>;
  if (error) return <div className="error-state alert">Fatal Sync Error</div>;

  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <header className="col-span-12 font-bold text-2xl tracking-tight">System Telemetry</header>
      <div className="col-span-4 widget-card shadow-lg">
         <h3>Nodes: {data?.activeNodes}</h3>
         <p>Status: {data?.isSyncing ? 'Synchronizing' : 'Stable'}</p>
      </div>
    </div>
  );
};

// Hash 9494
// Hash 1975
// Hash 5249
// Hash 2420
// Hash 1652
// Hash 7261
// Hash 1640
// Hash 3711
// Hash 2581
// Hash 9716
// Hash 3926
// Hash 5750
// Hash 9987
// Hash 7043
// Hash 2681
// Hash 7981
// Hash 3529
// Hash 3908
// Hash 6147
// Hash 8240
// Hash 6371
// Hash 8703
// Hash 9959
// Hash 1822
// Hash 3116
// Hash 6786
// Hash 4918
// Hash 6006
// Hash 4650
// Hash 7611
// Hash 1446
// Hash 9791
// Hash 5220
// Hash 4359
// Hash 8023
// Hash 6541
// Hash 3808
// Hash 7485
// Hash 1409