// When returning the value only, it infers
// the literal type.

const returnsValuesOnly = <T>(t: T) => {
  return t;
};

const result = returnsValuesOnly('a');
// ^? const result: "a"

// When returning an object or array, it doesn't infer the literal type

const returnsValueInAnObject = <T1>(t: T1) => {
  return [t];
};

const result2 = returnsValueInAnObject('abc');
// const result2: {t: string}

result2.push('sef');

//with a constraint, it narrows it to its literal
const returnValuesInAnObjectWithConstraint = <T1 extends string>(t: T1) => {
  return {
    t,
  };
};

const result3 = returnValuesInAnObjectWithConstraint('abc');
// const result: { t: "abc" }
