import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";

const app = new Hono()

app.get('/*', serveStatic({root: "./public"}))

Deno.serve(app.fetch)
