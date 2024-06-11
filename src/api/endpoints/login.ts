export const loginPost = (__data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly resolve or reject the promise to simulate API behavior
      const isSuccess = Math.random() > 0.5
      if (isSuccess) {
        resolve('Login successful!')
      } else {
        reject('Login failed. Please try again.')
      }
    }, 1500) // Simulate network delay
  })
}
