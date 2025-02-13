export const validateForm = (name, email, avatar) => {
    const errors = {};
    if (!name.trim()) errors.name = "Full name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!avatar.trim() || !avatar.startsWith("http")) {
      errors.avatar = "Enter a valid image URL";
    }
    return errors;
  };