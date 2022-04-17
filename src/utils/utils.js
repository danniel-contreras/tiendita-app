export const paginate = (current_page, last_page, onSides = 3) => {
    // pages
    let pages = [];
    // Loop through
    for (let i = 1; i <= last_page; i++) {
      // Define offset
      let offset = i == 1 || last_page ? onSides + 1 : onSides;
      // If added
      if (
        i == 1 ||
        (current_page - offset <= i && current_page + offset >= i) ||
        i == current_page ||
        i == last_page
      ) {
        pages.push(i);
      } else if (
        i == current_page - (offset + 1) ||
        i == current_page + (offset + 1)
      ) {
        pages.push("...");
      }
    }
    return pages;
  };