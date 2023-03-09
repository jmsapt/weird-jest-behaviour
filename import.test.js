import { importHelloWorld } from "./import.js";

test("Missing .js in 'import.js', but it still runs", () => {
    expect(importHelloWorld()).toStrictEqual('Hello World')
})