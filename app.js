const form = document.getElementById('form');
const text_area = document.getElementById('textarea');
const copyBtn = document.getElementById('copy-btn');

let count = false;

form.addEventListener('submit', e => {
  e.preventDefault();

  const speaker1 = e.target.elements.sp1_input.value;
  const speaker2 = e.target.elements.sp2_input.value;
  form.reset();

  if (text_area.attributes.getNamedItem('disabled') != null) {
    text_area.removeAttribute('disabled');
    text_area.addEventListener('keypress', e => handleEnter(e, speaker1, speaker2));
  }
  text_area.value += `${speaker1}: `;
})

function handleEnter(e, speaker1, speaker2) {
  const keyName = e.key;
  if (keyName === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    if (count == true) {
      text_area.value += `\n${speaker1}: `;
    } else{
      text_area.value += `\n${speaker2}: `;
    }
    count = !count;
  }
}

function copyToClipboard() {
  text_area.select();
  text_area.setSelectionRange(0,99999);
  navigator.clipboard.writeText(text_area.value);
  alert("Copied text to clipboard");
}

