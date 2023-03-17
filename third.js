/* Develop a program “Object Projection”. Input: any JSON object; prototype object. Output:
projected object. Projected object structure shall be intersection of source object and
prototype object structures. Values of properties in projected object shall be the same as
values of respective properties in source object. */

function objectProjection(source, prototype) {
  const result = {};
  for (const key in prototype) {
    if (source.hasOwnProperty(key) && typeof prototype[key] === "object" && prototype[key] !== null) {
      result[key] = objectProjection(source[key], prototype[key]);
    } else if (source.hasOwnProperty(key)) {
      result[key] = source[key];
    }
  }

  return result;
}

const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32
    },
    prop12: 12
  }
};

const proto = {
  prop11: {
    prop22: null
  }
};

const res = objectProjection(src, proto);

console.log(res);