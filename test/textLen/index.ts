import { ValidationService } from "@/service/AppleReviewService/ValidationService";
import { testEntities } from "./testEntities";

const { textLen } = new ValidationService();

(function testRun() {
    testEntities.forEach(async (e) => {
        const validatedMsg = await textLen({ msg: e.entry, settings: {} });

        e.expect === validatedMsg
            ? console.log(
                  "\n",
                  "\x1b[42m%s\x1b[0m",
                  `res: test "${e.name}" SUCCEED`,
                  "\n\n ----------------------------------"
              )
            : console.error(
                  "\n",
                  "\x1b[41m%s\x1b[0m",
                  `res: test "${e.name}"  FAILED\n\n`,
                  `validatedMsg: ${validatedMsg}\n\n`,
                  "testEntity:",
                  e,
                  "\n\n ----------------------------------"
              );
    });
})();
