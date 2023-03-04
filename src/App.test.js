import { handleValidation } from "./controller";

const mockCustomerFullSuccessCase = {
  fullName: "JJ",
  dormName: "หอพัก AAA",
  room: 123,
  details: "เก้าอี้หัก",
};

const mockCustomerFullNameEng = {
  fullName: "John smith",
};

const mockCustomerFullNameThai = {
  fullName: "แดงดำ ใจงาม",
};

const mockCustomerRoomText = {
  room: "DDD",
};

const mockCustomerRoom = {
  room: 123,
};

const mockCustomerDetails = {
  details: "เก้าอี้หัก",
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
      fullName: "John smith",
    });
  });
});

describe("Test input fullName thai", () => {
  test("input fullName thai", () => {
    let inputResult = mockCustomerFullNameThai;
    expect(inputResult).toEqual({
      fullName: "แดงดำ ใจงาม",
    });
  });
});

describe("Test input Room (type text)", () => {
  test("input Room (type text)", () => {
    let inputResult = mockCustomerRoomText;
    expect(inputResult).not.toEqual({
      room: 123,
    });
  });
});

describe("Test input Room (int)", () => {
  test("input Room (int)", () => {
    let inputResult = mockCustomerRoom;
    expect(inputResult).toEqual({
      room: 123,
    });
  });
});

describe("Test input Details", () => {
  test("input input Details", () => {
    let inputResult = mockCustomerDetails;
    expect(inputResult).toEqual({
      details: "เก้าอี้หัก",
    });
  });
});
