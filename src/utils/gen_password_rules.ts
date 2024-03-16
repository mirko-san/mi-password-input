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
