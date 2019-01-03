
async function isValidEmail(email) {
  try {
    const response = await db.Shipper.findOne({ where: { email } });
    if (response) {
      return false;
    }
    const emailRegex = /^[\w\.+@[\w+\.]+/;
    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  } catch (error) {
    throw Error(error.message);
  }

}
function isValidName(name) {
  name = name.toLowercase()
  try {
    const nameRegex = /[*[!@#$&*]/;
    if (!nameRegex.test(name)) {
      return false;
    }
    return true;
  } catch (error) {
    throw Error(error.message);
  }
}


module.exports = {
  isValidEmail,
  isValidName
}