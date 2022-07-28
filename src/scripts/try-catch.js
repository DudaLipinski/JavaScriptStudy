const main = () => {
  try {
    throw new SyntaxError("Incomplete data: no name");
  } catch (error) {
    console.log(error);
  } finally {
    console.log('I am here')
  }
}

main();