import { create } from 'zustand';

export const usePuestosLaboralesStore = create((set) => ({
  puestosLaborales: [],
  
  agregarPuestoLaboral: (camposActualizados) =>
    set((state) => ({
      puestosLaborales: {
        ...state.puestosLaborales,
        ...camposActualizados,
      },
    })),
}));

export const usePuestoSeleccionadoStore = create((set) => ({
    puestoLaboralSel: {},
  
  cambiarPuestoLaboral: (nuevoCampoLaboral) =>
    set((state) => ({
      puestoLaboralSel: nuevoCampoLaboral
    })),
}));