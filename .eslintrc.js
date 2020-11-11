module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: [
          'tsconfig.*?.json',
          'e2e/tsconfig.json',
          'prettier/@typescript-eslint',
          'plugin:prettier/recommended',
        ],
        createDefaultProgram: true,
      },
      extends: ['plugin:@angular-eslint/recommended', 'airbnb-typescript/base'],
      rules: {
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],
      },
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', { code: 140 }],
      },
    },
    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },
  ],
};
