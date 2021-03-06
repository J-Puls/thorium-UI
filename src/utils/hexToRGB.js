/**
 * Converts hex coded colors to HTML RGB format
 * @param { String } hex - Standard or shorthand hexadecimal color string (eg. #000000 or #000)
 * @returns { Object } {r, g, b} - Returns an object containing the separate RGB color values
 */
export const hexToRGB = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const values = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
  const cssString = `rgb(${values.r}, ${values.g}, ${values.b})`;

  return result ? { values, cssString } : null;
};
export default hexToRGB;
