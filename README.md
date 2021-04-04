# Usage

    npm install

## Test Results

Env:

```
OS: macOS 10.15.7
CPU: (8) x64 Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz
```

### OK: dev build

Run:

```
npm start
```

Result:

```json
{
  "id": 395905,
  "bounds": {
    "y": -1057,
    "height": 1057,
    "width": 1920,
    "x": -273
  },
  "owner": {
    "processId": 53608,
    "path": "/Applications/Google Chrome.app",
    "name": "Google Chrome",
    "bundleId": "com.google.Chrome"
  },
  "title": "sindresorhus/active-win: Get metadata about the active window (title, id, bounds, owner, etc)",
  "memoryUsage": 1152,
  "url": "https://github.com/sindresorhus/active-win",
  "platform": "macos"
}
```

### NG: Open `.app`

```
npm run package
open out/active-win-url-bug-darwin-x64/active-win-url-bug.app
```  

Result

```json
{
  "title": "sindresorhus/active-win: Get metadata about the active window (title, id, bounds, owner, etc)",
  "owner": {
    "name": "Google Chrome",
    "processId": 53608,
    "bundleId": "com.google.Chrome",
    "path": "/Applications/Google Chrome.app"
  },
  "memoryUsage": 1152,
  "id": 395905,
  "bounds": {
    "width": 1920,
    "height": 1057,
    "x": -273,
    "y": -1057
  },
  "platform": "macos"
}
```

permission

- [x] Accessibility
- [x] Screen Record

### OK: Open binary from CLI

```
npm run package
open out/active-win-url-bug-darwin-x64/active-win-url-bug.app
```

Result

```json
{
  "id": 395905,
  "owner": {
    "bundleId": "com.google.Chrome",
    "name": "Google Chrome",
    "processId": 53608,
    "path": "/Applications/Google Chrome.app"
  },
  "memoryUsage": 1152,
  "bounds": {
    "x": -273,
    "height": 1057,
    "width": 1920,
    "y": -1057
  },
  "url": "https://github.com/sindresorhus/active-win",
  "title": "sindresorhus/active-win: Get metadata about the active window (title, id, bounds, owner, etc)",
  "platform": "macos"
}
```
