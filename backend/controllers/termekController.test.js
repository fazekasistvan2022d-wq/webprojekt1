import TermekController from "./termekController";
import { expect, jest, test } from "@jest/globals";
const mockedModel = jest.mock("termekModel");

test("Sample test case", async () => {
    expect(true).toBe(true);
    const resultMock = {};
    mockedModel.getAll = jest.fn().mockResolvedValue([{ id: 1, nev: "Termek 1", ar: 1000, keszlet: 10 }]);
    await TermekController.getAll({ params: {} }, resultMock);
});
