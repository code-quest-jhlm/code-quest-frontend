interface ErrorMessages {
  [fieldName: string]: string;
}

/**
 * Capitaliza el primer carácter de una cadena.
 *
 * @param str La cadena a capitalizar.
 * @returns La cadena con el primer carácter en mayúsculas.
 */
const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Procesa una lista de mensajes de error y extrae el primer mensaje de error para cada campo.
 *
 * @param errorMessages Array de mensajes de error.
 * @returns Objeto con nombres de campos como claves y el primer mensaje de error como valor.
 */
const extractFirstErrorForEachField = (errorMessages: string[]): ErrorMessages => {
  const fieldErrors: ErrorMessages = {};

  errorMessages?.forEach((message) => {
    const match = message.match(/^(\w+)\s(.+)/);
    if (match) {
      const [, fieldName, errorMessage] = match;
      if (!fieldErrors[fieldName]) {
        fieldErrors[fieldName] = capitalizeFirstLetter(errorMessage);
      }
    }
  });

  return fieldErrors;
};

export {
  capitalizeFirstLetter,
  extractFirstErrorForEachField,
};
