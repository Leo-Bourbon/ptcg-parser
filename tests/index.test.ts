import { test, expect } from "vitest";
import { sanityCheck } from "@src/index";

test("Sanity check", () => {
  expect(sanityCheck()).toBe(true);
});
