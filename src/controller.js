export const handleValidation = (customer) => {
  if (!customer?.fullName?.trim()) {
    alert("กรุณากรอกชื่อของคุณ.");
    return false;
  } else if (!customer?.dormName?.trim()) {
    alert("กรุณากรอกชื่อหอพัก.");
    return false;
  } else if (!customer?.room) {
    alert("กรุณากรอกห้องพัก.");
    return false;
  } else if (!customer?.details?.trim()) {
    alert("กรุณาแจ้งรายละเอียดปัญหา.");
    return false;
  }

  return true;
};
