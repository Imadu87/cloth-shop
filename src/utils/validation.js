export const validateCheckoutForm = (data) => {
  const errors = {};

  // Name
  if (!data.name || data.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Phone
  const phoneRegex = /^[0-9]{10,13}$/;
  if (!data.phone || !phoneRegex.test(data.phone)) {
    errors.phone = "Enter valid phone number";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Enter valid email address";
  }

  // Address
  if (!data.address || data.address.trim().length < 5) {
    errors.address = "Address is too short";
  }

  // City
  if (!data.city || data.city.trim().length < 2) {
    errors.city = "City is required";
  }

  return errors;
};