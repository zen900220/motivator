module.exports = (attachment) => {
  const type = attachment.contentType;
  if (/image|video/i.test(type)) return true;
  return false;
};
