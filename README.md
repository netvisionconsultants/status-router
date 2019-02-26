# Status Router

A TypeScript project to add an Express router for checking version information.


### Usage

```typescript
import express from "express"
import statusRouter from "status-router";

const router = express.Router()
router.use("/api", statusRouter)
```