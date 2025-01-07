export function revRot(s: string, sz: number): string {
  if (sz === 0 || s.length === 0 || s.length < sz) return '';

  const chunks: string[] = [];

  for (let i = 0; i < s.length; i += sz) {
    const chunk = s.slice(i, i + sz);
    if (chunk.length === sz) {
      chunks.push(chunk);
    }
  }

  const answer: string[] = chunks.map((chunk) => {
    const sum = Array.from(chunk).reduce((a, v) => a + Number(v), 0);
    if (sum % 2 === 0) {
      return chunk.split('').reverse().join('');
    } else {
      return chunk.slice(1) + chunk[0];
    }
  });

  return answer.join('');
}

console.log(revRot('330479108928157', 5), '304731089981572');
