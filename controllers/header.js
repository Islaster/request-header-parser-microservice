module.exports = {
  index,
};

function index(req, res) {
  const ipaddress = req.socket.localAddress;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];
  res.json({ ipaddress, language, software });
}
