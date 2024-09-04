import { validateReviewMsg } from "@/service/AppleReviewService";
import { testEntities } from "./testEntities";

(function testRun() {
    testEntities.forEach(async (e) => {
        // get validated msg
        const END_SIGN = "...";
        const { overflowFlag, data } = await validateReviewMsg({
            msg: e.entry,
            settings: { REQUIRED_LENGTH: 200, END_SIGN },
        });

        // test.expect expects a END_SIGN at the end of the string
        // ValidateReviewMsg puts a END_SIGN as a jsx elem in data[1]
        const msgWithOptSign = overflowFlag ? data[0] + END_SIGN : data[0];

        // render test results
        e.expect === msgWithOptSign
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
                  `validatedMsg: ${msgWithOptSign}\n\n`,
                  "testEntity:",
                  e,
                  "\n\n ----------------------------------"
              );
    });
})();
