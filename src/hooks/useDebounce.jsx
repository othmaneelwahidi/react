// import { useState, useEffect } from 'react';

// /**
//  * Hook personnalisé pour débouncer une valeur
//  * @param {any} value - La valeur à débouncer
//  * @param {number} delay - Le délai en millisecondes
//  * @returns {any} La valeur après le délai
//  */
// function useDebounce(value, delay = 500) {
//   // TODO: Exercice 2 - Implémenter le hook useDebounce
//   // 1. Créer un état pour stocker la valeur debouncée
//   // 2. Utiliser useEffect pour mettre à jour la valeur après le délai
//   // 3. Retourner la valeur debouncée
  
//   return value; // À modifier
// }





// export default useDebounce;


import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour débouncer une valeur
 * @param {any} value - La valeur à débouncer
 * @param {number} delay - Le délai en millisecondes
 * @returns {any} La valeur après le délai
 */
function useDebounce(value, delay = 500) {
  // 1. Créer un état pour stocker la valeur debouncée
  const [debouncedValue, setDebouncedValue] = useState(value);

  // 2. Utiliser useEffect pour mettre à jour la valeur après le délai
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Nettoyer le timeout si value ou delay change ou lors du démontage
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // 3. Retourner la valeur debouncée
  return debouncedValue;
}

export default useDebounce;
