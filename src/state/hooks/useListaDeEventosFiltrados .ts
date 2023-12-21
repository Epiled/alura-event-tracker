import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../selectors"

const useListaDeEventosFiltrados = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventosFiltrados