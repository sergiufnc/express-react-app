import userSlice, {
  initialState,
  removeData,
  setData,
  setToken,
} from "./userSlice";

describe("tests for userSlice", () => {
  test("initialize slice with initialValue", () => {
    const listSliceInit = userSlice(initialState, { type: "unknown" });

    expect(listSliceInit).toBe(initialState);
  });

  test("test setting the data", () => {
    const testData: any = {
      email: "serfnc@icloud.com",
      password: "123456",
    };

    const afterReducerOperation = userSlice(initialState, setData(testData));

    expect(afterReducerOperation).toStrictEqual({
      data: {
        email: "serfnc@icloud.com",
        password: "123456",
      },
      token: null,
    });
  });

  test("test setting the token", () => {
    const testData: any = "1234566789";

    const afterReducerOperation = userSlice(initialState, setToken(testData));

    expect(afterReducerOperation).toStrictEqual({
      data: null,
      token: testData,
    });
  });
});
