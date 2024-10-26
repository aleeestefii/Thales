
"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './dashboard.css';

// Registrar las escalas y elementos necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

//Datos aleatorios de Thales
const topCategoriaData = {
  labels: ["DELITO DE BAJO IMPACTO", "ROBO A PASAJERO", "ROBO A TRANSEUNTE", "HOMICIDIO DOLOSO", "LESIONES DOLOSAS"],
  datasets: [
    {
      label: 'Número de Casos',
      data: [20, 15, 12, 10, 8],
      backgroundColor: '#ADD8E6',
    },
  ],
};

const topTipoData = {
  labels: ["ROBO DE VEHICULO", "LESIONES CULPOSAS", "HOMICIDIOS", "PERDIDA DE LA VIDA", "ROBO A TRANSEUNTE"],
  datasets: [
    {
      label: 'Número de Casos',
      data: [22, 18, 15, 14, 10],
      backgroundColor: '#ADD8E6',
    },
  ],
};

const horariosData = {
  labels: Array.from({ length: 24 }, (_, i) => i.toString()),
  datasets: [
    {
      label: 'Número de Delitos',
      data: [4, 2, 1, 5, 3, 6, 4, 7, 5, 2, 8, 9, 4, 3, 2, 1, 5, 7, 8, 9, 6, 4, 2, 3],
      backgroundColor: '#D3A4FF',
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Categoría de Delito (Top 5)</h2>
      <div className="chart-container">
        <Bar data={topCategoriaData} options={{ indexAxis: 'y', plugins: { legend: { display: false } } }} />
      </div>

      <h2>Tipo de Delito (Top 5)</h2>
      <div className="chart-container">
        <Bar data={topTipoData} options={{ indexAxis: 'y', plugins: { legend: { display: false } } }} />
      </div>

      <h2>Horarios del Delito</h2>
      <div className="chart-container">
        <Bar data={horariosData} options={{ plugins: { legend: { display: false } } }} />
      </div>

      {/* Espacio para el mapa con api de googleMaps */}
      <div className="map-placeholder">
        <p>Mapa del Delito (placeholder)</p>
      </div>
    </div>
  );
};

export default Dashboard;
