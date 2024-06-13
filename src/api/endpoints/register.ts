export const registerPost = (__data: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Randomly resolve or reject the promise to simulate API behavior
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          resolve("Account create successful!");
        } else {
          reject("Sign up failed. Please try again.");
        }
      }, 1500); // Simulate network delay
    });
  };