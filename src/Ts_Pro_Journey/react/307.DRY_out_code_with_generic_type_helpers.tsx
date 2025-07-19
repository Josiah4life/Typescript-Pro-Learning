import React from 'react';

type Icon = 'home' | 'settings' | 'about';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

//How do we refactor this to make it DRY?
type LooseIcon = LooseAutoComplete<Icon>;
type LooseButtonVariant = ButtonVariant | (string & {});

type LooseAutoComplete<T> = T | (string & {});

export const icons: LooseIcon[] = [
  'home',
  'about',
  'settings',
  'any-other-string',

  'efsf',

  //I should get autocomplete if i add new item here.
];

export const buttonVariant: LooseButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
];
