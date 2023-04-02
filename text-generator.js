export function setupOutputText(element) {
  let outputText = '';

  const setOutput = (text) => {
    outputText = text;
    element.innerHTML = `${outputText}`
  };

  setOutput('start text');
};
