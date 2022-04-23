import { useSelector } from 'react-redux';
import { selectGetLogin } from '../../redux/slice/loginSlice';
import Login from '../features/Login';
import Todos from '../features/Todos';

export default function Main() {
  const isLogged: boolean = useSelector(selectGetLogin);
  return (
    <div>
      <Login />
      {isLogged && <Todos />}
    </div>
  );
}
