const testMethod = async (req, res) => {
  try {
    return res.status(200).send("big test");
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = {
  testMethod,
};
