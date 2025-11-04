import React, { useState } from 'react'
import StateManager from './components/StateManager'
import TransitionMatrix from './components/TransitionMatrix'
import SimulationPanel from './components/SimulationPanel'
import GraphView from './components/GraphView'
import ExportPanel from './components/ExportPanel'
import Theory from './components/Theory'

export default function App() {
  const [states, setStates] = useState(['Almacén','Carga','En tránsito','Retrasado','Entregado'])
  const [P, setP] = useState([
    [0.1,0.8,0,0,0.1],
    [0.05,0.1,0.8,0.05,0],
    [0,0,0.85,0.1,0.05],
    [0,0,0.6,0.35,0.05],
    [0,0,0,0,1]
  ])

  // Estado global para resultados (para exportar y mostrar por separado)
  const [lastPn, setLastPn] = useState(null)
  const [lastPin, setLastPin] = useState(null)

  function loadExampleMatrix() {
    setP([
      [0.1,0.8,0,0,0.1],
      [0.05,0.1,0.8,0.05,0],
      [0,0,0.85,0.1,0.05],
      [0,0,0.6,0.35,0.05],
      [0,0,0,0,1]
    ])
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Simulador: Autómata Probabilístico (Cadenas de Markov)</h1>
      <StateManager states={states} setStates={setStates} loadExample={loadExampleMatrix} />
      <TransitionMatrix states={states} P={P} setP={setP} />
      {/* Pasamos setters para que SimulationPanel actualice resultados globales */}
      <SimulationPanel states={states} P={P} setLastPn={setLastPn} setLastPin={setLastPin} />
      <GraphView states={states} P={P} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <ExportPanel P={P} Pn={lastPn} pin={lastPin} states={states} />
        <div className="card col-span-2">
          <Theory states={states} />
        </div>
      </div>
    </div>
  )
}
