// tests/logger.test.ts
import { Logger } from "../mod.ts";

Deno.test("Logger methods should not throw", () => {
  const logger = new Logger({ prefix: "[Test]" });

  // On mock console.log pour capturer les appels
  const logs: string[] = [];
  const originalLog = console.log;
  console.log = (...args: unknown[]) => {
    logs.push(args.join(" "));
  };

  try {
    logger.log("hello");
    logger.info("info message");
    logger.warn("warning message");
    logger.error("error message");
    logger.debug("debug message");

    // Vérifie qu'au moins un log a été appelé
    if (logs.length === 0) {
      throw new Error("No logs were captured");
    }
  } finally {
    console.log = originalLog; // Restaure console.log
  }
});
