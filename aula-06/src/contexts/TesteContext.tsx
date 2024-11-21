import { createContext, ReactNode } from "react";

export type TestContextData = {
  name: string;
};

export const TestContext = createContext<TestContextData>({
  name: "",
});

const TestProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TestContext.Provider value={{ name: "Michele" }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
