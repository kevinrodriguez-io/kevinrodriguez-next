export default (array, key) => {
  return array.reduce(
    // eslint-disable-next-line no-sequences
    (r, v, _, __, k = v[key]) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  );
};
