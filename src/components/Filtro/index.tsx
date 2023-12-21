import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventos } from '../../state/atom';

const Filtro: React.FC = () => {

  const [data, setData] = useState('')
  const [estado, setEstado] = useState('');
  const setFiltroDeEventos = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filtro: IFiltroDeEventos = {
      estado
    }
    if (data) {
      filtro.data = new Date(data);
    } else {
      filtro.data = null;
    }

    if(!estado) {
      setEstado("ambos");
    }

    setFiltroDeEventos(filtro);
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input
      type="date"
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)}
      placeholder="Por data"
      value={data} />

    <h3 className={style.titulo}>Estado do Evento:</h3>

    <select
      name="estados"
      id="cars"
      className={style.input}
      onChange={evento => setEstado(evento.target.value)}
    >
      <option value="">Opções</option>
      <option value="completos">Somente completos</option>
      <option value="incompletos">Somente incompletos</option>
      <option value="ambos">Ambos</option>
    </select>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro