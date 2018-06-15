import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Todo from '~/components/Todo';

// Ajout de l'élément virtuel dans le DOM du navigateur (mount/render).
// cible.appendChild(quoiajouter)
document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = <Todo text="Salut React !" />;
  const targetNode = document.getElementById('root');
  render(rootComponent, targetNode);
});
