let counter = 0;
    const button = document.getElementById('btn');
    const span = document.querySelector('span');
    function handleclick() {
      counter = counter + 1;
      span.innerText = `Total Clicks: ${counter}`;
    }
    button.addEventListener('click', handleclick);