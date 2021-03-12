var express = require('express');
var router = express.Router();

/* GET lorapacket listing. */
router.get('/', function(req, res, next) {

  if(!req.query.payload)
    return;

  let payload = req.query.payload;
  const lora_packet = require("lora-packet");
  const packet = lora_packet.fromWire(Buffer.from(payload, "base64"));

  let response = packet.toObject();
  console.log(JSON.stringify(response));

  res.send(response);
});

module.exports = router;
