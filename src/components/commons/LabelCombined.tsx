type TypeProps = { description: string; IncludeComponent: any };

export default function LabelCombined({ description, IncludeComponent }: TypeProps) {
  return (
    <label>
      {description} {IncludeComponent}
    </label>
  );
}
