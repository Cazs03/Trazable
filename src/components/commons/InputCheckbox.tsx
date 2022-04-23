type defaultChecked = { checked: boolean };
export default function InputCheckbox({ checked }: defaultChecked) {
  return <input type="checkbox" id="cbox1" value="first_checkbox" defaultChecked={checked} />;
}
