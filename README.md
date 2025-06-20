# deno-logger

A minimal and customizable logger for Deno projects.

## Features

- Simple and lightweight
- Named logger instances for modular logging
- Supports log levels: `debug`, `info`, `warn`, `error`
- Color-coded terminal output
- Easy to extend and adapt to your needs

---

## Installation

```ts
import { Logger } from "jsr:@mnlaugh/logger";

const log = new Logger("MyApp");

log.debug("Debugging info");
log.info("Application started");
log.warn("Warning: Something might go wrong");
log.error("Error: Something went wrong");
```

## API Reference

### `new Logger(name: string)`

Creates a new logger instance with a custom name that appears in every log message.

| Parameter | Type     | Description                        |
|-----------|----------|------------------------------------|
| `name`    | `string` | Prefix displayed before each log   |

---

### `logger.debug(message: string)`

Logs a debug-level message.  
Useful for internal development or verbose logging.

---

### `logger.info(message: string)`

Logs an informational message.  
Use this for general application events and progress updates.

---

### `logger.warn(message: string)`

Logs a warning message.  
Use this to highlight non-critical issues or potential problems.

---

### `logger.error(message: string)`

Logs an error message.  
Use this to report critical failures or unexpected states.

---

## Example Output

```bash
[MyApp] [DEBUG] Debugging info
[MyApp] [INFO ] Application started
[MyApp] [WARN ] Warning: Something might go wrong
[MyApp] [ERROR] Error: Something went wrong
```

## Compatibility

This package is designed for use with modern JavaScript runtimes.  
Runtime support is as follows:

| Runtime | Status           |
|---------|------------------|
| Deno    | ✅ Fully supported |
| Node.js | ⚠️ Not tested      |
| Bun     | ⚠️ Not tested      |

You can help by testing and reporting compatibility!

---

## Documentation To-Do (for JSR Quality Score)

This project is actively improving to meet [jsr.io](https://jsr.io) standards.

✅ Done:

- No slow types used  
- API is stable and modular

🛠️ In Progress:

- Add module-level documentation to each file  
- Add JSDoc comments for all exported classes and methods  
- Add `jsr.json` with `description` and `compatibility` fields  
- Set up CI/CD to provide provenance when publishing

---

## Contributing

Feel free to open issues or PRs to improve features, add compatibility, or enhance documentation.

---

## License

MIT — [MNLaugh](https://github.com/MNLaugh)
