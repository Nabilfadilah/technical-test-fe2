// Soal 12: Validasi form sederhana (email dan password minimal 8 karakter)

interface FormData {
  email: string;
  password: string;
}

function validateForm(data: FormData): string[] {
  const errors: string[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex validasi email sederhana
  if (!emailRegex.test(data.email)) errors.push("Email tidak valid");
  if (data.password.length < 8) errors.push("Password minimal 8 karakter");
  return errors;
}

// console.log("Soal 12:", validateForm({ email: "test@site.com", password: "123456" }));