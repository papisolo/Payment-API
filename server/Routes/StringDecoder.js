const {StringDecoder} = require('string_decoder')

const decoder = new StringDecoder('utf8')

/*const cent = Buffer.from([0xC2, 0xA2])
console.log(decoder.write(cent))

const euro = Buffer.from([0xE2, 0x82, 0xAC])
console.log(decoder.write(euro))*/
//StringDecoder.write returns a string

decoder.write(Buffer.from([0xE2]))
decoder.write(Buffer.from([0x82]))
console.log(decoder.write(Buffer.from([0xAC])))