export type Config = {
  minlength?: number;
  maxlength?: number;
  allow: {
    lower: boolean;
    upper: boolean;
    // アラビア数字
    digit: boolean;
  };
};

export function genPasswordRules(o: Config): string {
  let ruleList: string[] = [];
  let allowedList: string[] = [];
  Object.entries(o).forEach(([k, v]) => {
    if (!k || !v) {
      return;
    }
    switch (k) {
      case 'allow':
        Object.entries(o[k]).forEach(([k2, v2]) => {
          if (!k2 || !v2) {
            return;
          }
          allowedList.push(`${k2}`);
        });
        return;
      default:
        ruleList.push(`${k}: ${v}`);
        return;
    }
  });

  if (allowedList.length) {
    ruleList.push(`allowed: ${allowedList.join(', ')}`);
  }

  const r = ruleList.join(';');
  return r;
}
