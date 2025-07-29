import App from "./App";

test("App component imports without crashing", () => {
  expect(App).toBeDefined();
});

test("App is a function component", () => {
  expect(typeof App).toBe("function");
});
