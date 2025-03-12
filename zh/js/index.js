/**
 * Complete the functions below, then run `npm run test` in the root directory to check your work.
 * 
 * For more details on expected input and output, check the tests.
 * If all tests are green, you are done! Keep in mind that the actual implementation will be also reviewed.
 * 
 * (don't forget about the html/css task in ../html-css!)
 * 
 * If you find a buggy test, feel free to report (and/or fix) it.
 *
 * ========================================================================================================
 * */
/**
 * Creates a simple object for HTTP headers based on the input.
 * 
 * The input is in the following format:
 * [
 *  [<Header-Name>, <header-value1>, <header-value2?>, ...],
 *  ...
 * ]
 * 
 * Expected output: {
 *  <header-name>: '<header-value1>, <header-value2>, ...'
 * }
 * 
 */
module.exports.createHttpHeaders = (input) => {
    if (!Array.isArray(input) || input.length === 0) return {};
  
      const headers = {};
  
      input.forEach(([key, ...values]) => {
          const lowerKey = key.toLowerCase();
          const newValue = values.join(', ');
  
          if (headers[lowerKey]) {
              headers[lowerKey] += `, ${newValue}`;
          } else {
              headers[lowerKey] = newValue;
          }
      });
  
      return headers;
  };
  
  /**
   * Returns items for a paginated list.
   * 
   * The input is in the following format:
   * items: [
   *  { id: 1, title: '<main>item 1</main>', displayTitle: 'Item 1', metadata: {} },
   * ]
   * 
   * params: {
   *  page: 1,
   *  pageSize: 4,
   *  sort: 'asc',
   * }
   * 
   * Expected output:
   * [
   *  { id: 1, title: { main: 'Item 1' }  }
   * ]
   */
  module.exports.getItems = (items, params) => {
      if (!Array.isArray(items) || typeof params !== 'object') return [];
    
      var page = params.page || 1;
      var pageSize = params.pageSize || 10;
      var sort = params.sort || 'asc';
    
      var sortedItems = [];
      for (var i = 0; i < items.length; i++) {
        sortedItems[i] = items[i];
      }
  
      var sortedItems = items.slice(); 
      sortedItems.sort((a, b) => {
          return sort === 'asc' ? a.id - b.id : b.id - a.id;
      });
  
      var startIndex = (page - 1) * pageSize;
      var endIndex = startIndex + pageSize;
      var result = [];
      for (var i = startIndex; i < endIndex && i < sortedItems.length; i++) {
        var item = sortedItems[i];
        result.push({
          id: item.id,
          title: { main: item.displayTitle }
        });
      }
      return result;
  
  }
  