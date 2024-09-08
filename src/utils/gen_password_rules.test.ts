import { expect, test } from 'vitest';
import { genPasswordRules, Config } from './gen_password_rules';

test('single', () => {
  const o: Config = {
    minlength: 6,
    maxlength: undefined,
    allow: {
      lower: false,
      upper: false,
      digit: false,
    },
  };
  expect(genPasswordRules(o)).toBe('minlength: 6');
});

test('multi', () => {
  const o: Config = {
    minlength: 6,
    maxlength: 12,
    allow: {
      lower: false,
      upper: false,
      digit: false,
    },
  };
  expect(genPasswordRules(o)).toBe('minlength: 6;maxlength: 12');
});

test('config allow char', () => {
  const o: Config = {
    minlength: 6,
    maxlength: 12,
    allow: {
      lower: true,
      upper: true,
      digit: true,
    },
  };
  expect(genPasswordRules(o)).toBe(
    'minlength: 6;maxlength: 12;allowed: lower, upper, digit',
  );
});
