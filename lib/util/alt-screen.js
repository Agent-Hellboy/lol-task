// Based on https://github.com/sergeysova/alternate-screen

module.exports = {
  smcup: () => process.stdout.write(
    Buffer.from([0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x68])
  ),

  rmcup: () => process.stdout.write(
    Buffer.from([0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x6c])
  ),
}