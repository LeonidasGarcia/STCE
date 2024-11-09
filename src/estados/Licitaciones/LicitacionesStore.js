import { create } from 'zustand';

export const useLicitacionesStore = create((set) => ({
    licitaciones : [],
  
    setLicitaciones: (nuevasLicitaciones) => set((state) => ({
        licitaciones: nuevasLicitaciones
    })),

  agregarLicitacion: (camposActualizados) =>
    set((state) => ({
      licitaciones: {
        ...state.licitaciones,
        ...camposActualizados,
      },
    })),
}));

export const useLicitacionSeleccionadaStore = create((set) => ({
    licitacionSel: {},
  
  cambiarLicitacion: (nuevaLicitacion) =>
    set((state) => ({
        licitacionSel: nuevaLicitacion
    })),
}));