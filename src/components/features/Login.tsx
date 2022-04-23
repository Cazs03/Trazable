import { useSelector } from 'react-redux';
import { selectGetLogin, tryLogin } from '../../redux/slice/loginSlice';
import ButtonSubmit from '../commons/ButtonSubmit';
import InputPassword from '../commons/InputPassword';

export default function Login() {
  const isLogged: boolean = useSelector(selectGetLogin);
  return (
    <div>
      <InputPassword />
      <ButtonSubmit isLogged={isLogged} dispatcher={tryLogin} />
    </div>
  );
}
