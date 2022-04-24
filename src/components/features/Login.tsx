import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGetLogin, tryLogin } from '../../redux/slice/loginSlice';
import '../../styles/container.scss';
import ButtonSubmit from '../commons/ButtonSubmit';
import InputPassword from '../commons/InputPassword';
import { NetworkStatusContext } from '../views/Main';

export default function Login() {
  const isLogged: boolean = useSelector(selectGetLogin);
  const [password, SetPassword] = useState();
  const active: boolean = useContext(NetworkStatusContext);

  useEffect(() => {
    console.log(active);
  }, []);

  return (
    <>
      <h1>{active.toString()}</h1>
      <div className="login-container">
        {!isLogged ? <InputPassword password={password} SetPassword={SetPassword} /> : ''}
        <ButtonSubmit isLogged={isLogged} dispatcher={tryLogin} />
      </div>
    </>
  );
}
