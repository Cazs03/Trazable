export default function InputPassword({ password, SetPassword }: any) {
  return (
    <input
      type="password"
      placeholder="password"
      value={password ?? ''}
      onChange={(event) => SetPassword(event.target.value)}
    />
  );
}
