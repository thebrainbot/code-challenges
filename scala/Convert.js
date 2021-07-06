/**
 * Encoding processor for hex strings to base64.
 * Run via `node Convert.js 45766964696e74`
 */


const converter = input => {
  const buffer = Buffer.from(input, 'hex');
  const base64 = buffer.toString('base64');
  console.log(`result: ${base64}`);
}

const hexToBase64 = () => {
  try {
    const args = process.argv.slice(2);
    if (args.length > 0) {
      converter(args[0])
    } else {
      console.error('No input for conversion');
    }
  } catch(error) {
    console.error(`Error caught during conversion: ${error}`)
  }
}

hexToBase64();