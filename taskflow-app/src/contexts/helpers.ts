// Your helper functions
function formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }
  
  // Add export to make it a module
  export { formatDate };
  