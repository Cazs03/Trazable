import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { NetworkStatusContext } from '../views/Main';

type TypeProps = { dispatcher: any; description: string };

export default function ButtonAdd(props: TypeProps) {
  const dispatch = useDispatch();
  const active: boolean = useContext(NetworkStatusContext);

  return (
    <button
      onClick={() => dispatch(props.dispatcher({ description: props.description, active: active }))}
      disabled={!props.description}>
      Add
    </button>
  );
}
