export const forgotpasswordPost = (__data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly resolve or reject the promise to simulate API behavior
      const isSuccess = Math.random() > 0.5
      if (isSuccess) {
        resolve(' Request reset link successful!')
      } else {
        reject(' Request reset link failed. Please try again.')
      }
    }, 1500) // Simulate network delay
  })
}
