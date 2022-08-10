# Cookie Forger

This package takes in a payload and a some options. It will then sign the payload using [keygrip](https://github.com/crypto-utils/keygrip).

```ts
import forgeCookie from 'cookie-forger'

let payload = { id: 1 }
let options = {
	keys: ["key1", "key2"],
	// Not required. Default is sha1
	algorithm: "sha1", 
	// Not required. Default is base64
	encoding: "base64",
	// Not required. Default is session
	name: "session"
}

let forgedCookie = forgeCookie(payload, keys);
/*
{
	payload: 'eyJpZCI6MX0=',
	signature: 'JIgiStobxRyC2sVM0rSCgJ0YqM0'
}
*/
```