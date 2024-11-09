import { create } from 'zustand';

export const useUsuarioStore = create((set) => ({
    datosUsuario : {},
  
    setUsuario: (nuevoUsuario) => set((state) => ({
        datosUsuario: nuevoUsuario
    }))
}));