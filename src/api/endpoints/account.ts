export const accountPost = (__data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly resolve or reject the promise to simulate API behavior
      const isSuccess = Math.random() > 0.5
      if (isSuccess) {
        resolve('Data is Fetched')
      } else {
        reject('Failed to Fetch')
      }
    }, 1500) // Simulate network delay
  })
}
