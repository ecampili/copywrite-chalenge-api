const welcome = (req, res) => {
  res.status(200).json({ msg: 'Welcome to api' });
};

const processText = (req, res) => {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'no text' });
  }

  //const textWithOutSpaces = text.replace(/[\W_]/g, '').toLowerCase();
  const textWithOutSpaces = text.replace(/\s/g, '').toLowerCase();

  const reverseText = text.split('').reverse().join('');
  const textWithOutSpacesReverse = textWithOutSpaces
    .split('')
    .reverse()
    .join('');

  if (textWithOutSpaces == textWithOutSpacesReverse) {
    return res.status(200).json({ text: reverseText, palindrome: true });
  }

  res.status(200).json({ text: reverseText, palindrome: false });
};

module.exports = {
  welcome,
  processText,
};
