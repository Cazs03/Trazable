import { useSelector } from 'react-redux';
import UseReactQuerySubscription from '../../libs/PieSocket';
import { selectGetLogin } from '../../redux/slice/loginSlice';
import Login from '../features/Login';
import Todos from '../features/Todos';
// eslint-disable-next-line @typescript-eslint/no-var-requires

export default function Main() {
  const isLogged: boolean = useSelector(selectGetLogin);

  return (
    <div>
      <Login />
      <UseReactQuerySubscription />
      {isLogged && <Todos />}
    </div>
  );
}
