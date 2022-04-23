import { useDispatch } from 'react-redux';

type TypeProps = { isLogged: boolean; dispatcher: any; password: string };
export default function ButtonSubmit({ isLogged, dispatcher, password }: TypeProps) {
  const dispatch = useDispatch();
  return (
    <button
      type="submit"
      onClick={() => dispatch(dispatcher(!isLogged))}
      disabled={!password ? true : false}>
      {isLogged ? 'Logout' : 'Login'}
    </button>
  );
}
