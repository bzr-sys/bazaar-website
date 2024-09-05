export function getImageWidths(
  min: number,
  max: number,
  imageWidth: number,
  numberOfImages = 10,
): number[] {
  const retinaMaxWidth = max * 2;
  const maxWidth = imageWidth <= retinaMaxWidth ? imageWidth : retinaMaxWidth;
  const widthIncrement = Math.floor((maxWidth - min) / numberOfImages);
  const widths: number[] = [];
  let currentWidth = min;

  while (currentWidth < maxWidth) {
    widths.push(currentWidth);
    currentWidth += widthIncrement;
  }
  widths.push(maxWidth);

  return widths;
}
