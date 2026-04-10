export class PaginationHelper<T> {
  length: number;
  itemsPerPage: number;
  collection: T[];
  pageSizes: number[];

  constructor(collection: T[], itemsPerPage: number) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page

    this.length = collection.length;
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pageSizes = this.getPageSizes();
  }

  getPageSizes(): number[] {
    const sizes: number[] = [];
    let remaining = this.length;

    while (remaining > 0) {
      sizes.push(Math.min(this.itemsPerPage, remaining));
      remaining -= this.itemsPerPage;
    }

    return sizes;
  }

  itemCount() {
    // returns the number of items within the entire collection
    return this.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex: number) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range

    if (!this.pageSizes[pageIndex]) return -1;

    return this.pageSizes[pageIndex];
  }
  pageIndex(itemIndex: number) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range

    if (itemIndex < 0 || itemIndex >= this.length) return -1;

    let sum = 0;

    for (let i = 0; i < this.pageSizes.length; i++) {
      sum += this.pageSizes[i];
      if (itemIndex < sum) {
        return i;
      }
    }

    return -1;
  }
}

let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
let helper2 = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8], 4);

console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0)); // should == 4
console.log(helper.pageItemCount(1)); // helper.pageItemCount(1) // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1
