export type Config = {
  minlength?: number;
  maxlength?: number;
};

export function genPasswordRules(o: Config) {
  let list: string[] = [];
  Object.entries(o).forEach(([k, v]) => {
    if (!k || !v) {
      return;
    }
    list.push(`${k}: ${v}`);
  });

  const r = list.join(';');
  return r;
}

// passwordrules="minlength: 6; required: lower; required: upper; required: digit; allowed: [-().&@?'#,/&quot;+];"

// requiredCharacter: {
//   lower: boolean;
//   upper: boolean;
//   digit: boolean;
//   custom: string;
// };
// allowedCharacter: string[];
