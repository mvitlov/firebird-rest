/* CONVERT BUFFER DATA RECEIVED FROM DATABASE */
function convertBufferArray(data) {
  return data && data instanceof Uint8Array ? String.fromCharCode.apply(null, new Uint8Array(data)) : data;
}

module.exports = convertBufferArray;
