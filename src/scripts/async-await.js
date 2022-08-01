function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);

    if (location === 'Google') {
      resolve('Google say hi');
    } else {
      reject('We can only talk to Google');
    }

  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');

    resolve(`Extra information ${response}`);
  })
}

// makeRequest('a').then(response => {
//   console.log('Response received');
//   return processRequest(response)
// }).then(processRequest => {
//   console.log(processRequest);
// }).catch( err => {
//   console.log(err);
// })

async function doWork() {
  try {
    const response = await makeRequest('Google');
    console.log('Response received');

    const processedResponse = await processRequest(response);
    console.log(processedResponse)
  } catch (err) {
    console.log(err);
  }
}

doWork();