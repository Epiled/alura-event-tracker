import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../selectors"

const useListaDeEventos = () => {
  const eventos = useRecoilValue(eventosFiltradosState);
  return eventos;
}

export default useListaDeEventos;