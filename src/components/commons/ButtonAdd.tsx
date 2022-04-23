import { useDispatch } from 'react-redux';

type TypeProps = { dispatcher: any; description: string };

export default function ButtonAdd(props: TypeProps) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(props.dispatcher(props.description))}
      disabled={!props.description}>
      Add
    </button>
  );
}
