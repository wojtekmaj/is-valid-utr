const weights = [0, 6, 7, 8, 9, 10, 5, 4, 3, 2];
const checksums = [2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export default function isValidUTR(rawUtr: string | number): boolean {
  if (!rawUtr) {
    return false;
  }

  // strip non-alphanumeric characters
  const utr = rawUtr.toString().replace(/[^a-z\d]/gi, '');

  // check if length is 10 digits
  if (utr.length !== 10) {
    return false;
  }

  // calculate checksum
  let sum = 0;
  weights.forEach((weight, position) => {
    const digit = Number(utr[position]);
    sum += weight * digit;
  });

  const checksum = sum % 11;

  if (checksums[checksum] !== Number(utr[0])) {
    return false;
  }

  return true;
}
