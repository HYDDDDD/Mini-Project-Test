import { handleValidation } from "./controller";

const mockCustomerFullSuccessCase = {
  fullName: "poo",
  dormName: "km3",
  room: 101,
  details: "ห้องแคบไป",
};

const mockCustomerFullNameEng = {
  fullName: "poo",
};

const mockCustomerFullNameThai = {
  fullName: "ปู",
};

const mockCustomerRoomText = {
  room: "km3",
};

const mockCustomerRoom = {
  room: 101,
};

const mockCustomerDetails = {
  details: "ห้องแคบไป",
};

describe("Test submit forms business logic", () => {
  test("ll filled case for handle function", () => {
    const validateResult = handleValidation(mockCustomerFullSuccessCase);
    expect(validateResult).toEqual(true);
  });
});

describe("Test input fullName eng", () => {
  test("input fullName eng", () => {
    let inputResult = mockCustomerFullNameEng;
    expect(inputResult).toEqual({
      fullName: "poo",
    });
  });
});

describe("Test input fullName thai", () => {
  test("input fullName thai", () => {
    let inputResult = mockCustomerFullNameThai;
    expect(inputResult).toEqual({
      fullName: " ปู",
    });
  });
});

describe("Test input Room (type text)", () => {
  test("input Room (type text)", () => {
    let inputResult = mockCustomerRoomText;
    expect(inputResult).not.toEqual({
      room: 101,
    });
  });
});

describe("Test input Room (int)", () => {
  test("input Room (int)", () => {
    let inputResult = mockCustomerRoom;
    expect(inputResult).toEqual({
      room: 101,
    });
  });
});

describe("Test input Details", () => {
  test("input input Details", () => {
    let inputResult = mockCustomerDetails;
    expect(inputResult).toEqual({
      details: "ห้องแคบไป",
    });
  });
});
