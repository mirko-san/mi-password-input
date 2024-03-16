import { expect, test } from 'vitest';
import { genPasswordRules, Config } from './gen_password_rules';

test('single', () => {
  const o: Config = {
    minlength: 6,
    maxlength: undefined,
  };
  expect(genPasswordRules(o)).toBe('minlength: 6');
});

test('multi', () => {
  const o: Config = {
    minlength: 6,
    maxlength: 12,
  };
  expect(genPasswordRules(o)).toBe('minlength: 6;maxlength: 12');
});
