export async function fetchReadings() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const uniqueCallbackName = 'universalisCallback';

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}${month}${day}`;
    const url = `https://universalis.com/United.States/${formattedDate}/jsonpmass.js`;

    script.src = `${url}?callback=${uniqueCallbackName}`;

    // Define the callback function that will be invoked by the JSONP response
    window[uniqueCallbackName] = (data) => {
      resolve(data);
      console.log('data', data);
      // Clean up: remove the script and callback
      delete window[uniqueCallbackName];
      document.body.removeChild(script);
    };

    // Handle JSONP script loading errors
    script.onerror = () => {
      reject(new Error(`JSONP request to ${url} failed`));
      delete window[uniqueCallbackName];
      document.body.removeChild(script);
    };

    document.body.appendChild(script);
  });
}
