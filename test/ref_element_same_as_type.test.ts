import test from "tape";
import { existsSync } from "fs";
import { parseAndGenerate } from "../src";
import { Logger } from "../src/utils/logger";

test("ref_element_same_as_type", async t => {
    Logger.disabled();

    const input = "./test/resources/ref_element_same_as_type.wsdl";
    const outdir = "./test/generated";

    t.test("generate wsdl client", async t => {
        await parseAndGenerate(input, outdir);
        t.end();
    });

    t.test("check definitions", async t => {
        t.equal(existsSync(`${outdir}/refelementsameastype/definitions/ExampleContent.ts`), true);
        t.equal(existsSync(`${outdir}/refelementsameastype/definitions/ExampleRequest.ts`), true);
        t.equal(existsSync(`${outdir}/refelementsameastype/definitions/V1ExampleRequestType.ts`), true);
        t.end();
    });
});